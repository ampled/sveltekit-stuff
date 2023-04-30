<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import Page from '$dlib/Page.svelte';
	import types from '$lib/types/index.ts?raw';
	import example from '$dlib/const.ts?raw';
</script>

<Page title="Types">
	<p>The npm package exports these utility types:</p>

	<Code code={types} svelte={false} />

	<p>
		The arg inferral types can be useful in svelte for example when storing transitions / actions
		and their params in variables like so:
	</p>
	<Code code={example} svelte={false} />

	<p>
		The <span class="font-mono">Prettify</span>-type is just cool.
	</p>
</Page>
