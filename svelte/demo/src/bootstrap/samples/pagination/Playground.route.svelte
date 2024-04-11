<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte-bootstrap/components/pagination';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('pagination');
</script>

{#key $props$}
	<Pagination {...$props$} />
{/key}
