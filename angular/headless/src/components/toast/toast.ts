import type {AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, WidgetFactory} from '../../types';
import {createToast as coreCreateToast} from '@agnos-ui/core/components/toast';

export * from '@agnos-ui/core/components/toast';

export type ToastWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/toast').ToastWidget>;
export type ToastProps = WidgetProps<ToastWidget>;
export type ToastState = WidgetState<ToastWidget>;
export type ToastContext = AdaptSlotContentProps<import('@agnos-ui/core/components/toast').ToastContext>;
export const createToast: WidgetFactory<ToastWidget> = coreCreateToast as any;
