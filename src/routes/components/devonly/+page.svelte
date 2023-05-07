<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import DevOnly from '$lib/components/DevOnly.svelte';
	import { slide } from 'svelte/transition';
	import code from './example.txt?raw';
	import { ROUTE_TRANSITION } from '$dlib/const';
	import Page from '$dlib/Page.svelte';
	import DemoContainer from '$dlib/DemoContainer.svelte';
</script>

<Page title="DevOnly">
	<Code {code} />

	<DemoContainer>
		<DevOnly>This will only be rendered on local dev server</DevOnly>
		<span>😏</span>
	</DemoContainer>
</Page>
