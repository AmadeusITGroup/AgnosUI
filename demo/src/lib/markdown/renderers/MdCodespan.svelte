<script>
	let {raw} = $props();
</script>

<code class="fw-semibold">{raw.replace(/`/g, '')}</code>

<style>
	code {
		color: var(--bs-primary-text-emphasis);
	}
</style>
