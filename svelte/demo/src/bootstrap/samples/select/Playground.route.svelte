<script lang="ts">
	import {Select} from '@agnos-ui/svelte-bootstrap/components/select';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('select');
</script>

{#key $props$}
	<Select {...$props$} />
{/key}
