import type {WidgetProps, createSelect} from '@agnos-ui/core';
import type {AdaptWidgetSlots} from '../slot/slot';
import type {WidgetPropsSlots} from '../utils';

export type SelectWidget<Item> = AdaptWidgetSlots<ReturnType<typeof createSelect<Item>>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;
export type SelectSlots<Item> = WidgetPropsSlots<SelectProps<Item>>;
