const e=`import type { WidgetPropsSlots, PropsConfig } from '@agnos-ui/svelte-headless/types';
import type { SelectProps, SelectWidget } from './select.gen';
export type * from './select.gen';
export declare const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item>;
export declare const getSelectDefaultConfig: () => SelectProps<any>;
export interface SelectSlots<Item> extends WidgetPropsSlots<SelectProps<Item>> {
}
`;export{e as default};
