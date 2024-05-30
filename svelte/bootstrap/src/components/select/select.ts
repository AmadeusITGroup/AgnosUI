export * from '@agnos-ui/core-bootstrap/components/select';

import type {AdaptWidgetSlots, PropsConfig, WidgetProps, WidgetState, PropType, AdaptSlotContentProps} from '@agnos-ui/svelte-headless/types';
import {createSelect as coreCreateSelect} from '@agnos-ui/core-bootstrap/components/select';
import type {
	SelectWidget as CoreWidget,
	SelectContext as CoreContext,
	SelectItemContext as CoreItemContext,
} from '@agnos-ui/core-bootstrap/components/select';

// widget
export interface SelectWidget<Item> extends AdaptWidgetSlots<CoreWidget<Item>> {}
export interface SelectProps<Item> extends WidgetProps<SelectWidget<Item>> {}
export interface SelectState<Item> extends WidgetState<SelectWidget<Item>> {}
export interface SelectApi<Item> extends PropType<SelectWidget<Item>, 'api'> {}
// slots
export interface SelectContext<Item> extends AdaptSlotContentProps<CoreContext<Item>> {}
export interface SelectItemContext<Item> extends AdaptSlotContentProps<CoreItemContext<Item>> {}

// factory
export const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = coreCreateSelect as any;
