const t=`import type { WidgetPropsSlots, WidgetFactory } from '@agnos-ui/svelte-headless/types';
import type { ToastWidget, ToastProps } from './toast.gen';
export type * from './toast.gen';
export declare const createToast: WidgetFactory<ToastWidget>;
export declare const getToastDefaultConfig: () => ToastProps;
export interface ToastSlots extends WidgetPropsSlots<ToastProps> {
}
`;export{t as default};
