<script>
	/** @type {{raw: any, text: any, children: import('svelte').Snippet}} */
	let {raw, text, children} = $props();
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	raw;
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	text;
</script>

<p>{@render children()}</p>
