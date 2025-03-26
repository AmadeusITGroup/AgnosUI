<script>
	/** @type {{raw: string}} */
	let {raw} = $props();
</script>

<code class="font-semibold">{raw.replace(/`/g, '')}</code>

<style>
	code {
		color: var(--color-primary);
	}
</style>
