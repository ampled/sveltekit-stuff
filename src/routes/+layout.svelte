<script>
	import Navigation from '$dlib/nav/Navigation.svelte';
	import Breakpoints from '$lib/components/Breakpoints.svelte';
	import DevOnly from '$lib/components/DevOnly.svelte';
	import './app.css';
</script>

<DevOnly>
	<Breakpoints />
</DevOnly>
<div class="container mx-auto">
	<div class="flex flex-col lg:flex-row gap-2 mb-4 p-4 items-start justify-center">
		<Navigation />
		<main class="flex justify-start items-start w-full h-full">
			<slot />
		</main>
	</div>
</div>
