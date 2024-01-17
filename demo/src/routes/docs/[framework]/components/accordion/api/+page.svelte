<script lang="ts">
	import {getAccordionDefaultConfig} from '@agnos-ui/core/components/accordion';
	import widgetDoc from '@agnos-ui/generated/doc/api.json?accordion&extractApi';
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getAccordionDefaultConfig()} />
