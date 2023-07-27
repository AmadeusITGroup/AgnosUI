<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte';

	let page = 4;
</script>

<Pagination bind:page />
<div>
	Current page: <span id="defaultPage">{page}</span><br />
</div>
