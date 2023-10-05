<script lang="ts">
	import {getAccordionDefaultConfig} from '@agnos-ui/core';
	import widgetDoc from '../../../../../../../core/dist/api.json?accordion&extractApi';
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
</script>

<svelte:head>
	<title>Accordion API</title>
	<meta name="description" content="Accordion API for " />
</svelte:head>
<ApiDoc doc={widgetDoc} defaultValues={getAccordionDefaultConfig()} />
