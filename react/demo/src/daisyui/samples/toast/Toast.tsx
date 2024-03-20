import {type ToastApi, createToast} from '@agnos-ui/react-headless/components/toast';
import type {ToastProps} from '@agnos-ui/react-headless/components/toast';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {type ForwardedRef, type ReactNode, forwardRef, useImperativeHandle} from 'react';

export const Toast = forwardRef(function Toast(
	props: Partial<Pick<ToastProps, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel'>> & {children?: ReactNode},
	ref: ForwardedRef<ToastApi>,
) {
	const [state, {api}] = useWidgetWithConfig(createToast, props, 'toast', {});
	useImperativeHandle(ref, () => api, []);
	return (
		<>
			{!state.hidden ? (
				<div className={`alert ${state.className}`}>
					{props.children}

					{state.dismissible ? (
						<button className="btn btn-sm btn-circle btn-ghost justify-self-end" onClick={api.close} aria-label={`${state.ariaCloseButtonLabel}`}>
							✕
						</button>
					) : (
						<></>
					)}
				</div>
			) : (
				<></>
			)}
		</>
	);
});
