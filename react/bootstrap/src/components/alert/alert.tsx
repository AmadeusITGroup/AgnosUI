import {Slot} from '@agnos-ui/react-headless/slot';
import {useWidgetWithConfig} from '../../config';
import {useDirectives, classDirective} from '@agnos-ui/react-headless/utils/directive';
import type {ForwardedRef, ForwardRefExoticComponent, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import {createAlert as coreCreateAlert, getAlertDefaultConfig as coreGetAlertDefaultConfig} from '@agnos-ui/core-bootstrap/components/alert';
import type {WidgetFactory} from '@agnos-ui/react-headless/types';
import type {AlertContext, AlertProps, AlertWidget, AlertApi} from './alert.gen';

export type * from './alert.gen';
export const createAlert: WidgetFactory<AlertWidget> = coreCreateAlert as any;
export const getAlertDefaultConfig: () => AlertProps = coreGetAlertDefaultConfig as any;

const DefaultSlotStructure = (slotContext: AlertContext) => (
	<>
		<div className="alert-body">
			<Slot slotContent={slotContext.state.children} props={slotContext}></Slot>
		</div>
		{slotContext.state.dismissible && (
			<button type="button" className="btn-close" onClick={slotContext.widget.api.close} aria-label={slotContext.state.ariaCloseButtonLabel}></button>
		)}
	</>
);

const defaultConfig: Partial<AlertProps> = {
	structure: DefaultSlotStructure,
};

const AlertElement = (slotContext: AlertContext) => (
	<div
		role="alert"
		{...useDirectives(
			[
				classDirective,
				`au-alert alert alert-${slotContext.state.type} ${slotContext.state.className} ${slotContext.state.dismissible ? 'alert-dismissible' : ''}`,
			],
			slotContext.widget.directives.transitionDirective,
		)}
	>
		<Slot slotContent={slotContext.state.structure} props={slotContext}></Slot>
	</div>
);

export const Alert: ForwardRefExoticComponent<Partial<AlertProps> & RefAttributes<AlertApi>> = forwardRef(function Alert(
	props: Partial<AlertProps>,
	ref: ForwardedRef<AlertApi>,
) {
	const [state, widget] = useWidgetWithConfig(createAlert, props, 'alert', defaultConfig);
	useImperativeHandle(ref, () => widget.api, []);
	const slotContext = {
		state,
		widget,
	};

	return <>{!state.hidden && <AlertElement {...slotContext} />}</>;
});
