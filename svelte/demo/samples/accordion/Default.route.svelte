<script context="module" lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte';
</script>

<Accordion>
	<AccordionItem itemCollapsed={false} itemId="item-1">
		<slot slot="itemHeader">Simple header</slot>
		<slot slot="itemBody">First content</slot>
	</AccordionItem>
	<AccordionItem>
		<slot slot="itemHeader"><span>&#9733; <b>Fancy</b> title &#9733;</span></slot>
		<slot slot="itemBody">Second content</slot>
	</AccordionItem>
	<AccordionItem itemDisabled={true}>
		<slot slot="itemHeader">Disabled</slot>
		<slot slot="itemBody">Third content</slot>
	</AccordionItem>
</Accordion>
