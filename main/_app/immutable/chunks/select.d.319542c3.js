const e=`import type { WidgetProps, createSelect } from '@agnos-ui/core';
import type { AdaptWidgetSlots } from '../slot/slot';
export type SelectWidget<Item> = AdaptWidgetSlots<ReturnType<typeof createSelect<Item>>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;
`;export{e as default};
