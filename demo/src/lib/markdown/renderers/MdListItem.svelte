<script>
	let {children} = $props();
</script>

<li class="mb-2">{@render children()}</li>

<style>
	li::marker {
		color: var(--bs-primary-text-emphasis) !important;
	}
</style>
