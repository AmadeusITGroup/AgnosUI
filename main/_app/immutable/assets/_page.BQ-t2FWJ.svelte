<script lang="ts">
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
	import {getSelectDefaultConfig} from '@agnos-ui/svelte/components/select';
	import widgetDoc from '@agnos-ui/generated/doc/api.json?select&extractApi';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getSelectDefaultConfig()} />
