<!--
	@component
	work in progress
-->
<script lang="ts">
	import { backOut, linear } from 'svelte/easing';
	import { onMount } from 'svelte';
	let rippleInstances = [];
	let ele = $state<HTMLDivElement>();

	const defaults = {
		easing: backOut,
		spreadDuration: 400,
		opacity: 0.1,
		center: false,
		clearDelay: 0,
		clearEasing: linear,
		color: 'currentColor'
	};

	let { options = defaults } = $props();

	let rippleOptions = $derived({ ...defaults, ...options });

	function createRipple(id: string) {
		return {
			id,
			...rippleOptions
		};
	}

	function addRipple() {
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

<div bind:this={ele} class="esks-ripples"></div>

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
