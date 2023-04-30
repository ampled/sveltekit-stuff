<script lang="ts">
	import Highlight, { LineNumbers, HighlightSvelte } from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	// import html from 'svelte-highlight/languages/ht';
	import dracula from 'svelte-highlight/styles/monokai';

	export let code: string = '';
	export let svelte = true;
</script>

<svelte:head>
	{@html dracula}
</svelte:head>

{#if svelte}
	<HighlightSvelte {code} let:highlighted class="overflow-auto">
		<LineNumbers {highlighted} wrapLines />
	</HighlightSvelte>
{:else}
	<Highlight language={typescript} {code} let:highlighted class="overflow-auto">
		<LineNumbers {highlighted} wrapLines />
	</Highlight>
{/if}
