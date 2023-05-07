<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import code from './example.txt?raw';
	import Breakpoints from '$lib/components/Breakpoints.svelte';
	import Page from '$dlib/Page.svelte';
	import CodeSpan from '$dlib/CodeSpan.svelte';
	import Copy from '$dlib/Copy.svelte';

	const path = `'./node_modules/@eirikk/sveltekit-stuff/**/*.{html,js,svelte,ts}'`;
</script>

<Page title="Breakpoints">
	<p>
		A breakpoint "monitor" to show active tailwind breakpoints.<br />Make sure to add the following
		to the content paths array in your tailwind config:<br />
		<CodeSpan>{path}</CodeSpan><Copy text={path} /><br />
	</p>

	<Code {code} />

	<div class="relative h-full">
		<Breakpoints class="absolute inset-0 w-16" />
	</div>
</Page>
