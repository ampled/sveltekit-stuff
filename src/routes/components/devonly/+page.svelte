<script lang="ts">
	import DevOnly from '$lib/components/DevOnly.svelte';
	import { slide } from 'svelte/transition';

	let example = `<DevOnly>This will only be rendered on local dev server</DevOnly>`;
</script>

<div class="flex flex-col h-full items-center justify-center gap-8" transition:slide>
	<pre class="font-mono whitespace-pre bg-gray-400 p-8 text-center">
		{example}
	</pre>

	<DevOnly>This will only be rendered on local dev server</DevOnly>
</div>
