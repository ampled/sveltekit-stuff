<script lang="ts">
	import Navigation from '$dlib/nav/Navigation.svelte';
	import Breakpoints from '$lib/components/Breakpoints.svelte';
	import DevOnly from '$lib/components/DevOnly.svelte';
	import { onMount } from 'svelte';

	let theme: 'dark' | 'light' | undefined;

	onMount(() => {
		theme = localStorage.theme;
		if (!theme) {
			if (
				localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				theme = localStorage.theme = 'dark';
			} else {
				document.documentElement.classList.remove('dark');
				theme = localStorage.theme = 'light';
			}
		}
	});

	import './app.css';
	import { swapTheme } from '$dlib/theme';
	import { ripple } from '$lib';
</script>

<svelte:head>
	<title>My Sveltekit Stuff</title>
</svelte:head>

<div class="mx-auto min-h-full">
	<Navigation />
	<main class="min-h-full">
		<slot />
	</main>
	<footer class="lg:fixed lg:bottom-0 lg:left-0 p-4 flex flex-col gap-1">
		{#if theme}
			<button
				use:ripple
				class="bg-white dark:bg-slate-800 text-black dark:text-white border border-black rounded dark:border-white text-xs w-10 text-center"
				on:click={() => (theme = swapTheme())}
			>
				{theme}
			</button>
		{/if}
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
