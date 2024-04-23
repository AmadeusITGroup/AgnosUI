const t=`export * from '@agnos-ui/core-bootstrap/components/toast';
import type { AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState, PropType, AdaptSlotContentProps } from '@agnos-ui/svelte-headless/types';
import type { ToastWidget as CoreWidget, ToastContext as CoreContext } from '@agnos-ui/core-bootstrap/components/toast';
export interface ToastWidget extends AdaptWidgetSlots<CoreWidget> {
}
export interface ToastProps extends WidgetProps<ToastWidget> {
}
export interface ToastState extends WidgetState<ToastWidget> {
}
export interface ToastApi extends PropType<ToastWidget, 'api'> {
}
export interface ToastSlots extends WidgetPropsSlots<ToastProps> {
}
export interface ToastContext extends AdaptSlotContentProps<CoreContext> {
}
export declare const createToast: WidgetFactory<ToastWidget>;
`;export{t as default};
