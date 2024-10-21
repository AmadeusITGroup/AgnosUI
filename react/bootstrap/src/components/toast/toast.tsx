import {Slot} from '@agnos-ui/react-headless/slot';
import {classDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {ForwardRefExoticComponent, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import {useWidgetWithConfig} from '../../config';
import type {ToastApi, ToastContext, ToastProps} from './toast.gen';
import {createToast} from './toast.gen';

const ToastHeader = (slotContext: ToastContext) => (
	<div className="toast-header">
		<Slot slotContent={slotContext.state.header} props={slotContext} />
		{slotContext.state.dismissible && (
			<button {...useDirectives([classDirective, 'btn-close me-0 ms-auto'], slotContext.directives.closeButtonDirective)} />
		)}
	</div>
);

const ToastCloseButtonNoHeader = (slotContext: ToastContext) => (
	<button {...useDirectives([classDirective, 'btn-close btn-close-white me-2 m-auto'], slotContext.directives.closeButtonDirective)} />
);

const DefaultSlotStructure = (slotContext: ToastContext) => (
	<>
		{slotContext.state.header && <ToastHeader {...slotContext} />}

		<div className="toast-body">
			<Slot slotContent={slotContext.state.children} props={slotContext} />
		</div>
		{slotContext.state.dismissible && !slotContext.state.header && <ToastCloseButtonNoHeader {...slotContext} />}
	</>
);

const defaultConfig: Partial<ToastProps> = {
	structure: DefaultSlotStructure,
};

const ToastElement = (slotContext: ToastContext) => (
	<div
		{...useDirectives(
			[classDirective, `toast ${slotContext.state.dismissible ? 'toast-dismissible' : ''} ${!slotContext.state.header ? 'd-flex' : ''}`],
			slotContext.directives.transitionDirective,
			slotContext.directives.autoHideDirective,
			slotContext.directives.bodyDirective,
		)}
	>
		<Slot slotContent={slotContext.state.structure} props={slotContext} />
	</div>
);

export const Toast: ForwardRefExoticComponent<Partial<ToastProps> & RefAttributes<ToastApi>> = forwardRef(function Toast(
	props: Partial<ToastProps>,
	ref,
) {
	const widgetContext = useWidgetWithConfig(createToast, props, 'toast', {...defaultConfig, children: props.children});
	useImperativeHandle(ref, () => widgetContext.api, []);

	return <>{!widgetContext.state.hidden && <ToastElement {...widgetContext} />}</>;
});
