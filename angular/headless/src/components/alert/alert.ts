import type {AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, WidgetFactory} from '../../types';
import {createAlert as coreCreateAlert} from '@agnos-ui/core/components/alert';

export * from '@agnos-ui/core/components/alert';

export type AlertWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/alert').AlertWidget>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertState = WidgetState<AlertWidget>;
export type AlertContext = AdaptSlotContentProps<import('@agnos-ui/core/components/alert').AlertContext>;
export const createAlert: WidgetFactory<AlertWidget> = coreCreateAlert as any;
