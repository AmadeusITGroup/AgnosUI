export * from '@agnos-ui/core-bootstrap/components/toast';

import type {AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState, PropType, AdaptSlotContentProps} from '@agnos-ui/svelte-headless/types';
import {createToast as coreCreateToast} from '@agnos-ui/core-bootstrap/components/toast';
import type {ToastWidget as CoreWidget, ToastContext as CoreContext} from '@agnos-ui/core-bootstrap/components/toast';

// widget
export interface ToastWidget extends AdaptWidgetSlots<CoreWidget> {}
export interface ToastProps extends WidgetProps<ToastWidget> {}
export interface ToastState extends WidgetState<ToastWidget> {}
export interface ToastApi extends PropType<ToastWidget, 'api'> {}
// slots
export interface ToastContext extends AdaptSlotContentProps<CoreContext> {}
// factory
export const createToast: WidgetFactory<ToastWidget> = coreCreateToast as any;
