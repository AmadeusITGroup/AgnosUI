<script>
	/** @type {{children: import('svelte').Snippet}}*/
	let {children} = $props();
</script>

<em>{@render children()}</em>
