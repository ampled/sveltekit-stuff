<script>
	export let title = '';
	export let value = '';
</script>

<label class="flex flex-col min-w-[320px] w-[600px]">
	<b>{title}</b>
	<input type="text" class="border border-black rounded" bind:value />
</label>
