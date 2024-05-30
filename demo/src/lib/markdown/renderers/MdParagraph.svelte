<script>
	let {children} = $props();
</script>

<p>{@render children()}</p>

<style>
	p {
		text-align: justify;
	}
</style>
