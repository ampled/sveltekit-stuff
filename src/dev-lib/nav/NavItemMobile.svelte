<script>
	import { ripple } from '$lib';

	export let href = '';
	export let title = '';
	export let tw = false;
	export let active = false;
	export let kit = false;
</script>

<div class="flex flex-row items-center justify-between w-full max-w-md mb-1 mr-1 gap-3">
	<a
		use:ripple
		class:bg-orange-400={active}
		class:dark:bg-orange-600={active}
		class:bg-orange-100={!active}
		class:dark:bg-slate-800={!active}
		class="px-2 rounded hover:bg-orange-50 border border-black dark:hover:bg-orange-800 dark:border-white transition-all"
		{href}
	>
		{title}
	</a>
	{#if tw}
		<span
			class="bg-blue-300 text-xs rounded font-mono px-1 select-none text-slate-800"
			title="tailwind">tw</span
		>
	{/if}
	{#if kit}
		<span
			class="bg-orange-400 text-xs rounded font-mono px-1 select-none text-slate-800"
			title="sveltekit only"
		>
			kit
		</span>
	{/if}
</div>
