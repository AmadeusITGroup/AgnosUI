import {Slot} from '@agnos-ui/react-headless/slot';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import classNames from 'classnames';
import {useWidgetWithConfig} from '../../config';
import type {ProgressbarContext, ProgressbarProps} from './progressbar.gen';
import {createProgressbar} from './progressbar.gen';

/**
 * Renders a progress bar component with customizable appearance and behavior.
 *
 * @param {ProgressbarContext} slotContext - The context containing the state and properties for the progress bar.
 *
 * @returns {JSX.Element} The rendered progress bar component.
 */
export const ProgressbarDefaultSlotStructure = (slotContext: ProgressbarContext) => {
	const {striped, animated, type} = slotContext.state;
	const classes = classNames('progress-bar', {'progress-bar-striped': striped}, {'progress-bar-animated': animated}, {[`text-bg-${type}`]: !!type});
	return (
		<div className="progress" style={{height: slotContext.state.height || undefined}}>
			<div className={classes} style={{width: `${slotContext.state.percentage}%`}}>
				<Slot slotContent={slotContext.state.children} props={slotContext} />
			</div>
		</div>
	);
};

/**
 * Progressbar component that utilizes the {@link useWidgetWithConfig} hook to create a progress bar widget.
 *
 * @param {Partial<ProgressbarProps>} props - The properties to configure the progress bar.
 *
 * @returns {JSX.Element} A div element containing the progress bar with appropriate ARIA directives and slot content.
 */
export const Progressbar = (props: Partial<ProgressbarProps>) => {
	const widgetContext = useWidgetWithConfig(createProgressbar, props, 'progressbar', {
		structure: ProgressbarDefaultSlotStructure,
	});
	const {state, directives} = widgetContext;
	return (
		<div {...useDirective(directives.ariaDirective)} className={state.className || undefined}>
			<Slot slotContent={state.structure} props={widgetContext} />
		</div>
	);
};
