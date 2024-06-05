<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';
	import CustomHandle from './CustomHandle.svelte';

	let sliderCustomLabelControl = [70];
	let sliderCustomHandleControl = [50];

	import '@agnos-ui/common/samples/slider/custom.scss';
</script>

<h3>Slider with custom labels</h3>
<Slider
	min={0}
	max={100}
	stepSize={1}
	bind:values={sliderCustomLabelControl}
	label={({value}) => '' + value + '%'}
	className="au-custom-slider-container"
/>
<hr />
<h3>Slider with custom handle</h3>
<Slider min={0} max={100} stepSize={1} bind:values={sliderCustomHandleControl} handle={CustomHandle} className="au-custom-slider-container" />
