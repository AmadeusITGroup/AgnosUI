<script>
	/** @type {{children: import('svelte').Snippet}}*/
	let {children} = $props();
</script>

<tr>{@render children()}</tr>
