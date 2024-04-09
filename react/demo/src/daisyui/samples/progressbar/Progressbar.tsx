import {type ProgressbarProps, createProgressbar} from '@agnos-ui/react-headless/components/progressbar';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import classNames from 'classnames';

export function Progressbar(props: Partial<Pick<ProgressbarProps, 'max' | 'ariaLabel' | 'value' | 'className' | 'ariaValueTextFn'>>) {
	const [state, widget] = useWidgetWithConfig(createProgressbar, props, 'progressbar');
	return (
		<progress
			className={classNames('progress', state.className)}
			value={state.value}
			max={state.max}
			{...useDirective(widget.directives.ariaDirective)}
		/>
	);
}
