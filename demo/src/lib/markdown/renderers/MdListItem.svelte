<script>
	/** @type {{children: import('svelte').Snippet}} */
	let {children} = $props();
</script>

<li class="mb-2">{@render children()}</li>

<style>
	li::marker {
		color: var(--color-primary) !important;
	}
</style>
