const e=`<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';

	let sliderControl = $state([10, 40, 50, 60, 90]);
	let sliderValues = $state([10, 40]);

	let minRange = $state(10);
	let maxRange = $state(30);
	let pushRange = $state(false);
<\/script>

<div class="d-flex flex-column justify-content-between gap-2">
	<div class="d-flex flex-column flex-sm-row form-group align-items-center gap-3">
		<div class="d-flex align-items-center justify-content-between">
			<label class="me-3" for="minRange">minRange: </label>
			<input id="minRange" type="number" min="0" class="form-control w-50" bind:value={minRange} />
		</div>
		<div class="d-flex align-items-center justify-content-between">
			<label class="me-3" for="maxRange">maxRange: </label>
			<input id="maxRange" type="number" min="0" class="form-control w-50" bind:value={maxRange} />
		</div>
		<div class="d-inline-flex align-items-center justify-content-between">
			<label class="me-3" for="pushRange">pushRange: </label>
			<input type="checkbox" class="form-check-input" id="pushRange" bind:checked={pushRange} />
		</div>
	</div>
</div>

<h5>Simple range</h5>
<Slider min={0} max={100} {minRange} {maxRange} {pushRange} stepSize={1} bind:values={sliderValues} />
Values: {sliderValues.join(', ')}
<hr />
<h5>Multiple ranges</h5>
<Slider min={0} max={100} {minRange} {maxRange} {pushRange} stepSize={1} bind:values={sliderControl} />
Form control values: {sliderControl?.join(', ')}
`;export{e as default};
