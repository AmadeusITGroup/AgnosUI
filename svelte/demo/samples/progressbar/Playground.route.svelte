<script lang="ts">
	import {Progressbar} from '@agnos-ui/svelte/progressbar';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('progressbar');
</script>

{#key $props$}
	<Progressbar {...$props$} />
{/key}
