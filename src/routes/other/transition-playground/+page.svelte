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
	import { onMount } from 'svelte';

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

	let show = $state(true);

	let demoParamsOptions = {
		transition: { choices: Object.keys(transitions) },
		origin: { choices: transformOrigins },
		width: { max: 450, min: 50, step: 10 },
		height: { max: 450, min: 50, step: 10 }
	};

	// demoparams
	let transitionKey = 'rotate' as keyof typeof transitions;
	let transition = $state(transitions[transitionKey]);
	let transitionParamObject = $state(tParams[transitionKey]);
	let origin = 'origin-center';
	// let width = $state(128);
	// let height = $state(128);

	let transitionParams = $state<{ easing: keyof typeof easings }>({
		easing: 'backOut'
	});
	onMount(() => {
		transitionParams = { ...transitionParamObject?.params };
		transitionParamOptions = { ...transitionParamObject?.options };
	});
	// svelte-ignore state_referenced_locally
	let transitionParamOptions = $state({ ...transitionParamObject?.options });

	let demoParams = $state({
		transition: transitionKey,
		origin: 'origin-center',
		width: 128,
		height: 128
	});

	let easing = $derived(easings[transitionParams?.easing as keyof typeof easings]);

	function onParamsChange(e: any) {
		const newParams = e.detail;
		transitionParams = { ...newParams };
	}

	let prevTransition = $state<keyof typeof transitions>('rotate');
	function onDemoParamsChange(e: any) {
		console.log('demo params change!!', e);
		const newDemoParams = { ...e.detail } as typeof demoParams;
		// width = newDemoParams.width;
		// height = newDemoParams.height;
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

<Page title="Playground">
	<p>Test some transitions</p>

	<DemoContainer title="Playground">
		<div class="bg-green-400 text-black p-2 font-bold">
			transition: {transition.name}
		</div>
		<div class="w-full flex flex-row items-center justify-start gap-20">
			<div class="flex flex-col gap-4">
				<button
					class="bg-green-400 text-black rounded-lg"
					onclick={() =>
						console.log({
							transitionParams
						})}>debug</button
				>
				<button class="bg-green-400 text-black rounded-lg" onclick={() => (show = !show)}
					>hide / show</button
				>

				<Params
					title="Options"
					params={demoParams}
					options={demoParamsOptions}
					onchange={onDemoParamsChange}
				/>

				<Params
					title={transitionParamObject.title}
					params={transitionParams}
					options={transitionParamOptions}
					onchange={onParamsChange}
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
