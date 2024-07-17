<script lang="ts">
	import Code from '$lib/layout/Code.svelte';
	export let lang: string;
	export let text: string;
</script>

<Code language={lang.trim() || 'text'} code={text.trim()} noCopy />
