<script lang="ts">
	import { page } from '$app/stores';
	import { blur } from 'svelte/transition';
	import NavGroup from './NavGroup.svelte';
	import NavGroupMobile from './NavGroupMobile.svelte';
	import NavItem from './NavItem.svelte';
	import NavItemMobile from './NavItemMobile.svelte';
	import { merge } from '$lib';
	import { afterNavigate } from '$app/navigation';

	const ACTION = '/action/';
	const TRANSITION = '/transition/';
	const COMPONENTS = '/components/';
	const UTIL = '/util/';
	const TYPES = '/types/';

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	afterNavigate(() => {
		menuOpen = false;
	});

	const navItems: Record<
		string,
		Array<{ title: string; href: string; tw?: boolean; kit?: boolean }>
	> = {
		action: [
			{
				href: ACTION + 'click-outside',
				title: 'click outside'
			},
			{
				href: ACTION + 'longpress',
				title: 'longpress'
			},
			{
				href: ACTION + 'ripple',
				title: 'ripple'
			}
		],
		components: [
			{
				href: COMPONENTS + 'devonly',
				title: 'DevOnly',
				kit: true
			},
			{
				href: COMPONENTS + 'breakpoints',
				title: 'Breakpoints',
				tw: true
			}
		],
		transitions: [
			{
				href: TRANSITION + 'rotate',
				title: 'rotate'
			},
			{
				href: TRANSITION + 'scale-xy',
				title: 'scaleXY'
			}
		],
		util: [
			{
				href: UTIL + 'merge',
				title: 'merge',
				tw: true
			},
			{
				href: UTIL + 'get-youtube-id',
				title: 'getYoutubeId'
			}
		],
		types: [
			{
				href: TYPES,
				title: 'types'
			}
		]
	};
</script>

<div
	class:h-full={menuOpen}
	class="lg:max-w-max border-b lg:border-b-0 border-slate-500 fixed w-screen lg:max-h-fit lg:h-auto lg:top-0 lg:left-0 lg:bottom-auto lg:right-auto flex bg-slate-50 dark:bg-slate-900 flex-col p-2 overflow-hidden whitespace-nowrap items-start justify-start lg:p-4 flex-shrink-0 lg:w-full mb-10 lg:mb-0 z-40 divide-y divide-slate-500 lg:pr-16 lg:border-r lg:gap-0"
>
	<!-- menu header -->
	<div class="flex flex-row max-w-xs w-full justify-between items-center gap-4">
		<button on:click={toggleMenu} class="font-bold text-2xl lg:hidden flex select-none">
			{#key menuOpen}
				<div class="w-4 h-4 leading-4 flex flex-row items-center justify-center" in:blur>
					{#if menuOpen}&#x2715;{:else}&equiv;{/if}
				</div>
			{/key}
		</button>
		<a class="text-xl font-bold w-full lg:mx-0 mr-2" href="/">
			<h1>sveltekit stuff</h1>
		</a>
	</div>

	<!-- menu items -->
	<div
		class="lg:flex flex-col items-start justify-start lg:translate-x-0 transition-all bg-inherit w-full lg:opacity-100 lg:h-auto"
		class:opacity-0={!menuOpen}
		class:opacity-100={menuOpen}
		class:h-0={!menuOpen}
	>
		{#each Object.keys(navItems) as group}
			<NavGroupMobile title={group}>
				{#each navItems[group] as item}
					{@const active = item.href ? $page.url?.pathname === item.href : false}

					<NavItemMobile {...item} {active} />
				{/each}
			</NavGroupMobile>
		{/each}
	</div>
</div>
