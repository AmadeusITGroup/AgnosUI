import {useWidgetWithConfig} from '../../config';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {ForwardRefExoticComponent, PropsWithChildren, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import type {AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/react-headless/types';
import type {ToastApi} from '@agnos-ui/core-bootstrap/components/toast';
import {createToast as coreCreateToast} from '@agnos-ui/core-bootstrap/components/toast';

export * from '@agnos-ui/core-bootstrap/components/toast';

export type ToastWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/toast').ToastWidget>;
export type ToastProps = WidgetProps<ToastWidget>;
export type ToastState = WidgetState<ToastWidget>;
export type ToastContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/toast').ToastContext>;
export const createToast: WidgetFactory<ToastWidget> = coreCreateToast as any;

const ToastHeader = (slotContext: ToastContext) => (
	<div className="toast-header">
		<Slot slotContent={slotContext.state.slotHeader} props={slotContext} />
		{slotContext.state.dismissible && (
			<button className="btn-close me-0 ms-auto" {...useDirective(slotContext.widget.directives.closeButtonDirective)} />
		)}
	</div>
);

const ToastCloseButtonNoHeader = (slotContext: ToastContext) => (
	<button className="btn-close btn-close-white me-2 m-auto" {...useDirective(slotContext.widget.directives.closeButtonDirective)} />
);

const DefaultSlotStructure = (slotContext: ToastContext) => (
	<>
		{slotContext.state.slotHeader && <ToastHeader {...slotContext} />}

		<div className="toast-body">
			<Slot slotContent={slotContext.state.slotDefault} props={slotContext} />
		</div>
		{slotContext.state.dismissible && !slotContext.state.slotHeader && <ToastCloseButtonNoHeader {...slotContext} />}
	</>
);

const defaultConfig: Partial<ToastProps> = {
	slotStructure: DefaultSlotStructure,
};

const ToastElement = (slotContext: ToastContext) => (
	<div
		className={`toast ${slotContext.state.dismissible ? 'toast-dismissible' : ''} ${!slotContext.state.slotHeader ? 'd-flex' : ''}`}
		{...useDirectives([
			slotContext.widget.directives.transitionDirective,
			slotContext.widget.directives.autoHideDirective,
			slotContext.widget.directives.bodyDirective,
		])}
	>
		<Slot slotContent={slotContext.state.slotStructure} props={slotContext} />
	</div>
);

export const Toast: ForwardRefExoticComponent<PropsWithChildren<Partial<ToastProps>> & RefAttributes<ToastApi>> = forwardRef(function Toast(
	props: PropsWithChildren<Partial<ToastProps>>,
	ref,
) {
	const [state, widget] = useWidgetWithConfig(createToast, props, 'toast', {...defaultConfig, slotDefault: props.children});
	useImperativeHandle(ref, () => widget.api, []);
	const slotContext = {
		state,
		widget,
	};

	return <>{!state.hidden && <ToastElement {...slotContext} />}</>;
});
