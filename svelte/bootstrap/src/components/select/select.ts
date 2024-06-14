import type {WidgetPropsSlots, PropsConfig} from '@agnos-ui/svelte-headless/types';
import type {SelectProps, SelectWidget} from './select.gen';
import {createSelect as coreCreateSelect, getSelectDefaultConfig as coreGetSelectDefaultConfig} from '@agnos-ui/core-bootstrap/components/select';

export type * from './select.gen';
export const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = coreCreateSelect as any;
export const getSelectDefaultConfig: () => SelectProps<any> = coreGetSelectDefaultConfig as any;

export interface SelectSlots<Item> extends WidgetPropsSlots<SelectProps<Item>> {}
