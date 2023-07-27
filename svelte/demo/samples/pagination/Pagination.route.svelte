<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte';
	let page = 1;
	let page2 = 3;
</script>

<h2>Pagination examples</h2>
<h4>Default</h4>
<Pagination bind:page />
<p>Current page: {page}</p>
<Pagination bind:page={page2} collectionSize={70} className={'customClass'} size={'sm'}>
	<span slot="previous">Prev</span>
	<span slot="next">Next</span>
</Pagination>
<p>Current page 2: {page2}</p>
