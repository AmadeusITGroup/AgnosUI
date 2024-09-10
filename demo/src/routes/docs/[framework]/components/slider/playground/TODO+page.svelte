<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getSliderDefaultConfig} from '@agnos-ui/svelte-bootstrap/components/slider';
	import sample from '@agnos-ui/samples/bootstrap/slider/playground';
	import doc from '@agnos-ui/generated/doc/api.json?slider&extractApi';
	import type {PropsValues} from '@agnos-ui/common/propsValues';

	const listPropsValues: {[key in keyof ReturnType<typeof getSliderDefaultConfig>]?: PropsValues[]} = {
		ariaLabelHandle: ['sliderLabelHandleDefault'],
		ariaValueText: ['sliderValueTextUnits'],
	};
</script>

<Playground {sample} config={getSliderDefaultConfig()} {doc} {listPropsValues} />
