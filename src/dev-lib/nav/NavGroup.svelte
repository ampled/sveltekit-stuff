<script>
	export let title = '';
</script>

<div class="flex lg:flex-col flex-row md:w-full lg:my-1 px-2 lg:px-0">
	<span class="font-bold lg:mb-1">{title}</span>
	<slot />
</div>
