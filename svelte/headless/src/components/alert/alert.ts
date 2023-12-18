import type {AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState} from '../../types';

export * from '@agnos-ui/core/components/alert';

export type AlertWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/alert').AlertWidget>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertState = WidgetState<AlertWidget>;
export type AlertSlots = WidgetPropsSlots<AlertProps>;
import {createAlert as coreCreateAlert} from '@agnos-ui/core/components/alert';
export const createAlert: WidgetFactory<AlertWidget> = coreCreateAlert as any;
