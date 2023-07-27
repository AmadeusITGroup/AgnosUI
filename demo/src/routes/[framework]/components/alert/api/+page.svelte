<script lang="ts">
	import {getAlertDefaultConfig} from '@agnos-ui/core';
	import widgetDoc from '../../../../../../../core/dist/api.json?alert&extractApi';
	import ApiDoc from '../../../../../lib/layout/doc/ApiDoc.svelte';
</script>

<svelte:head>
	<title>Pagination API</title>
	<meta name="description" content="Pagination API for " />
</svelte:head>
<ApiDoc doc={widgetDoc} defaultValues={getAlertDefaultConfig()} />
