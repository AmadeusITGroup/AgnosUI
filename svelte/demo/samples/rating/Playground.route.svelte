<script lang="ts">
	import {Rating} from '@agnos-ui/svelte/rating';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('rating');
</script>

{#key $props$}
	<Rating {...$props$} />
{/key}
