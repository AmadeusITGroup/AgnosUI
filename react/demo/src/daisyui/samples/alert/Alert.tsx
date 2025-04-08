import type {AlertProps, AlertWidget} from '@agnos-ui/react-headless/components/alert';
import {createAlert} from '@agnos-ui/react-headless/components/alert';
import {useWidget} from '@agnos-ui/react-headless/config';
import {createSimpleClassTransition} from '@agnos-ui/react-headless/services/transitions/simpleClassTransition';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import CloseIcon from '@agnos-ui/common/samples/common/close_icon.svg?react';
import type {PropsWithChildren} from 'react';
import type {WidgetSlotContext} from '@agnos-ui/react-headless/types';

const AlertContent = ({state, api, directives, children}: PropsWithChildren<WidgetSlotContext<AlertWidget>>) => (
	<div role="alert" className={`alert ${state.className}`} {...useDirective(directives.transitionDirective)}>
		{children}
		{state.dismissible && (
			<button className="btn btn-circle btn-ghost btn-xs self-start" onClick={api.close} aria-label={`${state.ariaCloseButtonLabel}`}>
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

	const widget = useWidget(createAlert, props, {transition});
	return <>{!widget.state.hidden && <AlertContent {...widget}>{props.children}</AlertContent>}</>;
};
