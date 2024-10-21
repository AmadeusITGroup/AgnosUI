<script>
	/** @type {{children: import('svelte').Snippet}}*/
	let {children} = $props();
</script>

<strong>{@render children()}</strong>
