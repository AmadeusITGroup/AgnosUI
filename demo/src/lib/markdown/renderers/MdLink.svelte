<script lang="ts">
	import {page} from '$app/state';
	import type {Page} from '@sveltejs/kit';
	import type {Snippet} from 'svelte';
	import {routing} from '$lib/routing.svelte';

	interface Props {
		href?: string;
		title: string;
		children: Snippet;
	}

	let {href = '', title, children}: Props = $props();

	const validMdRegex = /^\d{2}-([a-zA-Z-]*)\.md$/;
	const categoryRegex = /\/\d{2}-([a-zA-Z-]*\/)/g;
	const docsRegExp = /\/docs\//g;
	const mdEndRegex = /\/\d{2}-([a-zA-Z-]*)\.md$/g;

	function computedAppliedHref(inputHref: string, page: Page<Record<string, string>>, selectedFwk: string) {
		if (inputHref.startsWith('../')) {
			return new URL(
				inputHref
					.replace(docsRegExp, `/docs/${selectedFwk}/`)
					.replace(categoryRegex, (_m, gr1) => '/' + gr1.toLowerCase())
					.replace(mdEndRegex, (_m, gr1) => '/' + gr1.toLowerCase()),
				page.url.href,
			).href;
		} else {
			return inputHref.match(validMdRegex)?.[1]?.toLowerCase() ?? href;
		}
	}
	let appliedHref = $derived(computedAppliedHref(href, page, routing.selectedApiFramework));
</script>

<a href={appliedHref} {title}>{@render children()}</a>
