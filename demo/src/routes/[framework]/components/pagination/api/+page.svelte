<script lang="ts">
	import {getPaginationDefaultConfig} from '@agnos-ui/core';
	import widgetDoc from '../../../../../../../core/dist/api.json?pagination&extractApi';
	import ApiDoc from '../../../../../lib/layout/doc/ApiDoc.svelte';
</script>

<svelte:head>
	<title>Pagination API</title>
	<meta name="description" content="Pagination API for " />
</svelte:head>
<ApiDoc doc={widgetDoc} defaultValues={getPaginationDefaultConfig()} />
