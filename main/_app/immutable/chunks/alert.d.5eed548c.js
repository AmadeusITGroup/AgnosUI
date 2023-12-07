const e=`import type { CommonAlertApi, CommonAlertDirectives, CommonAlertProps, CommonAlertState } from './commonAlert';
import type { ExtendWidgetAdaptSlotWidgetProps } from './extendWidget';
import type { Widget, WidgetFactory, WidgetSlotContext } from './types';
export type AlertContext = WidgetSlotContext<AlertWidget>;
export interface AlertExtraProps {
    /**
     * Type of the alert.
     * There are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.
     */
    type: string;
}
export interface AlertState extends ExtendWidgetAdaptSlotWidgetProps<CommonAlertState, AlertExtraProps> {
}
export interface AlertProps extends ExtendWidgetAdaptSlotWidgetProps<CommonAlertProps, AlertExtraProps> {
}
export interface AlertApi extends CommonAlertApi {
}
export interface AlertDirectives extends CommonAlertDirectives {
}
export type AlertWidget = Widget<AlertProps, AlertState, AlertApi, object, AlertDirectives>;
/**
 * Retrieve a shallow copy of the default alert config
 * @returns the default alert config
 */
export declare function getAlertDefaultConfig(): AlertProps;
/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
export declare const createAlert: WidgetFactory<AlertWidget>;
`;export{e as default};
