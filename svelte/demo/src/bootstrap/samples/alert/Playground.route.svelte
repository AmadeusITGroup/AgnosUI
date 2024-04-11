<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('alert');
</script>

{#key $props$}
	<Alert {...$props$} />
{/key}
