<script lang="ts">
	import {getRatingDefaultConfig} from '@agnos-ui/svelte/components/rating';
	import widgetDoc from '@agnos-ui/generated/doc/api.json?rating&extractApi';
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
</script>

<ApiDoc doc={widgetDoc} defaultValues={getRatingDefaultConfig()} />
