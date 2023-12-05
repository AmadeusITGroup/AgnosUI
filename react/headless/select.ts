import type {PropsConfig, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import type {AdaptSlotContentProps, AdaptWidgetSlots} from './slotTypes';

export type SelectWidget<Item> = AdaptWidgetSlots<import('@agnos-ui/core/select').SelectWidget<Item>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;
export type SelectState<Item> = WidgetState<SelectWidget<Item>>;
export type SelectContext<Item> = AdaptSlotContentProps<import('@agnos-ui/core/select').SelectContext<Item>>;
export type SelectItemContext<Item> = AdaptSlotContentProps<import('@agnos-ui/core/select').SelectItemContext<Item>>;
import {createSelect as coreCreateSelect} from '@agnos-ui/core/select';
export const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = coreCreateSelect as any;
