const t=`import type { ToastDirectives, ToastState as CoreState, ToastProps as CoreProps, ToastApi } from '@agnos-ui/core/components/toast';
import type { SlotContent, Widget, WidgetFactory, WidgetSlotContext } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/components/toast';
export type ToastContext = WidgetSlotContext<ToastWidget>;
export interface ToastExtraProps {
    /**
     * Global template for the toast component
     */
    slotStructure: SlotContent<ToastContext>;
    /**
     * Template for the toast content
     */
    children: SlotContent<ToastContext>;
    /**
     * Header template for the toast component
     */
    slotHeader: SlotContent<ToastContext>;
}
export interface ToastState extends CoreState, ToastExtraProps {
}
export interface ToastProps extends CoreProps, ToastExtraProps {
}
export type ToastWidget = Widget<ToastProps, ToastState, ToastApi, object, ToastDirectives>;
/**
 * Retrieve a shallow copy of the default Toast config
 * @returns the default Toast config
 */
export declare function getToastDefaultConfig(): ToastProps;
/**
 * Create an ToastWidget with given config props
 * @param config - an optional alert config
 * @returns an ToastWidget
 */
export declare const createToast: WidgetFactory<ToastWidget>;
`;export{t as default};