<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import example from './example.txt?raw';
	import ripple from '$lib/action/ripple';
	import Page from '$dlib/Page.svelte';

	let text = 'click here';

	let time = 200;
</script>

<Page title="Ripple">
	<Code code={example} />

	<label class="flex flex-col">
		<b>longpress time (ms)</b>
		<input type="range" bind:value={time} max={5000} min={100} />
		<input
			class="border border-black bg-white text-black dark:bg-black dark:text-white"
			type="number"
			bind:value={time}
		/>
	</label>

	<div
		use:ripple={{}}
		class="flex flex-col w-64 h-64 bg-orange-950 text-pink-400 items-center justify-center whitespace-pre text-center rounded-lg shadow-lg select-none"
	>
		{text}
	</div>
</Page>
