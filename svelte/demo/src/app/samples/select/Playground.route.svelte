<script lang="ts">
	import {Select} from '@agnos-ui/svelte/components/select';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('select');
</script>

{#key $props$}
	<Select {...$props$} />
{/key}
