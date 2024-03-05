const t=`import type {SliderSlotHandleContext} from '@agnos-ui/react/components/slider';

const CustomSlotHandle = (slotContext: SliderSlotHandleContext) => (
	<button
		className={\`au-custom-slider-handle \${slotContext.state.vertical ? 'au-custom-slider-handle-vertical' : 'au-custom-slider-handle-horizontal'}\`}
		role="slider"
		aria-valuemin={slotContext.state.min}
		aria-valuemax={slotContext.state.max}
		aria-valuenow={slotContext.item.value}
		aria-valuetext={'' + slotContext.item.ariaValueText}
		aria-label={slotContext.item.ariaLabel}
		aria-readonly={slotContext.state.readonly ? 'true' : undefined}
		aria-disabled={slotContext.state.disabled ? 'true' : undefined}
		aria-orientation={slotContext.state.vertical ? 'vertical' : undefined}
		disabled={slotContext.state.disabled}
		style={{
			top: \`\${slotContext.state.handleDisplayOptions[slotContext.item.id].top}%\`,
			left: \`\${slotContext.state.handleDisplayOptions[slotContext.item.id].left}%\`,
		}}
		onKeyDown={(e) => slotContext.widget.actions.keydown(e.nativeEvent, slotContext.item.id)}
		onMouseDown={(e) => slotContext.widget.actions.mouseDown(e.nativeEvent, slotContext.item.id)}
		onTouchStart={(e) => slotContext.widget.actions.touchStart(e.nativeEvent, slotContext.item.id)}
	>
		<svg xmlns="http://www.w3.org/2000/svg" fill="var(--bs-slider-handle-color)" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
			/>
		</svg>
	</button>
);

export default CustomSlotHandle;
`;export{t as default};
