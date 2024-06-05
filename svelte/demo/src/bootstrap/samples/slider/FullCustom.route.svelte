<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';
	import CoffeeSlider from './CoffeeSlider.svelte';

	let sliderControl = [50];

	import '@agnos-ui/common/samples/slider/custom.scss';
</script>

<Slider
	min={0}
	max={100}
	stepSize={1}
	bind:values={sliderControl}
	vertical
	className="custom-slider"
	structure={CoffeeSlider}
	label={null}
	handle={null}
/>
