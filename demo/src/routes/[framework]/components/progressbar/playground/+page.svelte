<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getProgressbarDefaultConfig} from '@agnos-ui/core';
	import sample from '@agnos-ui/samples/progressbar/playground';
	import doc from '../../../../../../../core/dist/api.json?progressbar&extractApi';
</script>

<Playground {sample} config={getProgressbarDefaultConfig()} {doc} />
