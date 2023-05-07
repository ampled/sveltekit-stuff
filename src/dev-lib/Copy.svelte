<script lang="ts">
	import { ripple } from '$lib';

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
	use:ripple
	on:click={copyToClipBoard}
	class="rounded border border-black font-mono text-sm w-14 text-center dark:border-slate-200"
>
	{buttonText}
</button>
