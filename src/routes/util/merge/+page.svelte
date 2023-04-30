<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import merge from '$lib/util/merge';
	import { slide } from 'svelte/transition';
	import code from './example.txt?raw';
	import { ROUTE_TRANSITION } from '$dlib/const';
	import Page from '$dlib/Page.svelte';
</script>

<Page title="merge">
	<p>
		<span class="bg-gray-400 font-mono p-1">tailwind-merge</span> combined with
		<span class="bg-gray-400 font-mono p-1">clsx</span> for object support
	</p>
	<Code {code} svelte />
</Page>
