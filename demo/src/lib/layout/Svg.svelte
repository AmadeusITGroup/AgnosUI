<script lang="ts">
	interface Props {
		svg: string;
		className?: string;
	}

	let {svg, className = ''}: Props = $props();

	let computedClass = $derived(`svg ${className}`.trim());
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<span class={computedClass}>{@html svg}</span>
