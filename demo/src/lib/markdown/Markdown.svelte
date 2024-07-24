<script lang="ts">
	import SvelteMarkdown, {type Renderers} from 'svelte-markdown';
	import Heading from '$lib/layout/Heading.svelte';
	import MdCode from '$lib/markdown/renderers/MdCode.svelte';

	import MdSection from '$lib/markdown/renderers/MdSection.svelte';
	import MdImage from '$lib/markdown/renderers/MdImage.svelte';
	import MdLink from '$lib/markdown/renderers/MdLink.svelte';
	import MdParagraph from './renderers/MdParagraph.svelte';
	import MdListItem from './renderers/MdListItem.svelte';
	import MdCodeSpan from './renderers/MdCodeSpan.svelte';
	import {getTokens} from './getTokens';
	import {setContext} from 'svelte';
	import MdEscape from '$lib/markdown/renderers/MdEscape.svelte';

	export let source: string;
	export let overrideRenderers: Partial<Renderers> = {};
	export let apiSymbol: string = '';

	if (apiSymbol) {
		setContext('ApiSymbol', apiSymbol);
	}

	$: tokens = getTokens(source);
	$: renderers = {
		image: MdImage,
		heading: Heading,
		code: MdCode,
		section: MdSection,
		link: MdLink,
		paragraph: MdParagraph,
		listitem: MdListItem,
		codespan: MdCodeSpan,
		escape: MdEscape,
		...overrideRenderers,
	} as Partial<Renderers>;
</script>

{#key tokens}
	<SvelteMarkdown source={tokens} {renderers} />
{/key}
