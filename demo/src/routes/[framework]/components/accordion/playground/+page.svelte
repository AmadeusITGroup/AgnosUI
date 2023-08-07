<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getAccordionDefaultConfig} from '@agnos-ui/core';
	import sample from '@agnos-ui/samples/accordion/playground';
	import doc from '../../../../../../../core/dist/api.json?accordion&extractApi';
</script>

<Playground {sample} config={getAccordionDefaultConfig()} {doc} />
