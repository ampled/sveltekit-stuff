<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	const children_render = $derived(children);

</script>

<span class="font-mono bg-gray-300 p-1 text-black rounded">{@render children_render?.()}</span>
