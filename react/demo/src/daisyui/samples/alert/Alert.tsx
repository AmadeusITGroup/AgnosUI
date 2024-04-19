import type {AlertProps} from '@agnos-ui/react-headless/components/alert';
import {createAlert} from '@agnos-ui/react-headless/components/alert';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {createSimpleClassTransition} from '@agnos-ui/react-headless/services/transitions/simpleClassTransition';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
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
				<div role="alert" className={`alert ${state.className}`} {...transitionDirective}>
					{props.children}
					{state.dismissible && (
						<button
							className="btn btn-sm btn-circle btn-ghost justify-self-end"
							onClick={widget.api.close}
							aria-label={`${state.ariaCloseButtonLabel}`}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					)}
				</div>
			)}
		</>
	);
};
