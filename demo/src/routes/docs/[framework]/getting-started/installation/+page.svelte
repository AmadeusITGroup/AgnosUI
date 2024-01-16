<script lang="ts">
	import source from './installation.md?raw';
	import Markdown from '$lib/markdown/Markdown.svelte';
</script>

<svelte:head>
	<meta name="description" content="Installation guide" />
</svelte:head>

<Markdown {source} />
