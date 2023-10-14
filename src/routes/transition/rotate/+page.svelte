<script lang="ts">
	import { rotate, type RotateParams } from '$lib/transition/rotate';
	import * as easings from 'svelte/easing';
	import code from './example.txt?raw';
	import Code from '$dlib/Code.svelte';
	import Page from '$dlib/Page.svelte';
	import NumberInput from '$dlib/NumberInput.svelte';
	import { transformOrigins } from '../origins';
	import type { Snapshot } from './$types';
	import DemoContainer from '$dlib/DemoContainer.svelte';

	const easingOptions = Object.keys(easings) as (keyof typeof easings)[];

	let show = true;

	let duration = 250;
	let easingString: keyof typeof easings = 'backOut';
	$: easing = easings[easingString];
	let rotation = 45;
	let opacity = 0;
	let origin: (typeof transformOrigins)[number] = 'origin-center';
	let x = 0;
	let y = 0;

	$: options = {
		duration,
		easing,
		rotation,
		opacity,
		x,
		y
	} as RotateParams;

	export const snapshot: Snapshot = {
		capture: () => ({ duration, easingString, rotation, opacity, origin, x, y }),
		restore: (value) => ({ duration, easingString, rotation, opacity, origin, x, y } = value)
	};

	function reset() {
		duration = 250;
		easing = easings.backOut;
		rotation = 45;
		opacity = 0;
		x = 0;
		y = 0;
	}

	const rotateOptions = `interface RotateParams {
  delay?: number;
  duration?: number;
  easing?: EasingFunction;
  opacity?: number;
  rotation?: number;
  x?: number;
  y?: number;
}`;
</script>

<Page title="rotate">
	<p>
		Svelte transition that rotates items in and out.<br />
		Setting transform-origin on the element gives more control.
	</p>
	<Code {code} />
	<Code code={rotateOptions} svelte={false} title="Options" />

	<DemoContainer>
		<div class="flex flex-col items-center justify-center relative gap-4">
			<div
				class="flex flex-col md:flex-row gap-4 items-start md:items-start justify-start flex-wrap"
			>
				<NumberInput title="rotation (degrees)" bind:value={rotation} max={1080} min={-1080} />
				<NumberInput title="duration (ms)" bind:value={duration} max={5000} min={10} />
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
				class="relative w-full basis-full h-32 flex flex-row items-center justify-center gap-6 py-4"
			>
				<div class="flex gap-1">
					<button
						on:click={() => (show = !show)}
						class="bg-lime-600 text-white rounded-lg p-3 hover:bg-lime-400">hide / show</button
					>
					<button
						class="border border-black rounded-lg p-4 dark:border-white hover:bg-lime-600"
						on:click={reset}
					>
						reset params
					</button>
				</div>
				<div class="h-36 w-32">
					{#key options}
						{#if show}
							<div
								class={`w-32 h-32 bg-orange-500 rounded-md text-orange-950 text-center p-2 flex flex-col items-center justify-center text-2xl ${origin}`}
								transition:rotate={options}
							>
								😵‍💫
							</div>
						{/if}
					{/key}
				</div>
			</div>
		</div>
	</DemoContainer>
</Page>
