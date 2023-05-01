<script lang="ts">
	import { page } from '$app/stores';
	import NavGroup from './NavGroup.svelte';
	import NavItem from './NavItem.svelte';

	const ACTION = '/action/';
	const TRANSITION = '/transition/';
	const COMPONENTS = '/components/';
	const UTIL = '/util/';
	const TYPES = '/types/';

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
	class="flex lg:max-w-xs lg:fixed p-2 lg:flex-col flex-row overflow-x-auto whitespace-nowrap items-center lg:items-start gap-4 justify-start rounded-lg bg-white dark:bg-slate-800 dark:border-white border border-black lg:p-4 flex-shrink-0 w-full lg:w-auto mb-10 lg:mb-0"
>
	<a
		class="bg-white dark:bg-slate-800 dark:border-white border border-black rounded font-bold w-full text-center px-4"
		href="/"
	>
		sveltekit stuff
	</a>
	{#each Object.keys(navItems) as group}
		<NavGroup title={group}>
			{#each navItems[group] as item}
				{@const active = item.href ? $page.url?.pathname === item.href : false}

				<NavItem {...item} {active} />
			{/each}
		</NavGroup>
	{/each}
</div>
