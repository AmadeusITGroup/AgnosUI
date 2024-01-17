<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getSliderDefaultConfig} from '@agnos-ui/core/components/slider';
	import sample from '@agnos-ui/samples/slider/playground';
	import doc from '@agnos-ui/generated/doc/api.json?slider&extractApi';
</script>

<Playground {sample} config={getSliderDefaultConfig()} {doc} />
