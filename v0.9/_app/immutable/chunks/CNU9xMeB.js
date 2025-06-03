const e=`import {type ProgressbarProps, createProgressbar} from '@agnos-ui/react-headless/components/progressbar';
import {useWidget} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import clsx from 'clsx';
import {useMemo, type CSSProperties} from 'react';

export function RadialProgress(props: Partial<ProgressbarProps>) {
	const {state, directives} = useWidget(createProgressbar, props);

	const percentFormat = useMemo(
		() =>
			new Intl.NumberFormat('default', {
				style: 'percent',
				minimumFractionDigits: 0,
				maximumFractionDigits: 1,
			}),
		[],
	);
	const style = {
		['--thickness']: '0.4rem',
		['--value']: state.percentage,
	} as CSSProperties;
	return (
		<div className={clsx('radial-progress', state.className)} style={style} {...useDirective(directives.ariaDirective)}>
			{percentFormat.format(state.percentage / 100)}
		</div>
	);
}
`;export{e as default};
