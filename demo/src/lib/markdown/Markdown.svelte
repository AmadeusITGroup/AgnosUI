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

	export let source: string;

	$: tokens = getTokens(source);
	const renderers: Partial<Renderers> = {
		image: MdImage,
		heading: Heading,
		code: MdCode,
		section: MdSection,
		link: MdLink,
		paragraph: MdParagraph,
		listitem: MdListItem,
		codespan: MdCodeSpan,
	} as Partial<Renderers>;
</script>

{#key tokens}
	<SvelteMarkdown source={tokens} {renderers} />
{/key}
