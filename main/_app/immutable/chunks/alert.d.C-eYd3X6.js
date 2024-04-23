const t=`export * from '@agnos-ui/core-bootstrap/components/alert';
import type { AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState, PropType, AdaptSlotContentProps } from '@agnos-ui/svelte-headless/types';
import type { AlertWidget as CoreWidget, AlertContext as CoreContext } from '@agnos-ui/core-bootstrap/components/alert';
export interface AlertWidget extends AdaptWidgetSlots<CoreWidget> {
}
export interface AlertProps extends WidgetProps<AlertWidget> {
}
export interface AlertState extends WidgetState<AlertWidget> {
}
export interface AlertApi extends PropType<AlertWidget, 'api'> {
}
export interface AlertSlots extends WidgetPropsSlots<AlertProps> {
}
export interface AlertContext extends AdaptSlotContentProps<CoreContext> {
}
export declare const createAlert: WidgetFactory<AlertWidget>;
`;export{t as default};
