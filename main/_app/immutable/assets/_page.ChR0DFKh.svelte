<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import Published from '$lib/layout/Published.svelte';
	import Markdown from '$lib/markdown/Markdown.svelte';
	import source from './tansu-reactivity.md?raw';

	export let data;
</script>

<Header title={data.pageMeta.title} />
<Published date="02/01/2024" author="fbasso" />
<img
	src="https://amadeusitgroup.github.io/AgnosUI/static/tansu-blog.webp"
	alt="frontend development"
	class="mb-3"
	width="100%"
	style:aspect-ratio={1024 / 500}
/>
<Markdown {source} />
