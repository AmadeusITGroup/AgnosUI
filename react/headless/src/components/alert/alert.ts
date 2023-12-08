export * from '@agnos-ui/core/components/alert';

import {createAlert as coreCreateAlert} from '@agnos-ui/core/components/alert';
import type {AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState} from '../../types';

export type AlertWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/alert').AlertWidget>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertState = WidgetState<AlertWidget>;
export type AlertContext = AdaptSlotContentProps<import('@agnos-ui/core/components/alert').AlertContext>;
export const createAlert: WidgetFactory<AlertWidget> = coreCreateAlert as any;
