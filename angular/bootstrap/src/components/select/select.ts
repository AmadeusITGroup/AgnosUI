import type {AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, PropsConfig} from '@agnos-ui/angular-headless';
import {createSelect as coreCreateSelect} from '@agnos-ui/core-bootstrap/components/select';

export * from '@agnos-ui/core-bootstrap/components/select';

export type SelectWidget<Item> = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/select').SelectWidget<Item>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;
export type SelectState<Item> = WidgetState<SelectWidget<Item>>;
export type SelectContext<Item> = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/select').SelectContext<Item>>;
export type SelectItemContext<Item> = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/select').SelectItemContext<Item>>;
export const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = coreCreateSelect as any;
