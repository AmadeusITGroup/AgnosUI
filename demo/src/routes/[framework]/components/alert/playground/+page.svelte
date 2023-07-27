<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getAlertDefaultConfig} from '@agnos-ui/core';
	import doc from '../../../../../../../core/dist/api.json?alert&extractApi';
</script>

<Playground componentName="alert" config={getAlertDefaultConfig()} {doc} />
