<script>
	let className = '';
	export { className as class };
</script>

<div class={`fixed bottom-0 left-0 flex flex-col font-mono px-4 bg-green-300 ${className}`}>
	<div class="bg-green-400">xs</div>
	<div class="bg-red-400 sm:bg-green-400">sm</div>
	<div class="bg-red-400 lg:bg-green-400">md</div>
	<div class="bg-red-400 lg:bg-green-400">lg</div>
	<div class="bg-red-400 xl:bg-green-400">xl</div>
	<div class="bg-red-400 2xl:bg-green-400">2xl</div>
</div>
