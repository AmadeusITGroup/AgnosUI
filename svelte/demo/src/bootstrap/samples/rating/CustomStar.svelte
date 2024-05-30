<script lang="ts">
	import type {StarContext} from '@agnos-ui/svelte-bootstrap/components/rating';

	let {fill}: StarContext = $props();
</script>

<span class="star" class:full={fill === 100}>
	<span class="half" style:width={fill + '%'}>&hearts;</span>&hearts;
</span>
