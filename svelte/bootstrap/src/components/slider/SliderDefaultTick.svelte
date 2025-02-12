<script lang="ts">
	import type {SliderSlotTickContext} from './slider.gen';

	let {tick, directives, state}: SliderSlotTickContext = $props();
</script>

{#if tick.displayLabel}
	<span use:directives.tickLabelDirective={{tick}}>
		{tick.value}
	</span>
{/if}
<span use:directives.tickDirective={{tick}}>
	{#if tick.selected}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style="width: var(--bs-slider-tick-secondary-size); height: var(--bs-slider-tick-primary-size)"
			fill="none"
		>
			<circle cx="50%" cy="50%" r="50%" fill={state.disabled ? 'var(--bs-slider-tick-disabled-color)' : 'var(--bs-slider-tick-selected-color)'} />
			<circle cx="50%" cy="50%" r="25%" fill="white" />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style="width: var(--bs-slider-tick-secondary-size); height: var(--bs-slider-tick-primary-size)"
			fill="none"
		>
			<circle
				cx="50%"
				cy="50%"
				r="45%"
				fill="white"
				stroke={state.disabled ? 'var(--bs-slider-tick-disabled-color)' : 'var(--bs-slider-tick-neutral-color)'}
				stroke-width="1.5"
			/>
		</svg>
	{/if}
</span>
