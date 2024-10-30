<script lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import BODY from '@agnos-ui/common/samples/accordion/body.txt?raw';

	let accordion: ReturnType<typeof Accordion>;
	let secondAccordionItem: ReturnType<typeof AccordionItem>;
</script>

<Accordion bind:this={accordion}>
	<AccordionItem id="first" header="First panel">{BODY}</AccordionItem>
	<AccordionItem id="second" header="Second panel" bind:this={secondAccordionItem}>{BODY}</AccordionItem>
</Accordion>
<hr />
<div class="d-flex flex-wrap gap-2">
	<button class="btn btn-sm btn-outline-primary" onclick={() => accordion.api.toggle('first')}>Toggle first</button>
	<button class="btn btn-sm btn-outline-primary" onclick={() => secondAccordionItem.api.toggle()}>Toggle second</button>
	<button class="btn btn-sm btn-outline-primary" onclick={() => accordion.api.expandAll()}>Expand all</button>
	<button class="btn btn-sm btn-outline-primary" onclick={() => accordion.api.collapseAll()}>Collapse all</button>
</div>
