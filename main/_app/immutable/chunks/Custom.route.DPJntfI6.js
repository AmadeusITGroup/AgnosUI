const e=`<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte-bootstrap/components/pagination';
	import CustomPages from './CustomPages.svelte';

	function getPageSymbol(displayedPage: number) {
		return ['A', 'B', 'C', 'D', 'E', 'F'][displayedPage - 1];
	}

	let page = 4;
<\/script>

<p>A pagination with customized links:</p>
<Pagination bind:page collectionSize={60} previousPageLabel="Prev" nextPageLabel="Next" ariaLabel="Page navigation with customized links">
	<svelte:fragment slot="numberLabel" let:displayedPage>
		{getPageSymbol(displayedPage)}
	</svelte:fragment>
</Pagination>
<hr />

<p>A pagination with customized pages:</p>
<Pagination bind:page collectionSize={60} pagesDisplay={CustomPages} ariaLabel="Page navigation with customized pages" />
`;export{e as default};
