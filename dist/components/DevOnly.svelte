<script module>
	let _varName = 'DEV';
	let _value = true;
	export function configure(varName = 'DEV', value = true) {
		_varName = varName;
		_value = value;
	}
</script>

<script lang="ts">
	import * as env from 'esm-env';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	const show = env[_varName] === _value;
</script>

{#if show}
	{@render children?.()}
{/if}
