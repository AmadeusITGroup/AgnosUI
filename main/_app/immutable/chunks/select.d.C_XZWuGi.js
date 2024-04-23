const e=`export * from '@agnos-ui/core-bootstrap/components/select';
import type { AdaptWidgetSlots, WidgetPropsSlots, PropsConfig, WidgetProps, WidgetState, PropType, AdaptSlotContentProps } from '@agnos-ui/svelte-headless/types';
import type { SelectWidget as CoreWidget, SelectContext as CoreContext, SelectItemContext as CoreItemContext } from '@agnos-ui/core-bootstrap/components/select';
export interface SelectWidget<Item> extends AdaptWidgetSlots<CoreWidget<Item>> {
}
export interface SelectProps<Item> extends WidgetProps<SelectWidget<Item>> {
}
export interface SelectState<Item> extends WidgetState<SelectWidget<Item>> {
}
export interface SelectApi<Item> extends PropType<SelectWidget<Item>, 'api'> {
}
export interface SelectSlots<Item> extends WidgetPropsSlots<SelectProps<Item>> {
}
export interface SelectContext<Item> extends AdaptSlotContentProps<CoreContext<Item>> {
}
export interface SelectItemContext<Item> extends AdaptSlotContentProps<CoreItemContext<Item>> {
}
export declare const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item>;
`;export{e as default};
