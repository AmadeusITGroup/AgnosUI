<script lang="ts">
	import {Alert} from '@agnos-ui/svelte';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('alert');
</script>

{#key $props$}
	<Alert {...$props$} />
{/key}
