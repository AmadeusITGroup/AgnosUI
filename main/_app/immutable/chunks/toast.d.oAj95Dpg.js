const t=`import type { AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, WidgetFactory } from '@agnos-ui/angular-headless';
export * from '@agnos-ui/core-bootstrap/components/toast';
export type ToastWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/toast').ToastWidget>;
export type ToastProps = WidgetProps<ToastWidget>;
export type ToastState = WidgetState<ToastWidget>;
export type ToastContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/toast').ToastContext>;
export declare const createToast: WidgetFactory<ToastWidget>;
`;export{t as default};
