<script lang="ts">
	import Markdown from '$lib/markdown/Markdown.svelte';
	export let data;
	// TODO replace the description using front-matter
</script>

<svelte:head>
	<meta name="description" content={`Documentation for ${data.slug.replace('/', ' ').replace('-', ' ')}`} />
</svelte:head>

<Markdown source={data.content} />
