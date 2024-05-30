<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte-bootstrap/components/pagination';
	import CustomPages from './CustomPages.svelte';

	function getPageSymbol(displayedPage: number) {
		return ['A', 'B', 'C', 'D', 'E', 'F'][displayedPage - 1];
	}

	let page = 4;
</script>

<p>A pagination with customized links:</p>
<Pagination bind:page collectionSize={60} slotPrevious="Prev" slotNext="Next" ariaLabel="Page navigation with customized links">
	{#snippet slotNumberLabel({displayedPage})}
		{getPageSymbol(displayedPage)}
	{/snippet}
</Pagination>
<hr />

<p>A pagination with customized pages:</p>
<Pagination bind:page collectionSize={60} ariaLabel="Page navigation with customized pages">
	{#snippet slotPages(props)}
		<CustomPages {...props} />
	{/snippet}
</Pagination>
