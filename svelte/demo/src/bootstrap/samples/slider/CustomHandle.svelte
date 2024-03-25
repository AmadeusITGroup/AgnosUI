<script lang="ts">
	import '@agnos-ui/common/samples/slider/custom.scss';
	import type {SliderSlots} from '@agnos-ui/svelte/components/slider';
	type $$Props = SliderSlots['handle'];
	type $$Slots = SliderSlots;

	export let item: $$Props['item'];
	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
</script>

<button
	class={`au-custom-slider-handle ${state.vertical ? 'au-custom-slider-handle-vertical' : 'au-custom-slider-handle-horizontal'}`}
	role="slider"
	aria-valuemin={state.min}
	aria-valuemax={state.max}
	aria-readonly={state.readonly ? true : null}
	aria-disabled={state.disabled ? true : null}
	aria-valuenow={item.value}
	aria-valuetext={item.ariaValueText}
	aria-label={item.ariaLabel}
	aria-orientation={state.vertical ? 'vertical' : null}
	disabled={state.disabled ? true : null}
	style:left={`${state.handleDisplayOptions[item.id].left}%`}
	style:top={`${state.handleDisplayOptions[item.id].top}%`}
	on:keydown={(e) => widget.actions.keydown(e, item.id)}
	on:mousedown={(e) => widget.actions.mouseDown(e, item.id)}
	on:touchstart={(e) => widget.actions.touchStart(e, item.id)}
>
	<svg xmlns="http://www.w3.org/2000/svg" fill="var(--bs-slider-handle-color)" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
		/>
	</svg>
</button>
