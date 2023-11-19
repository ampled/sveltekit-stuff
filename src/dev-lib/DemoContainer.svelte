<script lang="ts">
	export let title = 'Demo';
</script>

<div class="flex w-full flex-col relative">
	<h3
		class="font-bold text-black dark:text-white text-xl rounded-tl-lg rounded-tr-lg px-2 border border-b-0 border-slate-500 dark:bg-green-700 dark:border-green-700 min-w-fit max-w-fit"
	>
		{title}
	</h3>
	<div
		class="p-2 relative flex flex-col gap-4 md:flex-row md:flex-wrap items-center justify-around basis-full w-full bg-slate-800/50 py-4 rounded-lg rounded-tl-none border border-slate-500 dark:border-green-700"
	>
		<slot />
	</div>
</div>
