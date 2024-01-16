<script lang="ts">
	import {getSliderDefaultConfig} from '@agnos-ui/core/components/slider';
	import widgetDoc from '@agnos-ui/generated/doc/api.json?slider&extractApi';
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getSliderDefaultConfig()} />
