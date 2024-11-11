<script lang="ts">
	import { blur } from 'svelte/transition';
	import { ROUTE_TRANSITION, ROUTE_TRANSITION_PARAMS } from './const';

	interface Props {
		title?: string;
		children?: import('svelte').Snippet;
	}

	let { title = '', children }: Props = $props();

	const children_render = $derived(children);
</script>

<!-- <div> -->
<div
	class="min-h-full flex flex-col px-3 pb-52 mb-4 w-full pt-14 lg:pt-4 gap-8 lg:pl-64 lg:pr-6 z-40 overflow-hidden"
>
	{#if title}
		<h2
			in:blur={{ delay: 300 }}
			out:blur
			class="font-bold text-3xl fixed top-0 right-0 z-50 lg:relative lg:p-0 pr-1"
		>
			{title}
		</h2>
	{/if}
	<div
		in:ROUTE_TRANSITION={{ ...ROUTE_TRANSITION_PARAMS, delay: 300 }}
		out:ROUTE_TRANSITION={{ ...ROUTE_TRANSITION_PARAMS, x: -300 }}
		class="flex flex-col items-start justify-start gap-8"
	>
		{@render children_render?.()}
	</div>
</div>
<!-- </div> -->
