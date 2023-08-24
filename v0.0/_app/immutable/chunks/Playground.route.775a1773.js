const t=`<script lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('accordion');
<\/script>

{#key $props$}
	<Accordion {...$props$}>
		<AccordionItem>
			<slot slot="itemHeader">Header 1</slot>
			<slot slot="itemBody">Body 1</slot>
		</AccordionItem>
		<AccordionItem>
			<slot slot="itemHeader">Header 2</slot>
			<slot slot="itemBody">Body 2</slot>
		</AccordionItem>
	</Accordion>
{/key}
`;export{t as default};
