<script lang="ts">
	import source from './focustrack.md?raw';
	import Markdown from '$lib/markdown/Markdown.svelte';
</script>

<svelte:head>
	<meta name="description" content="Focus track service documentation" />
</svelte:head>

<Markdown {source} />
