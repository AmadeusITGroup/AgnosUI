<script>
	/** @type {{children: import('svelte').Snippet}}*/
	let {children} = $props();
</script>

<del>{@render children()}</del>
