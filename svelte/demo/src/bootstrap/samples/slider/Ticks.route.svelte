<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';

	let sliderControl = $state([30]);

	let sliderRangeControl = $state([30, 70]);
	let disabledToggle = $state(false);

	let sliderRangeControlLabels = $state([30, 70]);
</script>

<h2>Ticks as steps</h2>
<Slider min={0} max={100} stepSize={25} bind:values={sliderRangeControl} disabled={disabledToggle} showTicks />

<div class="form-check form-switch">
	<input class="form-check-input" type="checkbox" role="switch" id="disabled" bind:checked={disabledToggle} />
	<label class="form-check-label" for="disabled">Disabled</label>
</div>
<h2>With intermediate steps</h2>
<Slider min={0} max={100} stepSize={1} bind:values={sliderControl} showTicks tickInterval={25} />
<br />

<h2>Without tick labels</h2>
<Slider min={0} max={100} stepSize={25} bind:values={sliderRangeControlLabels} showTicks showTickValues={false} />
<p>If <code>showTickValues</code> is set to <code>false</code> the min/max/current label display is automatically put to <code>true</code></p>
