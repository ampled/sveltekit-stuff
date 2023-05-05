<script lang="ts">
	import { backOut, linear } from 'svelte/easing';
	import { onMount } from 'svelte/types/runtime/internal/lifecycle';
	let rippleInstances: RippleInstanceOptions[] = [];
	let ele: HTMLDivElement;

	const defaults: RippleInstanceOptions = {
		easing: backOut,
		spreadDuration: 400,
		opacity: 0.1,
		center: false,
		clearDelay: 0,
		clearEasing: linear,
		color: 'currentColor'
	};

	type RippleInstanceOptions = {
		id?: string;
		easing: (t: number) => number;
		spreadDuration: number;
		center: boolean;
		color: string;
		opacity: number;
		clearDelay: number;
		clearEasing: any;
	};

	export let options: Partial<RippleInstanceOptions> = defaults;

	$: rippleOptions = { ...defaults, ...options };

	function createRipple(id: string) {
		return {
			id,
			...rippleOptions
		} satisfies RippleInstanceOptions;
	}
	function addRipple(e: Event) {
		const id = Date.now().toString();
		const ripple = createRipple(id);
		rippleInstances = [...rippleInstances, ripple];
		setTimeout(() => {
			removeRipple(id);
		}, options.spreadDuration);
	}

	function removeRipple(id: string) {
		rippleInstances = rippleInstances.filter((ripple) => ripple.id != id);
	}

	onMount(() => {
		ele.addEventListener('pointerdown', addRipple);

		return;
	});
</script>

<div bind:this={ele} class="esks-ripples" />

<style>
	:global(.esks-ripple-container) {
		position: relative;
	}

	.esks-ripples {
		position: absolute;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>
