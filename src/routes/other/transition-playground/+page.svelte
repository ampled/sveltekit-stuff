<script lang="ts">
	import { scaleXY } from '$lib/transition/scaleXY';
	import { rotate } from '$lib/transition/rotate';
	import * as t from 'svelte/transition';
	import * as easings from 'svelte/easing';
	import Page from '$dlib/Page.svelte';
	import { transformOrigins } from '../../transition/origins';
	import DemoContainer from '$dlib/DemoContainer.svelte';
	import Params from '$dlib/Params.svelte';
	import * as tParams from './transitionParams';

	let { draw, crossfade, ...otherTransitions } = t;

	let transitions = { scaleXY, rotate, ...otherTransitions };

	const paramOptions = {
		scaleXYParams: {
			in: {
				transition: { choices: Object.keys(transitions) },
				duration: { step: 100, min: 0, max: 10000 },
				easing: { choices: Object.keys(easings) },
				rotation: { step: 10, min: 1, max: 1080 },
				opacity: { step: 0.05, min: 0, max: 1 },
				origin: { choices: transformOrigins, custom: true },
				show: { custom: true }
			},
			out: {
				expand: false,
				transition: { choices: Object.keys(transitions) },
				duration: { step: 100, min: 0, max: 10000 },
				easing: { choices: Object.keys(easings) },
				rotation: { step: 10, min: 1, max: 1080 },
				opacity: { step: 0.05, min: 0, max: 1 },
				origin: { choices: transformOrigins, custom: true },
				show: { custom: true }
			}
		}
	};

	let show = true;

	let demoParamsOptions = {
		transition: { choices: Object.keys(transitions) },
		origin: { choices: transformOrigins },
		width: { max: 450, min: 50, step: 10 },
		height: { max: 450, min: 50, step: 10 }
	};

	// demoparams
	let transitionKey = 'rotate' as keyof typeof transitions;
	let transition = transitions[transitionKey];
	let transitionParamObject = tParams[transitionKey];
	let origin = 'origin-center';
	let width = 128;
	let height = 128;
	let transitionParams = { ...transitionParamObject?.params };
	let transitionParamOptions = { ...transitionParamObject?.options };

	let demoParams = {
		transition: transitionKey,
		origin: 'origin-center',
		width,
		height
	};

	$: easing = easings[transitionParams?.easing as keyof typeof easings];

	$: {
		console.log('transitionparams changed:', transitionParams);
	}

	function onParamsChange(e: any) {
		const newParams = e.detail;
		transitionParams = { ...newParams };
	}

	let prevTransition = demoParams.transition;
	function onDemoParamsChange(e: any) {
		console.log('demo params change!!', e);
		const newDemoParams = { ...e.detail } as typeof demoParams;
		width = newDemoParams.width;
		height = newDemoParams.height;
		origin = newDemoParams.origin;
		demoParams = { ...newDemoParams };
		if (newDemoParams.transition !== prevTransition) {
			transitionKey = newDemoParams.transition;
			transition = transitions[transitionKey];
			transitionParams = { ...tParams[demoParams.transition].params };
			transitionParamObject = tParams[transitionKey];
			prevTransition = demoParams.transition;
		}
	}
</script>

<Page title="scaleXY">
	<p>Test some transitions</p>

	<DemoContainer title="Playground">
		<div class="bg-green-400 text-black">
			transition: {transition.name}
		</div>
		<div class="w-full flex flex-row items-center justify-start gap-20">
			<div class="flex flex-col gap-4">
				<button
					class="bg-green-400 text-black rounded-lg"
					on:click={() =>
						console.log({
							transitionParams
						})}>debug</button
				>
				<button class="bg-green-400 text-black rounded-lg" on:click={() => (show = !show)}
					>hide / show</button
				>

				<Params
					title="Options"
					params={demoParams}
					options={demoParamsOptions}
					on:change={onDemoParamsChange}
				/>

				<Params
					title={transitionParamObject.title}
					params={transitionParams}
					options={transitionParamOptions}
					on:change={onParamsChange}
				/>
			</div>
			<div
				class="flex flex-col items-center justify-center relative gap-4 bg-slate-300 w-full p-14 h-full"
			>
				<div
					style="min-width: {width}px;
				min-height: {height}px;"
					class="relative w-full basis-full h-32 flex flex-row items-center justify-center bg-slate-300 mb-12 rounded-md"
				>
					{#key transitionParams}
						{#if show}
							<div
								style="width: {demoParams.width}px;
								height: {demoParams.height}px;"
								class={`w-32 h-32 bg-orange-500 rounded-md text-orange-950 transition-all text-center p-2 flex flex-col items-center justify-center text-2xl ${demoParams.origin}`}
								transition:transition|local={{ ...transitionParams, easing }}
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
