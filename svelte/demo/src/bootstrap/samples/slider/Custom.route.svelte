<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';
	import CustomHandle from './CustomHandle.svelte';

	let sliderCustomLabelControl = $state([70]);
	let sliderCustomHandleControl = $state([50]);

	import '@agnos-ui/common/samples/slider/custom.scss';
</script>

<h2>Slider with custom labels</h2>
<Slider min={0} max={100} stepSize={1} bind:values={sliderCustomLabelControl} className="au-custom-slider-container">
	{#snippet label({value})}
		{value}%
	{/snippet}
</Slider>
<hr />
<h2>Slider with custom handle</h2>
<Slider min={0} max={100} stepSize={1} bind:values={sliderCustomHandleControl} className="au-custom-slider-container">
	{#snippet handle(props)}
		<CustomHandle {...props} />
	{/snippet}
</Slider>
