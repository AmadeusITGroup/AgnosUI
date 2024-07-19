import {Slot} from '@agnos-ui/react-headless/slot';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import classNames from 'classnames';
import {useWidgetWithConfig} from '../../config';
import type {ProgressbarContext, ProgressbarProps} from './progressbar.gen';
import {createProgressbar} from './progressbar.gen';

function DefaultSlotContent(slotContext: ProgressbarContext) {
	const {striped, animated, type} = slotContext.state;
	const classes = classNames('progress-bar', {'progress-bar-striped': striped}, {'progress-bar-animated': animated}, {[`text-bg-${type}`]: !!type});
	return (
		<div className="progress" style={{height: slotContext.state.height || undefined}}>
			<div className={classes} style={{width: `${slotContext.state.percentage}%`}}>
				<Slot slotContent={slotContext.state.children} props={slotContext} />
			</div>
		</div>
	);
}

const defaultConfig: Partial<ProgressbarProps> = {
	structure: DefaultSlotContent,
};

export const Progressbar = (props: Partial<ProgressbarProps>) => {
	const [state, widget] = useWidgetWithConfig(createProgressbar, props, 'progressbar', defaultConfig);
	const slotContext: ProgressbarContext = {state, widget: toSlotContextWidget(widget)};
	return (
		<div {...useDirective(widget.directives.ariaDirective)} className={state.className || undefined}>
			<Slot slotContent={state.structure} props={slotContext} />
		</div>
	);
};
