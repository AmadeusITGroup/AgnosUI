<script lang="ts">
	import {page} from '$app/stores';
	import type {Page} from '@sveltejs/kit';
	import type {Snippet} from 'svelte';

	let {href = '', title, children}: {href: string; title: string; children: Snippet} = $props();

	const validMdRegex = /^\d{2}-([a-zA-Z-]*)\.md$/;
	const categoryRegex = /\/\d{2}-([a-zA-Z-]*\/)/g;
	const docsRegExp = /\/docs\//g;
	const mdEndRegex = /\/\d{2}-([a-zA-Z-]*)\.md$/g;

	function computedAppliedHref(inputHref: string, page: Page<Record<string, string>>) {
		if (inputHref.startsWith('../')) {
			return new URL(
				inputHref
					.replace(docsRegExp, '/docs/angular/')
					.replace(categoryRegex, (_m, gr1) => '/' + gr1.toLowerCase())
					.replace(mdEndRegex, (_m, gr1) => '/' + gr1.toLowerCase()),
				page.url.href,
			).href;
		} else {
			return inputHref.match(validMdRegex)?.[1]?.toLowerCase() ?? href;
		}
	}
	// eslint-disable-next-line svelte/valid-compile
	let appliedHref = $derived(computedAppliedHref(href, $page));
</script>

<a href={appliedHref} {title}>{@render children()}</a>
