<script>
	/** @type {{children: import('svelte').Snippet}}*/
	let {children} = $props();
</script>

<table>{@render children()}</table>
