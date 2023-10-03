<script lang="ts">
	import {getAlertDefaultConfig} from '@agnos-ui/core';
	import widgetDoc from '../../../../../../../core/dist/api.json?slider&extractApi';
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getAlertDefaultConfig()} />
