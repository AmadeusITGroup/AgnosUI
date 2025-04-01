const t=`import {createToast} from '@agnos-ui/react-headless/components/toast';
import type {ToastProps} from '@agnos-ui/react-headless/components/toast';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import CloseIcon from './close_icon.svg?react';
import {type PropsWithChildren} from 'react';

export const Toast = (
	props: PropsWithChildren<Partial<Pick<ToastProps, 'className' | 'visible' | 'dismissible' | 'ariaCloseButtonLabel' | 'onVisibleChange'>>>,
) => {
	const {state, api} = useWidgetWithConfig(createToast, props, 'toast');
	return (
		<>
			{!state.hidden && (
				<div className={\`alert \${state.className}\`}>
					{props.children}
					{state.dismissible && (
						<button className="btn btn-circle btn-ghost btn-xs" onClick={api.close} aria-label={\`\${state.ariaCloseButtonLabel}\`}>
							<CloseIcon />
						</button>
					)}
				</div>
			)}
		</>
	);
};
`;export{t as default};
