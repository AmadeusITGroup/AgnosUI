<script lang="ts">
	import Markdown from '$lib/markdown/Markdown.svelte';
	export let data;
	// TODO replace the description using front-matter
</script>

<Markdown source={data.content} />
