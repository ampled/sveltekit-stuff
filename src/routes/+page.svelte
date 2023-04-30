<script lang="ts">
	import CodeSpan from '$dlib/CodeSpan.svelte';
	import { ROUTE_TRANSITION } from '$dlib/const';
	import Copy from '$dlib/Copy.svelte';
	import Page from '$dlib/Page.svelte';

	const packageName = '@eirikk/sveltekit-stuff';
	const npm = `npm i ${packageName}`;
	const pnpm = `pnpm i ${packageName}`;
	const yarn = `yarn add ${packageName}`;
</script>

<Page title="My SvelteKit Stuff">
	<p class="max-w-3xl self-start">
		Hi!<br /> This is the bare bones documentation for my npm package
		<span class="bg-gray-300 font-mono"> @eirikk/sveltekit-stuff </span>.<br />
		It mostly has things I tend to re-implement for every SvelteKit-project I work on. It also happens
		to have things I use with tailwind.
	</p>

	<h2 class="self-start font-bold text-xl" id="getting-started">Getting Started</h2>

	<p class="self-start leading-10">
		Install with: <br />

		<CodeSpan>{npm}</CodeSpan>
		<Copy text={npm} /><br />
		or<br />
		<CodeSpan>{pnpm}</CodeSpan>
		<Copy text={pnpm} /><br />
		or<br />
		<CodeSpan>{yarn}</CodeSpan>
		<Copy text={yarn} /><br />
	</p>

	<h2 class="self-start font-bold text-xl" id="usage">Usage</h2>

	<p class="self-start">
		Everything is exported from root. I dunno how good tree-shaking is these days, so if you want to
		be absolutely sure you only bundle exactly what you want, use the longest import path possible.<br
		/>
		Examples:<br />
		<CodeSpan>import rotate from '@eirikk/sveltekit-stuff/transition/rotate'</CodeSpan><br /><br />
		<CodeSpan
			>import Breakpoints from '@eirikk/sveltekit-stuff/components/Breakpoints.svelte'</CodeSpan
		><br /><br />
		and so on for <CodeSpan>/types</CodeSpan>, <CodeSpan>/action</CodeSpan> and <CodeSpan
			>/util</CodeSpan
		>
	</p>
</Page>
