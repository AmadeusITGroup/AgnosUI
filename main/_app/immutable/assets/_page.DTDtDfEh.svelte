<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getProgressbarDefaultConfig} from '@agnos-ui/svelte/components/progressbar';
	import sample from '@agnos-ui/samples/bootstrap/progressbar/playground';
	import doc from '@agnos-ui/generated/doc/api.json?progressbar&extractApi';
</script>

<Playground {sample} config={getProgressbarDefaultConfig()} {doc} />
