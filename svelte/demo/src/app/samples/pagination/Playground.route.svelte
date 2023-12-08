<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('pagination');
</script>

{#key $props$}
	<Pagination {...$props$} />
{/key}
