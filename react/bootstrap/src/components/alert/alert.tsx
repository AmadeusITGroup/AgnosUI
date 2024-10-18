import {Slot} from '@agnos-ui/react-headless/slot';
import {classDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {ForwardedRef, ForwardRefExoticComponent, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import {useWidgetWithConfig} from '../../config';
import type {AlertApi, AlertContext, AlertProps} from './alert.gen';
import {createAlert} from './alert.gen';

const DefaultSlotStructure = (slotContext: AlertContext) => (
	<>
		<div className="alert-body">
			<Slot slotContent={slotContext.state.children} props={slotContext}></Slot>
		</div>
		{slotContext.state.dismissible && (
			<button type="button" className="btn-close" onClick={slotContext.api.close} aria-label={slotContext.state.ariaCloseButtonLabel}></button>
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
			slotContext.directives.transitionDirective,
		)}
	>
		<Slot slotContent={slotContext.state.structure} props={slotContext}></Slot>
	</div>
);

export const Alert: ForwardRefExoticComponent<Partial<AlertProps> & RefAttributes<AlertApi>> = forwardRef(function Alert(
	props: Partial<AlertProps>,
	ref: ForwardedRef<AlertApi>,
) {
	const widgetContext = useWidgetWithConfig(createAlert, props, 'alert', defaultConfig);
	useImperativeHandle(ref, () => widgetContext.api, []);
	return <>{!widgetContext.state.hidden && <AlertElement {...widgetContext} />}</>;
});
