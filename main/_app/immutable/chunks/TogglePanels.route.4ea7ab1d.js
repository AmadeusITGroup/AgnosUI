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
		<svelte:fragment slot="itemHeader">First panel</svelte:fragment>
		<svelte:fragment slot="itemBody">{BODY}</svelte:fragment>
	</AccordionItem>
	<AccordionItem itemId="second" bind:this={secondAccordionItem}>
		<svelte:fragment slot="itemHeader">Second panel</svelte:fragment>
		<svelte:fragment slot="itemBody">{BODY}</svelte:fragment>
	</AccordionItem>
</Accordion>
<hr />
<button class="btn btn-sm btn-outline-primary me-2" on:click={() => accordion.api.toggle('first')}>Toggle first</button>
<button class="btn btn-sm btn-outline-primary me-2" on:click={() => secondAccordionItem.api.toggle()}>Toggle second</button>
<button class="btn btn-sm btn-outline-primary me-2" on:click={() => accordion.api.expandAll()}>Expand all</button>
<button class="btn btn-sm btn-outline-primary me-2" on:click={() => accordion.api.collapseAll()}>Collapse all</button>
`;export{t as default};
