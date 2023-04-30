<script lang="ts">
	import { rotate } from '$lib/transition';
	import { backOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import * as easings from 'svelte/easing';
	import code from './example.txt?raw';
	import Code from '$dlib/Code.svelte';
	import { ROUTE_TRANSITION } from '$dlib/const';
	import Page from '$dlib/Page.svelte';

	const easingOptions = Object.keys(easings) as (keyof typeof easings)[];
	const transformOrigins = [
		'origin-top',
		'origin-right',
		'origin-bottom',
		'origin-left',
		'origin-center'
	] as const;

	let show = true;

	let duration = 250;
	let easing = backOut;
	let rotation = 45;
	let opacity = 0;
	let origin: (typeof transformOrigins)[number] = 'origin-center';

	$: options = {
		duration,
		easing,
		rotation,
		opacity
	};

	function reset() {
		duration = 250;
		easing = backOut;
		rotation = 45;
		opacity = 0;
	}

	const rotateOptions = `interface RotateParams {
  delay?: number;
  duration?: number;
  easing?: EasingFunction;
  opacity?: number;
  rotation?: number;
}`;
</script>

<Page title="rotate">
	<p>
		Svelte transition that rotates items in and out. Setting transform-origin with css on the
		element gives more control.
	</p>
	<Code {code} />
	<Code code={rotateOptions} svelte={false} />

	<div class="flex flex-col items-center justify-center relative gap-4">
		<div class="flex gap-1">
			<button
				on:click={() => (show = !show)}
				class="bg-lime-600 text-white rounded-lg p-3 hover:bg-lime-400">hide / show</button
			>
			<button class="border border-black rounded-lg p-4" on:click={reset}> reset params </button>
		</div>

		<div
			class="flex flex-col md:flex-row gap-4 items-center md:items-start justify-center flex-wrap"
		>
			<label class="flex flex-col">
				<b>rotation (degrees)</b>
				<input type="range" bind:value={rotation} min={-1080} max={1080} />
				<input class="border border-black" type="number" bind:value={rotation} />
			</label>
			<label class="flex flex-col">
				<b>duration (ms)</b>
				<input type="range" bind:value={duration} max={5000} min={10} />
				<input class="border border-black" type="number" bind:value={duration} />
			</label>
			<label class="flex flex-col">
				<b>opacity</b>
				<input type="range" bind:value={opacity} max={1} min={0} step={0.1} />
				<input class="border border-black" type="number" bind:value={opacity} />
			</label>
			<div>
				<label class="flex flex-col">
					<b>easing</b>
					<select bind:value={easing} class="rounded">
						{#each easingOptions as option}
							<option value={easings[option]}>{option}</option>
						{/each}
					</select>
				</label>
				<label class="flex flex-col">
					<b>transform origin</b>
					<select bind:value={origin} class="rounded">
						{#each transformOrigins as option}
							<option value={option}>{option}</option>
						{/each}
					</select>
				</label>
			</div>
		</div>

		<div class="relative w-full basis-full h-32 flex flex-row items-center justify-center">
			{#key options}
				{#if show}
					<div
						class={`w-32 h-32 bg-orange-500 rounded-md text-orange-950 text-center p-2 flex flex-col items-center justify-center text-2xl ${origin}`}
						transition:rotate|local={options}
					>
						😵‍💫
					</div>
				{/if}
			{/key}
		</div>
	</div>
</Page>
