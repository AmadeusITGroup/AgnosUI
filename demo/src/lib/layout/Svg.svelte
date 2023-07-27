<script lang="ts">
	export let svg: string;
	export let className = '';

	$: computedClass = `svg ${className}`.trim();
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<span class={computedClass}>{@html svg}</span>
