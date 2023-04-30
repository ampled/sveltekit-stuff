<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import code from './example.txt?raw';
	import Page from '$dlib/Page.svelte';
	import { merge } from '$lib/util';

	let input = `
    [
      false,
      null,
      undefined,
      'p-1',
      'p-2',
      true && ['m-1'],
      { 'p-3': false }
    ]`;
	$: output = parseInput(input);
	let invalid = false;

	function parseInput(input: string) {
		try {
			const parsed = eval(input);
			return merge(parsed);
		} catch (e) {
			invalid = true;
		} finally {
			invalid = false;
		}
	}
</script>

<Page title="merge">
	<p>
		<span class="bg-gray-400 font-mono p-1">tailwind-merge</span> combined with
		<span class="bg-gray-400 font-mono p-1">clsx</span> for object support
	</p>
	<Code {code} svelte />

	<label for="input">input</label>
	<textarea
		id="input"
		class="border border-black rounded font-mono bg-black text-green-400 min-w-[320px] text-xs"
		rows="10"
		cols="10"
		bind:value={input}
	/>

	<b>output:</b>
	<div class="font-mono bg-black text-green-400">
		{#if typeof output === 'string'}
			'{output}'
		{:else}
			{output}
		{/if}
	</div>
</Page>
