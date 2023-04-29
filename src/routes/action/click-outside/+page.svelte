<script lang="ts">
	import { clickOutside } from '$lib/action';
	import { slide } from 'svelte/transition';

	let text = 'hey click outside me';
	let example = `
	<div
		use:clickOutside
		on:clickOut={handleClickOut}
	/>`;

	function handleClickOut() {
		text = 'wow you clicked outside me!!!\n\ni cant believe it';

		setTimeout(() => {
			text = 'hey do it again';
		}, 2000);
	}
</script>

<div class="flex flex-col h-full items-center justify-center gap-8" transition:slide>
	<pre class="font-mono whitespace-pre bg-gray-400 p-8">
		{example}
	</pre>
	<div
		use:clickOutside
		on:clickOut={handleClickOut}
		class="flex flex-col w-64 h-64 bg-orange-950 text-pink-400 items-center justify-center whitespace-pre text-center rounded-lg shadow-lg"
	>
		{text}
	</div>
</div>
