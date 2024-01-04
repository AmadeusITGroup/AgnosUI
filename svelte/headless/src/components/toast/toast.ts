import type {AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState} from '../../types';

export * from '@agnos-ui/core/components/toast';

export type ToastWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/toast').ToastWidget>;
export type ToastProps = WidgetProps<ToastWidget>;
export type ToastState = WidgetState<ToastWidget>;
export type ToastSlots = WidgetPropsSlots<ToastProps>;
import {createToast as coreCreateToast} from '@agnos-ui/core/components/toast';
export const createToast: WidgetFactory<ToastWidget> = coreCreateToast as any;
