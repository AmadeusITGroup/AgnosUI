import type {ToastApi, ToastContext, ToastProps} from '@agnos-ui/react-headless/components/toast';
import {createToast} from '@agnos-ui/react-headless/components/toast';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {ForwardRefExoticComponent, PropsWithChildren, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';

export * from '@agnos-ui/react-headless/components/toast';

const DefaultSlotStructure = (slotContext: ToastContext) => (
	<>
		{slotContext.state.slotHeader ? (
			<div className="toast-header">
				<Slot slotContent={slotContext.state.slotHeader} props={slotContext}></Slot>
				{slotContext.state.dismissible ? (
					<button
						type="button"
						className="btn-close me-0 ms-auto"
						onClick={slotContext.widget.api.close}
						aria-label={slotContext.state.ariaCloseButtonLabel}
					></button>
				) : null}
			</div>
		) : null}

		<div className="toast-body">
			<Slot slotContent={slotContext.state.slotDefault} props={slotContext}></Slot>
		</div>
		{slotContext.state.dismissible && !slotContext.state.slotHeader ? (
			<button
				type="button"
				className="btn-close btn-close-white me-2 m-auto"
				onClick={slotContext.widget.api.close}
				aria-label={slotContext.state.ariaCloseButtonLabel}
			></button>
		) : null}
	</>
);

const defaultConfig: Partial<ToastProps> = {
	slotStructure: DefaultSlotStructure,
};

export const Toast: ForwardRefExoticComponent<PropsWithChildren<Partial<ToastProps>> & RefAttributes<ToastApi>> = forwardRef(function Toast(
	props: PropsWithChildren<Partial<ToastProps>>,
	ref,
) {
	const [state, widget] = useWidgetWithConfig(createToast, props, 'toast', {...defaultConfig, slotDefault: props.children});
	const refToast = useDirectives([widget.directives.transitionDirective, widget.directives.autoHideDirective]);
	useImperativeHandle(ref, () => widget.api, []);
	const slotContext = {
		state,
		widget,
	};

	return (
		<>
			{state.hidden ? null : (
				<div
					className={`au-toast toast ${state.className} ${state.dismissible ? 'toast-dismissible' : ''} ${!state.slotHeader ? 'd-flex' : ''}`}
					role="alert"
					ref={refToast}
					aria-atomic="true"
				>
					<Slot slotContent={state.slotStructure} props={slotContext}></Slot>
				</div>
			)}
		</>
	);
});
