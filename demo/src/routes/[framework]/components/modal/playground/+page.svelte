<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getModalDefaultConfig} from '@agnos-ui/core';
	import doc from '../../../../../../../core/dist/api.json?modal&extractApi';
</script>

<Playground componentName="modal" config={getModalDefaultConfig()} height={250} {doc} />
