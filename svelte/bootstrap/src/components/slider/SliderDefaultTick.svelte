<script lang="ts">
	import type {SliderSlotTickContext} from './slider.gen';

	let {tick, attachments, state}: SliderSlotTickContext = $props();
</script>

{#if tick.displayLabel}
	<span {@attach attachments.tickLabelDirective({tick})}>
		{tick.value}
	</span>
{/if}
<span {@attach attachments.tickDirective({tick})}>
	<svg xmlns="http://www.w3.org/2000/svg">
		<circle class="au-slider-tick-outer" class:au-slider-tick-disabled={state.disabled} class:au-slider-tick-selected={tick.selected} />
		{#if tick.selected}
			<circle class="au-slider-tick-inner au-slider-tick-selected" />
		{/if}
	</svg>
</span>
