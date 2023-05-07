<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import CodeSpan from '$dlib/CodeSpan.svelte';
	import { ROUTE_TRANSITION } from '$dlib/const';
	import Copy from '$dlib/Copy.svelte';
	import Page from '$dlib/Page.svelte';

	const packageName = '@eirikk/sveltekit-stuff';
	const npm = `npm i ${packageName}`;
	const pnpm = `pnpm i ${packageName}`;
	const yarn = `yarn add ${packageName}`;
</script>

<Page>
	<p>
		Hi!<br /> This is the bare bones documentation for my npm package
		<CodeSpan>@eirikk/sveltekit-stuff</CodeSpan>.<br />
		It mostly has things I tend to re-implement for every SvelteKit-project I work on.<br />
		It also happens to have things I use with tailwind.
	</p>

	<h2 class="self-start font-bold text-xl" id="getting-started">Getting Started</h2>

	<p class="leading-10">
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

	<h2 class="font-bold text-xl" id="usage">Usage</h2>

	<p>
		Everything is exported from root and can be imported from <CodeSpan
			>@eirikk/sveltekit-stuff</CodeSpan
		>.<br />
		I dunno how good tree-shaking is these days, so if you want to be absolutely sure you only bundle
		exactly what you want, use the longest import path possible behind <CodeSpan
			>@eirikk/sveltekit-stuff/dist</CodeSpan
		> like so:<br />

		Examples:<br />
		<CodeSpan>import rotate from '@eirikk/sveltekit-stuff/dist/transition/rotate'</CodeSpan><br
		/><br />
		<CodeSpan>
			import Breakpoints from '@eirikk/sveltekit-stuff/dist/components/Breakpoints.svelte'
		</CodeSpan><br /><br />
		and so on for <CodeSpan>/types</CodeSpan>, <CodeSpan>/action</CodeSpan> and
		<CodeSpan>/util</CodeSpan>
	</p>
</Page>
