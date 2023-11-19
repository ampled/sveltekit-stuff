<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import example from './example.txt?raw';
	import { DEFAULT_OPTIONS } from '$lib/action/ripple/ripple';
	import { ripple } from '$lib/action/ripple';
	import Page from '$dlib/Page.svelte';
	import DemoContainer from '$dlib/DemoContainer.svelte';
	import Params from '$dlib/Params.svelte';

	let time = 200;

	let params = { ...DEFAULT_OPTIONS };

	let type = `type RippleOptions = {
	color: string;
	class: string;
	opacity: number;
	centered: boolean;
	spreadingDuration: number;
	spreadingDelay: number;
	spreadingTimingFunction: string;
	clearingDuration: number;
	clearingDelay: number;
	clearingTimingFunction: string;
};`;
	let p = { haha: 'haha!', nested: { lol: true, text: 'bunch text ova here' }, num: 3 };
</script>

<Page title="Ripple">
	<p>
		A material like ripple-effect in a svelte-action. The ripple uses the text color of the element
		unless specified in the options.
	</p>

	<Code code={example} />

	<Code code={type} svelte={false} title="Options" />

	<DemoContainer>
		<!-- <label class="flex flex-col">
			<b>spreadingDuration (ms)</b>
			<input type="range" bind:value={time} max={2000} min={50} />
			<input
				class="border border-black bg-white text-black dark:bg-black dark:text-white"
				type="number"
				bind:value={time}
			/>
		</label> -->

		<Params bind:params options={{ opacity: { min: 0, max: 1, step: 0.1 } }} />

		<div
			use:ripple={params}
			class="flex flex-col w-64 h-64 bg-orange-950 text-pink-400 items-center justify-center whitespace-pre text-center rounded-lg shadow-lg select-none"
		>
			click to test ripple effect!
		</div>

		<button
			use:ripple={params}
			class="border-black bg-white text-black p-8 uppercase rounded-lg border-4 font-bold dark:bg-black dark:text-white"
			>click this</button
		>

		<button
			use:ripple={params}
			class="border-pink-800 bg-white text-pink-800 p-8 uppercase rounded-lg border-4 font-bold"
			>click this</button
		>
	</DemoContainer>
</Page>
