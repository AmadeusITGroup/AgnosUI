const e=`import type { WidgetSlotContext, SlotContent, Widget, Directive } from '@agnos-ui/react-headless/types';
import type { Placement } from '@floating-ui/dom';
import type { HasFocus } from '@agnos-ui/react-headless/services/focustrack';
import type { FloatingUI } from '@agnos-ui/react-headless/services/floatingUI';
export type SelectContext<Item> = WidgetSlotContext<SelectWidget<Item>>;
export type SelectItemContext<Item> = SelectContext<Item> & {
    /**
     * Contextual data related to an item
     */
    itemContext: ItemContext<Item>;
};
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
     * CSS classes to be applied on the widget main container
     */
    className: string;
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
export interface SelectProps<Item> {
    /**
     * List of available items for the dropdown
     */
    items: Item[];
    /**
     * List of allowed placements for the dropdown.
     * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
     */
    allowedPlacements: Placement[];
    /**
     * Custom function to get the id of an item
     * By default, the item is returned
     */
    itemIdFn(item: Item): string;
    /**
     * Retrieves navigable elements within an HTML element containing badges and the input.
     */
    navSelector(node: HTMLElement): NodeListOf<HTMLSpanElement | HTMLInputElement>;
    /**
     * Callback called dropdown open state change
     */
    onOpenChange(isOpen: boolean): void;
    /**
     * Callback called when the text filter change
     */
    onFilterTextChange(text: string): void;
    /**
     * Callback called when the selection change
     */
    onSelectedChange(selected: Item[]): void;
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
     * CSS classes to be applied on the widget main container
     */
    className: string;
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
export type SelectWidget<Item> = Widget<SelectProps<Item>, SelectState<Item>, SelectApi<Item>, SelectActions<Item>, SelectDirectives<Item>>;
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
     */
    select(item: Item): void;
    /**
     * Unselect the provided item.
     */
    unselect(item: Item): void;
    /**
     * Toggle the selection of an item
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
}
export interface SelectActions<Item> {
    /**
     * Method to be plugged to on the 'input' event. The input text will be used as the filter text.
     */
    onInput: (e: {
        target: any;
    }) => void;
    /**
     * Method to be attached to the node element to close a badge on click.
     */
    onRemoveBadgeClick: (event: MouseEvent, item: Item) => void;
    /**
     * Method to be plugged to on an keydown event of the main input, in order to control the keyboard interactions with the highlighted item.
     * It manages arrow keys to move the highlighted item, or enter to toggle the item.
     */
    onInputKeydown: (event: KeyboardEvent) => void;
    /**
     * Method to be plugged to on an keydown event of a badge container, in order to manage main actions on badges.
     */
    onBadgeKeydown: (event: KeyboardEvent, item: Item) => void;
}
`;export{e as default};
