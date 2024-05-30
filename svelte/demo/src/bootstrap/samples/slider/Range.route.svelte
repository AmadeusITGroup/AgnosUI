<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';

	let sliderControl = $state([10, 40, 50, 60, 90]);
	let sliderValues = $state([10, 40]);
</script>

<h2>Slider with form control</h2>
<Slider min={0} max={100} stepSize={1} bind:values={sliderControl} />
Form control values: {sliderControl?.join(', ')}
<hr />

<h2>Slider with values</h2>
<Slider min={0} max={100} stepSize={1} bind:values={sliderValues} />
Values: {sliderValues.join(', ')}
