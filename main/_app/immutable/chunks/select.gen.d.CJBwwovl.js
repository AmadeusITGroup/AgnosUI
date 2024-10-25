const e=`import type { WidgetSlotContext, SlotContent, Widget, PropsConfig, Directive } from '@agnos-ui/svelte-headless/types';
import type { Placement } from '@floating-ui/dom';
import type { HasFocus } from '@agnos-ui/svelte-headless/services/focustrack';
import type { FloatingUI } from '@agnos-ui/svelte-headless/services/floatingUI';
/**
 * Retrieve a shallow copy of the default Select config
 * @returns the default Select config
 */
declare const export_getSelectDefaultConfig: () => SelectProps<any>;
export { export_getSelectDefaultConfig as getSelectDefaultConfig };
/**
 * A type for the slot context of the pagination widget
 */
export interface SelectContext<Item> extends WidgetSlotContext<SelectWidget<Item>> {
}
export interface SelectItemContext<Item> extends SelectContext<Item> {
    /**
     * Contextual data related to an item
     */
    itemContext: ItemContext<Item>;
}
export interface SelectState<Item> {
    /**
     * List of item contexts, to be displayed in the menu
     */
    visibleItems: ItemContext<Item>[];
    /**
     * List of selected items to be display
     */
    selectedContexts: ItemContext<Item>[];
    /**
     * Highlighted item context.
     * It is designed to define the highlighted item in the dropdown menu
     */
    highlighted: ItemContext<Item> | undefined;
    /**
     * Current placement of the dropdown
     */
    placement: Placement | undefined;
    /**
     * id used for the input inside the select
     */
    id: string | undefined;
    /**
     * aria-label used for the input inside the select
     *
     * @defaultValue \`'Select'\`
     */
    ariaLabel: string | undefined;
    /**
     * List of selected item ids
     *
     * @defaultValue \`[]\`
     */
    selected: Item[];
    /**
     * Filtered text to be display in the filter input
     *
     * @defaultValue \`''\`
     */
    filterText: string;
    /**
     * true if the select is disabled
     *
     * @defaultValue \`false\`
     */
    disabled: boolean;
    /**
     * true if the select is open
     *
     * @defaultValue \`false\`
     */
    open: boolean;
    /**
     * Class to be added on the dropdown menu container
     *
     * @defaultValue \`''\`
     */
    menuClassName: string;
    /**
     * Class to be added on menu items
     *
     * @defaultValue \`''\`
     */
    menuItemClassName: string;
    /**
     * Class to be added on selected items (displayed in the input zone)
     *
     * @defaultValue \`''\`
     */
    badgeClassName: string;
    /**
     * true if a loading process is being done
     *
     * @defaultValue \`false\`
     */
    loading: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * The template to override the way each badge on the left of the input is displayed.
     * This define the content of the badge inside the badge container.
     *
     * @defaultValue
     * \`\`\`ts
     * ({itemContext}: SelectItemContext<any>) => itemContext.item
     * \`\`\`
     */
    badgeLabel: SlotContent<SelectItemContext<Item>>;
    /**
     * The template to override the way each item is displayed in the list.
     * This define the content of the badge inside the badge container.
     *
     * @defaultValue
     * \`\`\`ts
     * ({itemContext}: SelectItemContext<any>) => itemContext.item
     * \`\`\`
     */
    itemLabel: SlotContent<SelectItemContext<Item>>;
}
export interface SelectProps<Item> {
    /**
     * List of available items for the dropdown
     *
     * @defaultValue \`[]\`
     */
    items: Item[];
    /**
     * List of allowed placements for the dropdown.
     * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
     *
     * @defaultValue
     * \`\`\`ts
     * ['bottom-start', 'top-start', 'bottom-end', 'top-end']
     * \`\`\`
     */
    allowedPlacements: Placement[];
    /**
     * Custom function to get the id of an item
     * By default, the item is returned
     *
     * @defaultValue
     * \`\`\`ts
     * (item: any) => '' + item
     * \`\`\`
     */
    itemIdFn(item: Item): string;
    /**
     * Retrieves navigable elements within an HTML element containing badges and the input.
     *
     * @param node - HTMLElement that contains the badges and the input
     *
     * @defaultValue
     * \`\`\`ts
     * (node: HTMLElement) => node.querySelectorAll('.au-select-badge,input')
     * \`\`\`
     */
    navSelector(node: HTMLElement): NodeListOf<HTMLSpanElement | HTMLInputElement>;
    /**
     * Callback called dropdown open state change
     * @param isOpen - updated open state
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onOpenChange(isOpen: boolean): void;
    /**
     * Callback called when the text filter change
     * @param text - Filtered text
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onFilterTextChange(text: string): void;
    /**
     * Callback called when the selection change
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onSelectedChange(selected: Item[]): void;
    /**
     * id used for the input inside the select
     */
    id: string | undefined;
    /**
     * aria-label used for the input inside the select
     *
     * @defaultValue \`'Select'\`
     */
    ariaLabel: string | undefined;
    /**
     * List of selected item ids
     *
     * @defaultValue \`[]\`
     */
    selected: Item[];
    /**
     * Filtered text to be display in the filter input
     *
     * @defaultValue \`''\`
     */
    filterText: string;
    /**
     * true if the select is disabled
     *
     * @defaultValue \`false\`
     */
    disabled: boolean;
    /**
     * true if the select is open
     *
     * @defaultValue \`false\`
     */
    open: boolean;
    /**
     * Class to be added on the dropdown menu container
     *
     * @defaultValue \`''\`
     */
    menuClassName: string;
    /**
     * Class to be added on menu items
     *
     * @defaultValue \`''\`
     */
    menuItemClassName: string;
    /**
     * Class to be added on selected items (displayed in the input zone)
     *
     * @defaultValue \`''\`
     */
    badgeClassName: string;
    /**
     * true if a loading process is being done
     *
     * @defaultValue \`false\`
     */
    loading: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * The template to override the way each badge on the left of the input is displayed.
     * This define the content of the badge inside the badge container.
     *
     * @defaultValue
     * \`\`\`ts
     * ({itemContext}: SelectItemContext<any>) => itemContext.item
     * \`\`\`
     */
    badgeLabel: SlotContent<SelectItemContext<Item>>;
    /**
     * The template to override the way each item is displayed in the list.
     * This define the content of the badge inside the badge container.
     *
     * @defaultValue
     * \`\`\`ts
     * ({itemContext}: SelectItemContext<any>) => itemContext.item
     * \`\`\`
     */
    itemLabel: SlotContent<SelectItemContext<Item>>;
}
export type SelectWidget<Item> = Widget<SelectProps<Item>, SelectState<Item>, SelectApi<Item>, SelectDirectives<Item>>;
/**
 * Creates a new select widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new select widget instance
 */
declare const export_createSelect: <Item>(config?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item>;
export { export_createSelect as createSelect };
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
export interface SelectDirectives<Item> {
    /**
     * Directive to be used in the input group and the menu containers
     */
    hasFocusDirective: HasFocus['directive'];
    /**
     * Directive that enables dynamic positioning of menu element
     */
    floatingDirective: FloatingUI['directives']['floatingDirective'];
    /**
     * A directive to be applied to the input group element serves as the base for menu positioning
     */
    referenceDirective: FloatingUI['directives']['referenceDirective'];
    /**
     * A directive to be applied to the element that contains the badges and the input
     */
    inputContainerDirective: Directive;
    /**
     * A directive that applies all the necessary attributes to the container badges
     */
    badgeAttributesDirective: Directive<ItemContext<Item>>;
    /**
     * A directive that applies all the necessary attributes to the dropdown menu
     */
    menuAttributesDirective: Directive;
    /**
     * A directive that applies all the necessary attributes to the dropdown item
     */
    itemAttributesDirective: Directive<ItemContext<Item>>;
    /**
     * A directive to be applied to the input
     */
    inputDirective: Directive;
    /**
     * A directive to be applied to a button that closes a badge
     */
    badgeCloseButtonDirective: Directive<ItemContext<Item>>;
}
`;export{e as default};
