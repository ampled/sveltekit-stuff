<!--
	@component
	work in progress
-->
<script>import { backOut, linear } from "svelte/easing";
import { onMount } from "svelte/types/runtime/internal/lifecycle";
let rippleInstances = [];
let ele;
const defaults = {
  easing: backOut,
  spreadDuration: 400,
  opacity: 0.1,
  center: false,
  clearDelay: 0,
  clearEasing: linear,
  color: "currentColor"
};
export let options = defaults;
$:
  rippleOptions = { ...defaults, ...options };
function createRipple(id) {
  return {
    id,
    ...rippleOptions
  };
}
function addRipple(e) {
  const id = Date.now().toString();
  const ripple = createRipple(id);
  rippleInstances = [...rippleInstances, ripple];
  setTimeout(() => {
    removeRipple(id);
  }, options.spreadDuration);
}
function removeRipple(id) {
  rippleInstances = rippleInstances.filter((ripple) => ripple.id != id);
}
onMount(() => {
  ele.addEventListener("pointerdown", addRipple);
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
