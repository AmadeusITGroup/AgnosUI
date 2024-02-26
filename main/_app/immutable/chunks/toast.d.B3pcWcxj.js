const t=`import type { AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, WidgetFactory } from '../../types';
export * from '@agnos-ui/core/components/toast';
export type ToastWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/toast').ToastWidget>;
export type ToastProps = WidgetProps<ToastWidget>;
export type ToastState = WidgetState<ToastWidget>;
export type ToastContext = AdaptSlotContentProps<import('@agnos-ui/core/components/toast').ToastContext>;
export declare const createToast: WidgetFactory<ToastWidget>;
`;export{t as default};
