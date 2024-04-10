<script lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('accordion');
</script>

{#key $props$}
	<Accordion {...$props$}>
		<AccordionItem>
			<svelte:fragment slot="itemHeader">Header 1</svelte:fragment>
			<svelte:fragment slot="itemBody">Body 1</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="itemHeader">Header 2</svelte:fragment>
			<svelte:fragment slot="itemBody">Body 2</svelte:fragment>
		</AccordionItem>
	</Accordion>
{/key}
