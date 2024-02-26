<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import Published from '$lib/layout/Published.svelte';
	import Markdown from '$lib/markdown/Markdown.svelte';
	import source from './tansu-reactivity.md?raw';
</script>

<Header title="State management with Tansu" />
<Published date="02/01/2024" />
<Markdown {source} />
