<script lang="ts">
	import { onMount } from 'svelte';

	let rippleEle: HTMLDivElement;

	function handleStart() {}

	function handleEnd() {}

	onMount(() => {
		if (rippleEle) {
			const parent = rippleEle.parentElement;
			if (parent) {
				parent.classList.add('ripple-container');
			}
		}
	});
</script>

<div bind:this={rippleEle} class="ripple-container">
	<div class="ripple" />
</div>

<style>
	:global(.ripple-container) {
		position: relative;
		overflow: hidden;
	}

	.ripple {
		position: absolute;
	}
</style>
