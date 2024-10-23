<script>
	/** @type {{children: import('svelte').Snippet}}*/
	let {children} = $props();
</script>

<tbody>{@render children()}</tbody>
