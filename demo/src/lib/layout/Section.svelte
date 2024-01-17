<script lang="ts">
	import Heading from '$lib/layout/Heading.svelte';

	export let level: 1 | 2 | 3;
	export let label: string;
	export let id: string = label.toLowerCase().replace(/\s/g, '-').trim();
	export let headerClassName: string | undefined = undefined;
</script>

<section>
	<Heading depth={level} text={label} {id} {headerClassName} />
	<slot />
</section>
