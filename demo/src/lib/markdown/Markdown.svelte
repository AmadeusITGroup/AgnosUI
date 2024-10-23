<script lang="ts">
	import {setContext} from 'svelte';
	import SvelteMarkdown from './SvelteMarkdown.svelte';
	import {getTokens} from './getTokens';
	import {renderers, type Renderers} from './markdown-parser';

	let {source, overrideRenderers = {}, apiSymbol = ''}: {source: string; overrideRenderers?: Partial<Renderers>; apiSymbol?: string} = $props();
	let tokens = $derived(getTokens(source));

	setContext('renderers', {...renderers, ...overrideRenderers});
	if (apiSymbol) {
		setContext('ApiSymbol', apiSymbol);
	}
</script>

{#key tokens}
	<SvelteMarkdown {tokens} {overrideRenderers} />
{/key}
