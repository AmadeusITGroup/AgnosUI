<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getAlertDefaultConfig} from '@agnos-ui/core';
	import sample from '@agnos-ui/samples/alert/playground';
	import doc from '../../../../../../../core/dist/api.json?alert&extractApi';
</script>

<Playground {sample} config={getAlertDefaultConfig()} {doc} />
