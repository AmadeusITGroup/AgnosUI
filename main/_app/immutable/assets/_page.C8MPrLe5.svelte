<script lang="ts">
	import {getToastDefaultConfig} from '@agnos-ui/svelte/components/toast';
	import widgetDoc from '@agnos-ui/generated/doc/api.json?toast&extractApi';
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getToastDefaultConfig()} />
