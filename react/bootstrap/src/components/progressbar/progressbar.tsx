import {Slot} from '@agnos-ui/react-headless/slot';
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
	const widgetContext = useWidgetWithConfig(createProgressbar, props, 'progressbar', defaultConfig);
	const {state, directives} = widgetContext;
	return (
		<div {...useDirective(directives.ariaDirective)} className={state.className || undefined}>
			<Slot slotContent={state.structure} props={widgetContext} />
		</div>
	);
};
