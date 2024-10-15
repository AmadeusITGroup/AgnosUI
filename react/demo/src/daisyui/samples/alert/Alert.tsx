import type {AlertApi, AlertState, AlertDirectives, AlertProps} from '@agnos-ui/react-headless/components/alert';
import {createAlert} from '@agnos-ui/react-headless/components/alert';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {createSimpleClassTransition} from '@agnos-ui/react-headless/services/transitions/simpleClassTransition';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import CloseIcon from '@agnos-ui/common/samples/common/close_icon.svg?react';
import type {PropsWithChildren} from 'react';

const AlertContent = ({state, children, api, directives}: PropsWithChildren<{api: AlertApi; state: AlertState; directives: AlertDirectives}>) => (
	<div role="alert" className={`flex alert ${state.className}`} {...useDirective(directives.transitionDirective)}>
		{children}
		{state.dismissible && (
			<button className="btn btn-sm btn-circle btn-ghost ms-auto" onClick={api.close} aria-label={`${state.ariaCloseButtonLabel}`}>
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

	const {state, api, directives} = useWidgetWithConfig(createAlert, props, 'alert', {transition});
	return (
		<>
			{!state.hidden && (
				<AlertContent api={api} directives={directives} state={state}>
					{props.children}
				</AlertContent>
			)}
		</>
	);
};
