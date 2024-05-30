<script>
	import Slider from './Slider.svelte';
	let sliderValues = $state([20]);
</script>

<h2 class="text-lg mb-2">DaisyUI Example</h2>

<Slider min={0} max={100} stepSize={1} bind:values={sliderValues} />
Value: {sliderValues}
