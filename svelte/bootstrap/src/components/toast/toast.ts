import type {AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/svelte-headless/types';

export * from '@agnos-ui/core-bootstrap/components/toast';

export type ToastWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/toast').ToastWidget>;
export type ToastProps = WidgetProps<ToastWidget>;
export type ToastState = WidgetState<ToastWidget>;
export type ToastSlots = WidgetPropsSlots<ToastProps>;
import {createToast as coreCreateToast} from '@agnos-ui/core-bootstrap/components/toast';
export const createToast: WidgetFactory<ToastWidget> = coreCreateToast as any;
