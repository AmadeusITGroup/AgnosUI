<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getAccordionDefaultConfig} from '@agnos-ui/core';
	import doc from '../../../../../../../core/dist/api.json?accordion&extractApi';
</script>

<Playground componentName="accordion" config={getAccordionDefaultConfig()} {doc} height={500} />
