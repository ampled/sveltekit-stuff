<script>
	export let href = '';
	export let title = '';
	export let tw = false;
	export let active = false;
</script>

<div class="flex flex-row items-center justify-between lg:w-full lg:mb-1 mr-1">
	<a
		class:bg-orange-300={active}
		class:bg-orange-700={!active}
		class="px-2 rounded hover:bg-orange-400"
		{href}
	>
		{title}
	</a>
	{#if tw}
		<span class="bg-blue-300 text-xs rounded font-mono p-1" title="tailwind">tw</span>
	{/if}
</div>
