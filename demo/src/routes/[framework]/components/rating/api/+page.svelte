<script lang="ts">
	import {getRatingDefaultConfig} from '@agnos-ui/core';
	import widgetDoc from '../../../../../../../core/dist/api.json?rating&extractApi';
	import ApiDoc from '../../../../../lib/layout/doc/ApiDoc.svelte';
</script>

<svelte:head>
	<title>Rating API</title>
	<meta name="description" content="Rating API for " />
</svelte:head>
<ApiDoc doc={widgetDoc} defaultValues={getRatingDefaultConfig()} />
