const e=`<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';

	let sliderControl = $state([10, 40, 50, 60, 90]);
	let sliderValues = $state([10, 40]);
<\/script>

<h5>Slider with form control</h5>
<Slider min={0} max={100} stepSize={1} bind:values={sliderControl} />
Form control values: {sliderControl?.join(', ')}
<hr />

<h5>Slider with values</h5>
<Slider min={0} max={100} stepSize={1} bind:values={sliderValues} />
Values: {sliderValues.join(', ')}
`;export{e as default};
