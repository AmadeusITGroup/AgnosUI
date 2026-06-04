const e=`import {type ProgressbarProps, createProgressbar} from '@agnos-ui/react-headless/components/progressbar';
import {useWidget} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import clsx from 'clsx';

export function Progressbar(props: Partial<Omit<ProgressbarProps, 'min'>>) {
	const {state, directives} = useWidget(createProgressbar, props);
	return <progress className={clsx('progress', state.className)} value={state.value} max={state.max} {...useDirective(directives.ariaDirective)} />;
}
`;export{e as default};
