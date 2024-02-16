const t=`import type { AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState } from '../../types';
export * from '@agnos-ui/core/components/toast';
export type ToastWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/toast').ToastWidget>;
export type ToastProps = WidgetProps<ToastWidget>;
export type ToastState = WidgetState<ToastWidget>;
export type ToastSlots = WidgetPropsSlots<ToastProps>;
export declare const createToast: WidgetFactory<ToastWidget>;
`;export{t as default};
