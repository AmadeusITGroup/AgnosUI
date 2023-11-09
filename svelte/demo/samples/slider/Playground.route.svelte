<script lang="ts">
	import {Slider} from '@agnos-ui/svelte';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('slider');
</script>

{#key $props$}
	<Slider {...$props$} />
{/key}
