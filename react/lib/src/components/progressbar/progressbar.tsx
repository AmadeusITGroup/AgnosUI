import {type PropsWithChildren} from 'react';
import type {ProgressbarContext, ProgressbarProps} from '@agnos-ui/react-headless/components/progressbar';
import {createProgressbar} from '@agnos-ui/react-headless/components/progressbar';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import {Slot} from '@agnos-ui/react-headless/slot';

export * from '@agnos-ui/react-headless/components/progressbar';

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
