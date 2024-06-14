import type {WidgetPropsSlots, WidgetFactory} from '@agnos-ui/svelte-headless/types';
import {createToast as coreCreateToast, getToastDefaultConfig as coreGetToastDefaultConfig} from '@agnos-ui/core-bootstrap/components/toast';
import type {ToastWidget, ToastProps} from './toast.gen';

export type * from './toast.gen';
export const createToast: WidgetFactory<ToastWidget> = coreCreateToast as any;
export const getToastDefaultConfig: () => ToastProps = coreGetToastDefaultConfig as any;

export interface ToastSlots extends WidgetPropsSlots<ToastProps> {}
