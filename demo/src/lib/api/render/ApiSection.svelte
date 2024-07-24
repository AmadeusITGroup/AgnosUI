<script>
	export let depth;
</script>

<section class={depth === 2 ? 'my-4' : 'my-3 mx-3'}><slot /></section>
