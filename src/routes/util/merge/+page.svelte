<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import code from './example.txt?raw';
	import Page from '$dlib/Page.svelte';
	import { merge } from '$lib/util';
	import CodeSpan from '$dlib/CodeSpan.svelte';
	import { fade, fly } from 'svelte/transition';
	import { browser } from '$app/environment';

	let invalid = false;
	let timeoutId: number | undefined = undefined;

	function setOutput(value: any) {
		if (browser) {
			if (timeoutId) {
				window.clearTimeout(timeoutId);
			}

			timeoutId = window.setTimeout(() => {
				output = value;
			}, 500);
		}
	}

	let input = `// edit this    
	const condition = false;
// try changing to true ^
[
  'p-2',
  'p-1',
  { 'p-3': condition },
  false && ['m-1'],
  false,
  null,
  undefined,
]`;

	let output: any = parseInput(input);
	$: {
		setOutput(parseInput(input));
	}

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
		A re-export of <CodeSpan>tailwind-merge</CodeSpan> augmented with
		<CodeSpan>clsx</CodeSpan> for conditional classes with object-syntax support.<br />
		<a
			class="underline"
			href="https://github.com/dcastil/tailwind-merge/discussions/137#discussioncomment-3482513"
			target="_blank"
		>
			See this github comment for details.
		</a>
	</p>

	<p>
		<CodeSpan>tailwind-merge</CodeSpan> exports <CodeSpan>twMerge</CodeSpan> that overrides conflicting
		classes from right to left.<br />
	</p>

	<Code {code} svelte />

	<label for="input" class="font-bold">input:</label>
	<textarea
		id="input"
		name="input"
		class="rounded font-mono bg-black text-green-400 min-w-[320px] text-xs p-1 border-2 border-green-400 shadow-xl shadow-green-400"
		rows="11"
		cols="15"
		bind:value={input}
	/>

	<b>output:</b>
	{#key output}
		<div class="font-mono bg-black text-green-400" in:fly={{ y: -10 }}>
			{#if typeof output === 'string'}
				'{output}'
			{:else}
				{output}
			{/if}
		</div>
	{/key}
</Page>
