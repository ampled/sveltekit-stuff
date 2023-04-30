<script lang="ts">
	export let text = '';
	export let buttonText = 'copy';

	async function copyToClipBoard() {
		await navigator.clipboard.writeText(text);
		buttonText = 'copied';
		setTimeout(() => {
			buttonText = 'copy';
		}, 5000);
	}
</script>

<button
	on:click={copyToClipBoard}
	class="rounded border border-black font-mono text-sm w-14 text-center"
>
	{buttonText}
</button>
