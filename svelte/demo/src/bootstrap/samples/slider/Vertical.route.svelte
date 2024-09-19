<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';

	let sliderControl = $state([10, 40]);
	let sliderControlRange = $state([40]);
</script>

<div class="d-flex" style="height: 350px">
	<div class="col-6" style="height: 300px">
		<Slider min={0} max={100} stepSize={1} vertical bind:values={sliderControl} className="my-0" />
		<div class="mt-3">Form control values: {sliderControl?.join(', ')}</div>
	</div>
	<div class="col-6" style="height: 300px">
		<Slider min={0} max={100} stepSize={1} vertical bind:values={sliderControlRange} className="my-0" />
		<div class="mt-3">From control value: {sliderControlRange?.join(', ')}</div>
	</div>
</div>
