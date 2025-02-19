<script>
	import Slider from './Slider.svelte';
	let sliderValues = $state([20]);
</script>

<Slider min={0} max={100} stepSize={1} bind:values={sliderValues} className="w-full" />
Value: {sliderValues}
