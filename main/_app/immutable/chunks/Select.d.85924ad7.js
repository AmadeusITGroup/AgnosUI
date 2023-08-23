const e=`import type { WidgetProps } from '@agnos-ui/core';
import { createSelect } from '@agnos-ui/core';
import type { AdaptWidgetSlots } from './Slot';
export type SelectWidget<Item> = AdaptWidgetSlots<ReturnType<typeof createSelect<Item>>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;
export declare function Select<Item>(props: Partial<SelectProps<Item>>): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
