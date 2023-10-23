<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getSliderDefaultConfig} from '@agnos-ui/core';
	import sample from '@agnos-ui/samples/slider/playground';
	import doc from '../../../../../../../core/dist/api.json?slider&extractApi';
</script>

<Playground {sample} config={getSliderDefaultConfig()} {doc} />
