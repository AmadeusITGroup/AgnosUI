<script lang="ts">
	import {createTOC} from './toc.svelte';
	import type {Snippet} from 'svelte';

	let {children}: {children: Snippet} = $props();
	const toc = createTOC((node) => Array.from(node.querySelectorAll('section')));
</script>

<div class="px-3" {@attach toc}>{@render children()}</div>
