import type {AdaptWidgetSlots, WidgetPropsSlots, PropsConfig, WidgetProps, WidgetState} from '../../types';

export * from '@agnos-ui/core/components/select';

export type SelectWidget<Item> = AdaptWidgetSlots<import('@agnos-ui/core/components/select').SelectWidget<Item>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;
export type SelectState<Item> = WidgetState<SelectWidget<Item>>;
export type SelectSlots<Item> = WidgetPropsSlots<SelectProps<Item>>;
import {createSelect as coreCreateSelect} from '@agnos-ui/core/components/select';
export const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = coreCreateSelect as any;
