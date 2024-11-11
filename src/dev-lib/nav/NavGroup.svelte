<script lang="ts">
	interface Props {
		title?: string;
		children?: import('svelte').Snippet;
	}

	let { title = '', children }: Props = $props();

	const children_render = $derived(children);
</script>

<div class="flex lg:flex-col flex-row md:w-full lg:my-1 px-2 lg:px-0">
	<span class="font-bold lg:mb-1">{title}</span>
	{@render children_render?.()}
</div>
