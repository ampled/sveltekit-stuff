<script lang="ts">
	import type { Optional } from '$lib';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = {
		title?: string;
		value?: number;
		slider?: boolean;
	} & HTMLInputAttributes;

	export let title: Optional<string> = '';
	export let value: Optional<number> = undefined;
	export let slider: Optional<boolean> = true;
</script>

<label class="flex flex-col">
	<b>{title}</b>
	{#if slider}
		<input type="range" bind:value {...$$restProps} />
	{/if}
	<input
		class="border border-black rounded text-black dark:bg-black dark:text-white dark:border-slate-100"
		type="number"
		bind:value
		{...$$restProps}
	/>
</label>
