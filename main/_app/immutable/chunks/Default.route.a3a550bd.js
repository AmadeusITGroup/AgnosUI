const n=`<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte';

	let page = 4;
	let pageAlone = 1;
<\/script>

<h5>Default pagination:</h5>
<Pagination bind:page collectionSize={70} />

<h5>No direction links:</h5>
<Pagination bind:page collectionSize={70} directionLinks={false} />

<h5>With boundary links:</h5>
<Pagination bind:page collectionSize={70} boundaryLinks={true} />

<div class="mb-3">Current page: <span id="defaultPage">{page}</span></div>

<h5>Disabled pagination:</h5>
<Pagination bind:page={pageAlone} collectionSize={70} disabled={true} ariaLabel={'Disabled pagination'} />
`;export{n as default};
