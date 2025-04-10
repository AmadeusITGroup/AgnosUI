import {createToast} from '@agnos-ui/react-headless/components/toast';
import type {ToastProps} from '@agnos-ui/react-headless/components/toast';
import {useWidget} from '@agnos-ui/react-headless/config';
import CloseIcon from '@agnos-ui/common/samples/common/close_icon.svg?react';
import {type PropsWithChildren} from 'react';

export const Toast = (
	props: PropsWithChildren<Partial<Pick<ToastProps, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel' | 'onVisibleChange'>>>,
) => {
	const {state, api} = useWidget(createToast, props);
	return (
		<>
			{!state.hidden && (
				<div className={`alert ${state.className}`}>
					{props.children}
					{state.dismissible && (
						<button className="btn btn-circle btn-ghost btn-xs" onClick={api.close} aria-label={`${state.ariaCloseButtonLabel}`}>
							<CloseIcon />
						</button>
					)}
				</div>
			)}
		</>
	);
};
