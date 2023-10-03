<script lang="ts">
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
	import {getSelectDefaultConfig} from '@agnos-ui/core';
	import widgetDoc from '../../../../../../../core/dist/api.json?select&extractApi';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getSelectDefaultConfig()} />
