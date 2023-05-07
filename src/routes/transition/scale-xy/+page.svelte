<script lang="ts">
	import { scaleXY, type ScaleXYParams } from '$lib/transition/scaleXY';
	import * as easings from 'svelte/easing';
	import code from './example.txt?raw';
	import Code from '$dlib/Code.svelte';
	import Page from '$dlib/Page.svelte';
	import NumberInput from '$dlib/NumberInput.svelte';
	import { transformOrigins } from '../origins';
	import type { Snapshot } from './$types';

	const easingOptions = Object.keys(easings) as (keyof typeof easings)[];

	let show = true;

	let duration = 250;
	let origin: (typeof transformOrigins)[number] = 'origin-center';
	let easingString: keyof typeof easings = 'cubicOut';
	$: easing = easings[easingString];
	let opacity = 1;
	let x = 0;
	let y = 1;

	$: options = {
		duration,
		origin,
		easing,
		opacity,
		x,
		y
	} as ScaleXYParams;

	function reset() {
		duration = 250;
		easing = easings.cubicOut;
		opacity = 0;
		x = 0;
		y = 0;
	}

	export const snapshot: Snapshot = {
		capture: () => ({ duration, easingString, opacity, origin, x, y }),
		restore: (value) => ({ duration, easingString, opacity, origin, x, y } = value)
	};

	const rotateOptions = `interface ScaleXYParams {
  delay?: number;
  duration?: number;
  easing?: EasingFunction;
  opacity?: number;
  rotation?: number;
  x?: number;
  y?: number;
}`;
</script>

<div class="origin" />

<Page title="scaleXY">
	<p>Like svelte's scale transition, but takes individual x and y params.</p>
	<Code {code} />

	<div class="min-h-[283.5px]">
		{#if show}
			<div transition:scaleXY|local={options}>
				<Code code={rotateOptions} svelte={false} title="Options" />
			</div>
		{/if}
	</div>

	<div class="flex flex-col items-center justify-center relative gap-4">
		<div class="flex gap-1">
			<button
				on:click={() => (show = !show)}
				class="bg-lime-600 text-white rounded-lg p-3 hover:bg-lime-400">hide / show</button
			>
			<button
				class="border border-black rounded-lg p-4 dark:border-white hover:bg-lime-400"
				on:click={reset}
			>
				reset params
			</button>
		</div>

		<div
			class="flex flex-col md:flex-row gap-4 items-center md:items-start justify-center flex-wrap"
		>
			<NumberInput title="duration (ms)" bind:value={duration} max={5000} min={10} step={10} />
			<NumberInput title="opacity" bind:value={opacity} max={1} min={0} step={0.1} />
			<NumberInput title="x" bind:value={x} slider={false} />
			<NumberInput title="y" bind:value={y} slider={false} />

			<div>
				<label class="flex flex-col">
					<b>easing</b>
					<select
						bind:value={easingString}
						class="rounded text-black dark:text-white dark:bg-black"
					>
						{#each easingOptions as option}
							<option value={option}>{option}</option>
						{/each}
					</select>
				</label>
				<label class="flex flex-col">
					<b>transform origin</b>
					<select bind:value={origin} class="rounded text-black dark:text-white dark:bg-black">
						{#each transformOrigins as option}
							<option value={option}>{option}</option>
						{/each}
					</select>
				</label>
			</div>
		</div>

		<div
			class="relative w-full basis-full h-32 flex flex-row items-center justify-center bg-slate-300 mb-12"
		>
			<div class="h-36" />
			{#key options}
				{#if show}
					<div
						class={`w-32 h-32 bg-orange-500 rounded-md text-orange-950 text-center p-2 flex flex-col items-center justify-center text-2xl ${origin}`}
						transition:scaleXY|local={options}
					>
						😯
					</div>
				{/if}
			{/key}
		</div>
	</div>
</Page>
