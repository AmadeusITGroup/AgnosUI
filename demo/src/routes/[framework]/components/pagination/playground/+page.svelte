<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getPaginationDefaultConfig} from '@agnos-ui/core';
	import doc from '../../../../../../../core/dist/api.json?pagination&extractApi';
</script>

<Playground componentName="pagination" config={getPaginationDefaultConfig()} {doc} />
