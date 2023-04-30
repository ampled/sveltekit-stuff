<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import code from './example.txt?raw';
	import Breakpoints from '$lib/components/Breakpoints.svelte';
	import Page from '$dlib/Page.svelte';
</script>

<Page title="Breakpoints">
	A breakpoint "monitor" to show active tailwind breakpoints.

	<Code {code} />

	<div class="relative h-full">
		<Breakpoints class="absolute inset-0 w-16" />
	</div>
</Page>
