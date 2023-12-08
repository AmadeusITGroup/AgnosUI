import type {CommonAlertApi, CommonAlertDirectives, CommonAlertProps, CommonAlertState} from './common';
import {createCommonAlert, getCommonAlertDefaultConfig} from './common';
import type {ExtendWidgetAdaptSlotWidgetProps} from '../../services/extendWidget';
import {extendWidgetProps} from '../../services/extendWidget';
import {typeString} from '../../utils/writables';
import type {ConfigValidator, Widget, WidgetFactory, WidgetSlotContext} from '../../types';

export * from './common';

export type AlertContext = WidgetSlotContext<AlertWidget>;

export interface AlertExtraProps {
	/**
	 * Type of the alert.
	 * There are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.
	 */
	type: string;
}

export interface AlertState extends ExtendWidgetAdaptSlotWidgetProps<CommonAlertState, AlertExtraProps> {}

export interface AlertProps extends ExtendWidgetAdaptSlotWidgetProps<CommonAlertProps, AlertExtraProps> {}

export interface AlertApi extends CommonAlertApi {}

export interface AlertDirectives extends CommonAlertDirectives {}

export type AlertWidget = Widget<AlertProps, AlertState, AlertApi, object, AlertDirectives>;

const alertDefaultConfig: AlertExtraProps = {
	type: 'primary',
};

const alertConfigValidator: ConfigValidator<AlertExtraProps> = {
	type: typeString,
};

/**
 * Retrieve a shallow copy of the default alert config
 * @returns the default alert config
 */
export function getAlertDefaultConfig(): AlertProps {
	return {...getCommonAlertDefaultConfig(), ...alertDefaultConfig} as any;
}

/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */

export const createAlert: WidgetFactory<AlertWidget> = extendWidgetProps(createCommonAlert, alertDefaultConfig, alertConfigValidator);
