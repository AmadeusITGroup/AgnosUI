import type {CommonAlertApi, CommonAlertDirectives, CommonAlertProps, CommonAlertState} from './common';
import {createCommonAlert, getCommonAlertDefaultConfig} from './common';
import type {Widget, WidgetFactory} from '../../types';
import {createWidgetFactory} from '../../utils/widget';

/**
 * Represents the state of an alert component.
 */
export interface AlertState extends CommonAlertState {}

/**
 * Represents the properties for the alert component.
 */
export interface AlertProps extends CommonAlertProps {}
/**
 * Represents the API for an alert component.
 */
export interface AlertApi extends CommonAlertApi {}
/**
 * Represents the directives for an alert component.
 */
export interface AlertDirectives extends CommonAlertDirectives {}
/**
 * Represents an alert widget with specific properties, state, API, and directives.
 */
export type AlertWidget = Widget<AlertProps, AlertState, AlertApi, AlertDirectives>;

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
export const createAlert: WidgetFactory<AlertWidget> = createWidgetFactory('alert', createCommonAlert);
