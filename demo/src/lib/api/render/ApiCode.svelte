<script lang="ts">
	import Code from '$lib/layout/Code.svelte';

	let {
		lang,
		text,
	}: {
		lang: string;
		text: string;
	} = $props();
</script>

<Code language={lang.trim() || 'text'} code={text.trim()} noCopy />
