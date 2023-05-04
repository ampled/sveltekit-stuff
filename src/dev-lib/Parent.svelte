<script lang="ts">
	import SomeComponent from './SomeComponent.svelte';

	type Test = SomeComponent['$$prop_def'];

	const test: Test = { tag: 'b', b: 1 };
</script>

<SomeComponent tag="a" a={1} />
