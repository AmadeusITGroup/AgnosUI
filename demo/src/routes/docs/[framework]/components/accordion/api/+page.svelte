<script lang="ts">
	import {getAccordionDefaultConfig} from '@agnos-ui/svelte/components/accordion';
	import widgetDoc from '@agnos-ui/generated/doc/api.json?accordion&extractApi';
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getAccordionDefaultConfig()} />
