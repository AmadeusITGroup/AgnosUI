<script lang="ts">
	import {getModalDefaultConfig} from '@agnos-ui/core';
	import widgetDoc from '../../../../../../../core/dist/api.json?modal&extractApi';
	import ApiDoc from '../../../../../lib/layout/doc/ApiDoc.svelte';
</script>

<svelte:head>
	<title>Modal API</title>
	<meta name="description" content="" />
</svelte:head>
<ApiDoc doc={widgetDoc} defaultValues={getModalDefaultConfig()} />
