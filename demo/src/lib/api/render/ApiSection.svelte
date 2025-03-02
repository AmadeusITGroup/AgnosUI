<script>
	/** @type {{depth: number, children: import('svelte').Snippet}} */
	let {depth, children} = $props();
</script>

<section class={depth === 2 ? 'my-6' : 'my-4 mx-4'}>{@render children()}</section>
