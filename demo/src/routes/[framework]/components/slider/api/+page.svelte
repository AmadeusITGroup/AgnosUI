<script lang="ts">
	import {getAlertDefaultConfig} from '@agnos-ui/core/components/alert';
	import widgetDoc from '@agnos-ui/generated/doc/api.json?slider&extractApi';
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getAlertDefaultConfig()} />
