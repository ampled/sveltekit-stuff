<script lang="ts">
	import { ripple } from '$lib';

	interface Props {
		text?: string;
		buttonText?: string;
	}

	let { text = '', buttonText = $bindable('copy') }: Props = $props();

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
	onclick={copyToClipBoard}
	class="rounded border border-black font-mono text-sm w-14 text-center dark:border-slate-200"
>
	{buttonText}
</button>
