<script>
	import Navigation from '$dlib/nav/Navigation.svelte';
	import Breakpoints from '$lib/components/Breakpoints.svelte';
	import DevOnly from '$lib/components/DevOnly.svelte';

	let npmBadge = '';
	let githubBadge = '';

	onMount(async () => {
		const badges = await import('badges');
		npmBadge = badges.renderBadge('npmversion', { npmPackageName: '@eirikk/sveltekit-stuff' });
		githubBadge = badges.renderBadge('githubstar', { githubSlug: 'ampled/sveltekit-stuff' });
	});

	import './app.css';
	import { onMount } from 'svelte';
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
		{@html npmBadge}
		{@html githubBadge}
	</footer>
</div>
<DevOnly>
	<Breakpoints />
</DevOnly>
