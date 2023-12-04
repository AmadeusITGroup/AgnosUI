<script lang="ts">
	import ComponentPage from '$lib/layout/ComponentPage.svelte';

	const componentName = 'Select';
	const tabs = [
		{title: 'Examples', key: 'examples', path: '/components/select/examples'},
		{title: 'Api', key: 'api', path: '/components/select/api'},
		{title: 'Playground', key: 'playground', path: '/components/select/playground'},
	];
</script>

<ComponentPage {componentName} {tabs}>
	<slot />
</ComponentPage>
