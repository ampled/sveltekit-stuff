<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import { clickOutside } from '$lib/action';
	import { slide } from 'svelte/transition';
	import example from './example.txt?raw';
	import { ROUTE_TRANSITION } from '$dlib/const';
	import Page from '$dlib/Page.svelte';

	let text = 'hey click outside me';

	function handleClickOut() {
		text = 'wow you clicked outside me!!!\n\ni cant believe it';

		setTimeout(() => {
			text = 'hey do it again';
		}, 2000);
	}
</script>

<Page title="Click Outside">
	<Code code={example} />
	<div
		use:clickOutside
		on:clickOut={handleClickOut}
		class="flex flex-col w-64 h-64 bg-orange-950 text-pink-400 items-center justify-center whitespace-pre text-center rounded-lg shadow-lg"
	>
		{text}
	</div>
</Page>
