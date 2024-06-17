const e=`import type { PropsConfig } from '@agnos-ui/angular-headless';
import type { SelectProps, SelectWidget } from './select.gen';
export type * from './select.gen';
export declare const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item>;
export declare const getSelectDefaultConfig: () => SelectProps<any>;
`;export{e as default};
