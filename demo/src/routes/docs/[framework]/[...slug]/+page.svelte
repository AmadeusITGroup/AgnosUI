<script lang="ts">
	import Markdown from '$lib/markdown/Markdown.svelte';
	export let data;
</script>

<svelte:head>
	<meta name="description" content="Focus track service documentation" />
</svelte:head>

<Markdown source={data.source} />
