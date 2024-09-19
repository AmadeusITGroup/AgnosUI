<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte-bootstrap/components/pagination';
</script>

<p>The default look of the pagination:</p>
<Pagination collectionSize={60} />

<p>Changing the slot displaying the page number to use letters instead:</p>
<Pagination collectionSize={60}>
	{#snippet numberLabel({displayedPage})}
		{['A', 'B', 'C', 'D', 'E', 'F'][displayedPage - 1]}
	{/snippet}
</Pagination>
