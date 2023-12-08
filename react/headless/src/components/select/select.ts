export * from '@agnos-ui/core/components/select';

import {createSelect as coreCreateSelect} from '@agnos-ui/core/components/select';
import type {AdaptSlotContentProps, AdaptWidgetSlots, PropsConfig, WidgetProps, WidgetState} from '../../types';

export type SelectWidget<Item> = AdaptWidgetSlots<import('@agnos-ui/core/components/select').SelectWidget<Item>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;
export type SelectState<Item> = WidgetState<SelectWidget<Item>>;
export type SelectContext<Item> = AdaptSlotContentProps<import('@agnos-ui/core/components/select').SelectContext<Item>>;
export type SelectItemContext<Item> = AdaptSlotContentProps<import('@agnos-ui/core/components/select').SelectItemContext<Item>>;
export const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = coreCreateSelect as any;
