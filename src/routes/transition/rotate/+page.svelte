<script lang="ts">
	import { rotate } from '$lib/transition/rotate';
	import * as easings from 'svelte/easing';
	import code from './example.txt?raw';
	import Code from '$dlib/Code.svelte';
	import Page from '$dlib/Page.svelte';
	import { transformOrigins } from '../origins';
	import DemoContainer from '$dlib/DemoContainer.svelte';
	import Params from '$dlib/Params.svelte';

	const rotateOptions = `interface RotateParams {
  delay?: number;
  duration?: number;
  easing?: EasingFunction;
  opacity?: number;
  rotation?: number;
  x?: number;
  y?: number;
}`;

	const paramOptions = {
		rotateParams: {
			in: {
				duration: { step: 100, min: 0, max: 10000 },
				easing: { choices: Object.keys(easings) },
				rotation: { step: 10, min: 1, max: 1080 },
				opacity: { step: 0.05, min: 0, max: 1 },
				origin: { choices: transformOrigins, custom: true },
				show: { custom: true },
				x: { unit: 'px' },
				y: { unit: 'px' }
			},
			out: {
				expand: false,
				duration: { step: 100, min: 0, max: 10000 },
				easing: { choices: Object.keys(easings) },
				rotation: { step: 10, min: 1, max: 1080 },
				opacity: { step: 0.05, min: 0, max: 1 },
				origin: { choices: transformOrigins, custom: true },
				show: { custom: true },
				x: { unit: 'px' },
				y: { unit: 'px' }
			}
		},
		demo: {
			origin: { choices: transformOrigins },
			width: { max: 450, min: 50, step: 10 },
			height: { max: 450, min: 50, step: 10 }
		}
	};

	let demoParams = $state({
		show: true,
		origin: 'origin-center',
		width: 128,
		height: 128
	});
	let rotateParams = $state({
		in: {
			duration: 250,
			easing: 'backOut' as keyof typeof easings,
			rotation: 45,
			opacity: 0,
			x: 0,
			y: 0
		},
		out: {
			duration: 250,
			easing: 'backOut' as keyof typeof easings,
			rotation: 45,
			opacity: 0,
			x: 0,
			y: 0
		}
	});

	let easingIn = $derived(easings[rotateParams.in.easing]);
	let easingOut = $derived(easings[rotateParams.in.easing]);
	let show = $derived(demoParams.show);

	function onParamsChange(
		e: CustomEvent<
			Record<string | number, string | number | boolean | object | Function> | undefined
		>
	): void {
		console.log(e);
		// throw new Error('Function not implemented.');
	}
</script>

<Page title="rotate">
	<p>
		Svelte transition that rotates items in and out.<br />
		Setting transform-origin on the element gives more control.
	</p>
	<Code {code} />
	<Code code={rotateOptions} svelte={false} title="Options" />

	<DemoContainer>
		<div
			class="relative w-full basis-full h-fit flex flex-col sm:flex-row items-center gap-20 py-4 flex-nowrap"
		>
			<div class="flex flex-col gap-4">
				<Params
					title="Demo Options"
					bind:params={demoParams}
					options={paramOptions.demo}
					onchange={onParamsChange}
				/>
				<Params
					title="RotateParams"
					bind:params={rotateParams}
					options={paramOptions.rotateParams}
				/>
			</div>
			<div
				class="w-full h-full basis-full min-h-full flex items-center justify-center bg-slate-300 p-14"
			>
				<div class="transition-all duration-1000" style:height={demoParams.height + 'px'}>
					{#key rotateParams}
						{#if show}
							<div
								class={`bg-orange-500 flex items-center justify-center rounded-md text-orange-950 transition-all duration-1000 text-center p-2 text-2xl ${demoParams.origin}`}
								style="width: {demoParams.width}px;
										height: {demoParams.height}px;"
								in:rotate|local={{ ...rotateParams.in, easing: easingIn }}
								out:rotate|local={{ ...rotateParams.out, easing: easingOut }}
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
