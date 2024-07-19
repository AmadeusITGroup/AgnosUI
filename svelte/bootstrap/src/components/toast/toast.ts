import type {WidgetPropsSlots} from '@agnos-ui/svelte-headless/types';
import type {ToastProps} from './toast.gen';

export * from './toast.gen';

export interface ToastSlots extends WidgetPropsSlots<ToastProps> {}
