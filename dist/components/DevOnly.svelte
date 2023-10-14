<script context="module">let _varName = "DEV";
let _value = true;
export function configure(varName = "DEV", value = true) {
  _varName = varName;
  _value = value;
}
</script>

<script>import * as env from "esm-env";
const show = env[_varName] === _value;
</script>

{#if show}
	<slot />
{/if}
