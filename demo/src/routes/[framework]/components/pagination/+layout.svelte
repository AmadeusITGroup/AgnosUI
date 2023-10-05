<script lang="ts">
	import ComponentPage from '$lib/layout/ComponentPage.svelte';

	const componentName = 'Pagination';
	const tabs = [
		{title: 'Examples', key: 'examples', path: '/components/pagination/examples'},
		{title: 'Api', key: 'api', path: '/components/pagination/api'},
		{title: 'Playground', key: 'playground', path: '/components/pagination/playground'},
	];
</script>

<ComponentPage {componentName} {tabs}>
	<slot />
</ComponentPage>
