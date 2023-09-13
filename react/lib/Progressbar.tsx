import type {ProgressbarContext as ProgressbarCoreContext, WidgetProps, WidgetState} from '@agnos-ui/core';
import {createProgressbar, toSlotContextWidget} from '@agnos-ui/core';
import {type PropsWithChildren} from 'react';
import type {AdaptSlotContentProps, AdaptWidgetSlots} from './Slot';
import {Slot} from './Slot';
import {useWidgetWithConfig} from './utils';

export type ProgressbarContext = AdaptSlotContentProps<ProgressbarCoreContext>;
export type ProgressbarWidget = AdaptWidgetSlots<ReturnType<typeof createProgressbar>>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;
export type ProgressbarState = WidgetState<ProgressbarWidget>;

function DefaultSlotContent(slotContext: ProgressbarContext) {
	const classList = ['progress-bar'];
	if (slotContext.state.striped) {
		classList.push('progress-bar-striped');
	}
	if (slotContext.state.animated) {
		classList.push('progress-bar-animated');
	}
	if (slotContext.state.className) {
		classList.push(slotContext.state.className);
	}
	return (
		<div className="progress" style={{height: slotContext.state.height}}>
			<div className={classList.join(' ')} style={{width: `${slotContext.state.percentage}%`}}>
				<Slot slotContent={slotContext.state.slotDefault} props={slotContext} />
				{slotContext.state.showValue ? <>{slotContext.state.percentage}%</> : null}
			</div>
		</div>
	);
}

const defaultConfig: Partial<ProgressbarProps> = {
	slotContent: DefaultSlotContent,
};

export const Progressbar = (props: PropsWithChildren<Partial<ProgressbarProps>>) => {
	const [state, widget] = useWidgetWithConfig(createProgressbar, props, 'progressbar', {...defaultConfig, slotDefault: props.children});
	const slotContext: ProgressbarContext = {state, widget: toSlotContextWidget(widget)};
	return (
		<div
			role="progressbar"
			aria-label={state.ariaLabel || undefined}
			aria-valuenow={state.value}
			aria-valuemin={state.min}
			aria-valuemax={state.max}
			aria-valuetext={state.ariaValueText}
		>
			<Slot slotContent={state.slotContent} props={slotContext} />
		</div>
	);
};
