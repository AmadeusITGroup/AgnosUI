<script lang="ts">
	import {getProgressbarDefaultConfig} from '@agnos-ui/core/components/progressbar';
	import widgetDoc from '@agnos-ui/generated/doc/api.json?progressBar&extractApi';
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getProgressbarDefaultConfig()} />
