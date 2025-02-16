<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import Published from '$lib/layout/Published.svelte';
	import Markdown from '$lib/markdown/Markdown.svelte';
	import source from './tansu-reactivity.md?raw';
	import type {PageData} from './$types';

	let {data}: {data: PageData} = $props();
</script>

<Header title={data.pageMeta.title} />
<Published date="02/01/2024" author="fbasso" title={data.pageMeta.title} />
<img src="https://www.agnosui.dev/static/tansu-blog.webp" alt="frontend development" class="mb-4" width="100%" style:aspect-ratio={1024 / 500} />
<Markdown {source} />
