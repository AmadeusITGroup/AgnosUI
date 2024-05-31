<script lang="ts">
	import Accordion from './Accordion.svelte';
	import AccordionItem from './AccordionItem.svelte';
</script>

<Accordion closeOthers destroyOnHide>
	<AccordionItem visible>
		<svelte:fragment slot="header">First header</svelte:fragment>
		<svelte:fragment slot="body">First content</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="header">Second header</svelte:fragment>
		<svelte:fragment slot="body">Second content</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="header">Third header</svelte:fragment>
		<svelte:fragment slot="body">Third content</svelte:fragment>
	</AccordionItem>
</Accordion>
