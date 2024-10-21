<script>
	/** @type {{depth: number, children: import('svelte').Snippet}} */
	let {depth, children} = $props();
</script>

<section class={depth === 2 ? 'my-4' : 'my-3 mx-3'}>{@render children()}</section>
