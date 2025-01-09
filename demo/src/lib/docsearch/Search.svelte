<script lang="ts">
	import docsearch from '@docsearch/js';
	import {routing} from '$lib/routing.svelte';

	function generateUniqueId() {
		return 'id-' + Math.random().toString(36).slice(2, 11);
	}
	let uniqueId = generateUniqueId();

	$effect(() => {
		docsearch({
			container: `#docsearch-${uniqueId}`,
			appId: 'B76VWEHQMR',
			indexName: 'agnosui',
			apiKey: 'e82efd11bdb692114cb75b90299504b8',
			searchParameters: {
				facetFilters: [`${routing.selectedFramework ? 'tags:' + routing.selectedFramework : ''}`],
			},
		});
	});
</script>

<div id="docsearch-{uniqueId}"></div>
