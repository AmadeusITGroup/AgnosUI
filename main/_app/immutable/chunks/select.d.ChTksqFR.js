const e=`import type { PropsConfig } from '@agnos-ui/react-headless/types';
import type { SelectProps, SelectWidget } from './select.gen';
export type * from './select.gen';
export declare const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item>;
export declare const getSelectDefaultConfig: () => SelectProps<any>;
export declare function Select<Item>(props: Partial<SelectProps<Item>>): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
