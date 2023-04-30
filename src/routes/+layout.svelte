<script>
	import Navigation from '$dlib/nav/Navigation.svelte';
	import Breakpoints from '$lib/components/Breakpoints.svelte';
	import DevOnly from '$lib/components/DevOnly.svelte';
	import hljs from 'highlight.js/lib/core';

	// onMount(() => {
	// 	// @ts-expect-error
	// 	// hljs.configure({ tabReplace: '  ' });
	// });

	import './app.css';
	import { onMount } from 'svelte';
</script>

<div class="container mx-auto min-h-full pt-4">
	<Navigation />
	<main>
		<slot />
	</main>
</div>
<DevOnly>
	<Breakpoints />
</DevOnly>
