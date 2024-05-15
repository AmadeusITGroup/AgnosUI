<script lang="ts">
	import Markdown from '$lib/markdown/Markdown.svelte';
	import type {PageData} from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<meta name="description" content={`Documentation for ${data.slug.replace('/', ' ').replace('-', ' ')}`} />
</svelte:head>

<Markdown source={data.content} />
