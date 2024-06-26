const o=`<script context="module" lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import BODY from './body.txt?raw';
<\/script>

<Accordion>
	<AccordionItem header="Simple" visible>{BODY}</AccordionItem>
	<AccordionItem>
		<span slot="header">&#9733; <b>Fancy</b> title &#9733;</span>
		{BODY}
	</AccordionItem>
	<AccordionItem header="Disabled" disabled>{BODY}</AccordionItem>
</Accordion>
`;export{o as default};
