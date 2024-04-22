const e=`import type {AlertProps} from '@agnos-ui/react-headless/components/alert';
import {createAlert} from '@agnos-ui/react-headless/components/alert';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {createSimpleClassTransition} from '@agnos-ui/react-headless/services/transitions/simpleClassTransition';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import CloseIcon from './close_icon.svg?react';
import type {PropsWithChildren} from 'react';

export const Alert = (
	props: PropsWithChildren<Partial<Pick<AlertProps, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel' | 'onVisibleChange'>>>,
) => {
	const transition = createSimpleClassTransition({
		showClasses: ['transition-opacity'],
		hideClasses: ['opacity-0'],
		animationPendingHideClasses: ['opacity-0', 'transition-opacity'],
	});

	const [state, widget] = useWidgetWithConfig(createAlert, props, 'alert', {transition});
	const transitionDirective = useDirective(widget.directives.transitionDirective);
	return (
		<>
			{!state.hidden && (
				<div role="alert" className={\`flex alert \${state.className}\`} {...transitionDirective}>
					{props.children}
					{state.dismissible && (
						<button className="btn btn-sm btn-circle btn-ghost ms-auto" onClick={widget.api.close} aria-label={\`\${state.ariaCloseButtonLabel}\`}>
							<CloseIcon />
						</button>
					)}
				</div>
			)}
		</>
	);
};
`;export{e as default};
