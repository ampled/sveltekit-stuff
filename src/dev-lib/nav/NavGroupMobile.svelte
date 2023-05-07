<script>
	export let title = '';
</script>

<div class="flex flex-col my-1 w-full">
	<span class="font-bold lg:mb-1">{title}</span>
	<slot />
</div>
