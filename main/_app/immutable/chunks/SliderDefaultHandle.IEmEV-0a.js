const t=`<script lang="ts">
	import type {SliderSlots} from '@agnos-ui/svelte-headless/components/slider';

	type $$Props = SliderSlots['handle'];
	type $$Slots = SliderSlots;

	export let item: $$Props['item'];
	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
<\/script>

<button
	class={\`au-slider-handle \${state.vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'}\`}
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
	style:left={\`\${state.handleDisplayOptions[item.id].left}%\`}
	style:top={\`\${state.handleDisplayOptions[item.id].top}%\`}
	on:keydown={(e) => widget.actions.keydown(e, item.id)}
	on:mousedown={(e) => widget.actions.mouseDown(e, item.id)}
	on:touchstart={(e) => widget.actions.touchStart(e, item.id)}
>
	&nbsp;
</button>
`;export{t as default};
