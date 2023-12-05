<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte/pagination';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('pagination');
</script>

{#key $props$}
	<Pagination {...$props$} />
{/key}
