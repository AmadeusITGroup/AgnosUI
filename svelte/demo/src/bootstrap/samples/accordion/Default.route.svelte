<script lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import BODY from '@agnos-ui/common/samples/accordion/body.txt?raw';
</script>

<Accordion>
	<AccordionItem slotItemHeader="Simple" itemVisible>
		{BODY}
	</AccordionItem>
	<AccordionItem>
		{#snippet slotItemHeader()}
			<span>&#9733; <b>Fancy</b> title &#9733;</span>
		{/snippet}
		{BODY}
	</AccordionItem>
	<AccordionItem itemDisabled={true} slotItemHeader="Disabled">
		{BODY}
	</AccordionItem>
</Accordion>
