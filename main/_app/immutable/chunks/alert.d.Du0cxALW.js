const t=`import type { AlertDirectives, AlertState as CoreState, AlertProps as CoreProps, AlertApi } from '@agnos-ui/core/components/alert';
import type { SlotContent, Widget, WidgetFactory, WidgetSlotContext } from '@agnos-ui/core/types';
import type { ExtendWidgetAdaptSlotWidgetProps } from '@agnos-ui/core/services/extendWidget';
import type { BSContextualClass } from '../../types';
export * from '@agnos-ui/core/components/alert';
export type AlertContext = WidgetSlotContext<AlertWidget>;
interface AlertExtraProps {
    /**
     * Global template for the alert component
     */
    slotStructure: SlotContent<AlertContext>;
    /**
     * Template for the alert content
     */
    slotDefault: SlotContent<AlertContext>;
    /**
     * Type of the alert, following bootstrap types.
     */
    type: BSContextualClass;
}
export interface AlertState extends ExtendWidgetAdaptSlotWidgetProps<CoreState, AlertExtraProps, object> {
}
export interface AlertProps extends ExtendWidgetAdaptSlotWidgetProps<CoreProps, AlertExtraProps, object> {
}
export type AlertWidget = Widget<AlertProps, AlertState, AlertApi, object, AlertDirectives>;
/**
 * Retrieve a shallow copy of the default Alert config
 * @returns the default Alert config
 */
export declare function getAlertDefaultConfig(): AlertProps;
/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
export declare const createAlert: WidgetFactory<AlertWidget>;
`;export{t as default};
