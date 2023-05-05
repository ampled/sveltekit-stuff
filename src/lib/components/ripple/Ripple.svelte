<script lang="ts">
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte/types/runtime/internal/lifecycle';
	// const defaults: RippleInstanceOptions = {
	//   easing: backOut,
	//   spreadDuration: 400,
	//   opacity: 0.1,
	//   center: false,
	// }

	type RippleInstanceParams = {};

	type RippleInstanceOptions = {
		easing: (t: number) => number;
		spreadDuration: number;
		center: boolean;
		color: string;
		opacity: number;
		clearDelay: number;
		clearEasing: any;
	};

	function createRipple() {}
	function addRipple() {}

	onMount(() => {});
</script>

<div class="esks-ripples" />

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
