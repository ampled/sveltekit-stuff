<script lang="ts">
	import Highlight, { LineNumbers, HighlightSvelte } from 'svelte-highlight';
	// import typescript from 'svelte-highlight/languages/typescript';
	// import html from 'svelte-highlight/languages/ht';
	// import style from 'svelte-highlight/styles/classic-dark';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	interface Props {
		code?: string;
		title?: string;
		svelte?: boolean; // export let lineNumbers: boolean = svelte;
	}

	let { code = '', title = 'Example', svelte = true }: Props = $props();
	
</script>

<!-- <svelte:head>
	{@html style}
</svelte:head> -->

<div class="text-white sm:mx-auto w-full">
	<h3
		class="font-bold text-black dark:text-white text-xl rounded-tl-lg rounded-tr-lg px-2 border border-b-0 border-slate-500 dark:bg-green-700 dark:border-green-700 min-w-fit max-w-fit"
	>
		{title}
	</h3>
	<div
		class="rounded-lg rounded-tl-none bg-slate-950 text-black dark:text-white overflow-hidden border border-slate-500 dark:border-green-700 text-xs md:text-sm"
		style:--langtag-color="#fff"
	>
		<CodeBlock {code} language={svelte ? 'svelte' : 'typescript'} />
	</div>
</div>
