import type {ItemContext, SelectApi, SelectDirectives, SelectProps as CoreProps, SelectState as CoreState} from '@agnos-ui/core/components/select';
import {createSelect as createCoreSelect, getSelectDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/select';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import type {PropsConfig, SlotContent, Widget, WidgetSlotContext} from '@agnos-ui/core/types';

export * from '@agnos-ui/core/components/select';

/**
 * A type for the slot context of the pagination widget
 * @template Item - The type of the items in the Select component.
 */
export type SelectContext<Item> = WidgetSlotContext<SelectWidget<Item>>;

/**
 * Represents the context for a select item, extending the base `SelectContext` with additional
 * contextual data specific to an item.
 *
 * @template Item - The type of the item within the select context.
 */
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
	 *
	 * @defaultValue
	 * ```ts
	 * ({itemContext}: SelectItemContext<any>) => itemContext.item
	 * ```
	 */
	badgeLabel: SlotContent<SelectItemContext<Item>>;

	/**
	 * The template to override the way each item is displayed in the list.
	 * This define the content of the badge inside the badge container.
	 *
	 * @defaultValue
	 * ```ts
	 * ({itemContext}: SelectItemContext<any>) => itemContext.item
	 * ```
	 */
	itemLabel: SlotContent<SelectItemContext<Item>>;
}

/**
 * Represents the state of a Select component.
 *
 * @template Item - The type of the items in the select component.
 */
export interface SelectState<Item> extends CoreState<Item>, SelectExtraProps<Item> {}
/**
 * Represents the properties for the Select component.
 *
 * @template Item - The type of the items in the select component.
 */
export interface SelectProps<Item> extends CoreProps<Item>, SelectExtraProps<Item> {}

/**
 * Represents a Select widget component.
 *
 * @template Item - The type of the items that the select widget will handle.
 */
export type SelectWidget<Item> = Widget<SelectProps<Item>, SelectState<Item>, SelectApi<Item>, SelectDirectives<Item>>;

const defaultConfigExtraProps: SelectExtraProps<any> = {
	badgeLabel: ({itemContext}: SelectItemContext<any>) => itemContext.item,
	itemLabel: ({itemContext}: SelectItemContext<any>) => itemContext.item,
};

/**
 * Retrieve a shallow copy of the default Select config
 * @returns the default Select config
 */
export function getSelectDefaultConfig(): SelectProps<any> {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps} as any;
}

/**
 * Creates a new select widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new select widget instance
 */
export const createSelect: <Item>(config?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = extendWidgetProps(
	createCoreSelect,
	defaultConfigExtraProps,
	{},
) as any;
