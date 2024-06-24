const t=`import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { WidgetFactory } from '@agnos-ui/react-headless/types';
import type { ToastWidget, ToastProps, ToastApi } from './toast.gen';
export type * from './toast.gen';
export declare const createToast: WidgetFactory<ToastWidget>;
export declare const getToastDefaultConfig: () => ToastProps;
export declare const Toast: ForwardRefExoticComponent<Partial<ToastProps> & RefAttributes<ToastApi>>;
`;export{t as default};
