import {Slot} from '@agnos-ui/react-headless/slot';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import {useDirective} from '@agnos-ui/react-headless/utils';
import type {PropsWithChildren} from 'react';
import React from 'react';
import {useWidgetWithConfig} from '../../config';
import type {ProgressDisplayOptions, SliderContext, SliderDirectives, SliderHandle, SliderProps, SliderSlotHandleContext} from './slider.gen';
import {createSlider} from './slider.gen';

export const DefaultSlotHandle = (slotContext: SliderSlotHandleContext) => {
	return <button {...useDirective<{item: SliderHandle}>(slotContext.widget.directives.handleDirective, {item: slotContext.item})}>&nbsp;</button>;
};

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
		<div {...useDirective(slotContext.widget.directives.minLabelDirective)}>
			<Slot slotContent={slotContext.state.label} props={{value: slotContext.state.min, ...slotContext}} />
		</div>
		<div {...useDirective(slotContext.widget.directives.maxLabelDirective)}>
			<Slot slotContent={slotContext.state.label} props={{value: slotContext.state.max, ...slotContext}} />
		</div>
	</>
);

const CombinedLabel = (slotContext: SliderContext) => (
	<div {...useDirective(slotContext.widget.directives.combinedHandleLabelDisplayDirective)}>
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

export const DefaultSlotStructure = (slotContext: SliderContext) => (
	<>
		{slotContext.state.progressDisplayOptions.map((option, index) => (
			<ProgressDisplay key={index} directive={slotContext.widget.directives.progressDisplayDirective} option={option} />
		))}
		<div {...useDirective(slotContext.widget.directives.clickableAreaDirective)} />
		{slotContext.state.showMinMaxLabels && <MinMaxLabels {...slotContext} />}
		{slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay && <CombinedLabel {...slotContext} />}

		{slotContext.state.sortedHandles.map((item, i) => (
			<React.Fragment key={item.id}>
				<Slot slotContent={slotContext.state.handle} props={{item, ...slotContext}} />
				{slotContext.state.showValueLabels && !slotContext.state.combinedLabelDisplay && (
					<HandleLabelDisplay directive={slotContext.widget.directives.handleLabelDisplayDirective} index={i}>
						<Slot slotContent={slotContext.state.label} props={{value: slotContext.state.values[i], ...slotContext}} />
					</HandleLabelDisplay>
				)}
			</React.Fragment>
		))}
	</>
);

const defaultConfig: Partial<SliderProps> = {
	structure: DefaultSlotStructure,
	handle: DefaultSlotHandle,
};

export function Slider(props: PropsWithChildren<Partial<SliderProps>>) {
	const [state, widget] = useWidgetWithConfig(createSlider, props, 'slider', {...defaultConfig});
	const slotContext: SliderContext = {state, widget: toSlotContextWidget(widget)};

	return (
		<div {...useDirective(widget.directives.sliderDirective)}>
			<Slot slotContent={state.structure} props={slotContext} />
		</div>
	);
}
