<script lang="ts">
	import Accordion from './Accordion.svelte';
	import AccordionItem from './AccordionItem.svelte';
</script>

<Accordion closeOthers itemDestroyOnHide>
	<AccordionItem visible>
		{#snippet header()}
			First header
		{/snippet}
		First content
	</AccordionItem>
	<AccordionItem>
		{#snippet header()}
			Second header
		{/snippet}
		Second content
	</AccordionItem>
	<AccordionItem>
		{#snippet header()}
			Third header
		{/snippet}
		Third content
	</AccordionItem>
</Accordion>
