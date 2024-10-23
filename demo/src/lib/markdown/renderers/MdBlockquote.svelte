<script>
	/** @type {{children: import('svelte').Snippet}}*/
	let {children} = $props();
</script>

<blockquote>
	{@render children()}
</blockquote>
