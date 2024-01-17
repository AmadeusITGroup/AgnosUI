<script lang="ts">
	import {getModalDefaultConfig} from '@agnos-ui/core/components/modal';
	import widgetDoc from '@agnos-ui/generated/doc/api.json?modal&extractApi';
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getModalDefaultConfig()} />
