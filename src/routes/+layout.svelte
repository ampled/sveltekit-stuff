<script>
	import './app.css';
</script>

<main class="container mx-auto p-4">
	<a class="bg-orange-400 rounded font-bold w-full text-center h-7 mb-2 px-4" href="/">
		sveltekit stuff
	</a>
	<div class="flex flex-col gap-2 mb-4">
		<div
			class="flex flex-row overflow-x-auto items-center gap-4 justify-start rounded-lg bg-orange-900/50 px-4 h-8"
		>
			<span class="font-bold">actions:</span>
			<a class="bg-orange-700 px-2 rounded" href="/action/click-outside">click outside</a>
			<span class="font-bold">components:</span>
			<a class="bg-orange-700 px-2 rounded" href="/components/devonly">DevOnly</a>
			<span class="font-bold">transitions:</span>
			<a class="bg-orange-700 px-2 rounded" href="/transition/rotate">rotate</a>
		</div>

		<!-- <div
			class="flex flex-row overflow-x-auto items-center gap-4 justify-start rounded-lg bg-orange-900/50 px-4 h-8"
		>

		</div>

		<div
			class="flex flex-row overflow-x-auto items-center gap-4 justify-start rounded-lg bg-orange-900/50 px-4 h-8"
		>

		</div> -->
	</div>

	<slot />
</main>
