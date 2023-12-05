import type {PropsConfig, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import type {AdaptWidgetSlots, WidgetPropsSlots} from './slotTypes';

export type SelectWidget<Item> = AdaptWidgetSlots<import('@agnos-ui/core/select').SelectWidget<Item>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;
export type SelectState<Item> = WidgetState<SelectWidget<Item>>;
export type SelectSlots<Item> = WidgetPropsSlots<SelectProps<Item>>;
import {createSelect as coreCreateSelect} from '@agnos-ui/core/select';
export const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = coreCreateSelect as any;
