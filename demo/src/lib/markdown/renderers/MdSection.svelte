<script>
	/** @type {{depth: any, children: import('svelte').Snippet}} */
	let {depth, children} = $props();
</script>

<section class="my-{6 - depth}">{@render children()}</section>
