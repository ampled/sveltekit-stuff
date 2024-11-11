<script lang="ts">
	import ParamsSelf from './Params.svelte';

	import { merge, type ClassValue } from '$lib';

	import { blur, slide } from 'svelte/transition';
	import type { Options } from './params';
	type Params = Record<string | number, number | string | boolean | object | Function>;

	interface ParamsProps {
		params?: Params;
		options?: Options;
		expand?: boolean;
		showRaw?: boolean;
		child?: boolean;
		title?: string;
		class?: ClassValue;
		onchange?: (e: CustomEvent<ParamsProps['params']>) => void;
	}

	let {
		params = $bindable({}),
		options = $bindable({}),
		expand = $bindable(true),
		showRaw = false,
		child = false,
		title = 'params',
		class: className = '',
		onchange
	}: ParamsProps = $props();

	let mainEle = $state<HTMLDivElement>();
	let dirty = $state(false);
	let originalParams = JSON.stringify({ ...params });

	let classes = $derived(
		merge(
			'w-[280px]',
			child && 'w-full',
			'text-xs',
			'items-center',
			'flex',
			'flex-col',
			'sm:flex-row',
			'relative',
			'dark:bg-slate-700',
			'dark:text-slate-50',
			'bg-slate-200',
			child && 'bg-slate-300 dark:bg-slate-600',
			'text-slate-700',
			'rounded-xl',
			'p-1',
			'gap-1',
			'transition-all',
			className
		)
	);

	let parameters = $derived(
		Object.keys(params)
			.map((key) => {
				let type = typeof params[key];
				let input: 'text' | 'checkbox' | 'number' | 'self' | 'none' | 'select' | 'selectkv' =
					'none';
				if (type === 'boolean') input = 'checkbox';
				if (type === 'string') input = 'text';
				if (type === 'number') input = 'number';
				if (type === 'object') input = 'self';

				let opts = options[key];

				if (opts?.choices && Array.isArray(opts.choices)) {
					input = 'select';
				} else if (opts?.choices && typeof opts.choices === 'object') {
					input = 'selectkv';
				}

				return { key, type, value: params[key], input, options: opts };
			})
			.filter((p) => p.input !== 'none')
	);

	function paramChange(e: Event | InputEvent, param: (typeof parameters)[number]) {
		const target = e.target as HTMLInputElement;
		const p = { ...params };

		if (param.input === 'self')
			// @ts-expect-error
			p[param.key] = (e as CustomEvent<ParamsProps['params']>).detail;
		if (param.input === 'number') p[param.key] = target.valueAsNumber;
		if (param.input === 'checkbox') p[param.key] = target.checked;
		if (param.input === 'text') p[param.key] = target.value;
		if (param.input === 'select') p[param.key] = target.value;
		if (param.input === 'selectkv') p[param.key] = param.options.choices?.[target.value];

		params = p;

		dirty = true;
		// dispatch('change', p);
		onchange?.(new CustomEvent('change', { detail: p }));
	}

	let rawValid = $state(true);
	function rawChange(e: InputEvent | Event) {
		const target = e.target as HTMLTextAreaElement;
		try {
			const val = JSON.parse(target.value);
			if (val) {
				rawValid = true;
				// params = val;
				dirty = true;
				// dispatch('change', params);
				onchange?.(new CustomEvent('change', { detail: val }));
			}
		} catch (e) {
			rawValid = false;
		}
	}

	function reset() {
		params = JSON.parse(originalParams);
		dirty = false;
	}

	let _expand = $state(false);
</script>

<div class={classes}>
	<div class="flex flex-col w-full" bind:this={mainEle}>
		<div class="flex flex-row justify-center mb-1 w-full">
			<div class="flex flex-row items-center justify-start flex-nowrap gap-2 w-full">
				<button
					onclick={() => (expand = !expand)}
					class:-rotate-90={!expand}
					class="rounded-full p-1 dark:bg-slate-800 w-7 h-7 text-center flex flex-col items-center justify-center transition-transform"
				>
					<span class="text-xs">&#9660;</span>
				</button>
				<span class="font-bold underline ml-1">{title || 'params'}</span>
			</div>
			<div class="flex flex-row gap-1">
				{#if dirty && !child}
					<button transition:blur|local onclick={reset}>reset</button>
				{/if}
				<!-- <DevOnly>
					{#if expand && !child}
						<button
							class="font-mono text-xs rounded dark:bg-slate-800 p-1"
							on:click={() => (showRaw = !showRaw)}>raw</button
						>
					{/if}
				</DevOnly> -->
			</div>
		</div>
		{#if expand}
			<div
				class="flex flex-col divide-y divide-slate-800 dark:divide-slate-500 w-full basis-auto overflow-hidden"
				transition:slide|local={{ duration: 500 }}
			>
				{#each parameters as param}
					<div class="flex flex-row w-full">
						<label
							for={param.key}
							class="flex flex-row items-center justify-between text-xs p-1 gap-1 w-full"
						>
							{#if param.input !== 'self'}
								<span
									class:italic={param?.options?.custom}
									title={param?.options?.custom ? 'demo param' : null}
									class="basis-full"
								>
									{param.key}{#if param?.options?.custom}
										<span>*</span>
									{/if}
									{#if options[param.key]?.unit}({options[param.key]?.unit}){/if}
								</span>
							{/if}
							<div class="basis-full">
								{#if param.input === 'self'}
									<div class="ml-1 w-full">
										<ParamsSelf
											params={param.value as ParamsProps['params']}
											options={options[param.key] as unknown as {}}
											onchange={(e) => paramChange(e, param)}
											child={true}
											title={param.key}
											expand={options[param.key].expand as boolean}
										/>
									</div>
								{:else if param.input === 'selectkv' && typeof param.options.choices === 'object'}
									<select
										class="w-full"
										onchange={(e) => paramChange(e, param)}
										value={Object.keys(param.options.choices).find(
											(c) => param.options.choices[c] === param.value
										)}
									>
										{#each Object.keys(param.options.choices) as choice}
											<option value={choice}>{choice}</option>
										{/each}
									</select>
								{:else if param.input === 'select'}
									<select
										class="dark:text-black w-full"
										onchange={(e) => paramChange(e, param)}
										value={param.value}
									>
										{#each param.options.choices as choice}
											<option value={choice}>{choice}</option>
										{/each}
									</select>
								{:else}
									<div class="flex flex-col w-full items-end gap-1">
										<input
											name={param.key}
											type={param.input}
											class="dark:bg-slate-50 dark:text-slate-800 w-full"
											value={param.value}
											checked={typeof param.value === 'boolean' ? param.value : null}
											{...param.options}
											onchange={(e) => paramChange(e, param)}
										/>
										{#if param.input === 'number' && param.options?.min != null}
											<input
												class="w-full"
												name={param.key}
												type="range"
												value={param.value}
												{...param.options}
												onchange={(e) => paramChange(e, param)}
											/>
										{/if}
									</div>
								{/if}
							</div>
						</label>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	{#if showRaw && expand}
		<div class="max-w-sm overflow-x-auto">
			<textarea
				cols="30"
				class="text-green-400 bg-black rounded overflow-y-auto overflow-x-auto
			text-xs border-b font-mono transition-colors resize-none"
				class:border-green-400={rawValid}
				class:border-red-400={!rawValid}
				transition:slide|local={{ axis: 'x' }}
				style:height={mainEle.clientHeight + 'px'}
				value={JSON.stringify(params, undefined, 2)}
				onchange={(e) => rawChange(e)}
			></textarea>
		</div>
	{/if}
</div>

<style lang="postcss">
	input[type='text'],
	input[type='number'],
	select {
		@apply border border-slate-800 px-2 text-center;
	}
</style>
