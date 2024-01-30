<script lang="ts">
	import type {StarContext} from '@agnos-ui/svelte/components/rating';
	type $$Props = StarContext;

	export let fill: number;
</script>

<span class="star" class:full={fill === 100}>
	<span class="half" style:width={fill + '%'}>&hearts;</span>&hearts;
</span>
