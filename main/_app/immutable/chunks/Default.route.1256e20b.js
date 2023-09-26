const t=`<script context="module" lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte';
	import BODY from './body.txt?raw';
<\/script>

<Accordion>
	<AccordionItem itemVisible={true}>
		<slot slot="itemHeader">Simple</slot>
		<slot slot="itemBody">{BODY}</slot>
	</AccordionItem>
	<AccordionItem>
		<slot slot="itemHeader"><span>&#9733; <b>Fancy</b> title &#9733;</span></slot>
		<slot slot="itemBody">{BODY}</slot>
	</AccordionItem>
	<AccordionItem itemDisabled={true}>
		<slot slot="itemHeader">Disabled</slot>
		<slot slot="itemBody">{BODY}</slot>
	</AccordionItem>
</Accordion>
`;export{t as default};
