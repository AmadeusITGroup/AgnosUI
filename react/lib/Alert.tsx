import type {AlertContext as AlertCoreContext, WidgetProps} from '@agnos-ui/core';
import {createAlert} from '@agnos-ui/core';
import type {PropsWithChildren} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import type {AdaptSlotContentProps, AdaptWidgetSlots} from './Slot';
import {Slot} from './Slot';
import {useDirective, useWidgetWithConfig} from './utils';

export type AlertContext = AdaptSlotContentProps<AlertCoreContext>;
export type AlertWidget = AdaptWidgetSlots<ReturnType<typeof createAlert>>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertState = WidgetProps<AlertWidget>;

export interface AlertReactProps extends AlertProps, Omit<React.HTMLAttributes<HTMLUListElement>, 'className'> {}

const DefaultSlotStructure = (slotContext: AlertContext) => (
	<>
		<div className="alert-body">
			<Slot slotContent={slotContext.state.slotDefault} props={slotContext}></Slot>
		</div>
		{slotContext.state.dismissible ? (
			<button
				type="button"
				className="btn-close ms-auto"
				onClick={slotContext.widget.api.close}
				aria-label={slotContext.state.ariaCloseButtonLabel}
			></button>
		) : null}
	</>
);

const defaultConfig: Partial<AlertProps> = {
	slotStructure: DefaultSlotStructure,
};

export const Alert = forwardRef(function Alert(props: PropsWithChildren<Partial<AlertProps>>, ref) {
	const [state, widget] = useWidgetWithConfig(createAlert, props, 'alert', {...defaultConfig, slotDefault: props.children});
	const refTransition = useDirective(widget.directives.transitionDirective);
	useImperativeHandle(ref, () => widget.api, []);
	const slotContext = {
		state,
		widget,
	};

	return (
		<>
			{state.hidden ? null : (
				<div className={`d-flex alert w-100 alert-${state.type}`} ref={refTransition}>
					<Slot slotContent={state.slotStructure} props={slotContext}></Slot>
				</div>
			)}
		</>
	);
});
