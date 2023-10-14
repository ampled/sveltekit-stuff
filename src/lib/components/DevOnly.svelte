<script context="module" lang="ts">
	let _varName = 'DEV';
	let _value: any = true;
	export function configure(varName: string = 'DEV', value: any = true) {
		_varName = varName;
		_value = value;
	}
</script>

<script lang="ts">
	import * as env from 'esm-env';

	// @ts-expect-error
	const show = env[_varName] === _value;
</script>

{#if show}
	<slot />
{/if}
