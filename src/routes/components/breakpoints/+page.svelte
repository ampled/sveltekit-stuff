<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import code from './example.txt?raw';
	import Breakpoints from '$lib/components/Breakpoints.svelte';
	import Page from '$dlib/Page.svelte';
	import CodeSpan from '$dlib/CodeSpan.svelte';
	import Copy from '$dlib/Copy.svelte';
	import DemoContainer from '$dlib/DemoContainer.svelte';

	const path = `'./node_modules/@eirikk/sveltekit-stuff/**/*.{html,js,svelte,ts}'`;

	let xs = false;
</script>

<Page title="Breakpoints">
	<p>
		A breakpoint "monitor" to show active tailwind breakpoints.<br />
		Make sure to add the following to the content paths array in your tailwind config:<br />
		<CodeSpan>{path}</CodeSpan><Copy text={path} /><br />
	</p>

	<Code {code} />

	<DemoContainer>
		<div class="flex flex-col items-center justify-center">
			<p>Resize your browser window to test this</p>
			<Breakpoints class="relative inset-0 w-16" {xs} />
			<label>
				<input type="checkbox" bind:checked={xs} />
				show imaginary "xs" breakpoint
			</label>
		</div>
	</DemoContainer>
</Page>
