<script lang="ts">
	import '@agnos-ui/common/samples/slider/custom.scss';
	import type {SliderSlots} from '@agnos-ui/svelte/components/slider';
	type $$Props = SliderSlots['structure'];
	type $$Slots = SliderSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
</script>

<div class="position-relative cup-container">
	<div class="cup">
		<div class="cup-fill-parent">
			<div class="cup-fill" style={`height: ${state.progressDisplayOptions[0].height}%;`}>
				{#if state.progressDisplayOptions[0].height >= 50}
					<div class="bubble bubble-1"></div>
					<div class="bubble bubble-2"></div>
					<div class="bubble bubble-3"></div>
				{/if}
			</div>
		</div>
	</div>
</div>
<button
	class={`coffee-indicator ${state.vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'}`}
	role="slider"
	aria-valuemin={state.min}
	aria-valuemax={state.max}
	aria-valuenow={state.sortedHandles[0].value}
	aria-valuetext={state.sortedHandles[0].ariaValueText}
	aria-label={state.sortedHandles[0].ariaLabel}
	aria-readonly={state.readonly ? 'true' : undefined}
	aria-disabled={state.disabled ? 'true' : undefined}
	aria-orientation={state.vertical ? 'vertical' : undefined}
	disabled={state.disabled}
	style:top={`${state.handleDisplayOptions[state.sortedHandles[0].id].top}%`}
	style:left={`${state.handleDisplayOptions[state.sortedHandles[0].id].left}%`}
	on:keydown={(e) => widget.actions.keydown(e, state.sortedHandles[0].id)}
	on:mousedown={(e) => widget.actions.mouseDown(e, state.sortedHandles[0].id)}
	on:touchstart={(e) => widget.actions.touchStart(e, state.sortedHandles[0].id)}
>
	{'' + state.sortedHandles[0].value}
</button>
