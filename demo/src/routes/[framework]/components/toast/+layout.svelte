<script lang="ts">
	import ComponentPage from '$lib/layout/ComponentPage.svelte';

	const componentName = 'Toast';
	const tabs = [
		{title: 'Examples', key: 'examples', path: '/components/toast/examples'},
		{title: 'Api', key: 'api', path: '/components/toast/api'},
		{title: 'Playground', key: 'playground', path: '/components/toast/playground#{"props":{"slotDefault":"This is a toast"}}'},
	];
</script>

<ComponentPage {componentName} {tabs}>
	<slot />
</ComponentPage>
