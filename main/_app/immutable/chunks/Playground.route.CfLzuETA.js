const o=`<script lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('accordion');
<\/script>

{#key $props$}
	<Accordion {...$props$}>
		<AccordionItem header="Header 1">Body 1</AccordionItem>
		<AccordionItem header="Header 2">Body 2</AccordionItem>
	</Accordion>
{/key}
`;export{o as default};
