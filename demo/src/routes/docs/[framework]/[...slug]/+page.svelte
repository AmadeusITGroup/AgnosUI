<script lang="ts">
	import Markdown from '$lib/markdown/Markdown.svelte';
	import type {PageData} from './$types';

	let {data}: {data: PageData} = $props();
	// TODO replace the description using front-matter
</script>

<Markdown source={data.content} />
