const e=`import {type ProgressbarProps, createProgressbar} from '@agnos-ui/react-headless/components/progressbar';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import classNames from 'classnames';
import {useMemo, type CSSProperties} from 'react';

export function RadialProgress(props: Partial<Pick<ProgressbarProps, 'min' | 'max' | 'ariaLabel' | 'value' | 'className' | 'ariaValueTextFn'>>) {
	const [state, widget] = useWidgetWithConfig(createProgressbar, props, 'progressbar');

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
		<div className={classNames('radial-progress', state.className)} style={style} {...useDirective(widget.directives.ariaDirective)}>
			{percentFormat.format(state.percentage / 100)}
		</div>
	);
}
`;export{e as default};
