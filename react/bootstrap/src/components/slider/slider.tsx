import {Slot} from '@agnos-ui/react-headless/slot';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import clsx from 'clsx';
import type {PropsWithChildren} from 'react';
import React from 'react';
import {useWidget} from '../../config';
import type {
	ProgressDisplayOptions,
	SliderContext,
	SliderDirectives,
	SliderHandle,
	SliderProps,
	SliderSlotHandleContext,
	SliderSlotTickContext,
	SliderTick,
} from './slider.gen';
import {createSlider} from './slider.gen';

/**
 * A functional component that renders a button element with a directive applied to it.
 * The directive is provided through the `slotContext` parameter.
 *
 * @param slotContext - The context object containing the directives and item for the slider handle.
 * @returns A button element with the applied directive.
 */
export const SliderDefaultSlotHandle = (slotContext: SliderSlotHandleContext) => {
	return <button {...useDirective<{item: SliderHandle}>(slotContext.directives.handleDirective, {item: slotContext.item})}></button>;
};

const TickLabelDisplay = ({directive, tick}: {directive: SliderDirectives['tickLabelDirective']; tick: SliderTick}) => {
	return <span {...useDirective<{tick: SliderTick}>(directive, {tick})}>{tick.value}</span>;
};

/**
 * A functional component that renders a tick element with a directive applied to it.
 * The directive is provided through the `slotContext` parameter.
 *
 * @param slotContext - The context object containing the directives and item for the slider tick.
 * @returns A tick element with the applied directive.
 */
export const SliderDefaultTick = (slotContext: SliderSlotTickContext) => (
	<>
		{slotContext.tick.displayLabel && <TickLabelDisplay directive={slotContext.directives.tickLabelDirective} tick={slotContext.tick} />}
		<span {...useDirective<{tick: SliderTick}>(slotContext.directives.tickDirective, {tick: slotContext.tick})}>
			<svg xmlns="http://www.w3.org/2000/svg">
				<circle
					className={clsx(
						'au-slider-tick-outer',
						{'au-slider-tick-disabled': slotContext.state.disabled},
						{'au-slider-tick-selected': slotContext.tick.selected},
					)}
				/>
				{slotContext.tick.selected && <circle className="au-slider-tick-inner au-slider-tick-selected" />}
			</svg>
		</span>
	</>
);

const ProgressDisplay = ({directive, option}: {directive: SliderDirectives['progressDisplayDirective']; option: ProgressDisplayOptions}) => {
	return <div {...useDirective(directive, {option})} />;
};
const HandleLabelDisplay = ({
	directive,
	index,
	children,
}: {
	directive: SliderDirectives['handleLabelDisplayDirective'];
	index: number;
	children: React.ReactNode;
}) => {
	return <div {...useDirective(directive, {index})}>{children}</div>;
};

const MinMaxLabels = (slotContext: SliderContext) => (
	<>
		<div {...useDirective(slotContext.directives.minLabelDirective)}>
			<Slot slotContent={slotContext.state.label} props={{value: slotContext.state.min, ...slotContext}} />
		</div>
		<div {...useDirective(slotContext.directives.maxLabelDirective)}>
			<Slot slotContent={slotContext.state.label} props={{value: slotContext.state.max, ...slotContext}} />
		</div>
	</>
);

const CombinedLabel = (slotContext: SliderContext) => (
	<div {...useDirective(slotContext.directives.combinedHandleLabelDisplayDirective)}>
		{slotContext.state.rtl ? (
			<>
				<Slot slotContent={slotContext.state.label} props={{value: slotContext.state.sortedValues[1], ...slotContext}} />
				{' - '}
				<Slot slotContent={slotContext.state.label} props={{value: slotContext.state.sortedValues[0], ...slotContext}} />
			</>
		) : (
			<>
				<Slot slotContent={slotContext.state.label} props={{value: slotContext.state.sortedValues[0], ...slotContext}} />
				{' - '}
				<Slot slotContent={slotContext.state.label} props={{value: slotContext.state.sortedValues[1], ...slotContext}} />
			</>
		)}
	</div>
);

/**
 * Renders the default slot structure for the Slider component.
 *
 * @param slotContext - The context object containing state and directives for the slider.
 * @returns The JSX element representing the default slot structure.
 *
 */
export const SliderDefaultSlotStructure = (slotContext: SliderContext) => (
	<>
		{slotContext.state.progressDisplayOptions.map((option) => (
			<ProgressDisplay key={option.id} directive={slotContext.directives.progressDisplayDirective} option={option} />
		))}
		<div {...useDirective(slotContext.directives.clickableAreaDirective)} />
		{slotContext.state.showMinMaxLabels && <MinMaxLabels {...slotContext} />}
		{slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay && <CombinedLabel {...slotContext} />}
		{slotContext.state.ticks.map((tick) => (
			<Slot key={tick.position} slotContent={slotContext.state.tick} props={{tick, ...slotContext}} />
		))}
		{slotContext.state.sortedHandles.map((item, i) => (
			<React.Fragment key={item.id}>
				<Slot slotContent={slotContext.state.handle} props={{item, ...slotContext}} />
				{slotContext.state.showValueLabels && (
					<HandleLabelDisplay directive={slotContext.directives.handleLabelDisplayDirective} index={i}>
						<Slot slotContent={slotContext.state.label} props={{value: slotContext.state.values[i], ...slotContext}} />
					</HandleLabelDisplay>
				)}
			</React.Fragment>
		))}
	</>
);

/**
 * Slider component that integrates with a widget context and renders a slot structure.
 *
 * @param props - The properties for the Slider component.
 * @returns The rendered Slider component.
 *
 * The Slider component uses the {@link useWidget} hook to create a widget context with the provided
 * configuration. It then applies the `sliderDirective` to a `div` element and renders the slot content
 * using the `Slot` component.
 */
export function Slider(props: PropsWithChildren<Partial<SliderProps>>) {
	const widgetContext = useWidget(createSlider, props, {
		structure: SliderDefaultSlotStructure,
		handle: SliderDefaultSlotHandle,
		tick: SliderDefaultTick,
	});

	return (
		<div {...useDirective(widgetContext.directives.containerDirective)}>
			<div {...useDirective(widgetContext.directives.sliderDirective)}>
				<Slot slotContent={widgetContext.state.structure} props={widgetContext} />
			</div>
		</div>
	);
}
