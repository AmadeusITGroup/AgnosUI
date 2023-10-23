<script lang="ts">
	import ComponentPage from '$lib/layout/ComponentPage.svelte';

	const componentName = 'Slider';
	const tabs = [
		{title: 'Examples', key: 'examples', path: '/components/slider/examples'},
		{title: 'Api', key: 'api', path: '/components/slider/api'},
		{title: 'Playground', key: 'playground', path: '/components/slider/playground'},
	];
</script>

<ComponentPage {componentName} {tabs}>
	<slot />
</ComponentPage>
