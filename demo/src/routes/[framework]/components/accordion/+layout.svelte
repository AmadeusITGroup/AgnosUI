<script lang="ts">
	import ComponentPage from '../../../../lib/layout/ComponentPage.svelte';

	const componentName = 'Accordion';
	const tabs = [
		{title: 'Examples', key: 'examples', path: '/components/accordion/examples'},
		{title: 'Api', key: 'api', path: '/components/accordion/api'},
		{title: 'Playground', key: 'playground', path: '/components/accordion/playground#'},
	];
</script>

<ComponentPage {componentName} {tabs}>
	<slot />
</ComponentPage>
