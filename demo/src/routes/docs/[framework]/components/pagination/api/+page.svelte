<script lang="ts">
	import {getPaginationDefaultConfig} from '@agnos-ui/core/components/pagination';
	import widgetDoc from '@agnos-ui/generated/doc/api.json?pagination&extractApi';
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getPaginationDefaultConfig()} />
