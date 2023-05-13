<script lang="ts">
	import { DEV } from 'esm-env';
</script>

{#if DEV}
	<slot />
{/if}
