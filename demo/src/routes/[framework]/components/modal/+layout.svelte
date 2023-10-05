<script lang="ts">
	import ComponentPage from '$lib/layout/ComponentPage.svelte';

	const componentName = 'Modal';
	const tabs = [
		{title: 'Examples', key: 'examples', path: '/components/modal/examples'},
		{title: 'Api', key: 'api', path: '/components/modal/api'},
		{
			title: 'Playground',
			key: 'playground',
			path: '/components/modal/playground#{"props":{"visible":true,"slotDefault":"Dialog content","slotTitle":"Dialog"}}',
		},
	];
</script>

<ComponentPage {componentName} {tabs}>
	<slot />
</ComponentPage>
