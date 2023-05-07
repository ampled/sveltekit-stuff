<script lang="ts">
	import Highlight, { LineNumbers, HighlightSvelte } from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	// import html from 'svelte-highlight/languages/ht';
	import style from 'svelte-highlight/styles/classic-dark';

	export let code: string = '';
	export let title: string = 'Example';
	export let svelte = true;
</script>

<svelte:head>
	{@html style}
</svelte:head>

<div class="text-white sm:mx-auto w-full">
	<h3
		class="font-bold text-black dark:text-white text-xl rounded-tl-lg rounded-tr-lg px-2 border border-b-0 border-slate-500 dark:bg-green-700 dark:border-green-700 min-w-fit max-w-fit"
	>
		{title}
	</h3>
	<div
		class="rounded-lg rounded-tl-none overflow-hidden border border-slate-500 dark:border-green-700 text-xs md:text-sm"
		style:--langtag-color="#fff"
	>
		{#if svelte}
			<HighlightSvelte langtag={true} {code} let:highlighted>
				<LineNumbers {highlighted} wrapLines />
			</HighlightSvelte>
		{:else}
			<Highlight langtag={true} language={typescript} {code} let:highlighted>
				<LineNumbers {highlighted} wrapLines />
			</Highlight>
		{/if}
	</div>
</div>
