<script>
	export let title = '';
</script>

<div class="flex lg:flex-col flex-row md:w-full">
	<span class="font-bold m-1">{title}</span>
	<slot />
</div>
