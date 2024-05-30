<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';

	let sliderControl = $state([30]);
	let sliderRangeControl = $state([30, 70]);
	let sliderVerticalControl = $state([30]);
	let sliderRangeVerticalControl = $state([30, 70]);
</script>

<h2>Horizontal slider</h2>
<Slider min={0} max={100} stepSize={1} rtl bind:values={sliderControl} />
<br />
<Slider min={0} max={100} stepSize={1} rtl bind:values={sliderRangeControl} />
<h2>Vertical slider</h2>
<div class="d-flex" style="height: 350px">
	<div class="col-6" style="height: 300px">
		<Slider min={0} max={100} stepSize={1} rtl vertical bind:values={sliderVerticalControl} className="my-0" />
	</div>
	<div class="col-6" style="height: 300px">
		<Slider min={0} max={100} stepSize={1} rtl vertical bind:values={sliderRangeVerticalControl} className="my-0" />
	</div>
</div>
