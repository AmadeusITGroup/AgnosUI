const e=`import type { WidgetFactory } from '@agnos-ui/angular-headless';
import type { AlertProps, AlertWidget } from './alert.gen';
export type * from './alert.gen';
export declare const createAlert: WidgetFactory<AlertWidget>;
export declare const getAlertDefaultConfig: () => AlertProps;
`;export{e as default};
