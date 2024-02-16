const t=`export * from '@agnos-ui/core/components/toast';
import type { AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState } from '../../types';
export type ToastWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/toast').ToastWidget>;
export type ToastProps = WidgetProps<ToastWidget>;
export type ToastState = WidgetState<ToastWidget>;
export type ToastContext = AdaptSlotContentProps<import('@agnos-ui/core/components/toast').ToastContext>;
export declare const createToast: WidgetFactory<ToastWidget>;
`;export{t as default};
