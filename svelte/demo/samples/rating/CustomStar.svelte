<script lang="ts">
	import type {StarContext} from '@agnos-ui/svelte';
	type $$Props = StarContext; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let fill: number;
</script>

<span class="star" class:full={fill === 100}>
	<span class="half" style:width={fill + '%'}>&hearts;</span>&hearts;
</span>
