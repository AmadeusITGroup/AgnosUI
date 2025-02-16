<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import Published from '$lib/layout/Published.svelte';
	import Markdown from '$lib/markdown/Markdown.svelte';
	import type {PageData} from '../2024-12-06/$types';
	import source from './roadmap1.0.md?raw';

	let {data}: {data: PageData} = $props();
</script>

<Header title={data.pageMeta.title} />
<Published date="12/06/2024" author="fexbrayat" title={data.pageMeta.title} />
<img src="https://www.agnosui.dev/static/roadmap1.0.webp" alt="frontend development" class="mb-4" width="100%" style:aspect-ratio={1013 / 495} />
<Markdown {source} />
