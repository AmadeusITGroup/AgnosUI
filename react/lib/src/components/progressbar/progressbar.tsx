import {type PropsWithChildren} from 'react';
import type {ProgressbarContext, ProgressbarProps} from '@agnos-ui/react-headless/components/progressbar';
import {createProgressbar} from '@agnos-ui/react-headless/components/progressbar';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import classNames from 'classnames';

export * from '@agnos-ui/react-headless/components/progressbar';

function DefaultSlotContent(slotContext: ProgressbarContext) {
	const {striped, animated, className} = slotContext.state;
	const classes = classNames('progress-bar', {'progress-bar-striped': striped}, {'progress-bar-animated': animated}, className);
	return (
		<div className="progress" style={{height: slotContext.state.height}}>
			<div className={classes} style={{width: `${slotContext.state.percentage}%`}}>
				<Slot slotContent={slotContext.state.slotDefault} props={slotContext} />
			</div>
		</div>
	);
}

const defaultConfig: Partial<ProgressbarProps> = {
	slotStructure: DefaultSlotContent,
};

export const Progressbar = (props: PropsWithChildren<Partial<ProgressbarProps>>) => {
	const [state, widget] = useWidgetWithConfig(createProgressbar, props, 'progressbar', {...defaultConfig, slotDefault: props.children});
	const slotContext: ProgressbarContext = {state, widget: toSlotContextWidget(widget)};
	return (
		<div {...useDirective(widget.directives.ariaDirective)}>
			<Slot slotContent={state.slotStructure} props={slotContext} />
		</div>
	);
};
