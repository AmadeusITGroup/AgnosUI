const t=`import type {SliderContext} from '@agnos-ui/react/components/slider';

const CustomSliderComponent = (slotContext: SliderContext) => (
	<>
		<div className="position-relative cup-container">
			<div className="cup">
				<div className="cup-fill-parent">
					<div className="cup-fill" style={{height: \`\${slotContext.state.progressDisplayOptions[0].height}%\`}}>
						{slotContext.state.progressDisplayOptions[0].height >= 50 ? (
							<>
								<div className="bubble bubble-1"></div>
								<div className="bubble bubble-2"></div>
								<div className="bubble bubble-3"></div>
							</>
						) : null}
					</div>
				</div>
			</div>
		</div>
		<button
			className={\`coffee-indicator \${slotContext.state.vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'}\`}
			role="slider"
			aria-valuemin={slotContext.state.min}
			aria-valuemax={slotContext.state.max}
			aria-valuenow={slotContext.state.sortedHandles[0].value}
			aria-valuetext={'' + slotContext.state.sortedHandles[0].ariaValueText}
			aria-label={slotContext.state.sortedHandles[0].ariaLabel}
			aria-readonly={slotContext.state.readonly ? 'true' : undefined}
			aria-disabled={slotContext.state.disabled ? 'true' : undefined}
			aria-orientation={slotContext.state.vertical ? 'vertical' : undefined}
			disabled={slotContext.state.disabled}
			style={{
				top: \`\${slotContext.state.handleDisplayOptions[slotContext.state.sortedHandles[0].id].top}%\`,
				left: \`\${slotContext.state.handleDisplayOptions[slotContext.state.sortedHandles[0].id].left}%\`,
			}}
			onKeyDown={(e) => slotContext.widget.actions.keydown(e.nativeEvent, slotContext.state.sortedHandles[0].id)}
			onMouseDown={(e) => slotContext.widget.actions.mouseDown(e.nativeEvent, slotContext.state.sortedHandles[0].id)}
			onTouchStart={(e) => slotContext.widget.actions.touchStart(e.nativeEvent, slotContext.state.sortedHandles[0].id)}
		>
			{'' + slotContext.state.sortedHandles[0].value}
		</button>
	</>
);

export default CustomSliderComponent;
`;export{t as default};
