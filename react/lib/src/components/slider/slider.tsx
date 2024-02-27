import type {SliderContext, SliderProps, SliderSlotHandleContext} from '@agnos-ui/react-headless/components/slider';
import {createSlider} from '@agnos-ui/react-headless/components/slider';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import type {PropsWithChildren} from 'react';
import React from 'react';
import {Slot} from '@agnos-ui/react-headless/slot';

export * from '@agnos-ui/react-headless/components/slider';

export const DefaultSlotHandle = (slotContext: SliderSlotHandleContext) => (
	<button
		className={`au-slider-handle ${slotContext.state.vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'}`}
		role="slider"
		aria-valuemin={slotContext.state.min}
		aria-valuemax={slotContext.state.max}
		aria-valuenow={slotContext.item.value}
		aria-valuetext={slotContext.item.ariaValueText}
		aria-label={slotContext.item.ariaLabel}
		aria-readonly={slotContext.state.readonly ? 'true' : undefined}
		aria-disabled={slotContext.state.disabled ? 'true' : undefined}
		aria-orientation={slotContext.state.vertical ? 'vertical' : undefined}
		disabled={slotContext.state.disabled}
		style={{
			top: `${slotContext.state.handleDisplayOptions[slotContext.item.id].top}%`,
			left: `${slotContext.state.handleDisplayOptions[slotContext.item.id].left}%`,
		}}
		onKeyDown={(e) => slotContext.widget.actions.keydown(e.nativeEvent, slotContext.item.id)}
		onMouseDown={(e) => slotContext.widget.actions.mouseDown(e.nativeEvent, slotContext.item.id)}
		onTouchStart={(e) => slotContext.widget.actions.touchStart(e.nativeEvent, slotContext.item.id)}
	>
		&nbsp;
	</button>
);

export const DefaultSlotStructure = (slotContext: SliderContext) => {
	const minSetRef = useDirective(slotContext.widget.directives.minLabelDirective);
	const maxSetRef = useDirective(slotContext.widget.directives.maxLabelDirective);

	return (
		<>
			{slotContext.state.progressDisplayOptions.map((option, index) => (
				<div
					key={index}
					className={'au-slider-progress'}
					style={{
						left: `${option.left}%`,
						right: `${option.right}%`,
						bottom: `${option.bottom}%`,
						top: `${option.top}%`,
						width: `${option.width}%`,
						height: `${option.height}%`,
					}}
				/>
			))}
			<div
				className={slotContext.state.vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'}
				onClick={(e) => slotContext.widget.actions.click(e as unknown as MouseEvent)}
			/>
			{slotContext.state.showMinMaxLabels ? (
				<>
					<div
						ref={minSetRef}
						className={`${slotContext.state.rtl ? 'au-slider-rtl' : ''} ${
							slotContext.state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'
						} ${!slotContext.state.minValueLabelDisplay ? ' invisible' : ''}
						`}
					>
						<Slot slotContent={slotContext.state.slotLabel} props={{value: slotContext.state.min, ...slotContext}} />
					</div>
					<div
						ref={maxSetRef}
						className={`${slotContext.state.rtl ? 'au-slider-rtl' : ''} ${
							slotContext.state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'
						} ${!slotContext.state.maxValueLabelDisplay ? ' invisible' : ''}`}
					>
						<Slot slotContent={slotContext.state.slotLabel} props={{value: slotContext.state.max, ...slotContext}} />
					</div>
				</>
			) : (
				<></>
			)}
			{slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay ? (
				<div
					className={slotContext.state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'}
					style={{
						left: `${slotContext.state.combinedLabelPositionLeft}%`,
						top: `${slotContext.state.combinedLabelPositionTop}%`,
					}}
				>
					{slotContext.state.rtl ? (
						<>
							<Slot slotContent={slotContext.state.slotLabel} props={{value: slotContext.state.sortedValues[1], ...slotContext}} />
							{' - '}
							<Slot slotContent={slotContext.state.slotLabel} props={{value: slotContext.state.sortedValues[0], ...slotContext}} />
						</>
					) : (
						<>
							<Slot slotContent={slotContext.state.slotLabel} props={{value: slotContext.state.sortedValues[0], ...slotContext}} />
							{' - '}
							<Slot slotContent={slotContext.state.slotLabel} props={{value: slotContext.state.sortedValues[1], ...slotContext}} />
						</>
					)}
				</div>
			) : (
				<></>
			)}

			{slotContext.state.sortedHandles.map((item, i) => (
				<React.Fragment key={item.id}>
					<Slot slotContent={slotContext.state.slotHandle} props={{item, ...slotContext}} />
					{slotContext.state.showValueLabels && !slotContext.state.combinedLabelDisplay ? (
						<div
							className={slotContext.state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'}
							style={{
								left: `${slotContext.state.handleDisplayOptions[i].left}%`,
								top: `${slotContext.state.handleDisplayOptions[i].top}%`,
							}}
						>
							<Slot slotContent={slotContext.state.slotLabel} props={{value: slotContext.state.values[i], ...slotContext}} />
						</div>
					) : (
						<></>
					)}
				</React.Fragment>
			))}
		</>
	);
};

const defaultConfig: Partial<SliderProps> = {
	slotStructure: DefaultSlotStructure,
	slotHandle: DefaultSlotHandle,
};

export function Slider(props: PropsWithChildren<Partial<SliderProps>>) {
	const [state, widget] = useWidgetWithConfig(createSlider, props, 'slider', {...defaultConfig});
	const slotContext: SliderContext = {state, widget: toSlotContextWidget(widget)};

	const sliderSetRef = useDirective(widget.directives.sliderDirective);

	return (
		<div
			ref={sliderSetRef}
			className={`au-slider ${props.vertical ? 'au-slider-vertical' : 'au-slider-horizontal'} ${props.className ? props.className : ''} ${props.disabled ? ' disabled' : ''}`}
			aria-disabled={props.disabled ? 'true' : undefined}
		>
			<Slot slotContent={state.slotStructure} props={slotContext} />
		</div>
	);
}
