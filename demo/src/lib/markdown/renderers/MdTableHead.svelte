<script>
	/** @type {{children: import('svelte').Snippet}}*/
	let {children} = $props();
</script>

<thead>{@render children()}</thead>
