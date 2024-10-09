import type {CommonAlertApi, CommonAlertDirectives, CommonAlertProps, CommonAlertState} from './common';
import {createCommonAlert, getCommonAlertDefaultConfig} from './common';
import type {Widget, WidgetFactory} from '../../types';

/**
 * Represents the state of an alert component.
 * This interface extends the `CommonAlertState` interface, inheriting its properties.
 */
export interface AlertState extends CommonAlertState {}

/**
 * Represents the properties for the Alert component.
 */
export interface AlertProps extends CommonAlertProps {}
/**
 * Represents the API for an alert component.
 *
 * This interface extends the `CommonAlertApi` interface, inheriting its properties and methods.
 * It is used to define the structure and behavior of alert components within the application.
 */
export interface AlertApi extends CommonAlertApi {}
/**
 * This interface extends the `CommonAlertDirectives` and is used to define
 * the directives specific to the Alert component in the application.
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
export const createAlert: WidgetFactory<AlertWidget> = createCommonAlert;
