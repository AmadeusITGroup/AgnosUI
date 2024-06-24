const n=`<script context="module" lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import BODY from './body.txt?raw';
<\/script>

<script lang="ts">
	let accordion: Accordion;
	let secondAccordionItem: AccordionItem;
<\/script>

<Accordion bind:this={accordion}>
	<AccordionItem id="first" header="First panel">{BODY}</AccordionItem>
	<AccordionItem id="second" header="Second panel" bind:this={secondAccordionItem}>{BODY}</AccordionItem>
</Accordion>
<hr />
<div class="d-flex flex-wrap gap-2">
	<button class="btn btn-sm btn-outline-primary" on:click={() => accordion.api.toggle('first')}>Toggle first</button>
	<button class="btn btn-sm btn-outline-primary" on:click={() => secondAccordionItem.api.toggle()}>Toggle second</button>
	<button class="btn btn-sm btn-outline-primary" on:click={() => accordion.api.expandAll()}>Expand all</button>
	<button class="btn btn-sm btn-outline-primary" on:click={() => accordion.api.collapseAll()}>Collapse all</button>
</div>
`;export{n as default};
