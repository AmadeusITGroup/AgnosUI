import type {PropsConfig} from '@agnos-ui/angular-headless';
import {createSelect as coreCreateSelect, getSelectDefaultConfig as coreGetSelectDefaultConfig} from '@agnos-ui/core-bootstrap/components/select';
import type {SelectProps, SelectWidget} from './select.gen';

export type * from './select.gen';
export const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = coreCreateSelect as any;
export const getSelectDefaultConfig: () => SelectProps<any> = coreGetSelectDefaultConfig as any;
