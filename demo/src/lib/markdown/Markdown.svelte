<script lang="ts">
	import SvelteMarkdown from './SvelteMarkdown.svelte';
	import {getTokens} from './getTokens';

	let {source}: {source: string} = $props();
	let tokens = $derived(getTokens(source));
</script>

{#key tokens}
	<SvelteMarkdown {tokens} />
{/key}
