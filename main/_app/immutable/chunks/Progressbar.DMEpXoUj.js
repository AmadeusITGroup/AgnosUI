const s=`import {type ProgressbarProps, createProgressbar} from '@agnos-ui/react-headless/components/progressbar';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import classNames from 'classnames';

export function Progressbar(props: Partial<Omit<ProgressbarProps, 'min'>>) {
	const {state, directives} = useWidgetWithConfig(createProgressbar, props, 'progressbar');
	return (
		<progress className={classNames('progress', state.className)} value={state.value} max={state.max} {...useDirective(directives.ariaDirective)} />
	);
}
`;export{s as default};
