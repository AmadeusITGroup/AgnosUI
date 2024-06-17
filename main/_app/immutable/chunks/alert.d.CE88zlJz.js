const e=`import type { WidgetPropsSlots, WidgetFactory } from '@agnos-ui/svelte-headless/types';
import type { AlertProps, AlertWidget } from './alert.gen';
export type * from './alert.gen';
export declare const createAlert: WidgetFactory<AlertWidget>;
export declare const getAlertDefaultConfig: () => AlertProps;
export interface AlertSlots extends WidgetPropsSlots<AlertProps> {
}
`;export{e as default};
