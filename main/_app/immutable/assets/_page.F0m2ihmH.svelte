<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import Published from '$lib/layout/Published.svelte';
	import Markdown from '$lib/markdown/Markdown.svelte';
	import source from './tansu-reactivity.md?raw';
</script>

<svelte:head>
	<title>State management with Tansu</title>
	<meta name="description" content="Blog article exploring State Management with Tansu." />
</svelte:head>

<Header title="State management with Tansu" noMeta />
<Published date="02/01/2024" />
<Markdown {source} />
