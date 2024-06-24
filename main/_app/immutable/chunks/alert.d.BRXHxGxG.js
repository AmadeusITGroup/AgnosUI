const t=`import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { WidgetFactory } from '@agnos-ui/react-headless/types';
import type { AlertProps, AlertWidget, AlertApi } from './alert.gen';
export type * from './alert.gen';
export declare const createAlert: WidgetFactory<AlertWidget>;
export declare const getAlertDefaultConfig: () => AlertProps;
export declare const Alert: ForwardRefExoticComponent<Partial<AlertProps> & RefAttributes<AlertApi>>;
`;export{t as default};
