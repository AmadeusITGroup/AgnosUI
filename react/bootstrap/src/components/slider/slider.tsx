import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import {useWidgetWithConfig} from '../../config';
import type {AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/react-headless/types';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import type {PropsWithChildren} from 'react';
import React from 'react';
import {Slot} from '@agnos-ui/react-headless/slot';
import type {ProgressDisplayOptions, SliderDirectives, SliderHandle} from '@agnos-ui/core-bootstrap/components/slider';
import {createSlider as coreCreateSlider} from '@agnos-ui/core-bootstrap/components/slider';

export * from '@agnos-ui/core-bootstrap/components/slider';

export type SliderWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/slider').SliderWidget>;
export type SliderProps = WidgetProps<SliderWidget>;
export type SliderState = WidgetState<SliderWidget>;
export type SliderContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/slider').SliderContext>;
export type SliderSlotLabelContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/slider').SliderSlotLabelContext>;
export type SliderSlotHandleContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/slider').SliderSlotHandleContext>;
export const createSlider: WidgetFactory<SliderWidget> = coreCreateSlider as any;

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
export const DefaultSlotStructure = (slotContext: SliderContext) => {
	const minSetRef = useDirective(slotContext.widget.directives.minLabelDirective);
	const maxSetRef = useDirective(slotContext.widget.directives.maxLabelDirective);
	const combinedHandleLabelDisplaySetRef = useDirective(slotContext.widget.directives.combinedHandleLabelDisplayDirective);

	return (
		<>
			{slotContext.state.progressDisplayOptions.map((option, index) => (
				<ProgressDisplay key={index} directive={slotContext.widget.directives.progressDisplayDirective} option={option} />
			))}
			<div {...useDirective(slotContext.widget.directives.clickableAreaDirective)} />
			{slotContext.state.showMinMaxLabels ? (
				<>
					<div {...minSetRef}>
						<Slot slotContent={slotContext.state.slotLabel} props={{value: slotContext.state.min, ...slotContext}} />
					</div>
					<div {...maxSetRef}>
						<Slot slotContent={slotContext.state.slotLabel} props={{value: slotContext.state.max, ...slotContext}} />
					</div>
				</>
			) : (
				<></>
			)}
			{slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay ? (
				<div {...combinedHandleLabelDisplaySetRef}>
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
						<HandleLabelDisplay directive={slotContext.widget.directives.handleLabelDisplayDirective} index={i}>
							<Slot slotContent={slotContext.state.slotLabel} props={{value: slotContext.state.values[i], ...slotContext}} />
						</HandleLabelDisplay>
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

	return (
		<div {...useDirective(widget.directives.sliderDirective)}>
			<Slot slotContent={state.slotStructure} props={slotContext} />
		</div>
	);
}
