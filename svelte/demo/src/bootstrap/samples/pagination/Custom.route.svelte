<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte-bootstrap/components/pagination';
	import CustomPages from './CustomPages.svelte';

	const getPageSymbol = (displayedPage: number) => ['A', 'B', 'C', 'D', 'E', 'F'][displayedPage - 1];

	let page = $state(4);
</script>

<p>A pagination with customized links:</p>
<Pagination bind:page collectionSize={60} previousPageLabel="Prev" nextPageLabel="Next" ariaLabel="Page navigation with customized links">
	{#snippet numberLabel({displayedPage})}
		{getPageSymbol(displayedPage)}
	{/snippet}
</Pagination>
<hr />

<p>A pagination with customized pages:</p>
<Pagination bind:page collectionSize={60} ariaLabel="Page navigation with customized pages">
	{#snippet pagesDisplay(props)}
		<CustomPages {...props} />
	{/snippet}
</Pagination>
