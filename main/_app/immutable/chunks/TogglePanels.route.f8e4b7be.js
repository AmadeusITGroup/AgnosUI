const t=`<script context="module" lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte';
	import BODY from './body.txt?raw';
<\/script>

<script lang="ts">
	let accordion: Accordion;
	let secondAccordionItem: AccordionItem;
<\/script>

<Accordion bind:this={accordion}>
	<AccordionItem itemId="first">
		<slot slot="itemHeader">First panel</slot>
		<slot slot="itemBody">{BODY}</slot>
	</AccordionItem>
	<AccordionItem itemId="second" bind:this={secondAccordionItem}>
		<slot slot="itemHeader">Second panel</slot>
		<slot slot="itemBody">{BODY}</slot>
	</AccordionItem>
</Accordion>
<hr />
<button class="btn btn-sm btn-outline-primary me-2" on:click={() => accordion.api.toggle('first')}>Toggle first</button>
<button class="btn btn-sm btn-outline-primary me-2" on:click={() => secondAccordionItem.api.toggle()}>Toggle second</button>
<button class="btn btn-sm btn-outline-primary me-2" on:click={() => accordion.api.expandAll()}>Expand all</button>
<button class="btn btn-sm btn-outline-primary me-2" on:click={() => accordion.api.collapseAll()}>Collapse all</button>
`;export{t as default};
