<script context="module" lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import BODY from '@agnos-ui/common/samples/accordion/body.txt?raw';
</script>

<script lang="ts">
	let accordion: Accordion;
	let secondAccordionItem: AccordionItem;
</script>

<Accordion bind:this={accordion}>
	<AccordionItem id="first">
		<svelte:fragment slot="itemHeader">First panel</svelte:fragment>
		<svelte:fragment slot="itemBody">{BODY}</svelte:fragment>
	</AccordionItem>
	<AccordionItem id="second" bind:this={secondAccordionItem}>
		<svelte:fragment slot="itemHeader">Second panel</svelte:fragment>
		<svelte:fragment slot="itemBody">{BODY}</svelte:fragment>
	</AccordionItem>
</Accordion>
<hr />
<div class="d-flex flex-wrap gap-2">
	<button class="btn btn-sm btn-outline-primary" on:click={() => accordion.api.toggle('first')}>Toggle first</button>
	<button class="btn btn-sm btn-outline-primary" on:click={() => secondAccordionItem.api.toggle()}>Toggle second</button>
	<button class="btn btn-sm btn-outline-primary" on:click={() => accordion.api.expandAll()}>Expand all</button>
	<button class="btn btn-sm btn-outline-primary" on:click={() => accordion.api.collapseAll()}>Collapse all</button>
</div>
