import type {WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import type {AdaptSlotContentProps, AdaptWidgetSlots} from './slotTypes';
export type {AlertApi} from '@agnos-ui/core/alert';

export type AlertWidget = AdaptWidgetSlots<import('@agnos-ui/core/alert').AlertWidget>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertState = WidgetState<AlertWidget>;
export type AlertContext = AdaptSlotContentProps<import('@agnos-ui/core/alert').AlertContext>;
import {createAlert as coreCreateAlert} from '@agnos-ui/core/alert';
export const createAlert: WidgetFactory<AlertWidget> = coreCreateAlert as any;
