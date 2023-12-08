const e=`import type { WidgetsCommonPropsAndState } from '../commonProps';
import type { HasFocus } from '../../services/focustrack';
import type { PropsConfig, SlotContent, Widget, WidgetSlotContext } from '../../types';
/**
 * A type for the slot context of the pagination widget
 */
export type SelectContext<Item> = WidgetSlotContext<SelectWidget<Item>>;
export interface SelectItemContext<Item> extends SelectContext<Item> {
    /**
     * Contextual data related to an item
     */
    itemContext: ItemContext<Item>;
}
export interface SelectCommonPropsAndState<Item> extends WidgetsCommonPropsAndState {
    /**
     * id used for the input inside the select
     */
    id: string | undefined;
    /**
     * aria-label used for the input inside the select
     */
    ariaLabel: string | undefined;
    /**
     * List of selected item ids
     */
    selected: Item[];
    /**
     * Filtered text to be display in the filter input
     */
    filterText: string;
    /**
     * true if the select is disabled
     */
    disabled: boolean;
    /**
     * true if the select is open
     */
    open: boolean;
    /**
     * Class to be added on the dropdown menu container
     */
    menuClassName: string;
    /**
     * Class to be added on menu items
     */
    menuItemClassName: string;
    /**
     * Class to be added on selected items (displayed in the input zone)
     */
    badgeClassName: string;
    /**
     * true if a loading process is being done
     */
    loading: boolean;
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
export interface SelectProps<T> extends SelectCommonPropsAndState<T> {
    /**
     * List of available items for the dropdown
     */
    items: T[];
    /**
     * Custom function to get the id of an item
     * By default, the item is returned
     */
    itemIdFn(item: T): string;
    /**
     * Callback called dropdown open state change
     * @param isOpen - updated open state
     */
    onOpenChange(isOpen: boolean): void;
    /**
     * Callback called when the text filter change
     * @param text - Filtered text
     */
    onFilterTextChange(text: string): void;
    /**
     * Callback called when the selection change
     */
    onSelectedChange(selected: T[]): void;
}
/**
 * Item representation built from the items provided in parameters
 */
export interface ItemContext<T> {
    /**
     * Original item given in the parameters
     */
    item: T;
    /**
     * Unique id to identify the item
     */
    id: string;
    /**
     * Specify if the item is checked
     */
    selected: boolean;
}
export interface SelectState<Item> extends SelectCommonPropsAndState<Item> {
    /**
     * List of item contexts, to be displayed in the menu
     */
    visibleItems: ItemContext<Item>[];
    /**
    /**
     * List of selected items to be display
     */
    selectedContexts: ItemContext<Item>[];
    /**
     * Highlighted item context.
     * It is designed to define the highlighted item in the dropdown menu
     */
    highlighted: ItemContext<Item> | undefined;
}
export interface SelectApi<Item> {
    /**
     * Clear all the selected items
     */
    clear(): void;
    /**
     * Clear the filter text
     */
    clearText(): void;
    /**
     * Highlight the given item, if there is a corresponding match among the visible list
     */
    highlight(item: Item): void;
    /**
     * Highlight the first item among the visible list
     */
    highlightFirst(): void;
    /**
     * Highlight the previous item among the visible list
     * Loop to the last item if needed
     */
    highlightPrevious(): void;
    /**
     * Highlight the next item among the visible list.
     * Loop to the first item if needed
     */
    highlightNext(): void;
    /**
     * Highlight the last item among the visible list
     */
    highlightLast(): void;
    /**
     * Focus the provided item among the selected list.
     * The focus feature is designed to know what item must be focused in the UI, i.e. among the badge elements.
     */
    focus(item: Item): void;
    /**
     * Focus the first element
     */
    focusFirst(): void;
    /**
     * Focus the previous element. If no element was focused before the call, nothing happens.
     */
    focusPrevious(): void;
    /**
     * Focus the next element. If no element was focused before the call, nothing happens.
     */
    focusNext(): void;
    /**
     * Focus the last element. If no element was focused before the call, nothing happens.
     */
    focusLast(): void;
    /**
     * Select the provided item.
     * The selected list is used to
     * @param item - the item to select
     */
    select(item: Item): void;
    /**
     * Unselect the provided item.
     * @param item - the item to unselect
     */
    unselect(item: Item): void;
    /**
     * Toggle the selection of an item
     * @param item - the item to toggle
     * @param selected - an optional boolean to enforce the selected/unselected state instead of toggling
     */
    toggleItem(item: Item, selected?: boolean): void;
    /**
     * open the select
     */
    open(): void;
    /**
     * close the select
     */
    close(): void;
    /**
     * Toggle the dropdown menu
     * @param isOpen - If specified, set the menu in the defined state.
     */
    toggle(isOpen?: boolean): void;
}
export interface SelectDirectives {
    /**
     * Directive to be used in the input group and the menu containers
     */
    hasFocusDirective: HasFocus['directive'];
}
export interface SelectActions {
    /**
     * Method to be plugged to on the 'input' event. The input text will be used as the filter text.
     */
    onInput: (e: {
        target: any;
    }) => void;
    /**
     * Method to be plugged to on an keydown event, in order to control the keyboard interactions with the highlighted item.
     * It manages arrow keys to move the highlighted item, or enter to toggle the item.
     */
    onInputKeydown: (e: any) => void;
}
export type SelectWidget<Item> = Widget<SelectProps<Item>, SelectState<Item>, SelectApi<Item>, SelectActions, SelectDirectives>;
/**
 * Returns a shallow copy of the default select config.
 * @returns a copy of the default config
 */
export declare function getSelectDefaultConfig(): {
    /**
     * List of available items for the dropdown
     */
    items: any[];
    /**
     * Custom function to get the id of an item
     * By default, the item is returned
     */
    itemIdFn(item: any): string;
    /**
     * Callback called dropdown open state change
     * @param isOpen - updated open state
     */
    onOpenChange(isOpen: boolean): void;
    /**
     * Callback called when the text filter change
     * @param text - Filtered text
     */
    onFilterTextChange(text: string): void;
    /**
     * Callback called when the selection change
     */
    onSelectedChange(selected: any[]): void;
    /**
     * id used for the input inside the select
     */
    id: string | undefined;
    /**
     * aria-label used for the input inside the select
     */
    ariaLabel: string | undefined;
    /**
     * List of selected item ids
     */
    selected: any[];
    /**
     * Filtered text to be display in the filter input
     */
    filterText: string;
    /**
     * true if the select is disabled
     */
    disabled: boolean;
    /**
     * true if the select is open
     */
    open: boolean;
    /**
     * Class to be added on the dropdown menu container
     */
    menuClassName: string;
    /**
     * Class to be added on menu items
     */
    menuItemClassName: string;
    /**
     * Class to be added on selected items (displayed in the input zone)
     */
    badgeClassName: string;
    /**
     * true if a loading process is being done
     */
    loading: boolean;
    /**
     * The template to override the way each badge on the left of the input is displayed.
     * This define the content of the badge inside the badge container.
     */
    slotBadgeLabel: SlotContent<SelectItemContext<any>>;
    /**
     * The template to override the way each item is displayed in the list.
     * This define the content of the badge inside the badge container.
     */
    slotItem: SlotContent<SelectItemContext<any>>;
    className: string;
};
/**
 * Create a SelectWidget with given config props
 * @param config - an optional alert config
 * @returns a SelectWidget
 */
export declare function createSelect<Item>(config?: PropsConfig<SelectProps<Item>>): SelectWidget<Item>;
`;export{e as default};
