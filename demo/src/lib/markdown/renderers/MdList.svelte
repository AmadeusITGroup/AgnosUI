<script lang="ts">
	import type {Snippet} from 'svelte';
	let {ordered, start, children}: {ordered?: boolean; start?: number; children: Snippet} = $props();
</script>

{#if ordered}
	<ol {start}>{@render children()}</ol>
{:else}
	<ul>{@render children()}</ul>
{/if}
