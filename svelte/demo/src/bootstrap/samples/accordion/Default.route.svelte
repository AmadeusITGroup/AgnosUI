<script lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import BODY from '@agnos-ui/common/samples/accordion/body.txt?raw';
</script>

<Accordion>
	<AccordionItem header="Simple" visible>{BODY}</AccordionItem>
	<AccordionItem>
		{#snippet header()}
			<span>&#9733; <b>Fancy</b> title &#9733;</span>
		{/snippet}
		{BODY}
	</AccordionItem>
	<AccordionItem header="Disabled" disabled>{BODY}</AccordionItem>
</Accordion>
