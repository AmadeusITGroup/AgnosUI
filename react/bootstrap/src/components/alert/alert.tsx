import {Slot} from '@agnos-ui/react-headless/slot';
import {classDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {ForwardedRef, ForwardRefExoticComponent, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import {useWidgetWithConfig} from '../../config';
import type {AlertApi, AlertContext, AlertProps} from './alert.gen';
import {createAlert} from './alert.gen';

/**
 * Renders the default slot structure for an alert component.
 *
 * @param slotContext - The context object containing state and API for the alert.
 * @returns A JSX element representing the alert's body and an optional close button.
 */
export const AlertDefaultSlotStructure = (slotContext: AlertContext) => (
	<>
		<div className="alert-body">
			<Slot slotContent={slotContext.state.children} props={slotContext}></Slot>
		</div>
		{slotContext.state.dismissible && (
			<button type="button" className="btn-close" onClick={slotContext.api.close} aria-label={slotContext.state.ariaCloseButtonLabel}></button>
		)}
	</>
);

const AlertElement = (slotContext: AlertContext) => (
	<div
		role="alert"
		{...useDirectives(
			[
				classDirective,
				`au-alert alert alert-${slotContext.state.type} ${slotContext.state.className} ${slotContext.state.dismissible ? 'alert-dismissible' : ''}`,
			],
			slotContext.directives.transitionDirective,
		)}
	>
		<Slot slotContent={slotContext.state.structure} props={slotContext}></Slot>
	</div>
);

/**
 * Alert component that uses a forward ref to expose an API.
 *
 * This component utilizes the {@link useWidgetWithConfig} hook to create an alert widget context
 * and the {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle} hook to expose the widget's API via the ref.
 *
 * @param props - Partial properties of the AlertProps interface.
 * @param ref - Forwarded reference to the AlertApi.
 *
 * @returns A JSX element that conditionally renders the AlertElement based on the widget's hidden state.
 */
export const Alert: ForwardRefExoticComponent<Partial<AlertProps> & RefAttributes<AlertApi>> = forwardRef(function Alert(
	props: Partial<AlertProps>,
	ref: ForwardedRef<AlertApi>,
) {
	const widgetContext = useWidgetWithConfig(createAlert, props, 'alert', {
		structure: AlertDefaultSlotStructure,
	});
	useImperativeHandle(ref, () => widgetContext.api, [widgetContext.api]);
	return <>{!widgetContext.state.hidden && <AlertElement {...widgetContext} />}</>;
});
