<script lang="ts">
	import ComponentPage from '../../../../lib/layout/ComponentPage.svelte';

	const componentName = 'Alert';
	const tabs = [
		{title: 'Examples', key: 'examples', path: '/components/alert/examples'},
		{title: 'Api', key: 'api', path: '/components/alert/api'},
		{title: 'Playground', key: 'playground', path: '/components/alert/playground#{"props":{"slotDefault":"This is an alert"}}'},
	];
</script>

<ComponentPage {componentName} {tabs}>
	<slot />
</ComponentPage>
