import type {WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import type {AdaptWidgetSlots, WidgetPropsSlots} from './slotTypes';

export type AlertWidget = AdaptWidgetSlots<import('@agnos-ui/core/alert').AlertWidget>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertState = WidgetState<AlertWidget>;
export type AlertSlots = WidgetPropsSlots<AlertProps>;
import {createAlert as coreCreateAlert} from '@agnos-ui/core/alert';
export const createAlert: WidgetFactory<AlertWidget> = coreCreateAlert as any;
