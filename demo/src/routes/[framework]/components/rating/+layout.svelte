<script lang="ts">
	import ComponentPage from '$lib/layout/ComponentPage.svelte';

	const componentName = 'Rating';
	const tabs = [
		{title: 'Examples', key: 'examples', path: '/components/rating/examples'},
		{title: 'Api', key: 'api', path: '/components/rating/api'},
		{title: 'Playground', key: 'playground', path: '/components/rating/playground'},
	];
</script>

<ComponentPage {componentName} {tabs}>
	<slot />
</ComponentPage>
