<script lang="ts">
	import {createTOC} from './toc.svelte';
	import type {Snippet} from 'svelte';

	let {children}: {children: Snippet} = $props();
	const tocDirective = createTOC((node) => Array.from(node.querySelectorAll('section')));
</script>

<div use:tocDirective>{@render children()}</div>
