<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import example from './example.txt?raw';
	import { longpress, type LongpressEvent } from '$lib/action/longpress';
	import Page from '$dlib/Page.svelte';
	import DemoContainer from '$dlib/DemoContainer.svelte';
	import Params from '$dlib/Params.svelte';

	let text = 'click and hold here';

	function handleLongPress(e: LongpressEvent) {
		text = 'nice you did it';

		setTimeout(() => {
			text = 'hey do it again if you wanna';
		}, 2000);
	}

	let time = 200;

	let params = {
		time: 200
	};
</script>

<Page title="Longpress">
	<Code code={example} />
	<DemoContainer>
		<Params {params} />

		<div
			use:longpress={time}
			on:long={handleLongPress}
			class="flex flex-col w-64 h-64 bg-orange-950 text-pink-400 items-center justify-center whitespace-pre text-center rounded-lg shadow-lg select-none"
		>
			{text}
		</div>
	</DemoContainer>
</Page>
