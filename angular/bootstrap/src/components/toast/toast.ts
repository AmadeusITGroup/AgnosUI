import type {WidgetFactory} from '@agnos-ui/angular-headless';
import {createToast as coreCreateToast, getToastDefaultConfig as coreGetToastDefaultConfig} from '@agnos-ui/core-bootstrap/components/toast';
import type {ToastProps, ToastWidget} from './toast.gen';

export type * from './toast.gen';
export const createToast: WidgetFactory<ToastWidget> = coreCreateToast as any;
export const getToastDefaultConfig: () => ToastProps = coreGetToastDefaultConfig as any;
