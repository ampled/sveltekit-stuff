<script lang="ts">
	import { onMount } from 'svelte';

	let rippleEle: HTMLDivElement;

	export let opacity = 0.1;
	// export let spreadDuration = 400;

	function handleStart() {}

	function handleEnd() {}

	onMount(() => {
		if (rippleEle) {
			const parent = rippleEle.parentElement;
			if (parent) {
				parent.classList.add('esks-ripple-container');
				parent.addEventListener('pointerdown', handleStart);
				parent.addEventListener('pointerup', handleEnd);
			}
		}
	});
</script>

<div bind:this={rippleEle} class="esks-ripple" style:--ripple-opacity={opacity} />

<style>
	.esks-ripple {
		position: absolute;
		color: inherit;
		border-radius: 9999px;
		pointer-events: none;
		width: 100px;
		height: 100px;
		margin-top: -50px;
		margin-left: -50px;
	}
</style>
