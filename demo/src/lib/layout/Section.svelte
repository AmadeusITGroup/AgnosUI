<script lang="ts">
	import Heading from '$lib/layout/Heading.svelte';
	import type {Snippet} from 'svelte';

	interface Props {
		level: 1 | 2 | 3;
		label: string;
		id?: string;
		headerClassName?: string | undefined;
		children: Snippet;
	}

	let {level, label, id = label.toLowerCase().replace(/\s/g, '-').trim(), headerClassName = undefined, children}: Props = $props();
</script>

<section>
	<Heading depth={level} text={label} {id} {headerClassName} />
	{@render children()}
</section>
