<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte-bootstrap/components/pagination';

	import {hash$} from '@agnos-ui/common/samples/utils/hashUtil';

	let page = $derived(+($hash$.split('#')[1] ?? 4));

	const pageLink = (currentPage: number) => `#${$hash$.split('#')[0]}#${currentPage}`;

	const pageChange = (pageNumber: number) => (location.hash = `#${$hash$.split('#')[0]}#${pageNumber}`);
</script>

<p>A pagination with hrefs provided for each pagination element:</p>
<p>
	Page hash: <small>{'#' + $hash$}</small>
</p>
<Pagination {page} collectionSize={60} boundaryLinks ariaLabel="Page navigation with customized hrefs" {pageLink} onPageChange={pageChange} />
