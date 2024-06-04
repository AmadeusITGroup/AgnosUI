const t=`<script context="module" lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import BODY from './body.txt?raw';
<\/script>

<Accordion>
	<AccordionItem visible>
		<svelte:fragment slot="itemHeader">Simple</svelte:fragment>
		<svelte:fragment slot="itemBody">{BODY}</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="itemHeader"><span>&#9733; <b>Fancy</b> title &#9733;</span></svelte:fragment>
		<svelte:fragment slot="itemBody">{BODY}</svelte:fragment>
	</AccordionItem>
	<AccordionItem disabled>
		<svelte:fragment slot="itemHeader">Disabled</svelte:fragment>
		<svelte:fragment slot="itemBody">{BODY}</svelte:fragment>
	</AccordionItem>
</Accordion>
`;export{t as default};
