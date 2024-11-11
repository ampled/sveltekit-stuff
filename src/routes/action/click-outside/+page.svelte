<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import { clickOutside, type ClickOutsideEvent } from '$lib/action/click-outside';
	import example from './example.txt?raw';
	import Page from '$dlib/Page.svelte';
	import DemoContainer from '$dlib/DemoContainer.svelte';
	import { fly } from 'svelte/transition';

	let text = $state('hey click outside me');

	function handleClickOut(event: ClickOutsideEvent) {
		console.log(event);

		text = 'wow you clicked outside me!!!\n\ni cant believe it';

		setTimeout(() => {
			text = 'hey do it again';
		}, 2000);
	}
</script>

<Page title="Click Outside">
	<Code code={example} />

	<DemoContainer>
		<div
			use:clickOutside
			onclickOut={handleClickOut}
			class="flex flex-col w-64 h-64 bg-orange-950 text-pink-400 items-center justify-center whitespace-pre text-center rounded-lg shadow-lg"
		>
			{#key text}
				<span in:fly={{ y: -20 }}>
					{text}
				</span>
			{/key}
		</div>
	</DemoContainer>
</Page>
