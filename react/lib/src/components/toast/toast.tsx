import type {ToastApi, ToastContext, ToastProps} from '@agnos-ui/react-headless/components/toast';
import {createToast} from '@agnos-ui/react-headless/components/toast';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {ForwardRefExoticComponent, PropsWithChildren, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';

export * from '@agnos-ui/react-headless/components/toast';

const DefaultSlotStructure = (slotContext: ToastContext) => {
	const refCloseButton = useDirective(slotContext.widget.directives.closeButtonDirective);
	return (
		<>
			{slotContext.state.slotHeader && (
				<div className="toast-header">
					<Slot slotContent={slotContext.state.slotHeader} props={slotContext} />
					{slotContext.state.dismissible && <button className="btn-close me-0 ms-auto" {...refCloseButton} />}
				</div>
			)}

			<div className="toast-body">
				<Slot slotContent={slotContext.state.slotDefault} props={slotContext} />
			</div>
			{slotContext.state.dismissible && !slotContext.state.slotHeader && (
				<button className="btn-close btn-close-white me-2 m-auto" {...refCloseButton} />
			)}
		</>
	);
};

const defaultConfig: Partial<ToastProps> = {
	slotStructure: DefaultSlotStructure,
};

export const Toast: ForwardRefExoticComponent<PropsWithChildren<Partial<ToastProps>> & RefAttributes<ToastApi>> = forwardRef(function Toast(
	props: PropsWithChildren<Partial<ToastProps>>,
	ref,
) {
	const [state, widget] = useWidgetWithConfig(createToast, props, 'toast', {...defaultConfig, slotDefault: props.children});
	const refToast = useDirectives([widget.directives.transitionDirective, widget.directives.autoHideDirective, widget.directives.bodyDirective]);
	useImperativeHandle(ref, () => widget.api, []);
	const slotContext = {
		state,
		widget,
	};

	return (
		<>
			{!state.hidden && (
				<div className={`toast ${state.dismissible ? 'toast-dismissible' : ''} ${!state.slotHeader ? 'd-flex' : ''}`} {...refToast}>
					<Slot slotContent={state.slotStructure} props={slotContext} />
				</div>
			)}
		</>
	);
});
