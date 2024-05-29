import type {AlertProps} from '@agnos-ui/react-headless/components/alert';
import {createAlert} from '@agnos-ui/react-headless/components/alert';
import type {AlertWidget, AlertState} from '@agnos-ui/react-headless/components/alert';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {createSimpleClassTransition} from '@agnos-ui/react-headless/services/transitions/simpleClassTransition';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import CloseIcon from '@agnos-ui/common/samples/common/close_icon.svg?react';
import type {PropsWithChildren} from 'react';

const AlertContent = ({widget, state, children}: PropsWithChildren<{widget: AlertWidget; state: AlertState}>) => (
	<div role="alert" className={`flex alert ${state.className}`} {...useDirective(widget.directives.transitionDirective)}>
		{children}
		{state.dismissible && (
			<button className="btn btn-sm btn-circle btn-ghost ms-auto" onClick={widget.api.close} aria-label={`${state.ariaCloseButtonLabel}`}>
				<CloseIcon />
			</button>
		)}
	</div>
);

export const Alert = (
	props: PropsWithChildren<Partial<Pick<AlertProps, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel' | 'onVisibleChange'>>>,
) => {
	const transition = createSimpleClassTransition({
		showClasses: ['transition-opacity'],
		hideClasses: ['opacity-0'],
		animationPendingHideClasses: ['opacity-0', 'transition-opacity'],
	});

	const [state, widget] = useWidgetWithConfig(createAlert, props, 'alert', {transition});
	return (
		<>
			{!state.hidden && (
				<AlertContent widget={widget} state={state}>
					{props.children}
				</AlertContent>
			)}
		</>
	);
};
