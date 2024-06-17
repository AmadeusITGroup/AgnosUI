import type {WidgetPropsSlots, WidgetFactory} from '@agnos-ui/svelte-headless/types';
import {createAlert as coreCreateAlert, getAlertDefaultConfig as coreGetAlertDefaultConfig} from '@agnos-ui/core-bootstrap/components/alert';
import type {AlertProps, AlertWidget} from './alert.gen';

export type * from './alert.gen';
export const createAlert: WidgetFactory<AlertWidget> = coreCreateAlert as any;
export const getAlertDefaultConfig: () => AlertProps = coreGetAlertDefaultConfig as any;

export interface AlertSlots extends WidgetPropsSlots<AlertProps> {}
