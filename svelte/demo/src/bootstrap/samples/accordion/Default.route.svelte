<script context="module" lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import BODY from '@agnos-ui/common/samples/accordion/body.txt?raw';
</script>

<Accordion>
	<AccordionItem header="Simple" visible>
		{BODY}
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="header"><span>&#9733; <b>Fancy</b> title &#9733;</span></svelte:fragment>
		{BODY}
	</AccordionItem>
	<AccordionItem header="Disabled" disabled>
		{BODY}
	</AccordionItem>
</Accordion>
