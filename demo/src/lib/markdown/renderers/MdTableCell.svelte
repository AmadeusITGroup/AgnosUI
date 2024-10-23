<script>
	/** @type {{children: import('svelte').Snippet; header?: boolean; align: "center" | "left" | "right" | null}}*/
	let {header = false, align, children} = $props();
</script>

{#if header}
	<th {align}>{@render children()}</th>
{:else}
	<td {align}>{@render children()}</td>
{/if}
