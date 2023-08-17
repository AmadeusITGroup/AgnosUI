<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getModalDefaultConfig} from '@agnos-ui/core';
	import sample from '@agnos-ui/samples/modal/playground';
	import doc from '../../../../../../../core/dist/api.json?modal&extractApi';
</script>

<Playground {sample} config={getModalDefaultConfig()} height={250} noresize {doc} />
