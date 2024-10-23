<script>
	/** @type {{children: import('svelte').Snippet}}*/
	let {children} = $props();
</script>

<br />{@render children()}
