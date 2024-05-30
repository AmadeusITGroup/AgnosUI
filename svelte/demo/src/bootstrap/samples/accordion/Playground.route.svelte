<script lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('accordion');
</script>

{#key $props$}
	<Accordion {...$props$}>
		<AccordionItem slotItemHeader="Header 1">Body 1</AccordionItem>
		<AccordionItem slotItemHeader="Header 2">Body 2</AccordionItem>
	</Accordion>
{/key}
