import {useWidgetWithConfig} from '../../config';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useDirectives, classDirective} from '@agnos-ui/react-headless/utils/directive';
import type {ForwardRefExoticComponent, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import type {WidgetFactory} from '@agnos-ui/react-headless/types';
import {createToast as coreCreateToast, getToastDefaultConfig as coreGetToastDefaultConfig} from '@agnos-ui/core-bootstrap/components/toast';
import type {ToastWidget, ToastContext, ToastProps, ToastApi} from './toast.gen';

export type * from './toast.gen';
export const createToast: WidgetFactory<ToastWidget> = coreCreateToast as any;
export const getToastDefaultConfig: () => ToastProps = coreGetToastDefaultConfig as any;

const ToastHeader = (slotContext: ToastContext) => (
	<div className="toast-header">
		<Slot slotContent={slotContext.state.slotHeader} props={slotContext} />
		{slotContext.state.dismissible && (
			<button {...useDirectives([classDirective, 'btn-close me-0 ms-auto'], slotContext.widget.directives.closeButtonDirective)} />
		)}
	</div>
);

const ToastCloseButtonNoHeader = (slotContext: ToastContext) => (
	<button {...useDirectives([classDirective, 'btn-close btn-close-white me-2 m-auto'], slotContext.widget.directives.closeButtonDirective)} />
);

const DefaultSlotStructure = (slotContext: ToastContext) => (
	<>
		{slotContext.state.slotHeader && <ToastHeader {...slotContext} />}

		<div className="toast-body">
			<Slot slotContent={slotContext.state.children} props={slotContext} />
		</div>
		{slotContext.state.dismissible && !slotContext.state.slotHeader && <ToastCloseButtonNoHeader {...slotContext} />}
	</>
);

const defaultConfig: Partial<ToastProps> = {
	slotStructure: DefaultSlotStructure,
};

const ToastElement = (slotContext: ToastContext) => (
	<div
		{...useDirectives(
			[classDirective, `toast ${slotContext.state.dismissible ? 'toast-dismissible' : ''} ${!slotContext.state.slotHeader ? 'd-flex' : ''}`],
			slotContext.widget.directives.transitionDirective,
			slotContext.widget.directives.autoHideDirective,
			slotContext.widget.directives.bodyDirective,
		)}
	>
		<Slot slotContent={slotContext.state.slotStructure} props={slotContext} />
	</div>
);

export const Toast: ForwardRefExoticComponent<Partial<ToastProps> & RefAttributes<ToastApi>> = forwardRef(function Toast(
	props: Partial<ToastProps>,
	ref,
) {
	const [state, widget] = useWidgetWithConfig(createToast, props, 'toast', {...defaultConfig, children: props.children});
	useImperativeHandle(ref, () => widget.api, []);
	const slotContext = {
		state,
		widget,
	};

	return <>{!state.hidden && <ToastElement {...slotContext} />}</>;
});
