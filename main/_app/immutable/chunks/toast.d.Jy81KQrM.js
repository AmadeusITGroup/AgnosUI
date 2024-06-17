const t=`import type { WidgetFactory } from '@agnos-ui/angular-headless';
import type { ToastProps, ToastWidget } from './toast.gen';
export type * from './toast.gen';
export declare const createToast: WidgetFactory<ToastWidget>;
export declare const getToastDefaultConfig: () => ToastProps;
`;export{t as default};
