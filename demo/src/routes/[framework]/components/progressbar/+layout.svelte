<script lang="ts">
	import ComponentPage from '../../../../lib/layout/ComponentPage.svelte';

	const componentName = 'Progressbar';
	const tabs = [
		{title: 'Examples', key: 'examples', path: '/components/progressbar/examples'},
		{title: 'Api', key: 'api', path: '/components/progressbar/api'},
		{title: 'Playground', key: 'playground', path: '/components/progressbar/playground'},
	];
</script>

<ComponentPage {componentName} {tabs}>
	<slot />
</ComponentPage>
