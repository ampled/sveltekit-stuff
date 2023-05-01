<script lang="ts">
	import Code from '$dlib/Code.svelte';
	import getYoutubeId from '$lib/util/get-youtube-id';
	import code from './example.txt?raw';
	import Page from '$dlib/Page.svelte';
	import TextInput from '$dlib/TextInput.svelte';
	import CodeSpan from '$dlib/CodeSpan.svelte';

	let youtubeUrl = 'https://www.youtube.com/watch?v=WIRK_pGdIdA';
	$: youtubeId = getYoutubeId(youtubeUrl);
</script>

<Page title="getYoutubeId">
	<p>
		Extract the Youtube ID from a YouYube URL. Returns
		<CodeSpan>false</CodeSpan> if invalid url.
	</p>
	<Code {code} svelte />
	<TextInput bind:value={youtubeUrl} title="YouTube URL" />

	{#if youtubeId}
		<div>youtube ID : <CodeSpan>{youtubeId}</CodeSpan></div>
		<iframe
			width={1920 / 3}
			height={1080 / 3}
			src={`https://www.youtube.com/embed/${youtubeId}`}
			title="youtube embed"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	{:else}
		Invalid Youtube Url
	{/if}
</Page>
