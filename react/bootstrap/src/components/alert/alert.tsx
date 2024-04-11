import {Slot} from '@agnos-ui/react-headless/slot';
import {useWidgetWithConfig} from '../../config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import type {PropsWithChildren, ForwardedRef, ForwardRefExoticComponent, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import {createAlert as coreCreateAlert} from '@agnos-ui/core-bootstrap/components/alert';
import type {AlertApi} from '@agnos-ui/core-bootstrap/components/alert';
import type {AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/react-headless/types';

export * from '@agnos-ui/core-bootstrap/components/alert';

export type AlertWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/alert').AlertWidget>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertState = WidgetState<AlertWidget>;
export type AlertContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/alert').AlertContext>;
export const createAlert: WidgetFactory<AlertWidget> = coreCreateAlert as any;

const DefaultSlotStructure = (slotContext: AlertContext) => (
	<>
		<div className="alert-body">
			<Slot slotContent={slotContext.state.slotDefault} props={slotContext}></Slot>
		</div>
		{slotContext.state.dismissible ? (
			<button type="button" className="btn-close" onClick={slotContext.widget.api.close} aria-label={slotContext.state.ariaCloseButtonLabel}></button>
		) : null}
	</>
);

const defaultConfig: Partial<AlertProps> = {
	slotStructure: DefaultSlotStructure,
};

export const Alert: ForwardRefExoticComponent<PropsWithChildren<Partial<AlertProps>> & RefAttributes<AlertApi>> = forwardRef(function Alert(
	props: PropsWithChildren<Partial<AlertProps>>,
	ref: ForwardedRef<AlertApi>,
) {
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
				<div
					className={`au-alert alert alert-${state.type} ${state.className} ${state.dismissible ? 'alert-dismissible' : ''}`}
					role="alert"
					{...refTransition}
				>
					<Slot slotContent={state.slotStructure} props={slotContext}></Slot>
				</div>
			)}
		</>
	);
});
