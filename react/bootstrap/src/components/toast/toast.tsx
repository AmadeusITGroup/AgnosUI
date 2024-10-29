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

/**
 * Renders the default slot structure for a Toast component.
 *
 * @param {ToastContext} slotContext - The context containing the state and properties for the Toast component.
 * @returns {JSX.Element} The JSX element representing the default slot structure of the Toast.
 */
export const ToastDefaultSlotStructure = (slotContext: ToastContext) => (
	<>
		{slotContext.state.header && <ToastHeader {...slotContext} />}

		<div className="toast-body">
			<Slot slotContent={slotContext.state.children} props={slotContext} />
		</div>
		{slotContext.state.dismissible && !slotContext.state.header && <ToastCloseButtonNoHeader {...slotContext} />}
	</>
);

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

/**
 * Toast component that uses a forward ref to expose the Toast API.
 *
 * This component utilizes the {@link useWidgetWithConfig} hook to create a toast widget
 * with the provided properties and configuration. It also uses {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle}
 * to expose the widget's API through the forwarded ref.
 *
 * @param props - Partial properties of `ToastProps` to configure the toast widget.
 * @param ref - Ref to expose the Toast API.
 *
 * @returns A JSX element that conditionally renders the `ToastElement` based on the widget's state.
 */
export const Toast: ForwardRefExoticComponent<Partial<ToastProps> & RefAttributes<ToastApi>> = forwardRef(function Toast(
	props: Partial<ToastProps>,
	ref,
) {
	const widgetContext = useWidgetWithConfig(createToast, props, 'toast', {
		structure: ToastDefaultSlotStructure,
		children: props.children,
	});
	useImperativeHandle(ref, () => widgetContext.api, []);

	return <>{!widgetContext.state.hidden && <ToastElement {...widgetContext} />}</>;
});
