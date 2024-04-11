<script lang="ts">
	import {Toast} from '@agnos-ui/svelte-bootstrap/components/toast';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('toast');
</script>

{#key $props$}
	<Toast {...$props$} />
{/key}
