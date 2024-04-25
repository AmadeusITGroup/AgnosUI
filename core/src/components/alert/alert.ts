import type {CommonAlertApi, CommonAlertDirectives, CommonAlertProps, CommonAlertState} from './common';
import {createCommonAlert, getCommonAlertDefaultConfig} from './common';
import type {Widget, WidgetFactory} from '../../types';

export interface AlertState extends CommonAlertState {}
export interface AlertProps extends CommonAlertProps {}
export interface AlertApi extends CommonAlertApi {}
export interface AlertDirectives extends CommonAlertDirectives {}
export type AlertWidget = Widget<AlertProps, AlertState, AlertApi, object, AlertDirectives>;

/**
 * Retrieve a shallow copy of the default alert config
 * @returns the default alert config
 */
export function getAlertDefaultConfig(): AlertProps {
	return {...getCommonAlertDefaultConfig()};
}

/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
export const createAlert: WidgetFactory<AlertWidget> = createCommonAlert;
