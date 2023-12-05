<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte/pagination';

	let page = 4;
	let pageAlone = 1;
</script>

<h5>Basic pagination:</h5>
<Pagination bind:page collectionSize={60} />

<h5>No direction links:</h5>
<Pagination bind:page collectionSize={60} directionLinks={false} />

<h5>With boundary links:</h5>
<Pagination bind:page collectionSize={60} boundaryLinks={true} />

<div class="mb-3">Current page: <span id="defaultPage">{page}</span></div>

<h5>Disabled pagination:</h5>
<Pagination bind:page={pageAlone} collectionSize={60} disabled={true} ariaLabel={'Disabled pagination'} />
