<script>
	import Navigation from '$dlib/nav/Navigation.svelte';
	import Breakpoints from '$lib/components/Breakpoints.svelte';
	import DevOnly from '$lib/components/DevOnly.svelte';

	import './app.css';
</script>

<svelte:head>
	<title>My Sveltekit Stuff</title>
</svelte:head>

<div class="container mx-auto min-h-full pt-4">
	<Navigation />
	<main class="min-h-full">
		<slot />
	</main>
	<footer class="lg:fixed lg:bottom-0 lg:left-0 p-4 flex flex-col gap-1">
		<a href="https://npmjs.org/package/@eirikk/sveltekit-stuff" title="View this project on NPM"
			><img src="https://img.shields.io/npm/v/@eirikk/sveltekit-stuff.svg" alt="NPM version" /></a
		>
		<span class="badge-githubstar"
			><iframe
				src="https://ghbtns.com/github-btn.html?user=ampled&amp;repo=sveltekit-stuff&amp;type=watch&amp;count=true"
				allowtransparency={true}
				title="Github Star"
				scrolling="0"
				width="110"
				height="20"
				frameborder="0"
			/></span
		>
	</footer>
</div>
<DevOnly>
	<Breakpoints />
</DevOnly>
