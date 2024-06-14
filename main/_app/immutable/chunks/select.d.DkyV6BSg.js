const e=`import type { ItemContext, SelectActions, SelectApi, SelectDirectives, SelectProps as CoreProps, SelectState as CoreState } from '@agnos-ui/core/components/select';
import type { PropsConfig, SlotContent, Widget, WidgetSlotContext } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/components/select';
/**
 * A type for the slot context of the pagination widget
 */
export type SelectContext<Item> = WidgetSlotContext<SelectWidget<Item>>;
export type SelectItemContext<Item> = SelectContext<Item> & {
    /**
     * Contextual data related to an item
     */
    itemContext: ItemContext<Item>;
};
interface SelectExtraProps<Item> {
    /**
     * The template to override the way each badge on the left of the input is displayed.
     * This define the content of the badge inside the badge container.
     */
    slotBadgeLabel: SlotContent<SelectItemContext<Item>>;
    /**
     * The template to override the way each item is displayed in the list.
     * This define the content of the badge inside the badge container.
     */
    slotItem: SlotContent<SelectItemContext<Item>>;
}
export interface SelectState<Item> extends CoreState<Item>, SelectExtraProps<Item> {
}
export interface SelectProps<Item> extends CoreProps<Item>, SelectExtraProps<Item> {
}
export type SelectWidget<Item> = Widget<SelectProps<Item>, SelectState<Item>, SelectApi<Item>, SelectActions<Item>, SelectDirectives<Item>>;
/**
 * Retrieve a shallow copy of the default Select config
 * @returns the default Select config
 */
export declare function getSelectDefaultConfig(): SelectProps<any>;
/**
 * Creates a new select widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new select widget instance
 */
export declare const createSelect: <Item>(config?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item>;
`;export{e as default};
