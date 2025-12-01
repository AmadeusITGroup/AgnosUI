import {Slot} from '@agnos-ui/react-headless/slot';
import {classDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import {type Ref, useImperativeHandle} from 'react';
import {useWidget} from '../../config';
import type {ToastApi, ToastContext, ToastProps} from './toast.gen';
import {createToast} from './toast.gen';

const ToastHeaderContent = (slotContext: ToastContext) => (
	<button {...useDirectives([classDirective, 'btn-close me-0 ms-auto'], slotContext.directives.closeButtonDirective)} />
);

const ToastHeader = (slotContext: ToastContext) => (
	<div className="toast-header">
		<Slot slotContent={slotContext.state.header} props={slotContext} />
		{slotContext.state.dismissible && <ToastHeaderContent {...slotContext} />}
	</div>
);

const ToastCloseButtonNoHeader = (slotContext: ToastContext) => (
	<button {...useDirectives([classDirective, 'btn-close btn-close-white me-2 m-auto'], slotContext.directives.closeButtonDirective)} />
);

/**
 * Renders the default slot structure for a Toast component.
 *
 * @param slotContext - The context containing the state and properties for the Toast component.
 * @returns The JSX element representing the default slot structure of the Toast.
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
			[classDirective, {'toast-dismissible': slotContext.state.dismissible, 'd-flex': !slotContext.state.header}],
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
 * This component utilizes the {@link useWidget} hook to create a toast widget
 * with the provided properties and configuration. It also uses {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle}
 * to expose the widget's API through the forwarded ref.
 *
 * @param props - Partial properties of `ToastProps` to configure the toast widget.
 * @param props.ref - Ref to the Toast API.
 *
 * @returns A JSX element that conditionally renders the `ToastElement` based on the widget's state.
 */
export function Toast({ref, ...props}: Partial<ToastProps> & {ref?: Ref<ToastApi>}) {
	const widgetContext = useWidget(createToast, props, {
		structure: ToastDefaultSlotStructure,
		children: props.children,
	});
	useImperativeHandle(ref, () => widgetContext.api, [widgetContext.api]);

	return <>{!widgetContext.state.hidden && <ToastElement {...widgetContext} />}</>;
}
