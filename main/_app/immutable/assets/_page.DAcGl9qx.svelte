<script lang="ts">
	import ApiDoc from '$lib/layout/doc/ApiDoc.svelte';
	import widgetDoc from '@agnos-ui/generated/doc/api.json?select&extractApi';
</script>

<ApiDoc doc={widgetDoc} />
