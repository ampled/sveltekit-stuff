<script lang="ts">
	interface Props {
		title?: string;
		children?: import('svelte').Snippet;
	}

	let { title = '', children }: Props = $props();

	const children_render = $derived(children);
</script>

<div class="flex flex-col my-1 w-full">
	<span class="font-bold lg:mb-1">{title}</span>
	{@render children_render?.()}
</div>
