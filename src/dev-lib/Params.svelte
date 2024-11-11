<script lang="ts">
	// import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import Params from './Params.svelte';

	type ParamsProps = {
		params?: Record<string | number, number | string | boolean | object>;
		options?: Record<string, { min: number; max: number; step: number }>;
		showRaw?: boolean;
		onchange?: (e: ParamsProps['params']) => void;
	};

	let { params = $bindable({}), options = {}, showRaw = false, onchange }: ParamsProps = $props();
	let mainEle = $state<HTMLDivElement>();

	let parameters = $derived(
		Object.keys(params)
			.map((key) => {
				let type = typeof params[key];
				let input: 'text' | 'checkbox' | 'number' | 'self' | 'none' = 'none';
				if (type === 'boolean') input = 'checkbox';
				if (type === 'string') input = 'text';
				if (type === 'number') input = 'number';
				if (type === 'object') input = 'self';

				let opts = options[key];

				return { key, type, value: params[key], input, options: opts };
			})
			.filter((p) => p.input !== 'none')
	);

	let rawValid = $state(true);
	function rawChange(e: InputEvent | Event) {
		const target = e.target as HTMLTextAreaElement;
		try {
			const val = JSON.parse(target.value);
			if (val) {
				rawValid = true;
				params = val;
			}
		} catch (e) {
			rawValid = false;
		}
	}

	function paramChange(
		e: Event | InputEvent | ParamsProps['params'],
		param: (typeof parameters)[number]
	): void {
		const target = e?.currentTarget as HTMLInputElement;
		if (param.type === 'object') params[param.key] = (e as CustomEvent).detail;

		if (param.type === 'number') params[param.key] = target.valueAsNumber;

		if (param.type === 'boolean') params[param.key] = target.checked;

		if (param.type === 'string') params[param.key] = target.value;

		// dispatch('change', params);
		onchange?.(params);
	}
</script>

<div class="flex flex-row relative bg-slate-700 rounded-xl p-1 gap-1">
	<div class="flex-column divide-y divide-slate-500" bind:this={mainEle}>
		<button class="font-mono text-xs text-slate-50" onclick={() => (showRaw = !showRaw)}>
			raw
		</button>
		{#each parameters as param}
			<div class="flex flex-row">
				<label for={param.key} class="flex flex-col justify-between text-xs flex-wrap p-1 gap-1">
					<span>
						{param.key}
					</span>
					{#if param.input === 'self'}
						<div class="ml-1">
							<Params
								params={param.value as ParamsProps['params']}
								onchange={(e) => paramChange(e, param)}
							/>
						</div>
					{:else}
						<input
							name={param.key}
							type={param.input}
							class="bg-slate-50 text-slate-800 w-18 ml-4"
							value={param.value}
							checked={typeof param.value === 'boolean' ? param.value : null}
							{...param.options}
							onchange={(e) => paramChange(e, param)}
						/>
						{#if param.input === 'number' && param.options}
							<input
								name={param.key}
								type="range"
								{...param.options}
								value={param.value}
								onchange={(e) => paramChange(e, param)}
							/>
						{/if}
					{/if}
				</label>
			</div>
		{/each}
	</div>
	{#if showRaw}
		<div class="min-w-fit max-w-sm overflow-x-auto">
			<textarea
				cols="30"
				class="text-green-400 bg-black rounded overflow-y-auto overflow-x-auto
			text-xs border-b font-mono transition-colors resize-none"
				class:border-green-400={rawValid}
				class:border-red-400={!rawValid}
				transition:slide={{ axis: 'x' }}
				style:height={mainEle.clientHeight + 'px'}
				value={JSON.stringify(params, undefined, 2)}
				onchange={(e) => rawChange(e)}
			></textarea>
		</div>
	{/if}
</div>
