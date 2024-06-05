<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';

	let sliderControl = [10, 40, 50, 60, 90];
	let sliderValues = [10, 40];
</script>

<h3>Slider with form control</h3>
<Slider min={0} max={100} stepSize={1} bind:values={sliderControl} />
Form control values: {sliderControl?.join(', ')}
<hr />

<h3>Slider with values</h3>
<Slider min={0} max={100} stepSize={1} bind:values={sliderValues} />
Values: {sliderValues.join(', ')}
