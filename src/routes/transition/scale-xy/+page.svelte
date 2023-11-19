<script lang="ts">
	import { scaleXY } from '$lib/transition/scaleXY';
	import * as easings from 'svelte/easing';
	import code from './example.txt?raw';
	import Code from '$dlib/Code.svelte';
	import Page from '$dlib/Page.svelte';
	import { transformOrigins } from '../origins';
	import DemoContainer from '$dlib/DemoContainer.svelte';
	import Params from '$dlib/Params.svelte';

	const scaleOptions = `interface ScaleXYParams {
  delay?: number;
  duration?: number;
  easing?: EasingFunction;
  opacity?: number;
  rotation?: number;
  x?: number;
  y?: number;
}`;

	const paramOptions = {
		scaleXYParams: {
			in: {
				duration: { step: 100, min: 0, max: 10000 },
				easing: { choices: Object.keys(easings) },
				rotation: { step: 10, min: 1, max: 1080 },
				opacity: { step: 0.05, min: 0, max: 1 },
				origin: { choices: transformOrigins, custom: true },
				show: { custom: true }
			},
			out: {
				expand: false,
				duration: { step: 100, min: 0, max: 10000 },
				easing: { choices: Object.keys(easings) },
				rotation: { step: 10, min: 1, max: 1080 },
				opacity: { step: 0.05, min: 0, max: 1 },
				origin: { choices: transformOrigins, custom: true },
				show: { custom: true }
			}
		},
		demo: {
			origin: { choices: transformOrigins },
			width: { max: 450, min: 50, step: 10 },
			height: { max: 450, min: 50, step: 10 }
		}
	};

	let demoParams = {
		show: true,
		origin: 'origin-center',
		width: 128,
		height: 128,
		'copy in to out': true
	};
	let scaleXYParams = {
		in: {
			duration: 300,
			easing: 'cubicOut' as keyof typeof easings,
			opacity: 1,
			x: 0,
			y: 1
		},
		out: {
			duration: 250,
			easing: 'cubicOut' as keyof typeof easings,
			opacity: 1,
			x: 0,
			y: 1
		}
	};

	$: easingIn = easings[scaleXYParams.in.easing];
	$: easingOut = easings[scaleXYParams.in.easing];

	function onParamsChange(e: any) {
		if (demoParams['copy in to out']) {
			const p: typeof scaleXYParams = e.detail;
			p.out = p.in;
		}
	}
</script>

<Page title="scaleXY">
	<p>Like svelte's scale transition, but takes individual x and y params.</p>
	<Code {code} />

	<div class="min-h-[283.5px]">
		{#key demoParams}
			{#if demoParams.show}
				<div
					in:scaleXY|local={{ ...scaleXYParams.in, easing: easingIn }}
					out:scaleXY|local={{ ...scaleXYParams.out, easing: easingOut }}
				>
					<Code code={scaleOptions} svelte={false} title="Options" />
				</div>
			{/if}
		{/key}
	</div>

	<DemoContainer>
		<div class="w-full flex flex-row items-center justify-start gap-20">
			<div class="flex flex-col gap-4">
				<Params title="Demo Options" bind:params={demoParams} options={paramOptions.demo} />
				<Params
					title="ScaleXYParams"
					bind:params={scaleXYParams}
					options={paramOptions.scaleXYParams}
					on:change={onParamsChange}
				/>
			</div>
			<div
				class="flex flex-col items-center justify-center relative gap-4 bg-slate-300 w-full p-14 h-full"
			>
				<div
					style="min-width: {demoParams.width}px;
				min-height: {demoParams.height}px;"
					class="relative w-full basis-full h-32 flex flex-row items-center justify-center bg-slate-300 mb-12 rounded-md"
				>
					{#key scaleXYParams}
						{#if demoParams.show}
							<div
								style="width: {demoParams.width}px;
								height: {demoParams.height}px;"
								class={`w-32 h-32 bg-orange-500 rounded-md text-orange-950 text-center p-2 flex flex-col items-center justify-center text-2xl ${demoParams.origin}`}
								in:scaleXY|local={{ ...scaleXYParams.in, easing: easingIn }}
								out:scaleXY|local={{ ...scaleXYParams.out, easing: easingOut }}
							>
								😯
							</div>
						{/if}
					{/key}
				</div>
			</div>
		</div>
	</DemoContainer>
</Page>
