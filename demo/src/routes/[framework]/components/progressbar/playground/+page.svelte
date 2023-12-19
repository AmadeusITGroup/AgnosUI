<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getProgressbarDefaultConfig} from '@agnos-ui/core/components/progressbar';
	import sample from '@agnos-ui/samples/progressbar/playground';
	import doc from '@agnos-ui/generated/doc/api.json?progressbar&extractApi';
</script>

<Playground {sample} config={getProgressbarDefaultConfig()} {doc} />
