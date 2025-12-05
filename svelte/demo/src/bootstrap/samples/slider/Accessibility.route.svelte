<script lang="ts" module>
	const STEP_SIZE = 86400000; // 1 day in milliseconds
	const MIN = 1733007600000; // 01-12-2024
	const MAX = 1735599600000; // 31-12-2024

	const ariaLabelledBy = () => 'labelID';
	const ariaValueText = (value: number, index: number) => {
		const dateString = new Date(value).toLocaleDateString('en-GB', {dateStyle: 'medium', timeZone: 'UTC'});
		if (index == 0) {
			return `Minimum date: ${dateString}`;
		} else {
			return `Maximum date: ${dateString}`;
		}
	};
</script>

<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';
	import {SvelteDate} from 'svelte/reactivity';

	let sliderValues = $state([1733266800000, 1735340400000]);
</script>

<span id="labelID">Date range</span>
<Slider min={MIN} max={MAX} stepSize={STEP_SIZE} {ariaLabelledBy} {ariaValueText} bind:values={sliderValues}>
	{#snippet label({value})}
		{@const date = new SvelteDate(value)}
		{date.toLocaleDateString('en-GB', {dateStyle: 'medium', timeZone: 'UTC'})}
	{/snippet}
</Slider>
