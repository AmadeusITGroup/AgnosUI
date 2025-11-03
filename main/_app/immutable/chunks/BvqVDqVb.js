const e=`import * as i1 from '@agnos-ui/angular-headless';
import { WidgetSlotContext, Widget, SlotContent, HasFocus, FloatingUI, Directive, PropsConfig, BaseWidgetDirective, WidgetFactory, TransitionFn, ConfigValidator, ToasterService as ToasterService$1, WidgetsConfigStore, Partial2Levels, WidgetProps, AngularWidget, IsSlotContent } from '@agnos-ui/angular-headless';
export * from '@agnos-ui/angular-headless';
import * as _angular_core from '@angular/core';
import { TemplateRef, AfterViewInit, OnInit, InputSignal, Injector, InjectionToken, FactoryProvider } from '@angular/core';
import { Placement } from '@floating-ui/dom';
import { ControlValueAccessor } from '@angular/forms';
import { modalCloseButtonClick, modalOutsideClick, modalCloseEscape } from '@agnos-ui/core-bootstrap/components/modal';
import { BSContextualClass } from '@agnos-ui/core-bootstrap/types';
export * from '@agnos-ui/core-bootstrap/types';
import { CollapseWidget as CollapseWidget$1 } from '@agnos-ui/core-bootstrap/components/collapse';
import { EmblaPluginType, EmblaPluginsType, EmblaCarouselType } from 'embla-carousel';
export * from '@agnos-ui/core-bootstrap/services/transitions';
import { BootstrapWidgetsConfig } from '@agnos-ui/core-bootstrap/config';
import { ReadableSignal } from '@amadeus-it-group/tansu';

/**
 * Retrieve a shallow copy of the default Select config
 * @returns the default Select config
 */
declare const export_getSelectDefaultConfig: () => SelectProps<any>;

/**
 * Interface for the slot context of the pagination widget
 * @template Item - The type of the items in the Select component.
 */
interface SelectContext<Item> extends WidgetSlotContext<SelectWidget<Item>> {
}
/**
 * Represents the context for a select item, extending the base \`SelectContext\` with additional
 * contextual data specific to an item.
 *
 * @template Item - The type of the item within the select context.
 */
interface SelectItemContext<Item> extends SelectContext<Item> {
    /**
     * Contextual data related to an item
     */
    itemContext: ItemContext<Item>;
}
/**
 * Represents the state of a Select component.
 *
 * @template Item - The type of the items in the select component.
 */
interface SelectState<Item> {
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
/**
 * Represents the properties for the Select component.
 *
 * @template Item - The type of the items in the select component.
 */
interface SelectProps<Item> {
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
/**
 * Represents a Select widget component.
 *
 * @template Item - The type of the items that the select widget will handle.
 */
type SelectWidget<Item> = Widget<SelectProps<Item>, SelectState<Item>, SelectApi<Item>, SelectDirectives<Item>>;
/**
 * Creates a new select widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new select widget instance
 */
declare const export_createSelect: <Item>(config?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item>;

/**
 * Item representation built from the items provided in parameters
 *
 * @template T - The type of the Select Items
 */
interface ItemContext<T> {
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
/**
 * Interface representing the API for a Select component.
 *
 * @template Item - The type of the Select Items
 */
interface SelectApi<Item> {
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
/**
 * Interface representing the directives used in the Select component.
 *
 * @template Item - The type of the Select Items
 */
interface SelectDirectives<Item> {
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

/**
 * Directive to provide a custom template for the badge label in a select component.
 *
 * @template Item - The type of the item in the select component.
 *
 * This directive uses a template reference to render the {@link SelectItemContext<Item>}.
 */
declare class SelectBadgeLabelDirective<Item> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Item>(_dir: SelectBadgeLabelDirective<Item>, context: unknown): context is SelectItemContext<Item>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SelectBadgeLabelDirective<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<SelectBadgeLabelDirective<any>, "ng-template[auSelectBadgeLabel]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide a custom label template for select items.
 *
 * This directive allows you to define a custom template for the labels of items
 * in a select component. The template can be specified using an Angular \`TemplateRef\`.
 *
 * @template Item - The type of the items in the select component.
 *
 * This directive uses a template reference to render the {@link SelectItemContext<Item>}.
 */
declare class SelectItemLabelDirective<Item> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Item>(_dir: SelectItemLabelDirective<Item>, context: unknown): context is SelectItemContext<Item>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SelectItemLabelDirective<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<SelectItemLabelDirective<any>, "ng-template[auSelectItemLabel]", never, {}, {}, never, never, true, never>;
}
/**
 * A component that represents a customizable select dropdown widget.
 *
 * @template Item - The type of items in the select dropdown.
 */
declare class SelectComponent<Item> extends BaseWidgetDirective<SelectWidget<Item>> {
    /**
     * aria-label used for the input inside the select
     *
     * @defaultValue \`'Select'\`
     */
    readonly ariaLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * id used for the input inside the select
     */
    readonly id: _angular_core.InputSignal<string | undefined>;
    /**
     * List of available items for the dropdown
     *
     * @defaultValue \`[]\`
     */
    readonly items: _angular_core.InputSignal<Item[] | undefined>;
    /**
     * List of allowed placements for the dropdown.
     * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
     *
     * @defaultValue
     * \`\`\`ts
     * ['bottom-start', 'top-start', 'bottom-end', 'top-end']
     * \`\`\`
     */
    readonly allowedPlacements: _angular_core.InputSignal<Placement[] | undefined>;
    /**
     * true if the select is open
     *
     * @defaultValue \`false\`
     */
    readonly open: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Filtered text to be display in the filter input
     *
     * @defaultValue \`''\`
     */
    readonly filterText: _angular_core.InputSignal<string | undefined>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    /**
     * true if the select is disabled
     *
     * @defaultValue \`false\`
     */
    readonly disabled: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * List of selected item ids
     *
     * @defaultValue \`[]\`
     */
    readonly selected: _angular_core.InputSignal<Item[] | undefined>;
    /**
     * true if a loading process is being done
     *
     * @defaultValue \`false\`
     */
    readonly loading: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Custom function to get the id of an item
     * By default, the item is returned
     *
     * @defaultValue
     * \`\`\`ts
     * (item: any) => '' + item
     * \`\`\`
     */
    readonly itemIdFn: _angular_core.InputSignal<((item: Item) => string) | undefined>;
    /**
     * Class to be added on the dropdown menu container
     *
     * @defaultValue \`''\`
     */
    readonly menuClassName: _angular_core.InputSignal<string | undefined>;
    /**
     * The template to override the way each badge on the left of the input is displayed.
     * This define the content of the badge inside the badge container.
     *
     * @defaultValue
     * \`\`\`ts
     * ({itemContext}: SelectItemContext<any>) => itemContext.item
     * \`\`\`
     */
    readonly badgeLabel: _angular_core.InputSignal<SlotContent<SelectItemContext<Item>>>;
    readonly slotSelectBadgeLabelFromContent: _angular_core.Signal<SelectBadgeLabelDirective<any> | undefined>;
    /**
     * The template to override the way each item is displayed in the list.
     * This define the content of the badge inside the badge container.
     *
     * @defaultValue
     * \`\`\`ts
     * ({itemContext}: SelectItemContext<any>) => itemContext.item
     * \`\`\`
     */
    readonly itemLabel: _angular_core.InputSignal<SlotContent<SelectItemContext<Item>>>;
    readonly slotSelectItemLabelFromContent: _angular_core.Signal<SelectItemLabelDirective<any> | undefined>;
    /**
     * Callback called when the text filter change
     * @param text - Filtered text
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly filterTextChange: _angular_core.OutputEmitterRef<string>;
    /**
     * Callback called when the selection change
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly selectedChange: _angular_core.OutputEmitterRef<Item[]>;
    /**
     * Callback called dropdown open state change
     * @param isOpen - updated open state
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly openChange: _angular_core.OutputEmitterRef<boolean>;
    /**
     * Class to be added on menu items
     *
     * @defaultValue \`''\`
     */
    readonly menuItemClassName: _angular_core.InputSignal<string | undefined>;
    /**
     * Class to be added on selected items (displayed in the input zone)
     *
     * @defaultValue \`''\`
     */
    readonly badgeClassName: _angular_core.InputSignal<string | undefined>;
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
    readonly navSelector: _angular_core.InputSignal<((node: HTMLElement) => NodeListOf<HTMLSpanElement | HTMLInputElement>) | undefined>;
    constructor();
    itemCtxTrackBy(_: number, itemContext: ItemContext<Item>): string;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SelectComponent<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<SelectComponent<any>, "[auSelect]", never, { "ariaLabel": { "alias": "auAriaLabel"; "required": false; "isSignal": true; }; "id": { "alias": "auId"; "required": false; "isSignal": true; }; "items": { "alias": "auItems"; "required": false; "isSignal": true; }; "allowedPlacements": { "alias": "auAllowedPlacements"; "required": false; "isSignal": true; }; "open": { "alias": "auOpen"; "required": false; "isSignal": true; }; "filterText": { "alias": "auFilterText"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "disabled": { "alias": "auDisabled"; "required": false; "isSignal": true; }; "selected": { "alias": "auSelected"; "required": false; "isSignal": true; }; "loading": { "alias": "auLoading"; "required": false; "isSignal": true; }; "itemIdFn": { "alias": "auItemIdFn"; "required": false; "isSignal": true; }; "menuClassName": { "alias": "auMenuClassName"; "required": false; "isSignal": true; }; "badgeLabel": { "alias": "auBadgeLabel"; "required": false; "isSignal": true; }; "itemLabel": { "alias": "auItemLabel"; "required": false; "isSignal": true; }; "menuItemClassName": { "alias": "auMenuItemClassName"; "required": false; "isSignal": true; }; "badgeClassName": { "alias": "auBadgeClassName"; "required": false; "isSignal": true; }; "navSelector": { "alias": "auNavSelector"; "required": false; "isSignal": true; }; }, { "filterTextChange": "auFilterTextChange"; "selectedChange": "auSelectedChange"; "openChange": "auOpenChange"; }, ["slotSelectBadgeLabelFromContent", "slotSelectItemLabelFromContent"], never, true, never>;
}

/**
 * Retrieve a shallow copy of the default Rating config
 * @returns the default Rating config
 */
declare const export_getRatingDefaultConfig: () => RatingProps;

/**
 * Represents the state of a rating component.
 */
interface RatingState {
    /**
     * the aria value of the rating
     */
    ariaValueText: string;
    /**
     * the visible value of the rating (it changes when hovering over the rating even though the real value did not change)
     */
    visibleRating: number;
    /**
     * is the rating interactive i.e. listening to hover, click and keyboard events
     */
    interactive: boolean;
    /**
     * the list of stars
     */
    stars: StarContext[];
    /**
     * The current rating. Could be a decimal value like \`3.75\`.
     *
     * @defaultValue \`0\`
     */
    rating: number;
    /**
     * The maximum rating that can be given.
     *
     * @defaultValue \`10\`
     */
    maxRating: number;
    /**
     * If \`true\`, the rating is disabled.
     *
     * @defaultValue \`false\`
     */
    disabled: boolean;
    /**
     * If \`true\`, the rating can't be changed.
     *
     * @defaultValue \`false\`
     */
    readonly: boolean;
    /**
     * Define if the rating can be reset.
     *
     * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
     *
     * @defaultValue \`true\`
     */
    resettable: boolean;
    /**
     * Allows setting a custom rating tabindex.
     * If the component is disabled, \`tabindex\` will still be set to \`-1\`.
     *
     * @defaultValue \`0\`
     */
    tabindex: number;
    /**
     * The aria label
     *
     * @defaultValue \`'Rating'\`
     */
    ariaLabel: string;
    /**
     * The aria labelled by
     *
     * @defaultValue \`''\`
     */
    ariaLabelledBy: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * The template to override the way each star is displayed.
     *
     * @defaultValue
     * \`\`\`ts
     * ({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
     * \`\`\`
     */
    star: SlotContent<StarContext>;
}
/**
 * Represents the properties for the Rating component.
 */
interface RatingProps {
    /**
     * Return the value for the 'aria-valuetext' attribute.
     * @param rating - Current rating value.
     * @param maxRating - maxRating value.
     *
     * @defaultValue
     * \`\`\`ts
     * (rating: number, maxRating: number) => \`\${rating} out of \${maxRating}\`
     * \`\`\`
     */
    ariaValueTextFn: (rating: number, maxRating: number) => string;
    /**
     * An event emitted when the rating is changed.
     *
     * Event payload is equal to the newly selected rating.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onRatingChange: (rating: number) => void;
    /**
     * An event emitted when the user is hovering over a given rating.
     *
     * Event payload is equal to the rating being hovered over.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHover: (rating: number) => void;
    /**
     * An event emitted when the user stops hovering over a given rating.
     *
     * Event payload is equal to the rating of the last item being hovered over.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onLeave: (rating: number) => void;
    /**
     * The current rating. Could be a decimal value like \`3.75\`.
     *
     * @defaultValue \`0\`
     */
    rating: number;
    /**
     * The maximum rating that can be given.
     *
     * @defaultValue \`10\`
     */
    maxRating: number;
    /**
     * If \`true\`, the rating is disabled.
     *
     * @defaultValue \`false\`
     */
    disabled: boolean;
    /**
     * If \`true\`, the rating can't be changed.
     *
     * @defaultValue \`false\`
     */
    readonly: boolean;
    /**
     * Define if the rating can be reset.
     *
     * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
     *
     * @defaultValue \`true\`
     */
    resettable: boolean;
    /**
     * Allows setting a custom rating tabindex.
     * If the component is disabled, \`tabindex\` will still be set to \`-1\`.
     *
     * @defaultValue \`0\`
     */
    tabindex: number;
    /**
     * The aria label
     *
     * @defaultValue \`'Rating'\`
     */
    ariaLabel: string;
    /**
     * The aria labelled by
     *
     * @defaultValue \`''\`
     */
    ariaLabelledBy: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * The template to override the way each star is displayed.
     *
     * @defaultValue
     * \`\`\`ts
     * ({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
     * \`\`\`
     */
    star: SlotContent<StarContext>;
}
/**
 * Represents a Rating Widget component.
 */
type RatingWidget = Widget<RatingProps, RatingState, RatingApi, RatingDirectives>;
/**
 * Create a RatingWidget with given config props
 * @param config - an optional rating config
 * @returns a RatingWidget
 */
declare const export_createRating: WidgetFactory<RatingWidget>;

/**
 * Represents the context for a star in a rating component.
 */
interface StarContext {
    /**
     * indicates how much the current star is filled, from 0 to 100
     */
    fill: number;
    /**
     * the position of the star in the rating
     */
    index: number;
}
/**
 * Interface representing directives for a rating component.
 */
interface RatingDirectives {
    /**
     * A directive to be applied to the main container
     * This will handle the keydown, mouseleave, tabindex and aria attributes
     */
    containerDirective: Directive;
    /**
     * A directive to be applied on each star element
     */
    starDirective: Directive<{
        index: number;
    }>;
}
/**
 * Interface representing the API that can be performed on a rating component.
 */
interface RatingApi {
    /**
     * Sets the rating value.
     *
     * @param index - Star index, starting from 1
     */
    setRating(index: number): void;
    /**
     * Sets the hovered rating value.
     *
     * @param index - Star index, starting from 1
     */
    setHoveredRating(index: number): void;
    /**
     * Leave the rating, resetting the visible rating to the rating value and triggering the onLeave callback
     */
    leave(): void;
}

/**
 * Directive to represent a rating star.
 *
 * This directive uses a template reference to render the {@link StarContext}.
 */
declare class RatingStarDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: RatingStarDirective, context: unknown): context is StarContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<RatingStarDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<RatingStarDirective, "ng-template[auRatingStar]", never, {}, {}, never, never, true, never>;
}
/**
 * The \`RatingComponent\` is an Angular component that allows users to provide a rating.
 * It extends \`BaseWidgetDirective\` and implements \`ControlValueAccessor\` to integrate with Angular forms.
 */
declare class RatingComponent extends BaseWidgetDirective<RatingWidget> implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    /**
     * Return the value for the 'aria-valuetext' attribute.
     * @param rating - Current rating value.
     * @param maxRating - maxRating value.
     *
     * @defaultValue
     * \`\`\`ts
     * (rating: number, maxRating: number) => \`\${rating} out of \${maxRating}\`
     * \`\`\`
     */
    readonly ariaValueTextFn: _angular_core.InputSignal<((rating: number, maxRating: number) => string) | undefined>;
    /**
     * If \`true\`, the rating is disabled.
     *
     * @defaultValue \`false\`
     */
    readonly disabled: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The maximum rating that can be given.
     *
     * @defaultValue \`10\`
     */
    readonly maxRating: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The current rating. Could be a decimal value like \`3.75\`.
     *
     * @defaultValue \`0\`
     */
    readonly rating: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * If \`true\`, the rating can't be changed.
     *
     * @defaultValue \`false\`
     */
    readonly readonly: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Define if the rating can be reset.
     *
     * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
     *
     * @defaultValue \`true\`
     */
    readonly resettable: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The template to override the way each star is displayed.
     *
     * @defaultValue
     * \`\`\`ts
     * ({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
     * \`\`\`
     */
    readonly star: _angular_core.InputSignal<SlotContent<StarContext>>;
    readonly slotStarFromContent: _angular_core.Signal<RatingStarDirective | undefined>;
    /**
     * Allows setting a custom rating tabindex.
     * If the component is disabled, \`tabindex\` will still be set to \`-1\`.
     *
     * @defaultValue \`0\`
     */
    readonly tabindex: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    /**
     * The aria label
     *
     * @defaultValue \`'Rating'\`
     */
    readonly ariaLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * The aria labelled by
     *
     * @defaultValue \`''\`
     */
    readonly ariaLabelledBy: _angular_core.InputSignal<string | undefined>;
    /**
     * An event emitted when the user is hovering over a given rating.
     *
     * Event payload is equal to the rating being hovered over.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly hover: _angular_core.OutputEmitterRef<number>;
    /**
     * An event emitted when the user stops hovering over a given rating.
     *
     * Event payload is equal to the rating of the last item being hovered over.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly leave: _angular_core.OutputEmitterRef<number>;
    /**
     * An event emitted when the rating is changed.
     *
     * Event payload is equal to the newly selected rating.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly ratingChange: _angular_core.OutputEmitterRef<number>;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(disabled: boolean): void;
    constructor();
    trackByIndex(index: number): number;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<RatingComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<RatingComponent, "[auRating]", never, { "ariaValueTextFn": { "alias": "auAriaValueTextFn"; "required": false; "isSignal": true; }; "disabled": { "alias": "auDisabled"; "required": false; "isSignal": true; }; "maxRating": { "alias": "auMaxRating"; "required": false; "isSignal": true; }; "rating": { "alias": "auRating"; "required": false; "isSignal": true; }; "readonly": { "alias": "auReadonly"; "required": false; "isSignal": true; }; "resettable": { "alias": "auResettable"; "required": false; "isSignal": true; }; "star": { "alias": "auStar"; "required": false; "isSignal": true; }; "tabindex": { "alias": "auTabindex"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "auAriaLabel"; "required": false; "isSignal": true; }; "ariaLabelledBy": { "alias": "auAriaLabelledBy"; "required": false; "isSignal": true; }; }, { "hover": "auHover"; "leave": "auLeave"; "ratingChange": "auRatingChange"; }, ["slotStarFromContent"], never, true, never>;
}

/**
 * Retrieve a shallow copy of the default Pagination config
 * @returns the default Pagination config
 */
declare const export_getPaginationDefaultConfig: () => PaginationProps;

/**
 * A type for the slot context of the pagination widget
 */
interface PaginationContext extends WidgetSlotContext<PaginationWidget> {
}
/**
 * A type for the slot context of the pagination widget when the slot is the number label
 */
interface PaginationNumberContext extends PaginationContext {
    /**
     * Displayed page
     */
    displayedPage: number;
}
/**
 * Represents the state of a pagination component.
 */
interface PaginationState {
    /**
     * The number of pages.
     */
    pageCount: number;
    /**
     * The current pages, the number in the Array is the number of the page.
     */
    pages: number[];
    /**
     * true if the previous link need to be disabled
     */
    previousDisabled: boolean;
    /**
     * true if the next link need to be disabled
     */
    nextDisabled: boolean;
    /**
     * The label for each "Page" page link.
     */
    pagesLabel: string[];
    /** The hrefs for each "Page" page link */
    pagesHrefs: string[];
    /** The hrefs for the direction links  */
    directionsHrefs: DirectionsHrefs;
    /** The aria-live text */
    ariaLiveLabelText: string;
    /**
     * The current page.
     *
     * Page numbers start with \`1\`.
     *
     * @defaultValue \`1\`
     */
    page: number;
    /**
     * The label for the nav element.
     *
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'Page navigation'\`
     */
    ariaLabel: string;
    /**
     * The label for the "active" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * '(current)'
     * \`\`\`
     */
    activeLabel: string;
    /**
     * The label for the "First" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for first page'
     * \`\`\`
     */
    ariaFirstLabel: string;
    /**
     * The label for the "Previous" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for previous page'
     * \`\`\`
     */
    ariaPreviousLabel: string;
    /**
     * The label for the "Next" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for next page'
     * \`\`\`
     */
    ariaNextLabel: string;
    /**
     * The label for the "Last" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for last page'
     * \`\`\`
     */
    ariaLastLabel: string;
    /**
     * The label for the "Ellipsis" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'Ellipsis page element'\`
     */
    ariaEllipsisLabel: string;
    /**
     * If \`true\`, pagination links will be disabled.
     *
     * @defaultValue \`false\`
     */
    disabled: boolean;
    /**
     * If \`true\`, the "Next" and "Previous" page links are shown.
     *
     * @defaultValue \`true\`
     */
    directionLinks: boolean;
    /**
     * If \`true\`, the "First" and "Last" page links are shown.
     *
     * @defaultValue \`false\`
     */
    boundaryLinks: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * The template to use for the structure of the pagination component
     * The default structure uses {@link PaginationProps.ellipsisLabel|ellipsisLabel}, {@link PaginationProps.firstPageLabel|firstPageLabel},
     * {@link PaginationProps.previousPageLabel|previousPageLabel}, {@link PaginationProps.nextPageLabel|nextPageLabel},
     * {@link PaginationProps.lastPageLabel|lastPageLabel}, {@link PaginationProps.pagesDisplay|pagesDisplay},
     * {@link PaginationProps.numberLabel|numberLabel},
     */
    structure: SlotContent<PaginationContext>;
    /**
     * The template to use for the ellipsis slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'…'\`
     */
    ellipsisLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the first slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'«'\`
     */
    firstPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the previous slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'‹'\`
     */
    previousPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the next slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'›'\`
     */
    nextPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the last slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'»'\`
     */
    lastPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the pages slot
     * To use to customize the pages view
     * override any configuration parameters provided for this
     */
    pagesDisplay: SlotContent<PaginationContext>;
    /**
     * The template to use for the number slot
     * override any configuration parameters provided for this
     * for I18n, we suggest to use the global configuration
     * @param displayedPage - The current page number
     *
     * @defaultValue
     * \`\`\`ts
     * ({displayedPage}: PaginationNumberContext) => \`\${displayedPage}\`
     * \`\`\`
     */
    numberLabel: SlotContent<PaginationNumberContext>;
    /**
     * The pagination display size.
     *
     * Bootstrap currently supports small and large sizes.
     *
     * @defaultValue \`null\`
     */
    size: 'sm' | 'lg' | null;
}
/**
 * Represents the properties for the Pagination component.
 */
interface PaginationProps {
    /**
     * The number of items in your paginated collection.
     *
     * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
     * \`collectionSize\` and \`pageSize\`.
     *
     * Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.
     *
     * Whatever the collectionSize the page number is of minimum 1.
     *
     * @defaultValue \`0\`
     */
    collectionSize: number;
    /**
     * The number of items per page.
     * @remarks min value is 1
     *
     * @defaultValue \`10\`
     */
    pageSize: number;
    /**
     * An event fired when the page is changed.
     *
     * Event payload is the number of the newly selected page.
     *
     * Page numbers start with \`1\`.
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onPageChange: (page: number) => void;
    /**
     * pagesFactory returns a function computing the array of pages to be displayed
     * as number (-1 are treated as ellipsis).
     * Use Page slot to customize the pages view and not this
     * @param page - The current page number
     * @param pageCount - The total number of pages
     *
     * @defaultValue
     * \`\`\`ts
     * (_page: number, pageCount: number) => {
     * 		const pages: number[] = [];
     * 		for (let i = 1; i <= pageCount; i++) {
     * 			pages.push(i);
     * 		}
     * 		return pages;
     * 	}
     * \`\`\`
     */
    pagesFactory: (page: number, pageCount: number) => number[];
    /**
     * Provide the label for each "Page" page button.
     * This is used for accessibility purposes.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @param processPage - The current page number
     * @param pageCount - The total number of pages
     *
     * @defaultValue
     * \`\`\`ts
     * (processPage: number, pageCount: number) => \`Page \${processPage} of \${pageCount}\`
     * \`\`\`
     */
    ariaPageLabel: (processPage: number, pageCount: number) => string;
    /**
     * Provide the label for the aria-live element
     * This is used for accessibility purposes.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @param currentPage - The current page number
     * @param pageCount - The total number of pages
     *
     * @defaultValue
     * \`\`\`ts
     * (currentPage: number) => \`Current page is \${currentPage}\`
     * \`\`\`
     */
    ariaLiveLabel: (currentPage: number, pageCount: number) => string;
    /**
     * Factory function providing the href for a "Page" page anchor,
     * based on the current page number
     * @param pageNumber - The index to use in the link
     *
     * @defaultValue
     * \`\`\`ts
     * (_page: number) => PAGE_LINK_DEFAULT
     * \`\`\`
     */
    pageLink: (pageNumber: number) => string;
    /**
     * The current page.
     *
     * Page numbers start with \`1\`.
     *
     * @defaultValue \`1\`
     */
    page: number;
    /**
     * The label for the nav element.
     *
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'Page navigation'\`
     */
    ariaLabel: string;
    /**
     * The label for the "active" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * '(current)'
     * \`\`\`
     */
    activeLabel: string;
    /**
     * The label for the "First" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for first page'
     * \`\`\`
     */
    ariaFirstLabel: string;
    /**
     * The label for the "Previous" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for previous page'
     * \`\`\`
     */
    ariaPreviousLabel: string;
    /**
     * The label for the "Next" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for next page'
     * \`\`\`
     */
    ariaNextLabel: string;
    /**
     * The label for the "Last" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for last page'
     * \`\`\`
     */
    ariaLastLabel: string;
    /**
     * The label for the "Ellipsis" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'Ellipsis page element'\`
     */
    ariaEllipsisLabel: string;
    /**
     * If \`true\`, pagination links will be disabled.
     *
     * @defaultValue \`false\`
     */
    disabled: boolean;
    /**
     * If \`true\`, the "Next" and "Previous" page links are shown.
     *
     * @defaultValue \`true\`
     */
    directionLinks: boolean;
    /**
     * If \`true\`, the "First" and "Last" page links are shown.
     *
     * @defaultValue \`false\`
     */
    boundaryLinks: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * The template to use for the structure of the pagination component
     * The default structure uses {@link PaginationProps.ellipsisLabel|ellipsisLabel}, {@link PaginationProps.firstPageLabel|firstPageLabel},
     * {@link PaginationProps.previousPageLabel|previousPageLabel}, {@link PaginationProps.nextPageLabel|nextPageLabel},
     * {@link PaginationProps.lastPageLabel|lastPageLabel}, {@link PaginationProps.pagesDisplay|pagesDisplay},
     * {@link PaginationProps.numberLabel|numberLabel},
     */
    structure: SlotContent<PaginationContext>;
    /**
     * The template to use for the ellipsis slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'…'\`
     */
    ellipsisLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the first slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'«'\`
     */
    firstPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the previous slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'‹'\`
     */
    previousPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the next slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'›'\`
     */
    nextPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the last slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'»'\`
     */
    lastPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the pages slot
     * To use to customize the pages view
     * override any configuration parameters provided for this
     */
    pagesDisplay: SlotContent<PaginationContext>;
    /**
     * The template to use for the number slot
     * override any configuration parameters provided for this
     * for I18n, we suggest to use the global configuration
     * @param displayedPage - The current page number
     *
     * @defaultValue
     * \`\`\`ts
     * ({displayedPage}: PaginationNumberContext) => \`\${displayedPage}\`
     * \`\`\`
     */
    numberLabel: SlotContent<PaginationNumberContext>;
    /**
     * The pagination display size.
     *
     * Bootstrap currently supports small and large sizes.
     *
     * @defaultValue \`null\`
     */
    size: 'sm' | 'lg' | null;
}
/**
 * Represents a pagination widget component.
 *
 * This type defines a widget that handles pagination functionality,
 * including properties, state, api and directives specific to pagination.
 */
type PaginationWidget = Widget<PaginationProps, PaginationState, PaginationApi, PaginationDirectives>;
/**
 * Create a PaginationWidget with given config props
 * @param config - an optional alert config
 * @returns a PaginationWidget
 */
declare const export_createPagination: WidgetFactory<PaginationWidget>;

/**
 * Interface representing the hrefs for pagination navigation links.
 */
interface DirectionsHrefs {
    /**
     * The href for the 'Previous' navigation link
     */
    previous: string;
    /**
     * The href for the 'Next' direction link
     */
    next: string;
}
/**
 * Interface representing pagination API for navigating through pages.
 */
interface PaginationApi {
    /**
     * To "go" to a specific page
     * @param page - The page number to select
     */
    select(page: number): void;
    /**
     * To "go" to the first page
     */
    first(): void;
    /**
     * To "go" to the previous page
     */
    previous(): void;
    /**
     * To "go" to the next page
     */
    next(): void;
    /**
     * To "go" to the last page
     */
    last(): void;
}
/**
 * Interface representing the directives for pagination components.
 */
interface PaginationDirectives {
    /**
     * A directive to be applied to each page link
     * This will handle the click, tabindex and aria attributes
     */
    pageLink: Directive<{
        page: number;
    }>;
    /**
     * A directive to be applied on the previous link
     */
    pagePrev: Directive;
    /**
     * A directive to be applied on the first link
     */
    pageFirst: Directive;
    /**
     * A directive to be applied on the next link
     */
    pageNext: Directive;
    /**
     * A directive to be applied on the Last link
     */
    pageLast: Directive;
}

/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
declare class PaginationEllipsisDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationEllipsisDirective, context: unknown): context is PaginationContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PaginationEllipsisDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<PaginationEllipsisDirective, "ng-template[auPaginationEllipsis]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'first' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
declare class PaginationFirstDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationFirstDirective, context: unknown): context is PaginationContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PaginationFirstDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<PaginationFirstDirective, "ng-template[auPaginationFirst]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'last' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
declare class PaginationLastDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationLastDirective, context: unknown): context is PaginationContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PaginationLastDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<PaginationLastDirective, "ng-template[auPaginationLast]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'next' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
declare class PaginationNextDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationNextDirective, context: unknown): context is PaginationContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PaginationNextDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<PaginationNextDirective, "ng-template[auPaginationNext]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the page 'number' template to the pagination component
 * This directive provides a template reference for the {@link PaginationNumberContext}.
 */
declare class PaginationNumberDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationNumberDirective, context: unknown): context is PaginationNumberContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PaginationNumberDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<PaginationNumberDirective, "ng-template[auPaginationNumber]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'previous' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
declare class PaginationPreviousDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationPreviousDirective, context: unknown): context is PaginationContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PaginationPreviousDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<PaginationPreviousDirective, "ng-template[auPaginationPrevious]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'Pages' template for the Pages slot
 * This directive provides a template reference for the {@link PaginationContext}.
 */
declare class PaginationPagesDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationPagesDirective, context: unknown): context is PaginationContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PaginationPagesDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<PaginationPagesDirective, "ng-template[auPaginationPages]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot structure for the pagination widget.
 * This directive provides a template reference for the {@link PaginationContext}.
 */
declare class PaginationStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationStructureDirective, context: unknown): context is PaginationContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PaginationStructureDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<PaginationStructureDirective, "ng-template[auPaginationStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * The default slot for the pages
 */
declare const paginationDefaultSlotPages: SlotContent<PaginationContext>;
/**
 * The default slot for the structure
 */
declare const paginationDefaultSlotStructure: SlotContent<PaginationContext>;
/**
 * The \`PaginationComponent\` is an Angular component that extends the \`BaseWidgetDirective\`
 * to provide a customizable pagination widget. It includes various input properties
 * to configure labels, templates, and behavior for accessibility and internationalization (i18n).
 */
declare class PaginationComponent extends BaseWidgetDirective<PaginationWidget> {
    /**
     * Provide the label for each "Page" page button.
     * This is used for accessibility purposes.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @param processPage - The current page number
     * @param pageCount - The total number of pages
     *
     * @defaultValue
     * \`\`\`ts
     * (processPage: number, pageCount: number) => \`Page \${processPage} of \${pageCount}\`
     * \`\`\`
     */
    readonly ariaPageLabel: _angular_core.InputSignal<((processPage: number, pageCount: number) => string) | undefined>;
    /**
     * Provide the label for the aria-live element
     * This is used for accessibility purposes.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @param currentPage - The current page number
     * @param pageCount - The total number of pages
     *
     * @defaultValue
     * \`\`\`ts
     * (currentPage: number) => \`Current page is \${currentPage}\`
     * \`\`\`
     */
    readonly ariaLiveLabel: _angular_core.InputSignal<((currentPage: number, pageCount: number) => string) | undefined>;
    /**
     * The label for the nav element.
     *
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'Page navigation'\`
     */
    readonly ariaLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * The label for the "active" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * '(current)'
     * \`\`\`
     */
    readonly activeLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * The label for the "First" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for first page'
     * \`\`\`
     */
    readonly ariaFirstLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * The label for the "Previous" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for previous page'
     * \`\`\`
     */
    readonly ariaPreviousLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * The label for the "Next" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for next page'
     * \`\`\`
     */
    readonly ariaNextLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * The label for the "Last" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue
     * \`\`\`ts
     * 'Action link for last page'
     * \`\`\`
     */
    readonly ariaLastLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * The label for the "Ellipsis" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'Ellipsis page element'\`
     */
    readonly ariaEllipsisLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * Factory function providing the href for a "Page" page anchor,
     * based on the current page number
     * @param pageNumber - The index to use in the link
     *
     * @defaultValue
     * \`\`\`ts
     * (_page: number) => PAGE_LINK_DEFAULT
     * \`\`\`
     */
    readonly pageLink: _angular_core.InputSignal<((pageNumber: number) => string) | undefined>;
    /**
     * The template to use for the ellipsis slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'…'\`
     */
    readonly ellipsisLabel: _angular_core.InputSignal<SlotContent<PaginationContext>>;
    readonly slotEllipsisFromContent: _angular_core.Signal<PaginationEllipsisDirective | undefined>;
    /**
     * The template to use for the first slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'«'\`
     */
    readonly firstPageLabel: _angular_core.InputSignal<SlotContent<PaginationContext>>;
    readonly slotFirstFromContent: _angular_core.Signal<PaginationFirstDirective | undefined>;
    /**
     * The template to use for the previous slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'‹'\`
     */
    readonly previousPageLabel: _angular_core.InputSignal<SlotContent<PaginationContext>>;
    readonly slotPreviousFromContent: _angular_core.Signal<PaginationPreviousDirective | undefined>;
    /**
     * The template to use for the next slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'›'\`
     */
    readonly nextPageLabel: _angular_core.InputSignal<SlotContent<PaginationContext>>;
    readonly slotNextFromContent: _angular_core.Signal<PaginationNextDirective | undefined>;
    /**
     * The template to use for the last slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'»'\`
     */
    readonly lastPageLabel: _angular_core.InputSignal<SlotContent<PaginationContext>>;
    readonly slotLastFromContent: _angular_core.Signal<PaginationLastDirective | undefined>;
    /**
     * The template to use for the pages slot
     * To use to customize the pages view
     * override any configuration parameters provided for this
     */
    readonly pagesDisplay: _angular_core.InputSignal<SlotContent<PaginationContext>>;
    readonly slotPagesFromContent: _angular_core.Signal<PaginationPagesDirective | undefined>;
    /**
     * The template to use for the number slot
     * override any configuration parameters provided for this
     * for I18n, we suggest to use the global configuration
     * @param displayedPage - The current page number
     *
     * @defaultValue
     * \`\`\`ts
     * ({displayedPage}: PaginationNumberContext) => \`\${displayedPage}\`
     * \`\`\`
     */
    readonly numberLabel: _angular_core.InputSignal<SlotContent<PaginationNumberContext>>;
    readonly slotNumberLabelFromContent: _angular_core.Signal<PaginationNumberDirective | undefined>;
    /**
     * The template to use for the structure of the pagination component
     * The default structure uses {@link PaginationProps.ellipsisLabel|ellipsisLabel}, {@link PaginationProps.firstPageLabel|firstPageLabel},
     * {@link PaginationProps.previousPageLabel|previousPageLabel}, {@link PaginationProps.nextPageLabel|nextPageLabel},
     * {@link PaginationProps.lastPageLabel|lastPageLabel}, {@link PaginationProps.pagesDisplay|pagesDisplay},
     * {@link PaginationProps.numberLabel|numberLabel},
     */
    readonly structure: _angular_core.InputSignal<SlotContent<PaginationContext>>;
    readonly slotStructureFromContent: _angular_core.Signal<PaginationStructureDirective | undefined>;
    /**
     * If \`true\`, pagination links will be disabled.
     *
     * @defaultValue \`false\`
     */
    readonly disabled: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, the "First" and "Last" page links are shown.
     *
     * @defaultValue \`false\`
     */
    readonly boundaryLinks: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, the "Next" and "Previous" page links are shown.
     *
     * @defaultValue \`true\`
     */
    readonly directionLinks: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The number of items in your paginated collection.
     *
     * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
     * \`collectionSize\` and \`pageSize\`.
     *
     * Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.
     *
     * Whatever the collectionSize the page number is of minimum 1.
     *
     * @defaultValue \`0\`
     */
    readonly collectionSize: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The current page.
     *
     * Page numbers start with \`1\`.
     *
     * @defaultValue \`1\`
     */
    readonly page: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The number of items per page.
     * @remarks min value is 1
     *
     * @defaultValue \`10\`
     */
    readonly pageSize: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The pagination display size.
     *
     * Bootstrap currently supports small and large sizes.
     *
     * @defaultValue \`null\`
     */
    readonly size: _angular_core.InputSignal<"sm" | "lg" | null | undefined>;
    /**
     * pagesFactory returns a function computing the array of pages to be displayed
     * as number (-1 are treated as ellipsis).
     * Use Page slot to customize the pages view and not this
     * @param page - The current page number
     * @param pageCount - The total number of pages
     *
     * @defaultValue
     * \`\`\`ts
     * (_page: number, pageCount: number) => {
     * 		const pages: number[] = [];
     * 		for (let i = 1; i <= pageCount; i++) {
     * 			pages.push(i);
     * 		}
     * 		return pages;
     * 	}
     * \`\`\`
     */
    readonly pagesFactory: _angular_core.InputSignal<((page: number, pageCount: number) => number[]) | undefined>;
    /**
     * An event fired when the page is changed.
     *
     * Event payload is the number of the newly selected page.
     *
     * Page numbers start with \`1\`.
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly pageChange: _angular_core.OutputEmitterRef<number>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<PaginationComponent, "[auPagination]", never, { "ariaPageLabel": { "alias": "auAriaPageLabel"; "required": false; "isSignal": true; }; "ariaLiveLabel": { "alias": "auAriaLiveLabel"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "auAriaLabel"; "required": false; "isSignal": true; }; "activeLabel": { "alias": "auActiveLabel"; "required": false; "isSignal": true; }; "ariaFirstLabel": { "alias": "auAriaFirstLabel"; "required": false; "isSignal": true; }; "ariaPreviousLabel": { "alias": "auAriaPreviousLabel"; "required": false; "isSignal": true; }; "ariaNextLabel": { "alias": "auAriaNextLabel"; "required": false; "isSignal": true; }; "ariaLastLabel": { "alias": "auAriaLastLabel"; "required": false; "isSignal": true; }; "ariaEllipsisLabel": { "alias": "auAriaEllipsisLabel"; "required": false; "isSignal": true; }; "pageLink": { "alias": "auPageLink"; "required": false; "isSignal": true; }; "ellipsisLabel": { "alias": "auEllipsisLabel"; "required": false; "isSignal": true; }; "firstPageLabel": { "alias": "auFirstPageLabel"; "required": false; "isSignal": true; }; "previousPageLabel": { "alias": "auPreviousPageLabel"; "required": false; "isSignal": true; }; "nextPageLabel": { "alias": "auNextPageLabel"; "required": false; "isSignal": true; }; "lastPageLabel": { "alias": "auLastPageLabel"; "required": false; "isSignal": true; }; "pagesDisplay": { "alias": "auPagesDisplay"; "required": false; "isSignal": true; }; "numberLabel": { "alias": "auNumberLabel"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "disabled": { "alias": "auDisabled"; "required": false; "isSignal": true; }; "boundaryLinks": { "alias": "auBoundaryLinks"; "required": false; "isSignal": true; }; "directionLinks": { "alias": "auDirectionLinks"; "required": false; "isSignal": true; }; "collectionSize": { "alias": "auCollectionSize"; "required": false; "isSignal": true; }; "page": { "alias": "auPage"; "required": false; "isSignal": true; }; "pageSize": { "alias": "auPageSize"; "required": false; "isSignal": true; }; "size": { "alias": "auSize"; "required": false; "isSignal": true; }; "pagesFactory": { "alias": "auPagesFactory"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; }, { "pageChange": "auPageChange"; }, ["slotEllipsisFromContent", "slotFirstFromContent", "slotPreviousFromContent", "slotNextFromContent", "slotLastFromContent", "slotPagesFromContent", "slotNumberLabelFromContent", "slotStructureFromContent"], never, true, never>;
}

/**
 * Retrieve a shallow copy of the default modal config
 * @returns the default modal config
 */
declare const export_getModalDefaultConfig: () => ModalProps<any>;

/**
 * Represents the context for a modal component.
 *
 * @template Data - The type of data associated with the modal.
 */
interface ModalContext<Data> extends WidgetSlotContext<ModalWidget<Data>> {
}
/**
 * Represents the state of a modal component.
 *
 * @template Data - The type of the data associated with the modal.
 */
interface ModalState<Data> {
    /**
     * Whether the backdrop is fully hidden. This can be true either because {@link ModalProps.backdrop|backdrop} is false or
     * because {@link ModalProps.visible|visible} is false and there is no current transition.
     */
    backdropHidden: boolean;
    /**
     * Whether the modal is fully hidden.
     */
    hidden: boolean;
    /**
     * Whether there is an active transition to either display or hide the modal.
     */
    transitioning: boolean;
    /**
     * DOM element of the modal.
     */
    modalElement: HTMLElement | null;
    /**
     * Value of the aria-label attribute to put on the close button.
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string;
    /**
     * Classes to add on the backdrop DOM element.
     *
     * @defaultValue \`''\`
     */
    backdropClass: string;
    /**
     * Whether to display the close button.
     *
     * @defaultValue \`true\`
     */
    closeButton: boolean;
    /**
     * Which element should contain the modal and backdrop DOM elements.
     * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     *
     * @defaultValue
     * \`\`\`ts
     * typeof window !== 'undefined' ? document.body : null
     * \`\`\`
     */
    container: HTMLElement | null;
    /**
     * Whether the modal should be visible when the transition is completed.
     *
     * @defaultValue \`false\`
     */
    visible: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Data to use in content slots
     */
    contentData: Data;
    /**
     * Body of the modal.
     */
    children: SlotContent<ModalContext<Data>>;
    /**
     * Footer of the modal.
     */
    footer: SlotContent<ModalContext<Data>>;
    /**
     * Header of the modal. The default header includes {@link ModalProps.title|title}.
     */
    header: SlotContent<ModalContext<Data>>;
    /**
     * Structure of the modal.
     * The default structure uses {@link ModalProps.header|header}, {@link ModalProps.children|children} and {@link ModalProps.footer|footer}.
     */
    structure: SlotContent<ModalContext<Data>>;
    /**
     * Title of the modal.
     */
    title: SlotContent<ModalContext<Data>>;
    /**
     * Option to create a fullscreen modal, according to the bootstrap documentation.
     *
     * @defaultValue \`false\`
     */
    fullscreen: boolean;
}
/**
 * Interface representing the properties for a modal component.
 *
 * @template Data - The type of data that the modal will handle.
 */
interface ModalProps<Data> {
    /**
     * The transition to use for the backdrop behind the modal (if present).
     *
     * @defaultValue \`fadeTransition\`
     */
    backdropTransition: TransitionFn;
    /**
     * The transition to use for the modal.
     *
     * @defaultValue \`fadeTransition\`
     */
    modalTransition: TransitionFn;
    /**
     * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
     *
     * @defaultValue \`true\`
     */
    animated: boolean;
    /**
     * Whether a backdrop should be created behind the modal.
     *
     * @defaultValue \`true\`
     */
    backdrop: boolean;
    /**
     * Whether the modal should be closed when clicking on the viewport outside the modal.
     *
     * @defaultValue \`true\`
     */
    closeOnOutsideClick: boolean;
    /**
     * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).
     *
     * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing
     * to cancel the close process.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onBeforeClose: (event: ModalBeforeCloseEvent) => void;
    /**
     * Event to be triggered when the visible property changes.
     *
     * @param visible - new value of the visible propery
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Event to be triggered when the transition is completed and the modal is not visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHidden: () => void;
    /**
     * Event to be triggered when the transition is completed and the modal is visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onShown: () => void;
    /**
     * Value of the aria-label attribute to put on the close button.
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string;
    /**
     * Classes to add on the backdrop DOM element.
     *
     * @defaultValue \`''\`
     */
    backdropClass: string;
    /**
     * Whether to display the close button.
     *
     * @defaultValue \`true\`
     */
    closeButton: boolean;
    /**
     * Which element should contain the modal and backdrop DOM elements.
     * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     *
     * @defaultValue
     * \`\`\`ts
     * typeof window !== 'undefined' ? document.body : null
     * \`\`\`
     */
    container: HTMLElement | null;
    /**
     * Whether the modal should be visible when the transition is completed.
     *
     * @defaultValue \`false\`
     */
    visible: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Data to use in content slots
     */
    contentData: Data;
    /**
     * Body of the modal.
     */
    children: SlotContent<ModalContext<Data>>;
    /**
     * Footer of the modal.
     */
    footer: SlotContent<ModalContext<Data>>;
    /**
     * Header of the modal. The default header includes {@link ModalProps.title|title}.
     */
    header: SlotContent<ModalContext<Data>>;
    /**
     * Structure of the modal.
     * The default structure uses {@link ModalProps.header|header}, {@link ModalProps.children|children} and {@link ModalProps.footer|footer}.
     */
    structure: SlotContent<ModalContext<Data>>;
    /**
     * Title of the modal.
     */
    title: SlotContent<ModalContext<Data>>;
    /**
     * Option to create a fullscreen modal, according to the bootstrap documentation.
     *
     * @defaultValue \`false\`
     */
    fullscreen: boolean;
}
/**
 * Interface representing the API for a modal component.
 *
 * @template Data - The type of data associated with the modal.
 */
interface ModalApi<Data> {
    /**
     * Method to change some modal properties.
     */
    patch: ModalWidget<Data>['patch'];
    /**
     * Closes the modal with the given result.
     *
     * @param result - result of the modal, as passed in the {@link ModalBeforeCloseEvent.result|result} property of the event passed to the
     * {@link ModalProps.onBeforeClose|onBeforeClose} event handler (and possibly changed by it) and resolved by the promise returned by the {@link ModalApi.open|open} method.
     */
    close(result?: any): void;
    /**
     * Opens the modal and returns a promise that is resolved when the modal is closed.
     * The resolved value is the result passed to the {@link ModalApi.close|close} method and possibly changed by the
     * {@link ModalProps.onBeforeClose|onBeforeClose} event handler
     */
    open(): Promise<any>;
}
/**
 * Represents a modal widget with specific data type.
 *
 * @template Data - The type of data that the modal widget will handle.
 */
type ModalWidget<Data> = Widget<ModalProps<Data>, ModalState<Data>, ModalApi<Data>, ModalDirectives>;
/**
 * Creates a new modal widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
declare const export_createModal: <Data>(config?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data>;

/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click inside the viewport but outside the modal.
 */
declare const export_modalOutsideClick: typeof modalOutsideClick;

/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click on the close button.
 */
declare const export_modalCloseButtonClick: typeof modalCloseButtonClick;

/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by pressing the Escape key.
 */
declare const export_modalCloseEscape: typeof modalCloseEscape;

/**
 * Type of the parameter of {@link ModalProps.onBeforeClose|onBeforeClose}.
 */
interface ModalBeforeCloseEvent {
    /**
     * Result of the modal, which is the value passed to the {@link ModalApi.close|close} method
     * and later resolved by the promise returned by the {@link ModalApi.open|open} method.
     * If needed, it can be changed from the {@link ModalProps.onBeforeClose|onBeforeClose} event handler.
     */
    result: any;
    /**
     * Whether to cancel the close of the modal.
     * It can be changed from the {@link ModalProps.onBeforeClose|onBeforeClose} event handler.
     */
    cancel: boolean;
}
/**
 * Directives of the modal widget.
 */
interface ModalDirectives {
    /**
     * Directive to put on the modal DOM element.
     */
    modalDirective: Directive;
    /**
     * Directive to put on the backdrop DOM element.
     */
    backdropDirective: Directive;
    /**
     * Portal directive to put on the modal DOM element.
     */
    modalPortalDirective: Directive;
    /**
     * Portal directive to put on the backdrop DOM element.
     */
    backdropPortalDirective: Directive;
    /**
     * Directive that adds all the necessary attributes to the close button
     */
    closeButtonDirective: Directive;
    /**
     * Directive to apply to the dialog element when using the native {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement | HTMLDialogElement}
     */
    dialogDirective: Directive;
}

/**
 * Directive to provide the slot structure for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
declare class ModalStructureDirective<Data> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Data>(_dir: ModalStructureDirective<Data>, context: unknown): context is ModalContext<Data>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ModalStructureDirective<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ModalStructureDirective<any>, "ng-template[auModalStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot header for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
declare class ModalHeaderDirective<Data> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Data>(_dir: ModalHeaderDirective<Data>, context: unknown): context is ModalContext<Data>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ModalHeaderDirective<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ModalHeaderDirective<any>, "ng-template[auModalHeader]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot title for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
declare class ModalTitleDirective<Data> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Data>(_dir: ModalTitleDirective<Data>, context: unknown): context is ModalContext<Data>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ModalTitleDirective<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ModalTitleDirective<any>, "ng-template[auModalTitle]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the default slot for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
declare class ModalBodyDirective<Data> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Data>(_dir: ModalBodyDirective<Data>, context: unknown): context is ModalContext<Data>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ModalBodyDirective<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ModalBodyDirective<any>, "ng-template[auModalBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot footer for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
declare class ModalFooterDirective<Data> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Data>(_dir: ModalFooterDirective<Data>, context: unknown): context is ModalContext<Data>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ModalFooterDirective<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ModalFooterDirective<any>, "ng-template[auModalFooter]", never, {}, {}, never, never, true, never>;
}
/**
 * Default slot for modal header.
 */
declare const modalDefaultSlotHeader: SlotContent<ModalContext<any>>;
/**
 * Default slot for modal structure.
 */
declare const modalDefaultSlotStructure: SlotContent<ModalContext<any>>;
/**
 * Modal component.
 */
declare class ModalComponent<Data> extends BaseWidgetDirective<ModalWidget<Data>> {
    /**
     * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
     *
     * @defaultValue \`true\`
     */
    readonly animated: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The transition to use for the backdrop behind the modal (if present).
     *
     * @defaultValue \`fadeTransition\`
     */
    readonly backdropTransition: _angular_core.InputSignal<TransitionFn | undefined>;
    /**
     * The transition to use for the modal.
     *
     * @defaultValue \`fadeTransition\`
     */
    readonly modalTransition: _angular_core.InputSignal<TransitionFn | undefined>;
    /**
     * Whether the modal should be visible when the transition is completed.
     *
     * @defaultValue \`false\`
     */
    readonly visible: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Whether a backdrop should be created behind the modal.
     *
     * @defaultValue \`true\`
     */
    readonly backdrop: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Whether the modal should be closed when clicking on the viewport outside the modal.
     *
     * @defaultValue \`true\`
     */
    readonly closeOnOutsideClick: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Which element should contain the modal and backdrop DOM elements.
     * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     *
     * @defaultValue
     * \`\`\`ts
     * typeof window !== 'undefined' ? document.body : null
     * \`\`\`
     */
    readonly container: _angular_core.InputSignal<HTMLElement | null | undefined>;
    /**
     * Value of the aria-label attribute to put on the close button.
     *
     * @defaultValue \`'Close'\`
     */
    readonly ariaCloseButtonLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * Classes to add on the backdrop DOM element.
     *
     * @defaultValue \`''\`
     */
    readonly backdropClass: _angular_core.InputSignal<string | undefined>;
    /**
     * Whether to display the close button.
     *
     * @defaultValue \`true\`
     */
    readonly closeButton: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    /**
     * Option to create a fullscreen modal, according to the bootstrap documentation.
     *
     * @defaultValue \`false\`
     */
    readonly fullscreen: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Structure of the modal.
     * The default structure uses {@link ModalProps.header|header}, {@link ModalProps.children|children} and {@link ModalProps.footer|footer}.
     */
    readonly structure: _angular_core.InputSignal<SlotContent<ModalContext<Data>>>;
    readonly slotStructureFromContent: _angular_core.Signal<ModalStructureDirective<any> | undefined>;
    /**
     * Header of the modal. The default header includes {@link ModalProps.title|title}.
     */
    readonly header: _angular_core.InputSignal<SlotContent<ModalContext<Data>>>;
    readonly slotHeaderFromContent: _angular_core.Signal<ModalHeaderDirective<any> | undefined>;
    /**
     * Title of the modal.
     */
    readonly title: _angular_core.InputSignal<SlotContent<ModalContext<Data>>>;
    readonly slotTitleFromContent: _angular_core.Signal<ModalTitleDirective<any> | undefined>;
    /**
     * Body of the modal.
     */
    readonly children: _angular_core.InputSignal<SlotContent<ModalContext<Data>>>;
    readonly slotDefaultFromContent: _angular_core.Signal<ModalBodyDirective<any> | undefined>;
    /**
     * Footer of the modal.
     */
    readonly footer: _angular_core.InputSignal<SlotContent<ModalContext<Data>>>;
    readonly slotFooterFromContent: _angular_core.Signal<ModalFooterDirective<any> | undefined>;
    /**
     * Data to use in content slots
     */
    readonly contentData: _angular_core.InputSignal<Data | undefined>;
    /**
     * Event to be triggered when the visible property changes.
     *
     * @param visible - new value of the visible propery
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly visibleChange: _angular_core.OutputEmitterRef<boolean>;
    /**
     * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).
     *
     * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing
     * to cancel the close process.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly beforeClose: _angular_core.OutputEmitterRef<ModalBeforeCloseEvent>;
    /**
     * Event to be triggered when the transition is completed and the modal is not visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly hidden: _angular_core.OutputEmitterRef<void>;
    /**
     * Event to be triggered when the transition is completed and the modal is visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly shown: _angular_core.OutputEmitterRef<void>;
    readonly slotChildren: _angular_core.Signal<TemplateRef<void> | undefined>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ModalComponent<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ModalComponent<any>, "[auModal]", never, { "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "backdropTransition": { "alias": "auBackdropTransition"; "required": false; "isSignal": true; }; "modalTransition": { "alias": "auModalTransition"; "required": false; "isSignal": true; }; "visible": { "alias": "auVisible"; "required": false; "isSignal": true; }; "backdrop": { "alias": "auBackdrop"; "required": false; "isSignal": true; }; "closeOnOutsideClick": { "alias": "auCloseOnOutsideClick"; "required": false; "isSignal": true; }; "container": { "alias": "auContainer"; "required": false; "isSignal": true; }; "ariaCloseButtonLabel": { "alias": "auAriaCloseButtonLabel"; "required": false; "isSignal": true; }; "backdropClass": { "alias": "auBackdropClass"; "required": false; "isSignal": true; }; "closeButton": { "alias": "auCloseButton"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "fullscreen": { "alias": "auFullscreen"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "header": { "alias": "auHeader"; "required": false; "isSignal": true; }; "title": { "alias": "auTitle"; "required": false; "isSignal": true; }; "children": { "alias": "auChildren"; "required": false; "isSignal": true; }; "footer": { "alias": "auFooter"; "required": false; "isSignal": true; }; "contentData": { "alias": "auContentData"; "required": false; "isSignal": true; }; }, { "visibleChange": "auVisibleChange"; "beforeClose": "auBeforeClose"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotStructureFromContent", "slotHeaderFromContent", "slotTitleFromContent", "slotDefaultFromContent", "slotFooterFromContent"], ["*"], true, never>;
}

/**
 * Retrieve a shallow copy of the default Alert config
 * @returns the default Alert config
 */
declare const export_getAlertDefaultConfig: () => AlertProps;

/**
 * Represents the context for an Alert component.
 */
interface AlertContext extends WidgetSlotContext<AlertWidget> {
}
/**
 * Represents the state of an alert component.
 */
interface AlertState {
    /**
     * Is \`true\` when the alert is hidden. Compared to \`visible\`, this is updated after the transition is executed.
     */
    hidden: boolean;
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     *
     * @defaultValue \`true\`
     */
    dismissible: boolean;
    /**
     * If \`true\` the alert is visible to the user
     *
     * @defaultValue \`true\`
     */
    visible: boolean;
    /**
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Global template for the alert component
     */
    structure: SlotContent<AlertContext>;
    /**
     * Template for the alert content
     */
    children: SlotContent<AlertContext>;
    /**
     * Type of the alert, following bootstrap types.
     *
     * @defaultValue \`'primary'\`
     */
    type: BSContextualClass;
}
/**
 * Represents the properties for the Alert component.
 */
interface AlertProps {
    /**
     * The transition function will be executed when the alert is displayed or hidden.
     *
     * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
     *
     * @defaultValue \`fadeTransition\`
     */
    transition: TransitionFn;
    /**
     * Callback called when the alert visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Callback called when the alert is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHidden: () => void;
    /**
     * Callback called when the alert is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onShown: () => void;
    /**
     * If \`true\`, alert opening will be animated.
     *
     * Animation is triggered  when the \`.open()\` function is called
     * or the visible prop is changed
     *
     * @defaultValue \`false\`
     */
    animatedOnInit: boolean;
    /**
     * If \`true\`, alert closing will be animated.
     *
     * Animation is triggered  when clicked on the close button (×),
     * via the \`.close()\` function or the visible prop is changed
     *
     * @defaultValue \`true\`
     */
    animated: boolean;
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     *
     * @defaultValue \`true\`
     */
    dismissible: boolean;
    /**
     * If \`true\` the alert is visible to the user
     *
     * @defaultValue \`true\`
     */
    visible: boolean;
    /**
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Global template for the alert component
     */
    structure: SlotContent<AlertContext>;
    /**
     * Template for the alert content
     */
    children: SlotContent<AlertContext>;
    /**
     * Type of the alert, following bootstrap types.
     *
     * @defaultValue \`'primary'\`
     */
    type: BSContextualClass;
}
/**
 * Represents an alert widget component.
 */
type AlertWidget = Widget<AlertProps, AlertState, AlertApi, AlertDirectives>;
/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
declare const export_createAlert: WidgetFactory<AlertWidget>;

/**
 * Represents the API for an alert component.
 */
interface AlertApi {
    /**
     * Triggers alert closing programmatically (same as clicking on the close button (×)).
     */
    close(): void;
    /**
     * Triggers the alert to be displayed for the user.
     */
    open(): void;
}
/**
 * Represents the directives for an alert component.
 */
interface AlertDirectives {
    /**
     * the transition directive, piloting what is the visual effect of going from hidden to visible
     */
    transitionDirective: Directive;
}

/**
 * Directive to be used as a structural directive for the body of an alert component.
 *
 * This directive allows the use of a template reference for the alert body content, with type {@link AlertContext}.
 */
declare class AlertBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AlertBodyDirective, context: unknown): context is AlertContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<AlertBodyDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<AlertBodyDirective, "ng-template[auAlertBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to define the structure of an alert component.
 *
 * This directive uses a \`TemplateRef\` to inject the template reference of the {@link AlertContext}.
 */
declare class AlertStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AlertStructureDirective, context: unknown): context is AlertContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<AlertStructureDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<AlertStructureDirective, "ng-template[auAlertStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Represents the default slot structure for the alert component.
 */
declare const alertDefaultSlotStructure: SlotContent<AlertContext>;
/**
 * AlertComponent is a UI component that extends BaseWidgetDirective to provide
 * an alert box with various customizable properties and behaviors.
 *
 * @remarks
 * This component is designed to be used with Bootstrap styles and supports
 * various Bootstrap contextual classes for different alert types.
 */
declare class AlertComponent extends BaseWidgetDirective<AlertWidget> {
    /**
     * Type of the alert, following bootstrap types.
     *
     * @defaultValue \`'primary'\`
     */
    readonly type: _angular_core.InputSignal<BSContextualClass | undefined>;
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     *
     * @defaultValue \`true\`
     */
    readonly dismissible: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The transition function will be executed when the alert is displayed or hidden.
     *
     * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
     *
     * @defaultValue \`fadeTransition\`
     */
    readonly transition: _angular_core.InputSignal<TransitionFn | undefined>;
    /**
     * If \`true\` the alert is visible to the user
     *
     * @defaultValue \`true\`
     */
    readonly visible: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, alert opening will be animated.
     *
     * Animation is triggered  when the \`.open()\` function is called
     * or the visible prop is changed
     *
     * @defaultValue \`false\`
     */
    readonly animatedOnInit: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, alert closing will be animated.
     *
     * Animation is triggered  when clicked on the close button (×),
     * via the \`.close()\` function or the visible prop is changed
     *
     * @defaultValue \`true\`
     */
    readonly animated: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    readonly ariaCloseButtonLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * Template for the alert content
     */
    readonly children: _angular_core.InputSignal<SlotContent<AlertContext>>;
    readonly slotDefaultFromContent: _angular_core.Signal<AlertBodyDirective | undefined>;
    /**
     * Global template for the alert component
     */
    readonly structure: _angular_core.InputSignal<SlotContent<AlertContext>>;
    readonly slotStructureFromContent: _angular_core.Signal<AlertStructureDirective | undefined>;
    /**
     * Callback called when the alert visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly visibleChange: _angular_core.OutputEmitterRef<boolean>;
    /**
     * Callback called when the alert is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly hidden: _angular_core.OutputEmitterRef<void>;
    /**
     * Callback called when the alert is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly shown: _angular_core.OutputEmitterRef<void>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    readonly slotChildren: _angular_core.Signal<TemplateRef<void> | undefined>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<AlertComponent, "[auAlert]", never, { "type": { "alias": "auType"; "required": false; "isSignal": true; }; "dismissible": { "alias": "auDismissible"; "required": false; "isSignal": true; }; "transition": { "alias": "auTransition"; "required": false; "isSignal": true; }; "visible": { "alias": "auVisible"; "required": false; "isSignal": true; }; "animatedOnInit": { "alias": "auAnimatedOnInit"; "required": false; "isSignal": true; }; "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "ariaCloseButtonLabel": { "alias": "auAriaCloseButtonLabel"; "required": false; "isSignal": true; }; "children": { "alias": "auChildren"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; }, { "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotDefaultFromContent", "slotStructureFromContent"], ["*"], true, never>;
}

/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
declare const export_getAccordionDefaultConfig: () => AccordionProps;

/**
 * Represents the context for an accordion item within the accordion component.
 */
interface AccordionItemContext extends WidgetSlotContext<AccordionItemWidget> {
}
/**
 * Represents the state of an Accordion component.
 */
interface AccordionState {
    /**
     * Array containing all the accordion-items contained in the accordion.
     */
    itemWidgets: AccordionItemWidget[];
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    itemStructure: SlotContent<AccordionItemContext>;
}
/**
 * Represents the state of an AccordionItem component.
 */
interface AccordionProps {
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     *
     * @defaultValue
     * \`\`\`ts
     * collapseVerticalTransition
     * \`\`\`
     */
    itemTransition: TransitionFn;
    /**
     * If \`true\`, only one accordion-item at the time can stay open.
     *
     * @defaultValue \`false\`
     */
    closeOthers: boolean;
    /**
     * An event fired when an item is shown.
     *
     * Event payload is the id of the item.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onItemShown: (itemId: string) => void;
    /**
     * An event fired when an item is hidden.
     *
     * Event payload is the id of the item.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onItemHidden: (itemId: string) => void;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     *
     * @defaultValue \`true\`
     */
    itemDestroyOnHide: boolean;
    /**
     * If \`true\`, accordion-item will be animated.
     *
     * @defaultValue \`true\`
     */
    itemAnimated: boolean;
    /**
     * CSS classes to add on the accordion-item DOM element.
     *
     * @defaultValue \`''\`
     */
    itemClassName: string;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     *
     * @defaultValue \`''\`
     */
    itemHeaderClassName: string;
    /**
     * CSS classes to add on the accordion-item toggle button DOM element.
     *
     * @defaultValue \`''\`
     */
    itemButtonClassName: string;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     *
     * @defaultValue \`''\`
     */
    itemBodyContainerClassName: string;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     *
     * @defaultValue \`''\`
     */
    itemBodyClassName: string;
    /**
     * The html tag to use for the accordion-item-header.
     *
     * @defaultValue \`''\`
     */
    itemHeadingTag: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    itemStructure: SlotContent<AccordionItemContext>;
}
/**
 * Represents an Accordion widget type.
 */
type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, AccordionDirectives>;
/**
 * Represents the state of an accordion item, extending the core item state and additional properties specific to the accordion item.
 */
interface AccordionItemState {
    /**
     * If \`true\` the content of the accordion-item collapse should be in DOM. Its value depends on the
     * value of the \`visible\` and \`destroyOnHide\`.
     */
    shouldBeInDOM: boolean;
    /**
     * If \`true\`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
     */
    visible: boolean;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     */
    disabled: boolean;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     */
    id: string;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     */
    headerClassName: string;
    /**
     * CSS classes to add on the accordion-item collapse DOM element.
     */
    buttonClassName: string;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     */
    bodyContainerClassName: string;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     */
    bodyClassName: string;
    /**
     * The html tag to use for the accordion-item-header.
     */
    headingTag: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    structure: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion body.
     *
     * It is a prop of the accordion-item.
     */
    children: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion button inside the accordion header.
     *
     * It is a prop of the accordion-item.
     */
    header: SlotContent<AccordionItemContext>;
}
/**
 * Represents the properties for an Accordion item component.
 */
interface AccordionItemProps {
    /**
     * If \`true\`, accordion-item will be animated.
     */
    animated: boolean;
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     */
    transition: TransitionFn;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     */
    destroyOnHide: boolean;
    /**
     * An event fired when an item is shown.
     */
    onShown: () => void;
    /**
     * An event fired when an item is hidden.
     */
    onHidden: () => void;
    /**
     * An event fired when the \`visible\` value changes.
     *
     * Event payload is the new value of visible.
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * If \`true\`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
     */
    visible: boolean;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     */
    disabled: boolean;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     */
    id: string;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     */
    headerClassName: string;
    /**
     * CSS classes to add on the accordion-item collapse DOM element.
     */
    buttonClassName: string;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     */
    bodyContainerClassName: string;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     */
    bodyClassName: string;
    /**
     * The html tag to use for the accordion-item-header.
     */
    headingTag: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    structure: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion body.
     *
     * It is a prop of the accordion-item.
     */
    children: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion button inside the accordion header.
     *
     * It is a prop of the accordion-item.
     */
    header: SlotContent<AccordionItemContext>;
}
/**
 * Represents a widget for an accordion item.
 */
type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemDirectives>;
/**
 * Create an AccordionItemWidget with given config props
 * @param config - an optional AccordionItem config
 * @returns an AccordionItemWidget
 */
declare const export_createAccordionItem: WidgetFactory<AccordionItemWidget>;

/**
 * Create an AccordionWidget with given config props
 * @param config - an optional accordion config
 * @returns an AccordionWidget
 */
declare const export_createAccordion: WidgetFactory<AccordionWidget>;

/**
 * Create an accordion WidgetFactory based on a item factory and the list of item props that should inherit from the parent accordion
 *
 * @param itemFactory - the item factory
 * @param accordionItemProps - the list of item props
 * @param accordionConfig - the default accordion config
 * @param accordionValidator - the validator of props
 * @returns the accordion widget factory
 */
declare const export_factoryCreateAccordion: (itemFactory?: WidgetFactory<AccordionItemWidget>, accordionItemProps?: string[], accordionConfig?: AccordionProps, accordionValidator?: ConfigValidator<AccordionProps>) => WidgetFactory<AccordionWidget>;

/**
 * Interface representing the API for an accordion component.
 */
interface AccordionApi {
    /**
     * Given the itemId, will expand the corresponding accordion-item.
     *
     * If the itemId is not valid, nothing will happen.
     */
    expand(itemId: string): void;
    /**
     * Given the itemId, will collapse the corresponding accordion-item.
     *
     * If the itemId is not valid, nothing will happen.
     */
    collapse(itemId: string): void;
    /**
     * Given the itemId, will toggle the corresponding accordion-item.
     *
     * If the itemId is not valid, nothing will happen.
     */
    toggle(itemId: string): void;
    /**
     * It will expand all the items in the accordion.
     *
     * If \`closeOthers\` is \`true\` it will expand only the last accordion-item.
     */
    expandAll(): void;
    /**
     * It will collapse all the accordion-items in the accordion.
     */
    collapseAll(): void;
    /**
     * Creates a new accordionItem.
     */
    registerItem(itemConfig?: PropsConfig<AccordionItemProps>): AccordionItemWidget;
}
/**
 * Interface representing the directives used in the Accordion component.
 */
interface AccordionDirectives {
    /**
     * Directive to put on the accordion DOM element
     */
    accordionDirective: Directive;
}
/**
 * Interface representing the API for an accordion item.
 */
interface AccordionItemApi {
    /**
     * It will collapse the accordion-item.
     */
    collapse(): void;
    /**
     * It will expand the accordion-item.
     */
    expand(): void;
    /**
     * It will toggle the accordion-item.
     */
    toggle(): void;
    /**
     * Method to be called after the initialization to allow animations.
     */
    initDone(): void;
}
/**
 * Interface representing the directives used in an accordion item.
 */
interface AccordionItemDirectives {
    /**
     * Directive to use in special cases, if the accordion header does not use a button element to control the collapsing.
     */
    toggleDirective: Directive;
    /**
     * Directive to put on the button element that will control the collapsing of the accordion-item.
     */
    buttonDirective: Directive;
    /**
     * Directive to put on the accordion-item header that will contain the button element.
     */
    headerDirective: Directive;
    /**
     * Directive to put on the accordion-item body.
     */
    bodyDirective: Directive;
    /**
     * Directive to apply the itemTransition
     */
    transitionDirective: Directive;
    /**
     * Directive to apply aria attributes to the expanded body panel
     */
    bodyContainerAttrsDirective: Directive;
    /**
     * Directive to be put on the accordion-item body container. It will handle the animation.
     */
    bodyContainerDirective: Directive;
    /**
     * Directive to be put on the accordion-item. It will handle adding the accordion-item to the accordion.
     */
    itemDirective: Directive;
}

/**
 * Directive to represent the body of an accordion item.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 */
declare class AccordionBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AccordionBodyDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<AccordionBodyDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<AccordionBodyDirective, "ng-template[auAccordionItemBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to be used as an accordion header.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 */
declare class AccordionHeaderDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AccordionHeaderDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<AccordionHeaderDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<AccordionHeaderDirective, "ng-template[auAccordionItemHeader]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive that represents the structure of an accordion item.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 * It also includes a static method to guard the template context type.
 */
declare class AccordionItemStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AccordionItemStructureDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<AccordionItemStructureDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<AccordionItemStructureDirective, "ng-template[auAccordionItemStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Represents the default slot structure for an accordion item.
 */
declare const accordionItemDefaultSlotStructure: SlotContent<AccordionItemContext>;
/**
 * AccordionItemComponent is a component that represents an item within an accordion.
 */
declare class AccordionItemComponent extends BaseWidgetDirective<AccordionItemWidget> implements AfterViewInit {
    /**
     * Content present in the accordion button inside the accordion header.
     *
     * It is a prop of the accordion-item.
     */
    readonly header: _angular_core.InputSignal<SlotContent<AccordionItemContext>>;
    readonly slotHeaderFromContent: _angular_core.Signal<AccordionHeaderDirective | undefined>;
    /**
     * Content present in the accordion body.
     *
     * It is a prop of the accordion-item.
     */
    readonly children: _angular_core.InputSignal<SlotContent<AccordionItemContext>>;
    readonly slotBodyFromContent: _angular_core.Signal<AccordionBodyDirective | undefined>;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    readonly structure: _angular_core.InputSignal<SlotContent<AccordionItemContext>>;
    readonly slotStructureFromContent: _angular_core.Signal<AccordionItemStructureDirective | undefined>;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     */
    readonly id: _angular_core.InputSignal<string | undefined>;
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     */
    readonly transition: _angular_core.InputSignal<TransitionFn | undefined>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     */
    readonly destroyOnHide: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     */
    readonly disabled: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
     */
    readonly visible: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, accordion-item will be animated.
     */
    readonly animated: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     */
    readonly headerClassName: _angular_core.InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item collapse DOM element.
     */
    readonly buttonClassName: _angular_core.InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     */
    readonly bodyContainerClassName: _angular_core.InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     */
    readonly bodyClassName: _angular_core.InputSignal<string | undefined>;
    /**
     * The html tag to use for the accordion-item-header.
     */
    readonly headingTag: _angular_core.InputSignal<string | undefined>;
    /**
     * An event fired when an item is shown.
     */
    readonly shown: _angular_core.OutputEmitterRef<void>;
    /**
     * An event fired when an item is hidden.
     */
    readonly hidden: _angular_core.OutputEmitterRef<void>;
    /**
     * An event fired when the \`visible\` value changes.
     *
     * Event payload is the new value of visible.
     */
    readonly visibleChange: _angular_core.OutputEmitterRef<boolean>;
    readonly slotChildren: _angular_core.Signal<TemplateRef<void> | undefined>;
    constructor();
    ngAfterViewInit(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<AccordionItemComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<AccordionItemComponent, "[auAccordionItem]", ["auAccordionItem"], { "header": { "alias": "auHeader"; "required": false; "isSignal": true; }; "children": { "alias": "auChildren"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "id": { "alias": "auId"; "required": false; "isSignal": true; }; "transition": { "alias": "auTransition"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "destroyOnHide": { "alias": "auDestroyOnHide"; "required": false; "isSignal": true; }; "disabled": { "alias": "auDisabled"; "required": false; "isSignal": true; }; "visible": { "alias": "auVisible"; "required": false; "isSignal": true; }; "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "headerClassName": { "alias": "auHeaderClassName"; "required": false; "isSignal": true; }; "buttonClassName": { "alias": "auButtonClassName"; "required": false; "isSignal": true; }; "bodyContainerClassName": { "alias": "auBodyContainerClassName"; "required": false; "isSignal": true; }; "bodyClassName": { "alias": "auBodyClassName"; "required": false; "isSignal": true; }; "headingTag": { "alias": "auHeadingTag"; "required": false; "isSignal": true; }; }, { "shown": "auShown"; "hidden": "auHidden"; "visibleChange": "auVisibleChange"; }, ["slotHeaderFromContent", "slotBodyFromContent", "slotStructureFromContent"], ["*"], true, never>;
}
/**
 * Directive for creating an accordion component.
 *
 * This directive extends the \`BaseWidgetDirective\` and provides various inputs and outputs
 * to customize the behavior and appearance of the accordion and its items.
 *
 */
declare class AccordionDirective extends BaseWidgetDirective<AccordionWidget> {
    /**
     * If \`true\`, only one accordion-item at the time can stay open.
     *
     * @defaultValue \`false\`
     */
    readonly closeOthers: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    /**
     * An event fired when an item is shown.
     *
     * Event payload is the id of the item.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly itemShown: _angular_core.OutputEmitterRef<string>;
    /**
     * An event fired when an item is hidden.
     *
     * Event payload is the id of the item.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly itemHidden: _angular_core.OutputEmitterRef<string>;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     *
     * @defaultValue \`true\`
     */
    readonly itemDestroyOnHide: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, accordion-item will be animated.
     *
     * @defaultValue \`true\`
     */
    readonly itemAnimated: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     *
     * @defaultValue
     * \`\`\`ts
     * collapseVerticalTransition
     * \`\`\`
     */
    readonly itemTransition: _angular_core.InputSignal<TransitionFn | undefined>;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    readonly itemStructure: _angular_core.InputSignal<SlotContent<AccordionItemContext>>;
    /**
     * CSS classes to add on the accordion-item DOM element.
     *
     * @defaultValue \`''\`
     */
    readonly itemClassName: _angular_core.InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     *
     * @defaultValue \`''\`
     */
    readonly itemHeaderClassName: _angular_core.InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item toggle button DOM element.
     *
     * @defaultValue \`''\`
     */
    readonly itemButtonClassName: _angular_core.InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     *
     * @defaultValue \`''\`
     */
    readonly itemBodyContainerClassName: _angular_core.InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     *
     * @defaultValue \`''\`
     */
    readonly itemBodyClassName: _angular_core.InputSignal<string | undefined>;
    /**
     * The html tag to use for the accordion-item-header.
     *
     * @defaultValue \`''\`
     */
    readonly itemHeadingTag: _angular_core.InputSignal<string | undefined>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<AccordionDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<AccordionDirective, "[auAccordion]", ["auAccordion"], { "closeOthers": { "alias": "auCloseOthers"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "itemDestroyOnHide": { "alias": "auItemDestroyOnHide"; "required": false; "isSignal": true; }; "itemAnimated": { "alias": "auItemAnimated"; "required": false; "isSignal": true; }; "itemTransition": { "alias": "auItemTransition"; "required": false; "isSignal": true; }; "itemStructure": { "alias": "auItemStructure"; "required": false; "isSignal": true; }; "itemClassName": { "alias": "auItemClassName"; "required": false; "isSignal": true; }; "itemHeaderClassName": { "alias": "auItemHeaderClassName"; "required": false; "isSignal": true; }; "itemButtonClassName": { "alias": "auItemButtonClassName"; "required": false; "isSignal": true; }; "itemBodyContainerClassName": { "alias": "auItemBodyContainerClassName"; "required": false; "isSignal": true; }; "itemBodyClassName": { "alias": "auItemBodyClassName"; "required": false; "isSignal": true; }; "itemHeadingTag": { "alias": "auItemHeadingTag"; "required": false; "isSignal": true; }; }, { "itemShown": "auItemShown"; "itemHidden": "auItemHidden"; }, never, never, true, never>;
}

/**
 * Retrieve a shallow copy of the default Slider config
 * @returns the default Slider config
 */
declare const export_getSliderDefaultConfig: () => SliderProps;

/**
 * Represents the context for a Slider component.
 * This type is an alias for \`WidgetSlotContext<SliderWidget>\`.
 */
interface SliderContext extends WidgetSlotContext<SliderWidget> {
}
/**
 * Represents the context for a slider slot label, extending the base \`SliderContext\`
 * with an additional \`value\` property.
 */
interface SliderSlotLabelContext extends SliderContext {
    /**
     * the value of the handle the label is attached to
     */
    value: number;
}
/**
 * Represents the context for a slider slot handle.
 * This type extends the \`SliderContext\` and includes an additional \`item\` property of type \`SliderHandle\`.
 */
interface SliderSlotHandleContext extends SliderContext {
    /**
     * the handle context
     */
    item: SliderHandle;
}
/**
 * Represents the context for a slider tick slot
 */
interface SliderSlotTickContext extends SliderContext {
    /**
     * tick context
     */
    tick: SliderTick;
}
/**
 * Represents the state of a slider component.
 */
interface SliderState {
    /**
     * Sorted slider values
     */
    sortedValues: number[];
    /**
     * Combined label left offset in %
     */
    combinedLabelPositionLeft: number;
    /**
     * Combined label top offset in %
     */
    combinedLabelPositionTop: number;
    /**
     * If true, the minimum label will be visible
     */
    minValueLabelDisplay: boolean;
    /**
     * If true, the maximum label will be visible
     */
    maxValueLabelDisplay: boolean;
    /**
     * If true, the label when the handles are close is visible
     */
    combinedLabelDisplay: boolean;
    /**
     * Array of the sorted handles to display
     */
    sortedHandles: SliderHandle[];
    /**
     * Array of objects representing progress display options
     */
    progressDisplayOptions: ProgressDisplayOptions[];
    /**
     * Array of objects representing handle display options
     */
    handleDisplayOptions: HandleDisplayOptions[];
    /**
     * Check if the slider is interactive, meaning it is not disabled or readonly
     */
    interactive: boolean;
    /**
     * Array of ticks to display on the slider component
     */
    ticks: SliderTick[];
    /**
     * Minimum value that can be assigned to the slider
     *
     * @defaultValue \`0\`
     */
    min: number;
    /**
     * Maximum value that can be assigned to the slider
     *
     * @defaultValue \`100\`
     */
    max: number;
    /**
     * Unit value between slider steps
     *
     * @defaultValue \`1\`
     */
    stepSize: number;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     *
     * @defaultValue \`false\`
     */
    readonly: boolean;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     *
     * @defaultValue \`false\`
     */
    disabled: boolean;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     *
     * @defaultValue \`false\`
     */
    vertical: boolean;
    /**
     * Current slider values
     *
     * @defaultValue \`[0]\`
     */
    values: number[];
    /**
     * If \`true\` the value labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showValueLabels: boolean;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showMinMaxLabels: boolean;
    /**
     * If \`true\` the ticks are displayed on the slider
     *
     * @defaultValue \`false\`
     */
    showTicks: boolean;
    /**
     * It \`true\` slider display is inversed
     *
     * @defaultValue \`false\`
     */
    rtl: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Slot to change the default display of the slider
     */
    structure: SlotContent<SliderContext>;
    /**
     * Slot to change the default labels of the slider
     *
     * @defaultValue
     * \`\`\`ts
     * ({value}: SliderSlotLabelContext) => '' + value
     * \`\`\`
     */
    label: SlotContent<SliderSlotLabelContext>;
    /**
     *  Slot to change the handlers
     */
    handle: SlotContent<SliderSlotHandleContext>;
    /**
     * Slot to change the ticks
     */
    tick: SlotContent<SliderSlotTickContext>;
}
/**
 * Represents the properties for the Slider component.
 */
interface SliderProps {
    /**
     * Return the value for the 'aria-label' attribute for the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * () => 'Value'
     * \`\`\`
     */
    ariaLabel: (sortedIndex: number) => string;
    /**
     * Return the value for the 'aria-labelledBy' attribute for the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * () => ''
     * \`\`\`
     */
    ariaLabelledBy: (sortedIndex: number) => string;
    /**
     * Return the value for the 'aria-valuetext' attribute for the handle
     * @param value - value of the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * () => ''
     * \`\`\`
     */
    ariaValueText: (value: number, sortedIndex: number) => string;
    /**
     * An event emitted when slider values are changed
     *
     * Event payload equals to the updated slider values
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onValuesChange: (values: number[]) => void;
    /**
     * Unit value between the ticks
     * If value is set to \`0\` the {@link stepSize} is used to space the ticks
     *
     * @defaultValue \`0\`
     */
    tickInterval: number;
    /**
     * If \`true\` the tick values are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showTickValues: boolean;
    /**
     * Minimum distance between two values.
     * When set to 0, no minimum distance constraint is applied.
     *
     * @defaultValue \`0\`
     */
    minRange: number;
    /**
     * Maximum distance between two values
     * When set to 0, no maximum distance constraint is applied.
     *
     * @defaultValue \`0\`
     */
    maxRange: number;
    /**
     * When true, if moving a value would break the minRange or maxRange constraint,
     * it will instead push or pull the neighboring values to keep the allowed range rather than just stopping.
     *
     * @defaultValue \`false\`
     */
    pushRange: boolean;
    /**
     * Minimum value that can be assigned to the slider
     *
     * @defaultValue \`0\`
     */
    min: number;
    /**
     * Maximum value that can be assigned to the slider
     *
     * @defaultValue \`100\`
     */
    max: number;
    /**
     * Unit value between slider steps
     *
     * @defaultValue \`1\`
     */
    stepSize: number;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     *
     * @defaultValue \`false\`
     */
    readonly: boolean;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     *
     * @defaultValue \`false\`
     */
    disabled: boolean;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     *
     * @defaultValue \`false\`
     */
    vertical: boolean;
    /**
     * Current slider values
     *
     * @defaultValue \`[0]\`
     */
    values: number[];
    /**
     * If \`true\` the value labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showValueLabels: boolean;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showMinMaxLabels: boolean;
    /**
     * If \`true\` the ticks are displayed on the slider
     *
     * @defaultValue \`false\`
     */
    showTicks: boolean;
    /**
     * It \`true\` slider display is inversed
     *
     * @defaultValue \`false\`
     */
    rtl: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Slot to change the default display of the slider
     */
    structure: SlotContent<SliderContext>;
    /**
     * Slot to change the default labels of the slider
     *
     * @defaultValue
     * \`\`\`ts
     * ({value}: SliderSlotLabelContext) => '' + value
     * \`\`\`
     */
    label: SlotContent<SliderSlotLabelContext>;
    /**
     *  Slot to change the handlers
     */
    handle: SlotContent<SliderSlotHandleContext>;
    /**
     * Slot to change the ticks
     */
    tick: SlotContent<SliderSlotTickContext>;
}
/**
 * Represents a slider widget component.
 */
type SliderWidget = Widget<SliderProps, SliderState, object, SliderDirectives>;
/**
 * Create a Slider with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */
declare const export_createSlider: WidgetFactory<SliderWidget>;

/**
 * Options for displaying progress in a slider component.
 */
interface ProgressDisplayOptions {
    /**
     * Right offset of the progress in %
     */
    left: number | null;
    /**
     * Left offset of the progress in %
     */
    right: number | null;
    /**
     * Top offset of the progress in %
     */
    top: number | null;
    /**
     * Bottom offset of the progress in %
     */
    bottom: number | null;
    /**
     * Width of the progress in %
     */
    width: number;
    /**
     * Height of the progress in %
     */
    height: number;
    /**
     * Id of the progress
     */
    id: number;
}
/**
 * Options for displaying a handle in a slider component.
 */
interface HandleDisplayOptions {
    /**
     * Left offset of the handle in %
     */
    left: number | null;
    /**
     * Top offset of the handle in %
     */
    top: number | null;
}
/**
 * Represents a handle in a slider component.
 */
interface SliderHandle {
    /**
     * Value of the handle
     */
    value: number;
    /**
     * Handle id
     */
    id: number;
    /**
     * ariaLabel of the handle
     */
    ariaLabel: string | undefined;
    /**
     * ariaValueText of the handle
     */
    ariaValueText: string | undefined;
    /**
     * aria-labelledBy of the handle
     */
    ariaLabelledBy: string | undefined;
}
/**
 * Represents a tick in a slider component.
 */
interface SliderTick {
    /**
     * CSS classes to be applied on the tick
     */
    className?: string | null;
    /**
     * Visualized optional explanation of the label
     */
    legend?: string | null;
    /**
     * Position of the tick in percent
     */
    position: number;
    /**
     * If \`true\` the tick has selected style
     */
    selected: boolean;
    /**
     * Value of the tick
     */
    value: number;
    /**
     * If \`true\` the tick label is displayed
     */
    displayLabel: boolean;
}
/**
 * Interface representing various directives used in the slider component.
 */
interface SliderDirectives {
    /**
     * Directive to get the slider component elementRef
     */
    sliderDirective: Directive;
    /**
     * Directive to apply to the slider container wrapping the slider content
     */
    containerDirective: Directive;
    /**
     * Directive used to style the progress display for each handle
     */
    progressDisplayDirective: Directive<{
        option: ProgressDisplayOptions;
    }>;
    /**
     * Directive to apply to the slider clickable area, to directly move the handle to a given specific position
     */
    clickableAreaDirective: Directive;
    /**
     * Directive to apply handle events handlers
     */
    handleEventsDirective: Directive<{
        item: {
            id: number;
        };
    }>;
    /**
     * Directive to apply to the slider handle if any
     */
    handleDirective: Directive<{
        item: SliderHandle;
    }>;
    /**
     * Directive to get the minLabel elementRef
     */
    minLabelDirective: Directive;
    /**
     * Directive to get the maxLabel elementRef
     */
    maxLabelDirective: Directive;
    /**
     * Directive to apply to the handle when combined label display is active
     */
    combinedHandleLabelDisplayDirective: Directive;
    /**
     * Directive to apply to the handle when combined label display is not active
     */
    handleLabelDisplayDirective: Directive<{
        index: number;
    }>;
    /**
     * Directive to apply to the slider tick
     */
    tickDirective: Directive<{
        tick: SliderTick;
    }>;
    /**
     * Directive to apply to the slider tick label
     */
    tickLabelDirective: Directive<{
        tick: SliderTick;
    }>;
}

/**
 * Directive to provide a template reference for slider labels.
 *
 * This directive uses a template reference to render the {@link SliderSlotLabelContext}.
 */
declare class SliderLabelDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: SliderLabelDirective, context: unknown): context is SliderSlotLabelContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SliderLabelDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<SliderLabelDirective, "ng-template[auSliderLabel]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive representing a handle for a slider component.
 *
 * This directive uses a template reference to render the {@link SliderSlotHandleContext}.
 */
declare class SliderHandleDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: SliderHandleDirective, context: unknown): context is SliderSlotHandleContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SliderHandleDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<SliderHandleDirective, "ng-template[auSliderHandle]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot handle for the slider component.
 */
declare const sliderDefaultSlotHandle: SlotContent<SliderSlotHandleContext>;
/**
 * Directive representing a tick for a slider component.
 *
 * This directive uses a template reference to render the {@link SliderSlotTickContext}.
 */
declare class SliderTickDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: SliderTickDirective, context: unknown): context is SliderSlotTickContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SliderTickDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<SliderTickDirective, "ng-template[auSliderTick]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot tick for the slider component.
 */
declare const sliderDefaultSlotTick: SlotContent<SliderSlotTickContext>;
/**
 * Directive that provides structure for the slider component.
 *
 * This directive uses a \`TemplateRef\` to handle the context of the slider slot.
 */
declare class SliderStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: SliderStructureDirective, context: unknown): context is SliderSlotHandleContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SliderStructureDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<SliderStructureDirective, "ng-template[auSliderStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Represents the default slot structure for the slider component.
 */
declare const sliderDefaultSlotStructure: SlotContent<SliderContext>;
/**
 * SliderComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable slider widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
declare class SliderComponent extends BaseWidgetDirective<SliderWidget> implements ControlValueAccessor {
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    /**
     * Minimum value that can be assigned to the slider
     *
     * @defaultValue \`0\`
     */
    readonly min: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Maximum value that can be assigned to the slider
     *
     * @defaultValue \`100\`
     */
    readonly max: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Minimum distance between two values.
     * When set to 0, no minimum distance constraint is applied.
     *
     * @defaultValue \`0\`
     */
    readonly minRange: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Maximum distance between two values
     * When set to 0, no maximum distance constraint is applied.
     *
     * @defaultValue \`0\`
     */
    readonly maxRange: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * When true, if moving a value would break the minRange or maxRange constraint,
     * it will instead push or pull the neighboring values to keep the allowed range rather than just stopping.
     *
     * @defaultValue \`false\`
     */
    readonly pushRange: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Unit value between slider steps
     *
     * @defaultValue \`1\`
     */
    readonly stepSize: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Current slider values
     *
     * @defaultValue \`[0]\`
     */
    readonly values: _angular_core.InputSignal<number[] | undefined>;
    /**
     * It \`true\` slider display is inversed
     *
     * @defaultValue \`false\`
     */
    readonly rtl: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` the value labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    readonly showValueLabels: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    readonly showMinMaxLabels: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Return the value for the 'aria-label' attribute for the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * () => 'Value'
     * \`\`\`
     */
    readonly ariaLabel: _angular_core.InputSignal<((sortedIndex: number) => string) | undefined>;
    /**
     * Return the value for the 'aria-labelledBy' attribute for the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * () => ''
     * \`\`\`
     */
    readonly ariaLabelledBy: _angular_core.InputSignal<((sortedIndex: number) => string) | undefined>;
    /**
     * Return the value for the 'aria-valuetext' attribute for the handle
     * @param value - value of the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * () => ''
     * \`\`\`
     */
    readonly ariaValueText: _angular_core.InputSignal<((value: number, sortedIndex: number) => string) | undefined>;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     *
     * @defaultValue \`false\`
     */
    readonly readonly: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     *
     * @defaultValue \`false\`
     */
    readonly disabled: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     *
     * @defaultValue \`false\`
     */
    readonly vertical: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` the ticks are displayed on the slider
     *
     * @defaultValue \`false\`
     */
    readonly showTicks: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Unit value between the ticks
     * If value is set to \`0\` the {@link stepSize} is used to space the ticks
     *
     * @defaultValue \`0\`
     */
    readonly tickInterval: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * If \`true\` the tick values are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    readonly showTickValues: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * An event emitted when slider values are changed
     *
     * Event payload equals to the updated slider values
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly valuesChange: _angular_core.OutputEmitterRef<number[]>;
    /**
     * Slot to change the default labels of the slider
     *
     * @defaultValue
     * \`\`\`ts
     * ({value}: SliderSlotLabelContext) => '' + value
     * \`\`\`
     */
    readonly label: _angular_core.InputSignal<SlotContent<SliderSlotLabelContext>>;
    readonly slotLabelFromContent: _angular_core.Signal<SliderLabelDirective | undefined>;
    /**
     * Slot to change the default display of the slider
     */
    readonly structure: _angular_core.InputSignal<SlotContent<SliderContext>>;
    readonly slotStructureFromContent: _angular_core.Signal<SliderStructureDirective | undefined>;
    /**
     * Slot to change the handlers
     */
    readonly handle: _angular_core.InputSignal<SlotContent<SliderSlotHandleContext>>;
    readonly slotHandleFromContent: _angular_core.Signal<SliderHandleDirective | undefined>;
    /**
     * Slot to change the ticks
     */
    readonly tick: _angular_core.InputSignal<SlotContent<SliderSlotTickContext>>;
    readonly slotTickFromContent: _angular_core.Signal<SliderTickDirective | undefined>;
    constructor();
    /**
     * Control value accessor methods
     */
    onChange: (_: any) => void;
    onTouched: () => void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    handleBlur(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SliderComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<SliderComponent, "[auSlider]", never, { "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "min": { "alias": "auMin"; "required": false; "isSignal": true; }; "max": { "alias": "auMax"; "required": false; "isSignal": true; }; "minRange": { "alias": "auMinRange"; "required": false; "isSignal": true; }; "maxRange": { "alias": "auMaxRange"; "required": false; "isSignal": true; }; "pushRange": { "alias": "auPushRange"; "required": false; "isSignal": true; }; "stepSize": { "alias": "auStepSize"; "required": false; "isSignal": true; }; "values": { "alias": "auValues"; "required": false; "isSignal": true; }; "rtl": { "alias": "auRtl"; "required": false; "isSignal": true; }; "showValueLabels": { "alias": "auShowValueLabels"; "required": false; "isSignal": true; }; "showMinMaxLabels": { "alias": "auShowMinMaxLabels"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "auAriaLabel"; "required": false; "isSignal": true; }; "ariaLabelledBy": { "alias": "auAriaLabelledBy"; "required": false; "isSignal": true; }; "ariaValueText": { "alias": "auAriaValueText"; "required": false; "isSignal": true; }; "readonly": { "alias": "auReadonly"; "required": false; "isSignal": true; }; "disabled": { "alias": "auDisabled"; "required": false; "isSignal": true; }; "vertical": { "alias": "auVertical"; "required": false; "isSignal": true; }; "showTicks": { "alias": "auShowTicks"; "required": false; "isSignal": true; }; "tickInterval": { "alias": "auTickInterval"; "required": false; "isSignal": true; }; "showTickValues": { "alias": "auShowTickValues"; "required": false; "isSignal": true; }; "label": { "alias": "auLabel"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "handle": { "alias": "auHandle"; "required": false; "isSignal": true; }; "tick": { "alias": "auTick"; "required": false; "isSignal": true; }; }, { "valuesChange": "auValuesChange"; }, ["slotLabelFromContent", "slotStructureFromContent", "slotHandleFromContent", "slotTickFromContent"], never, true, never>;
}

/**
 * Retrieve a shallow copy of the default Progressbar config
 * @returns the default Progressbar config
 */
declare const export_getProgressbarDefaultConfig: () => ProgressbarProps;

/**
 * Represents the context for a Progressbar widget.
 * This interface is used to define the context object that is passed to the Progressbar widget.
 */
interface ProgressbarContext extends WidgetSlotContext<ProgressbarWidget> {
}
/**
 * Represents the state of a Progressbar component.
 */
interface ProgressbarState {
    /**
     * Percentage of completion.
     */
    percentage: number;
    /**
     * \`true\` if the value is above its minimum value.
     */
    started: boolean;
    /**
     * \`true\` if the value has reached its maximum value.
     */
    finished: boolean;
    /**
     * The aria value text.
     */
    ariaValueText: string | undefined;
    /**
     * The minimum value.
     *
     * @defaultValue \`0\`
     */
    min: number;
    /**
     * The maximum value.
     *
     * @defaultValue \`100\`
     */
    max: number;
    /**
     * The current value.
     *
     * @defaultValue \`0\`
     */
    value: number;
    /**
     * The aria label.
     *
     * @defaultValue \`'Progressbar'\`
     */
    ariaLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Global template for the Progressbar.
     */
    structure: SlotContent<ProgressbarContext>;
    /**
     * Label of the progress.
     */
    children: SlotContent<ProgressbarContext>;
    /**
     * Height of the progressbar, can be any valid css height value.
     *
     * @defaultValue \`''\`
     */
    height: string;
    /**
     * If \`true\`, shows a striped progressbar.
     *
     * @defaultValue \`false\`
     */
    striped: boolean;
    /**
     * If \`true\`, animates a striped progressbar.
     * Takes effect only for browsers supporting CSS3 animations, and if \`striped\` is \`true\`.
     *
     * @defaultValue \`false\`
     */
    animated: boolean;
    /**
     * Type of the progressbar, following bootstrap types.
     */
    type: BSContextualClass | undefined;
}
/**
 * Interface representing the properties for the Progressbar component.
 */
interface ProgressbarProps {
    /**
     * Return the value for the 'aria-valuetext' attribute.
     * @param value - current value
     * @param minimum - minimum value
     * @param maximum - maximum value
     *
     * @defaultValue
     * \`\`\`ts
     * () => undefined
     * \`\`\`
     */
    ariaValueTextFn: (value: number, minimum: number, maximum: number) => string | undefined;
    /**
     * The minimum value.
     *
     * @defaultValue \`0\`
     */
    min: number;
    /**
     * The maximum value.
     *
     * @defaultValue \`100\`
     */
    max: number;
    /**
     * The current value.
     *
     * @defaultValue \`0\`
     */
    value: number;
    /**
     * The aria label.
     *
     * @defaultValue \`'Progressbar'\`
     */
    ariaLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Global template for the Progressbar.
     */
    structure: SlotContent<ProgressbarContext>;
    /**
     * Label of the progress.
     */
    children: SlotContent<ProgressbarContext>;
    /**
     * Height of the progressbar, can be any valid css height value.
     *
     * @defaultValue \`''\`
     */
    height: string;
    /**
     * If \`true\`, shows a striped progressbar.
     *
     * @defaultValue \`false\`
     */
    striped: boolean;
    /**
     * If \`true\`, animates a striped progressbar.
     * Takes effect only for browsers supporting CSS3 animations, and if \`striped\` is \`true\`.
     *
     * @defaultValue \`false\`
     */
    animated: boolean;
    /**
     * Type of the progressbar, following bootstrap types.
     */
    type: BSContextualClass | undefined;
}
/**
 * Represents a Progressbar widget.
 *
 * This type defines the structure of a Progressbar widget, including its properties, state, and directives.
 */
type ProgressbarWidget = Widget<ProgressbarProps, ProgressbarState, object, ProgressbarDirectives>;
/**
 * Create a Progressbar with given config props
 * @param config - an optional progressbar config
 * @returns a ProgressbarWidget
 */
declare const export_createProgressbar: WidgetFactory<ProgressbarWidget>;

/**
 * Interface representing directives for a progress bar component.
 */
interface ProgressbarDirectives {
    /**
     * A directive to be applied to the main container that handles aria attributes.
     */
    ariaDirective: Directive;
}

/**
 * Directive that provides a template reference for the progress bar context.
 * This directive provides a template reference for the {@link ProgressbarContext}.
 */
declare class ProgressbarBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ProgressbarStructureDirective, context: unknown): context is ProgressbarContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ProgressbarBodyDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ProgressbarBodyDirective, "ng-template[auProgressbarBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to define the structure of a progress bar.
 *
 * This directive provides a template reference for the {@link ProgressbarContext}.
 */
declare class ProgressbarStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ProgressbarStructureDirective, context: unknown): context is ProgressbarContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ProgressbarStructureDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ProgressbarStructureDirective, "ng-template[auProgressbarStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Represents the default slot structure for the progress bar component.
 */
declare const progressbarDefaultSlotStructure: SlotContent<ProgressbarContext>;
/**
 * ProgressbarComponent is a UI component that extends the BaseWidgetDirective
 * to create a customizable progress bar widget. It provides various inputs
 * to configure the appearance and behavior of the progress bar.
 *
 */
declare class ProgressbarComponent extends BaseWidgetDirective<ProgressbarWidget> {
    /**
     * The aria label.
     *
     * @defaultValue \`'Progressbar'\`
     */
    readonly ariaLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * The minimum value.
     *
     * @defaultValue \`0\`
     */
    readonly min: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The maximum value.
     *
     * @defaultValue \`100\`
     */
    readonly max: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The current value.
     *
     * @defaultValue \`0\`
     */
    readonly value: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    /**
     * Label of the progress.
     */
    readonly children: _angular_core.InputSignal<SlotContent<ProgressbarContext>>;
    readonly slotDefaultFromContent: _angular_core.Signal<ProgressbarBodyDirective | undefined>;
    /**
     * Global template for the Progressbar.
     */
    readonly structure: _angular_core.InputSignal<SlotContent<ProgressbarContext>>;
    readonly slotStructureFromContent: _angular_core.Signal<ProgressbarStructureDirective | undefined>;
    /**
     * Height of the progressbar, can be any valid css height value.
     *
     * @defaultValue \`''\`
     */
    readonly height: _angular_core.InputSignal<string | undefined>;
    /**
     * If \`true\`, animates a striped progressbar.
     * Takes effect only for browsers supporting CSS3 animations, and if \`striped\` is \`true\`.
     *
     * @defaultValue \`false\`
     */
    readonly animated: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, shows a striped progressbar.
     *
     * @defaultValue \`false\`
     */
    readonly striped: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Return the value for the 'aria-valuetext' attribute.
     * @param value - current value
     * @param minimum - minimum value
     * @param maximum - maximum value
     *
     * @defaultValue
     * \`\`\`ts
     * () => undefined
     * \`\`\`
     */
    readonly ariaValueTextFn: _angular_core.InputSignal<((value: number, minimum: number, maximum: number) => string | undefined) | undefined>;
    /**
     * Type of the progressbar, following bootstrap types.
     */
    readonly type: _angular_core.InputSignal<BSContextualClass | undefined>;
    readonly slotChildren: _angular_core.Signal<TemplateRef<void> | undefined>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ProgressbarComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ProgressbarComponent, "[auProgressbar]", never, { "ariaLabel": { "alias": "auAriaLabel"; "required": false; "isSignal": true; }; "min": { "alias": "auMin"; "required": false; "isSignal": true; }; "max": { "alias": "auMax"; "required": false; "isSignal": true; }; "value": { "alias": "auValue"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "children": { "alias": "auChildren"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "height": { "alias": "auHeight"; "required": false; "isSignal": true; }; "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "striped": { "alias": "auStriped"; "required": false; "isSignal": true; }; "ariaValueTextFn": { "alias": "auAriaValueTextFn"; "required": false; "isSignal": true; }; "type": { "alias": "auType"; "required": false; "isSignal": true; }; }, {}, ["slotDefaultFromContent", "slotStructureFromContent"], ["*"], true, never>;
}

/**
 * Retrieve a shallow copy of the default Toast config
 * @returns the default Toast config
 */
declare const export_getToastDefaultConfig: () => ToastProps;

/**
 * Represents the context for a Toast widget.
 * This interface is an alias for \`WidgetSlotContext<ToastWidget>\`.
 */
interface ToastContext extends WidgetSlotContext<ToastWidget> {
}
/**
 * Represents the state of a Toast component.
 */
interface ToastState {
    /**
     * Is \`true\` when the alert is hidden. Compared to \`visible\`, this is updated after the transition is executed.
     */
    hidden: boolean;
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     *
     * @defaultValue \`true\`
     */
    dismissible: boolean;
    /**
     * If \`true\` the alert is visible to the user
     *
     * @defaultValue \`true\`
     */
    visible: boolean;
    /**
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * If \`true\` automatically hides the toast after the delay.
     *
     * @defaultValue \`true\`
     */
    autoHide: boolean;
    /**
     * Delay in milliseconds before hiding the toast.
     *
     * @defaultValue \`5000\`
     */
    delay: number;
    /**
     * Global template for the toast component
     */
    structure: SlotContent<ToastContext>;
    /**
     * Template for the toast content
     */
    children: SlotContent<ToastContext>;
    /**
     * Header template for the toast component
     */
    header: SlotContent<ToastContext>;
}
/**
 * Interface representing the properties for the Toast component.
 */
interface ToastProps {
    /**
     * The transition function will be executed when the alert is displayed or hidden.
     *
     * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
     *
     * @defaultValue \`fadeTransition\`
     */
    transition: TransitionFn;
    /**
     * Callback called when the alert visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Callback called when the alert is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHidden: () => void;
    /**
     * Callback called when the alert is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onShown: () => void;
    /**
     * If \`true\`, alert opening will be animated.
     *
     * Animation is triggered  when the \`.open()\` function is called
     * or the visible prop is changed
     *
     * @defaultValue \`false\`
     */
    animatedOnInit: boolean;
    /**
     * If \`true\`, alert closing will be animated.
     *
     * Animation is triggered  when clicked on the close button (×),
     * via the \`.close()\` function or the visible prop is changed
     *
     * @defaultValue \`true\`
     */
    animated: boolean;
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     *
     * @defaultValue \`true\`
     */
    dismissible: boolean;
    /**
     * If \`true\` the alert is visible to the user
     *
     * @defaultValue \`true\`
     */
    visible: boolean;
    /**
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * If \`true\` automatically hides the toast after the delay.
     *
     * @defaultValue \`true\`
     */
    autoHide: boolean;
    /**
     * Delay in milliseconds before hiding the toast.
     *
     * @defaultValue \`5000\`
     */
    delay: number;
    /**
     * Global template for the toast component
     */
    structure: SlotContent<ToastContext>;
    /**
     * Template for the toast content
     */
    children: SlotContent<ToastContext>;
    /**
     * Header template for the toast component
     */
    header: SlotContent<ToastContext>;
}
/**
 * Represents a Toast widget component.
 */
type ToastWidget = Widget<ToastProps, ToastState, ToastApi, ToastDirectives>;
/**
 * Create an ToastWidget with given config props
 * @param config - an optional alert config
 * @returns an ToastWidget
 */
declare const export_createToast: WidgetFactory<ToastWidget>;

/**
 * A mapping of toast position keys to their corresponding CSS class strings of bootstrap.
 * These classes define the positioning of toast notifications on the screen.
 *
 * The keys represent various positions on the screen, such as top-left, top-center,
 * middle-right, etc., and the values are the CSS classes of bootstrap that apply the respective
 * positioning styles.
 *
 * Example usage:
 * \`\`\`typescript
 * const positionClass = toastPositions.topLeft; // "top-0 start-0"
 * \`\`\`
 */
declare const export_toastPositions: Record<ToastPositions, string>;

/**
 * Represents the API for the toast component.
 */
interface ToastApi {
    /**
     * Triggers alert closing programmatically (same as clicking on the close button (×)).
     */
    close(): void;
    /**
     * Triggers the alert to be displayed for the user.
     */
    open(): void;
}
/**
 * Interface representing the directives for a toast component.
 */
interface ToastDirectives {
    /**
     * the transition directive, piloting what is the visual effect of going from hidden to visible
     */
    transitionDirective: Directive;
    /**
     * Directive that handles the autohide of the toast component
     */
    autoHideDirective: Directive;
    /**
     * Directive that adds all the necessary attributes to the body
     */
    bodyDirective: Directive;
    /**
     * Directive that adds all the necessary attributes to the close button depending on the presence of the header
     */
    closeButtonDirective: Directive;
}
/**
 * Represents the possible positions for displaying a toast notification.
 *
 * The positions are defined based on a grid layout with three horizontal
 * alignments (left, center, right) and three vertical alignments (top, middle, bottom).
 *
 * Available positions:
 * - \`topLeft\`: Top-left corner of the screen.
 * - \`topCenter\`: Top-center of the screen.
 * - \`topRight\`: Top-right corner of the screen.
 * - \`middleLeft\`: Middle-left side of the screen.
 * - \`middleCenter\`: Center of the screen.
 * - \`middleRight\`: Middle-right side of the screen.
 * - \`bottomLeft\`: Bottom-left corner of the screen.
 * - \`bottomCenter\`: Bottom-center of the screen.
 * - \`bottomRight\`: Bottom-right corner of the screen.
 */
type ToastPositions = 'topLeft' | 'topCenter' | 'topRight' | 'middleLeft' | 'middleCenter' | 'middleRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
/**
 * Props of the toaster
 */
interface ToasterProps {
    /** How much time (ms) a toast is displayed; 0 means it won't be removed until a manual action */
    duration: number;
    /** Where to position the toasts */
    position: ToastPositions;
    /** Maximum number of toasts displayed */
    limit?: number;
    /**  Pause toast when hover */
    pauseOnHover?: boolean;
    /** Display a dismiss button on each toast. When duration = 0, this is enforced to true */
    dismissible: boolean;
    /** Add a button to close all the toasts at once */
    closeAll?: boolean;
    /** Close all label */
    closeAllLabel?: string;
}
/**
 * Toast object
 * @template Props Type of the toast properties.
 */
interface ToasterToast<Props> {
    /** Identifier of the toasts in the toaster */
    id: number;
    /** Properties of the toast */
    props: Props;
}
/**
 * Represents a timer used by the toaster service.
 */
interface ToasterTimer {
    /**
     * The timeout identifier returned by \`setTimeout\`.
     */
    timeout: ReturnType<typeof setTimeout> | null;
    /**
     * The timestamp when the timer was started.
     */
    started: number;
    /**
     * The timestamp when the timer was paused (optional).
     */
    paused?: number;
    /**
     * The duration for which the timer is set (optional). Used internally to compute the remaining time.
     */
    duration: number;
}
declare const export_defaultToasterProps: ToasterProps;

/**
 * Directive to represent the body of a toast notification.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
declare class ToastBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ToastBodyDirective, context: unknown): context is ToastContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ToastBodyDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ToastBodyDirective, "ng-template[auToastBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to define the structure of a toast component.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
declare class ToastStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ToastStructureDirective, context: unknown): context is ToastContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ToastStructureDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ToastStructureDirective, "ng-template[auToastStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive representing the header of a toast component.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
declare class ToastHeaderDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ToastHeaderDirective, context: unknown): context is ToastContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ToastHeaderDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ToastHeaderDirective, "ng-template[auToastHeader]", never, {}, {}, never, never, true, never>;
}
/**
 * Represents the default slot structure for the toast component.
 */
declare const toastDefaultSlotStructure: SlotContent<ToastContext>;
/**
 * The \`ToastComponent\` is a UI component that displays a toast notification.
 * It extends the \`BaseWidgetDirective\` and provides various configurable properties
 * and events to control the behavior and appearance of the toast.
 */
declare class ToastComponent extends BaseWidgetDirective<ToastWidget> {
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     *
     * @defaultValue \`true\`
     */
    readonly dismissible: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The transition function will be executed when the alert is displayed or hidden.
     *
     * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
     *
     * @defaultValue \`fadeTransition\`
     */
    readonly transition: _angular_core.InputSignal<TransitionFn | undefined>;
    /**
     * If \`true\` the alert is visible to the user
     *
     * @defaultValue \`true\`
     */
    readonly visible: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, alert opening will be animated.
     *
     * Animation is triggered  when the \`.open()\` function is called
     * or the visible prop is changed
     *
     * @defaultValue \`false\`
     */
    readonly animatedOnInit: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, alert closing will be animated.
     *
     * Animation is triggered  when clicked on the close button (×),
     * via the \`.close()\` function or the visible prop is changed
     *
     * @defaultValue \`true\`
     */
    readonly animated: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` automatically hides the toast after the delay.
     *
     * @defaultValue \`true\`
     */
    readonly autoHide: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Delay in milliseconds before hiding the toast.
     *
     * @defaultValue \`5000\`
     */
    readonly delay: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    readonly ariaCloseButtonLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * Template for the toast content
     */
    readonly children: _angular_core.InputSignal<SlotContent<ToastContext>>;
    readonly slotDefaultFromContent: _angular_core.Signal<ToastBodyDirective | undefined>;
    /**
     * Global template for the toast component
     */
    readonly structure: _angular_core.InputSignal<SlotContent<ToastContext>>;
    readonly slotStructureFromContent: _angular_core.Signal<ToastStructureDirective | undefined>;
    /**
     * Header template for the toast component
     */
    readonly header: _angular_core.InputSignal<SlotContent<ToastContext>>;
    readonly slotHeaderFromContent: _angular_core.Signal<ToastHeaderDirective | undefined>;
    /**
     * Callback called when the alert visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly visibleChange: _angular_core.OutputEmitterRef<boolean>;
    /**
     * Callback called when the alert is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly hidden: _angular_core.OutputEmitterRef<void>;
    /**
     * Callback called when the alert is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly shown: _angular_core.OutputEmitterRef<void>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    readonly slotChildren: _angular_core.Signal<TemplateRef<void> | undefined>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ToastComponent, "[auToast]", never, { "dismissible": { "alias": "auDismissible"; "required": false; "isSignal": true; }; "transition": { "alias": "auTransition"; "required": false; "isSignal": true; }; "visible": { "alias": "auVisible"; "required": false; "isSignal": true; }; "animatedOnInit": { "alias": "auAnimatedOnInit"; "required": false; "isSignal": true; }; "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "autoHide": { "alias": "auAutoHide"; "required": false; "isSignal": true; }; "delay": { "alias": "auDelay"; "required": false; "isSignal": true; }; "ariaCloseButtonLabel": { "alias": "auAriaCloseButtonLabel"; "required": false; "isSignal": true; }; "children": { "alias": "auChildren"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "header": { "alias": "auHeader"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; }, { "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotDefaultFromContent", "slotStructureFromContent", "slotHeaderFromContent"], ["*"], true, never>;
}

declare class ToasterService extends ToasterService$1<Partial<ToastProps>> {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ToasterService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ToasterService>;
}

declare class ToasterComponent {
    readonly toasterService: ToasterService;
    readonly auDismissible: _angular_core.InputSignal<boolean>;
    readonly auDuration: _angular_core.InputSignal<number>;
    readonly auPosition: _angular_core.InputSignal<i1.ToastPositions>;
    readonly auLimit: _angular_core.InputSignal<number | undefined>;
    readonly auPauseOnHover: _angular_core.InputSignal<boolean | undefined>;
    readonly auCloseAll: _angular_core.InputSignal<boolean | undefined>;
    readonly auCloseAllLabel: _angular_core.InputSignal<string | undefined>;
    readonly positionClass: _angular_core.Signal<string>;
    constructor();
    handleHidden(toast: any): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ToasterComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ToasterComponent, "[auToaster]", never, { "auDismissible": { "alias": "auDismissible"; "required": false; "isSignal": true; }; "auDuration": { "alias": "auDuration"; "required": false; "isSignal": true; }; "auPosition": { "alias": "auPosition"; "required": false; "isSignal": true; }; "auLimit": { "alias": "auLimit"; "required": false; "isSignal": true; }; "auPauseOnHover": { "alias": "auPauseOnHover"; "required": false; "isSignal": true; }; "auCloseAll": { "alias": "auCloseAll"; "required": false; "isSignal": true; }; "auCloseAllLabel": { "alias": "auCloseAllLabel"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

/**
 * Directive to control the collapse behavior of an element.
 */
declare class CollapseDirective extends BaseWidgetDirective<CollapseWidget$1> {
    /**
     * If \`true\`, collapse opening will be animated at init time.
     *
     * @defaultValue \`false\`
     */
    readonly animatedOnInit: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, collapse closing and opening will be animated.
     *
     * @defaultValue \`true\`
     */
    readonly animated: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    /**
     * If \`true\`, collapse will be done horizontally.
     *
     * @defaultValue \`false\`
     */
    readonly horizontal: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` the collapse is visible to the user
     *
     * @defaultValue \`false\`
     */
    readonly visible: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * id of the collapse
     *
     * @defaultValue \`''\`
     */
    readonly id: _angular_core.InputSignal<string | undefined>;
    /**
     * Callback called when the collapse visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     * @param visible - The new visibility state of the collapse.
     */
    readonly visibleChange: _angular_core.OutputEmitterRef<boolean>;
    /**
     * Callback called when the collapse is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly hidden: _angular_core.OutputEmitterRef<void>;
    /**
     * Callback called when the collapse is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly shown: _angular_core.OutputEmitterRef<void>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CollapseDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<CollapseDirective, "[auCollapse]", ["auCollapse"], { "animatedOnInit": { "alias": "auAnimatedOnInit"; "required": false; "isSignal": true; }; "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "horizontal": { "alias": "auHorizontal"; "required": false; "isSignal": true; }; "visible": { "alias": "auVisible"; "required": false; "isSignal": true; }; "id": { "alias": "auId"; "required": false; "isSignal": true; }; }, { "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, never, never, true, never>;
}
declare class CollapseTriggerDirective implements OnInit {
    readonly auCollapseTrigger: _angular_core.InputSignal<CollapseDirective>;
    private readonly injector;
    ngOnInit(): Promise<void>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CollapseTriggerDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<CollapseTriggerDirective, "[auCollapseTrigger]", never, { "auCollapseTrigger": { "alias": "auCollapseTrigger"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

/**
 * Retrieve a shallow copy of the default Tree config
 * @returns the default Tree config
 */
declare const export_getTreeDefaultConfig: () => TreeProps;

/**
 * Represents the context for a Tree widget.
 * This interface is an alias for \`WidgetSlotContext<TreeWidget>\`.
 */
type TreeContext = WidgetSlotContext<TreeWidget>;
/**
 * Represents the context for a tree item, extending the base \`TreeContext\`
 * with an additional \`item\` property.
 */
type TreeSlotItemContext = TreeContext & {
    item: NormalizedTreeItem;
};
/**
 * Represents the state of a Tree component.
 */
interface TreeState {
    /**
     * Array of normalized tree nodes
     */
    normalizedNodes: NormalizedTreeItem[];
    /**
     * Getter of expanded state for each tree node
     */
    expandedMap: {
        get(item: NormalizedTreeItem): boolean | undefined;
    };
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Slot to change the default display of the tree
     */
    structure: SlotContent<TreeContext>;
    /**
     * Slot to change the default tree item
     */
    item: SlotContent<TreeSlotItemContext>;
    /**
     * Slot to change the default tree item content
     */
    itemContent: SlotContent<TreeSlotItemContext>;
    /**
     * Slot to change the default tree item toggle
     */
    itemToggle: SlotContent<TreeSlotItemContext>;
}
/**
 * Represents the properties for the Tree component.
 */
interface TreeProps {
    /**
     * Array of the tree nodes to display
     *
     * @defaultValue \`[]\`
     */
    nodes: TreeItem[];
    /**
     * An event emitted when the user toggles the expand of the TreeItem.
     *
     * Event payload is equal to the TreeItem clicked.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onExpandToggle: (node: NormalizedTreeItem) => void;
    /**
     * Retrieves expand items of the TreeItem
     *
     * @param node - HTML element that is representing the expand item
     *
     * @defaultValue
     * \`\`\`ts
     * (node: HTMLElement) => node.querySelectorAll('button')
     * \`\`\`
     */
    navSelector(node: HTMLElement): NodeListOf<HTMLElement>;
    /**
     * Return the value for the 'aria-label' attribute of the toggle
     * @param label - tree item label
     *
     * @defaultValue
     * \`\`\`ts
     * (label: string) => \`Toggle \${label}\`
     * \`\`\`
     */
    ariaLabelToggleFn: (label: string) => string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Slot to change the default display of the tree
     */
    structure: SlotContent<TreeContext>;
    /**
     * Slot to change the default tree item
     */
    item: SlotContent<TreeSlotItemContext>;
    /**
     * Slot to change the default tree item content
     */
    itemContent: SlotContent<TreeSlotItemContext>;
    /**
     * Slot to change the default tree item toggle
     */
    itemToggle: SlotContent<TreeSlotItemContext>;
}
/**
 * Represents a Tree widget component.
 */
type TreeWidget = Widget<TreeProps, TreeState, TreeApi, TreeDirectives>;
/**
 * Create a Tree with given config props
 * @param config - an optional tree config
 * @returns a TreeWidget
 */
declare const export_createTree: WidgetFactory<TreeWidget>;

/**
 * Represents a tree item component.
 */
interface TreeItem {
    /**
     * Optional accessibility label for the node
     */
    ariaLabel?: string;
    /**
     * Optional array of children nodes
     */
    children?: TreeItem[];
    /**
     * If \`true\` the node is expanded
     */
    isExpanded?: boolean;
    /**
     * String title of the node
     */
    label: string;
}
/**
 * Normalized TreeItem object
 */
interface NormalizedTreeItem {
    /**
     * Accessibility label for the node
     */
    ariaLabel: string;
    /**
     * Level in the hierarchy, starts with 0 for a root node
     */
    level: number;
    /**
     * An array of children nodes
     */
    children: NormalizedTreeItem[];
    /**
     * If \`true\` the node is expanded
     */
    isExpanded?: boolean;
    /**
     * String title of the node
     */
    label: string;
}
/**
 * Interface representing the API for a Tree component.
 */
interface TreeApi {
}
/**
 * Interface representing various directives used in the Tree component.
 */
interface TreeDirectives {
    /**
     * Directive to attach navManager for the tree
     */
    navigationDirective: Directive;
    /**
     * Directive to handle toggle for the tree item
     */
    itemToggleDirective: Directive<{
        item: NormalizedTreeItem;
    }>;
    /**
     * Directive to handle attributes for the tree item
     */
    itemAttributesDirective: Directive<{
        item: NormalizedTreeItem;
    }>;
}

/**
 * Directive to provide a template reference for tree structure.
 *
 * This directive uses a template reference to render the {@link TreeContext}.
 */
declare class TreeStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: TreeStructureDirective, context: unknown): context is TreeContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TreeStructureDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<TreeStructureDirective, "ng-template[auTreeStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot for tree structure.
 */
declare const treeDefaultSlotStructure: SlotContent<TreeContext>;
/**
 * Directive to provide a template reference for tree item toggle.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
declare class TreeItemToggleDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: TreeItemToggleDirective, context: unknown): context is TreeSlotItemContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TreeItemToggleDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<TreeItemToggleDirective, "ng-template[auTreeItemToggle]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot for tree item toggle.
 */
declare const treeDefaultItemToggle: SlotContent<TreeSlotItemContext>;
/**
 * Directive to provide a template reference for tree item content.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
declare class TreeItemContentDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: TreeItemContentDirective, context: unknown): context is TreeSlotItemContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TreeItemContentDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<TreeItemContentDirective, "ng-template[auTreeItemContent]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot for tree item.
 */
declare const treeDefaultSlotItemContent: SlotContent<TreeSlotItemContext>;
/**
 * Directive to provide a template reference for tree item.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
declare class TreeItemDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: TreeItemDirective, context: unknown): context is TreeSlotItemContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TreeItemDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<TreeItemDirective, "ng-template[auTreeItem]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot for tree item.
 */
declare const treeDefaultSlotItem: SlotContent<TreeSlotItemContext>;
/**
 * TreeComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable tree widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
declare class TreeComponent extends BaseWidgetDirective<TreeWidget> {
    constructor();
    /**
     * Array of the tree nodes to display
     *
     * @defaultValue \`[]\`
     */
    readonly nodes: _angular_core.InputSignal<TreeItem[] | undefined>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    /**
     * Retrieves expand items of the TreeItem
     *
     * @param node - HTML element that is representing the expand item
     *
     * @defaultValue
     * \`\`\`ts
     * (node: HTMLElement) => node.querySelectorAll('button')
     * \`\`\`
     */
    readonly navSelector: _angular_core.InputSignal<((node: HTMLElement) => NodeListOf<HTMLElement>) | undefined>;
    /**
     * Return the value for the 'aria-label' attribute of the toggle
     * @param label - tree item label
     *
     * @defaultValue
     * \`\`\`ts
     * (label: string) => \`Toggle \${label}\`
     * \`\`\`
     */
    readonly ariaLabelToggleFn: _angular_core.InputSignal<((label: string) => string) | undefined>;
    /**
     * An event emitted when the user toggles the expand of the TreeItem.
     *
     * Event payload is equal to the TreeItem clicked.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly expandToggle: _angular_core.OutputEmitterRef<NormalizedTreeItem>;
    /**
     * Slot to change the default tree item content
     */
    readonly itemContent: _angular_core.InputSignal<SlotContent<TreeSlotItemContext>>;
    readonly slotItemContentFromContent: _angular_core.Signal<TreeItemContentDirective | undefined>;
    /**
     * Slot to change the default display of the tree
     */
    readonly structure: _angular_core.InputSignal<SlotContent<TreeContext>>;
    readonly slotStructureFromContent: _angular_core.Signal<TreeStructureDirective | undefined>;
    /**
     * Slot to change the default tree item toggle
     */
    readonly itemToggle: _angular_core.InputSignal<SlotContent<TreeSlotItemContext>>;
    readonly slotItemToggleFromContent: _angular_core.Signal<TreeItemToggleDirective | undefined>;
    /**
     * Slot to change the default tree item
     */
    readonly item: _angular_core.InputSignal<SlotContent<TreeSlotItemContext>>;
    readonly slotItemFromContent: _angular_core.Signal<TreeItemDirective | undefined>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TreeComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TreeComponent, "[auTree]", never, { "nodes": { "alias": "auNodes"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "navSelector": { "alias": "auNavSelector"; "required": false; "isSignal": true; }; "ariaLabelToggleFn": { "alias": "auAriaLabelToggleFn"; "required": false; "isSignal": true; }; "itemContent": { "alias": "auItemContent"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "itemToggle": { "alias": "auItemToggle"; "required": false; "isSignal": true; }; "item": { "alias": "auItem"; "required": false; "isSignal": true; }; }, { "expandToggle": "auExpandToggle"; }, ["slotItemContentFromContent", "slotStructureFromContent", "slotItemToggleFromContent", "slotItemFromContent"], never, true, never>;
}

/**
 * Retrieve a shallow copy of the default Carousel config
 * @returns the default Carousel config
 */
declare const export_getCarouselDefaultConfig: () => CarouselProps<any>;

/**
 * Represents the context for a carousel.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
type CarouselContext<SlideData extends {
    id: string;
}> = WidgetSlotContext<CarouselWidget<SlideData>>;
/**
 * Represents the context for a carousel slide.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
type CarouselSlideContext<SlideData extends {
    id: string;
}> = WidgetSlotContext<CarouselWidget<SlideData>> & SlideData;
/**
 * Represents the state of a carousel component.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
interface CarouselState<SlideData extends {
    id: string;
}> {
    /**
     * is the carousel currently scrolling
     */
    scrolling: boolean;
    /**
     * can carousel scroll to previous slide
     */
    canScrollPrev: boolean;
    /**
     * can carousel scroll to next slide
     */
    canScrollNext: boolean;
    /**
     * selected scroll snap
     */
    selectedScrollSnap: number;
    /**
     * is the carousel initialized
     */
    initialized: boolean;
    /**
     * If \`true\`, 'previous' and 'next' navigation arrows will be visible.
     *
     * @defaultValue \`true\`
     */
    showNavigationArrows: boolean;
    /**
     * If \`true\`, navigation indicators at the bottom of the slide will be visible.
     *
     * @defaultValue \`true\`
     */
    showNavigationIndicators: boolean;
    /**
     * Choose content direction between \`ltr\` and \`rtl\`
     *
     * @see {@link https://www.embla-carousel.com/api/options/#direction}
     * @defaultValue \`'ltr'\`
     */
    direction: 'ltr' | 'rtl';
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Class name to apply to the container of the carousel.
     *
     * @defaultValue \`''\`
     */
    containerClass: string;
    /**
     * Class name to apply to each slide in the carousel.
     *
     * @defaultValue \`''\`
     */
    slideClass: string | ((slideContext: {
        id: string;
        index: number;
        active: boolean;
    }) => string);
    /**
     * The data for each slide in the carousel.
     *
     * @defaultValue \`[]\`
     */
    slidesData: SlideData[];
    /**
     * The structure of the carousel.
     */
    structure: SlotContent<CarouselContext<SlideData>>;
    /**
     * The navigation layer of the carousel.
     */
    navigation: SlotContent<CarouselContext<SlideData>>;
    /**
     * The content of each slide in the carousel.
     */
    slide: SlotContent<CarouselSlideContext<SlideData>>;
    /**
     * The aria-live attribute value for the carousel container.
     *
     * @defaultValue \`'polite'\`
     */
    ariaLive: string;
}
/**
 * Interface representing the properties for a carousel component.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
interface CarouselProps<SlideData extends {
    id: string;
}> {
    /**
     * Plugins to extend the carousel with additional features
     * @defaultValue \`[]\`
     */
    plugins: EmblaPluginType[];
    /**
     * Aria label for navigation indicators
     *
     * @defaultValue
     * \`\`\`ts
     * (index: number) => \`Select slide \${index + 1}\`
     * \`\`\`
     */
    ariaIndicatorLabel: (index: number) => string;
    /**
     * Aria label for previous button
     *
     * @defaultValue \`'Select previous slide'\`
     */
    ariaPrevLabel: string;
    /**
     * Aria label for next button
     *
     * @defaultValue \`'Select next slide'\`
     */
    ariaNextLabel: string;
    /**
     * Align the slides relative to the carousel viewport
     *
     * @see {@link https://www.embla-carousel.com/api/options/#align}
     * @defaultValue \`'center'\`
     */
    align: 'start' | 'center' | 'end';
    /**
     * Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.
     *
     * @see {@link https://www.embla-carousel.com/api/options/#container}
     *
     * @defaultValue \`null\`
     */
    container: string | null;
    /**
     * Clear leading and trailing empty space that causes excessive scrolling
     *
     * @see {@link https://www.embla-carousel.com/api/options/#containScroll}
     * @defaultValue \`'trimSnaps'\`
     */
    containScroll: false | 'trimSnaps' | 'keepSnaps';
    /**
     * Choose content direction between \`ltr\` and \`rtl\`
     *
     * @see {@link https://www.embla-carousel.com/api/options/#direction}
     * @defaultValue \`'ltr'\`
     */
    direction: 'ltr' | 'rtl';
    /**
     * Enables momentum scrolling
     *
     * @see {@link https://www.embla-carousel.com/api/options/#dragFree}
     * @defaultValue \`false\`
     */
    dragFree: boolean;
    /**
     * Drag threshold in pixels
     *
     * @see {@link https://www.embla-carousel.com/api/options/#dragThreshold}
     * @defaultValue \`10\`
     */
    dragThreshold: number;
    /**
     * Set scroll duration when triggered by any of the API methods
     *
     * @see {@link https://www.embla-carousel.com/api/options/#duration}
     * @defaultValue \`25\`
     */
    duration: number;
    /**
     * Enables infinite looping
     *
     * @see {@link https://www.embla-carousel.com/api/options/#loop}
     * @defaultValue \`false\`
     */
    loop: boolean;
    /**
     * Allow the carousel to skip scroll snaps if it's dragged vigorously
     *
     * @see {@link https://www.embla-carousel.com/api/options/#skipsnaps}
     * @defaultValue \`false\`
     */
    skipSnaps: boolean;
    /**
     * If \`true\`, 'previous' and 'next' navigation arrows will be visible.
     *
     * @defaultValue \`true\`
     */
    showNavigationArrows: boolean;
    /**
     * If \`true\`, navigation indicators at the bottom of the slide will be visible.
     *
     * @defaultValue \`true\`
     */
    showNavigationIndicators: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Class name to apply to the container of the carousel.
     *
     * @defaultValue \`''\`
     */
    containerClass: string;
    /**
     * Class name to apply to each slide in the carousel.
     *
     * @defaultValue \`''\`
     */
    slideClass: string | ((slideContext: {
        id: string;
        index: number;
        active: boolean;
    }) => string);
    /**
     * The data for each slide in the carousel.
     *
     * @defaultValue \`[]\`
     */
    slidesData: SlideData[];
    /**
     * The structure of the carousel.
     */
    structure: SlotContent<CarouselContext<SlideData>>;
    /**
     * The navigation layer of the carousel.
     */
    navigation: SlotContent<CarouselContext<SlideData>>;
    /**
     * The content of each slide in the carousel.
     */
    slide: SlotContent<CarouselSlideContext<SlideData>>;
    /**
     * The aria-live attribute value for the carousel container.
     *
     * @defaultValue \`'polite'\`
     */
    ariaLive: string;
}
/**
 * Represents the directives for a carousel component.
 */
interface CarouselDirectives {
    /**
     * A directive to be applied to each slide in the carousel.
     */
    slide: Directive<{
        id: string;
        index: number;
    }>;
    /**
     * A directive to be applied to container of the carousel.
     */
    container: Directive;
    /**
     * the root directive
     */
    root: Directive;
    /**
     * A directive to be applied to a navigation button allowing to scroll to the previous slide.
     */
    scrollPrev: Directive;
    /**
     * A directive to be applied to a navigation button allowing to scroll to the next slide.
     */
    scrollNext: Directive;
    /**
     * A directive to be applied to a tab list allowing to navigate to the corresponding slide.
     * This directive adds the role \`tablist\` and is recommended to be used together with {@link tabIndicator}.
     */
    tabList: Directive;
    /**
     * A directive to be applied to a navigation indicator allowing to scroll to the corresponding slide.
     * As this directive adds the role \`tab\` to the element, it is recommended to use it on a button or a link and the parent element should have the {@link tabList} directive attached.
     */
    tabIndicator: Directive<{
        index: number;
        id: string;
        jump?: boolean;
    }>;
}
/**
 * Represents a carousel widget with specific properties, state, API, and directives.
 *
 * @template SlideData - The type of the data for each slide.
 */
type CarouselWidget<SlideData extends {
    id: string;
}> = Widget<CarouselProps<SlideData>, CarouselState<SlideData>, CarouselApi, CarouselDirectives>;
/**
 * Create a Carousel with given config props
 *
 * @template SlideData - The type of the data for each slide.
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
declare const export_createCarousel: WidgetFactory<CarouselWidget<{
    id: string;
}>, <SlideData extends {
    id: string;
}>(config?: PropsConfig<CarouselProps<SlideData>>) => CarouselWidget<SlideData>>;

/**
 * Represents the API for a carousel component.
 */
interface CarouselApi {
    /**
     * Scroll to the previous snap point if possible.
     * @param jump - scroll instantly
     */
    scrollPrev: (jump?: boolean) => void;
    /**
     * Scroll to the next snap point if possible.
     * @param jump - scroll instantly
     */
    scrollNext: (jump?: boolean) => void;
    /**
     * Scroll to a snap point by index
     * @param index - the snap point index
     * @param jump - scroll instantly
     */
    scrollTo: (index: number, jump?: boolean) => void;
    /**
     * Retrieve the enabled plugins
     */
    plugins: () => EmblaPluginsType | undefined;
    /**
     * Retrieve the inner EmblaApi object
     */
    emblaApi: () => EmblaCarouselType | undefined;
}

/**
 * Directive that provides a template reference for the carousel structure using the {@link CarouselContext}.
 */
declare class CarouselStructureDirective<SlideData extends {
    id: string;
}> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<SlideData extends {
        id: string;
    }>(_dir: CarouselStructureDirective<SlideData>, context: unknown): context is CarouselContext<SlideData>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CarouselStructureDirective<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<CarouselStructureDirective<any>, "ng-template[auCarouselStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive that provides a template reference for the carousel navigation using the {@link CarouselContext}.
 */
declare class CarouselNavigationDirective<SlideData extends {
    id: string;
}> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<SlideData extends {
        id: string;
    }>(_dir: CarouselNavigationDirective<SlideData>, context: unknown): context is CarouselContext<SlideData>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CarouselNavigationDirective<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<CarouselNavigationDirective<any>, "ng-template[auCarouselNavigation]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive that provides a template reference for the carousel slide  using the {@link CarouselSlideContext}.
 */
declare class CarouselSlideDirective<SlideData extends {
    id: string;
}> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<SlideData extends {
        id: string;
    }>(_dir: CarouselSlideDirective<SlideData>, context: unknown): context is CarouselSlideContext<SlideData>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CarouselSlideDirective<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<CarouselSlideDirective<any>, "ng-template[auCarouselSlide]", never, {}, {}, never, never, true, never>;
}
/**
 * The default slot for the structure
 */
declare const carouselDefaultSlotStructure: SlotContent<CarouselContext<any>>;
/**
 * The default slot for the navigation
 */
declare const carouselDefaultSlotNavigation: SlotContent<CarouselContext<any>>;
/**
 * CarouselComponent is an Angular Component that extends {@link BaseWidgetDirective}<{@link CarouselWidget}>
 * to create a customizable carousel widget. It provides various inputs (see {@link CarouselProps})
 * to configure the appearance and behavior of the carousel.
 */
declare class CarouselComponent<SlideData extends {
    id: string;
}> extends BaseWidgetDirective<CarouselWidget<SlideData>> {
    /**
     * Aria label for navigation indicators
     *
     * @defaultValue
     * \`\`\`ts
     * (index: number) => \`Select slide \${index + 1}\`
     * \`\`\`
     */
    readonly ariaIndicatorLabel: InputSignal<((index: number) => string) | undefined>;
    /**
     * Aria label for previous button
     *
     * @defaultValue \`'Select previous slide'\`
     */
    readonly ariaPrevLabel: InputSignal<string | undefined>;
    /**
     * Aria label for next button
     *
     * @defaultValue \`'Select next slide'\`
     */
    readonly ariaNextLabel: InputSignal<string | undefined>;
    /**
     * Choose content direction between \`ltr\` and \`rtl\`
     *
     * @see {@link https://www.embla-carousel.com/api/options/#direction}
     * @defaultValue \`'ltr'\`
     */
    readonly direction: InputSignal<"ltr" | "rtl" | undefined>;
    /**
     * Enables momentum scrolling
     *
     * @see {@link https://www.embla-carousel.com/api/options/#dragFree}
     * @defaultValue \`false\`
     */
    readonly dragFree: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Drag threshold in pixels
     *
     * @see {@link https://www.embla-carousel.com/api/options/#dragThreshold}
     * @defaultValue \`10\`
     */
    readonly dragThreshold: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Set scroll duration when triggered by any of the API methods
     *
     * @see {@link https://www.embla-carousel.com/api/options/#duration}
     * @defaultValue \`25\`
     */
    readonly duration: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Enables infinite looping
     *
     * @see {@link https://www.embla-carousel.com/api/options/#loop}
     * @defaultValue \`false\`
     */
    readonly loop: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Allow the carousel to skip scroll snaps if it's dragged vigorously
     *
     * @see {@link https://www.embla-carousel.com/api/options/#skipsnaps}
     * @defaultValue \`false\`
     */
    readonly skipSnaps: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, 'previous' and 'next' navigation arrows will be visible.
     *
     * @defaultValue \`true\`
     */
    readonly showNavigationArrows: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, navigation indicators at the bottom of the slide will be visible.
     *
     * @defaultValue \`true\`
     */
    readonly showNavigationIndicators: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Plugins to extend the carousel with additional features
     * @defaultValue \`[]\`
     */
    readonly plugins: InputSignal<EmblaPluginType[] | undefined>;
    /**
     * Align the slides relative to the carousel viewport
     *
     * @see {@link https://www.embla-carousel.com/api/options/#align}
     * @defaultValue \`'center'\`
     */
    readonly align: InputSignal<"start" | "center" | "end" | undefined>;
    /**
     * Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.
     *
     * @see {@link https://www.embla-carousel.com/api/options/#container}
     *
     * @defaultValue \`null\`
     */
    readonly container: InputSignal<string | null | undefined>;
    /**
     * Clear leading and trailing empty space that causes excessive scrolling
     *
     * @see {@link https://www.embla-carousel.com/api/options/#containScroll}
     * @defaultValue \`'trimSnaps'\`
     */
    readonly containScroll: InputSignal<false | "trimSnaps" | "keepSnaps" | undefined>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: InputSignal<string | undefined>;
    /**
     * Class name to apply to the container of the carousel.
     *
     * @defaultValue \`''\`
     */
    readonly containerClass: InputSignal<string | undefined>;
    /**
     * Class name to apply to each slide in the carousel.
     *
     * @defaultValue \`''\`
     */
    readonly slideClass: InputSignal<string | ((slideContext: {
        id: string;
        index: number;
        active: boolean;
    }) => string) | undefined>;
    /**
     * The aria-live attribute value for the carousel container.
     *
     * @defaultValue \`'polite'\`
     */
    readonly ariaLive: InputSignal<string | undefined>;
    /**
     * The data for each slide in the carousel.
     *
     * @defaultValue \`[]\`
     */
    readonly slidesData: InputSignal<SlideData[] | undefined>;
    /**
     * The structure of the carousel.
     */
    readonly structure: InputSignal<SlotContent<CarouselContext<SlideData>>>;
    /**
     * The navigation layer of the carousel.
     */
    readonly navigation: InputSignal<SlotContent<CarouselContext<SlideData>>>;
    /**
     * The content of each slide in the carousel.
     */
    readonly slide: InputSignal<SlotContent<CarouselSlideContext<SlideData>>>;
    readonly slotSlideFromContent: _angular_core.Signal<CarouselSlideDirective<any> | undefined>;
    readonly slotStructureFromContent: _angular_core.Signal<CarouselStructureDirective<any> | undefined>;
    readonly slotNavigationFromContent: _angular_core.Signal<CarouselNavigationDirective<any> | undefined>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CarouselComponent<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<CarouselComponent<any>, "[auCarousel]", never, { "ariaIndicatorLabel": { "alias": "auAriaIndicatorLabel"; "required": false; "isSignal": true; }; "ariaPrevLabel": { "alias": "auAriaPrevLabel"; "required": false; "isSignal": true; }; "ariaNextLabel": { "alias": "auAriaNextLabel"; "required": false; "isSignal": true; }; "direction": { "alias": "auDirection"; "required": false; "isSignal": true; }; "dragFree": { "alias": "auDragFree"; "required": false; "isSignal": true; }; "dragThreshold": { "alias": "auDragThreshold"; "required": false; "isSignal": true; }; "duration": { "alias": "auDuration"; "required": false; "isSignal": true; }; "loop": { "alias": "auLoop"; "required": false; "isSignal": true; }; "skipSnaps": { "alias": "auSkipSnaps"; "required": false; "isSignal": true; }; "showNavigationArrows": { "alias": "auShowNavigationArrows"; "required": false; "isSignal": true; }; "showNavigationIndicators": { "alias": "auShowNavigationIndicators"; "required": false; "isSignal": true; }; "plugins": { "alias": "auPlugins"; "required": false; "isSignal": true; }; "align": { "alias": "auAlign"; "required": false; "isSignal": true; }; "container": { "alias": "auContainer"; "required": false; "isSignal": true; }; "containScroll": { "alias": "auContainScroll"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "containerClass": { "alias": "auContainerClass"; "required": false; "isSignal": true; }; "slideClass": { "alias": "auSlideClass"; "required": false; "isSignal": true; }; "ariaLive": { "alias": "auAriaLive"; "required": false; "isSignal": true; }; "slidesData": { "alias": "auSlidesData"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "navigation": { "alias": "auNavigation"; "required": false; "isSignal": true; }; "slide": { "alias": "auSlide"; "required": false; "isSignal": true; }; }, {}, ["slotSlideFromContent", "slotStructureFromContent", "slotNavigationFromContent"], never, true, never>;
}

/**
 * Retrieve a shallow copy of the default Drawer config
 * @returns the default Drawer config
 */
declare const export_getDrawerDefaultConfig: () => DrawerProps;

/**
 * Represents the context for a Drawer widget.
 * This interface is an alias for \`WidgetSlotContext<DrawerWidget>\`.
 */
type DrawerContext = WidgetSlotContext<DrawerWidget>;
/**
 * Represents the state of a Drawer component.
 */
interface DrawerState {
    /**
     * Whether the backdrop is fully hidden. This can be true either because {@link DrawerProps.backdrop|backdrop} is false or
     * because {@link DrawerProps.visible|visible} is false and there is no current transition.
     */
    backdropHidden: boolean;
    /**
     * Flag to show whether the drawer is fully hidden.
     */
    hidden: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`'w-full'\`
     */
    className: string;
    /**
     * Which element should contain the drawer and backdrop DOM elements.
     * If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     *
     * @defaultValue
     * \`\`\`ts
     * typeof window !== 'undefined' ? document.body : null
     * \`\`\`
     */
    container: HTMLElement | null;
    /**
     * Classes to add on the backdrop DOM element.
     *
     * @defaultValue \`''\`
     */
    backdropClass: string;
    /**
     * If \`true\`, the drawer is shown; otherwise, it is hidden.
     *
     * @defaultValue \`false\`
     */
    visible: boolean;
    /**
     * If \`true\`, the drawer can be resized by the user.
     *
     * @defaultValue \`false\`
     */
    resizable: boolean;
    /**
     * Global template for the drawer component
     */
    structure: SlotContent<DrawerContext>;
    /**
     * Template for the drawer header
     */
    header: SlotContent<DrawerContext>;
    /**
     * Template for the drawer body
     */
    children: SlotContent<DrawerContext>;
}
/**
 * Represents the properties for the Drawer component.
 */
interface DrawerProps {
    /**
     * The transition function will be executed when the drawer is displayed or hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * collapseHorizontalTransition
     * \`\`\`
     */
    transition: TransitionFn;
    /**
     * The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * collapseVerticalTransition
     * \`\`\`
     */
    verticalTransition: TransitionFn;
    /**
     * The transition to use for the backdrop behind the drawer (if present).
     *
     * @defaultValue \`fadeTransition\`
     */
    backdropTransition: TransitionFn;
    /**
     * If \`true\` opening and closing will be animated.
     *
     * @defaultValue \`true\`
     */
    animated: boolean;
    /**
     * aria-labelledby attribute to use for the drawer element.
     *
     * @defaultValue \`''\`
     */
    ariaLabelledBy: string;
    /**
     * aria-describedby attribute to use for the drawer element.
     *
     * @defaultValue \`''\`
     */
    ariaDescribedBy: string;
    /**
     * The width of the drawer in pixels.
     *
     * @defaultValue \`200\`
     */
    width: number;
    /**
     * The height of the drawer in pixels.
     *
     * @defaultValue \`200\`
     */
    height: number;
    /**
     * If \`true\` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable
     *
     * @defaultValue \`true\`
     */
    backdrop: boolean;
    /**
     * If \`true\` allows body scrolling when the drawer is open.
     *
     * @defaultValue \`false\`
     */
    bodyScroll: boolean;
    /**
     * Event to be triggered when the transition is completed and the drawer is not visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHidden: () => void;
    /**
     * Event to be triggered when the transition is completed and the drawer is visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onShown: () => void;
    /**
     * An event emitted when the width is changed.
     *
     * Event payload is equal to the newly selected width.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onWidthChange: (width: number) => void;
    /**
     * An event emitted when the height is changed.
     *
     * Event payload is equal to the newly selected height.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHeightChange: (width: number) => void;
    /**
     * Event to be triggered when the visible property changes.
     *
     * @param visible - new value of the visible propery
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`'w-full'\`
     */
    className: string;
    /**
     * Which element should contain the drawer and backdrop DOM elements.
     * If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     *
     * @defaultValue
     * \`\`\`ts
     * typeof window !== 'undefined' ? document.body : null
     * \`\`\`
     */
    container: HTMLElement | null;
    /**
     * Classes to add on the backdrop DOM element.
     *
     * @defaultValue \`''\`
     */
    backdropClass: string;
    /**
     * If \`true\`, the drawer is shown; otherwise, it is hidden.
     *
     * @defaultValue \`false\`
     */
    visible: boolean;
    /**
     * If \`true\`, the drawer can be resized by the user.
     *
     * @defaultValue \`false\`
     */
    resizable: boolean;
    /**
     * Global template for the drawer component
     */
    structure: SlotContent<DrawerContext>;
    /**
     * Template for the drawer header
     */
    header: SlotContent<DrawerContext>;
    /**
     * Template for the drawer body
     */
    children: SlotContent<DrawerContext>;
}
/**
 * Represents the directives for the Drawer component.
 */
interface DrawerDirectives {
    /**
     * Directive to put on the drawer DOM element.
     */
    drawerDirective: Directive;
    /**
     * Directive to put on the backdrop DOM element.
     */
    backdropDirective: Directive;
    /**
     * Directive to put on the splitter DOM element.
     */
    splitterDirective: Directive;
    /**
     * Directive to put on the container DOM element in order for the drawer to size correctly.
     */
    containerDirective: Directive;
    /**
     * Portal directive to put on the drawer DOM element.
     */
    drawerPortalDirective: Directive;
    /**
     * Portal directive to put on the backdrop DOM element.
     */
    backdropPortalDirective: Directive;
}
/**
 * Represents a Drawer widget component.
 */
type DrawerWidget = Widget<DrawerProps, DrawerState, DrawerApi, DrawerDirectives>;
/**
 * Create a Drawer with given config props
 * @param config - an optional Drawer config
 * @returns a DrawerWidget
 */
declare const export_createDrawer: WidgetFactory<DrawerWidget>;

/**
 * Possible values for the drawer positions
 */
type DrawerPositions = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';
/**
 * Interface representing the API for a Drawer component.
 */
interface DrawerApi {
    /**
     * Trigger the opening of the drawer.
     */
    open: () => void;
    /**
     * Trigger the closing of the drawer.
     */
    close: () => void;
}

/**
 * Directive to define the structure of a drawer component.
 * This directive uses a template reference to render the {@link DrawerContext}.
 */
declare class DrawerStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: DrawerStructureDirective, context: unknown): context is DrawerContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DrawerStructureDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<DrawerStructureDirective, "ng-template[auDrawerStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive representing the header of a drawer component.
 * This directive uses a template reference to render the {@link DrawerContext}.
 */
declare class DrawerHeaderDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: DrawerHeaderDirective, context: unknown): context is DrawerContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DrawerHeaderDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<DrawerHeaderDirective, "ng-template[auDrawerHeader]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to represent the body of a drawer notification.
 * This directive uses a template reference to render the {@link DrawerContext}.
 */
declare class DrawerBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: DrawerBodyDirective, context: unknown): context is DrawerContext;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DrawerBodyDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<DrawerBodyDirective, "ng-template[auDrawerBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Represents the default slot structure for the drawer component.
 */
declare const drawerDefaultSlotStructure: SlotContent<DrawerContext>;
/**
 * DrawerComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable drawer widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
declare class DrawerComponent extends BaseWidgetDirective<DrawerWidget> {
    /**
     * If \`true\` opening and closing will be animated.
     *
     * @defaultValue \`true\`
     */
    readonly animated: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * aria-labelledby attribute to use for the drawer element.
     *
     * @defaultValue \`''\`
     */
    readonly ariaLabelledBy: _angular_core.InputSignal<string | undefined>;
    /**
     * aria-describedby attribute to use for the drawer element.
     *
     * @defaultValue \`''\`
     */
    readonly ariaDescribedBy: _angular_core.InputSignal<string | undefined>;
    /**
     * If \`true\`, the drawer is shown; otherwise, it is hidden.
     *
     * @defaultValue \`false\`
     */
    readonly visible: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * collapseVerticalTransition
     * \`\`\`
     */
    readonly verticalTransition: _angular_core.InputSignal<TransitionFn | undefined>;
    /**
     * The transition function will be executed when the drawer is displayed or hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * collapseHorizontalTransition
     * \`\`\`
     */
    readonly transition: _angular_core.InputSignal<TransitionFn | undefined>;
    /**
     * The transition to use for the backdrop behind the drawer (if present).
     *
     * @defaultValue \`fadeTransition\`
     */
    readonly backdropTransition: _angular_core.InputSignal<TransitionFn | undefined>;
    /**
     * Which element should contain the drawer and backdrop DOM elements.
     * If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     *
     * @defaultValue
     * \`\`\`ts
     * typeof window !== 'undefined' ? document.body : null
     * \`\`\`
     */
    readonly container: _angular_core.InputSignal<HTMLElement | null | undefined>;
    /**
     * If \`true\` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable
     *
     * @defaultValue \`true\`
     */
    readonly backdrop: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` allows body scrolling when the drawer is open.
     *
     * @defaultValue \`false\`
     */
    readonly bodyScroll: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Classes to add on the backdrop DOM element.
     *
     * @defaultValue \`''\`
     */
    readonly backdropClass: _angular_core.InputSignal<string | undefined>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`'w-full'\`
     */
    readonly className: _angular_core.InputSignal<string | undefined>;
    /**
     * If \`true\`, the drawer can be resized by the user.
     *
     * @defaultValue \`false\`
     */
    readonly resizable: _angular_core.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The width of the drawer in pixels.
     *
     * @defaultValue \`200\`
     */
    readonly width: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The height of the drawer in pixels.
     *
     * @defaultValue \`200\`
     */
    readonly height: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /**
     * An event emitted when the width is changed.
     *
     * Event payload is equal to the newly selected width.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly widthChange: _angular_core.OutputEmitterRef<number>;
    /**
     * An event emitted when the height is changed.
     *
     * Event payload is equal to the newly selected height.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly heightChange: _angular_core.OutputEmitterRef<number>;
    /**
     * Event to be triggered when the visible property changes.
     *
     * @param visible - new value of the visible propery
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly visibleChange: _angular_core.OutputEmitterRef<boolean>;
    /**
     * Event to be triggered when the transition is completed and the drawer is not visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly hidden: _angular_core.OutputEmitterRef<void>;
    /**
     * Event to be triggered when the transition is completed and the drawer is visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly shown: _angular_core.OutputEmitterRef<void>;
    constructor();
    /**
     * Global template for the drawer component
     */
    readonly structure: _angular_core.InputSignal<SlotContent<DrawerContext>>;
    readonly slotStructureFromContent: _angular_core.Signal<DrawerStructureDirective | undefined>;
    /**
     * Template for the drawer header
     */
    readonly header: _angular_core.InputSignal<SlotContent<DrawerContext>>;
    readonly slotHeaderFromContent: _angular_core.Signal<DrawerHeaderDirective | undefined>;
    /**
     * Template for the drawer body
     */
    readonly children: _angular_core.InputSignal<SlotContent<DrawerContext>>;
    readonly slotBodyFromContent: _angular_core.Signal<DrawerBodyDirective | undefined>;
    readonly slotChildren: _angular_core.Signal<TemplateRef<void> | undefined>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DrawerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<DrawerComponent, "[auDrawer]", never, { "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "ariaLabelledBy": { "alias": "auAriaLabelledBy"; "required": false; "isSignal": true; }; "ariaDescribedBy": { "alias": "auAriaDescribedBy"; "required": false; "isSignal": true; }; "visible": { "alias": "auVisible"; "required": false; "isSignal": true; }; "verticalTransition": { "alias": "auVerticalTransition"; "required": false; "isSignal": true; }; "transition": { "alias": "auTransition"; "required": false; "isSignal": true; }; "backdropTransition": { "alias": "auBackdropTransition"; "required": false; "isSignal": true; }; "container": { "alias": "auContainer"; "required": false; "isSignal": true; }; "backdrop": { "alias": "auBackdrop"; "required": false; "isSignal": true; }; "bodyScroll": { "alias": "auBodyScroll"; "required": false; "isSignal": true; }; "backdropClass": { "alias": "auBackdropClass"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "resizable": { "alias": "auResizable"; "required": false; "isSignal": true; }; "width": { "alias": "auWidth"; "required": false; "isSignal": true; }; "height": { "alias": "auHeight"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "header": { "alias": "auHeader"; "required": false; "isSignal": true; }; "children": { "alias": "auChildren"; "required": false; "isSignal": true; }; }, { "widthChange": "auWidthChange"; "heightChange": "auHeightChange"; "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotStructureFromContent", "slotHeaderFromContent", "slotBodyFromContent"], ["*"], true, never>;
}

declare class AgnosUIAngularModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<AgnosUIAngularModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<AgnosUIAngularModule, never, [typeof i1.SlotDirective, typeof SelectComponent, typeof SelectBadgeLabelDirective, typeof SelectItemLabelDirective, typeof i1.UseDirective, typeof i1.UseMultiDirective, typeof RatingComponent, typeof RatingStarDirective, typeof PaginationComponent, typeof PaginationEllipsisDirective, typeof PaginationFirstDirective, typeof PaginationLastDirective, typeof PaginationNextDirective, typeof PaginationNumberDirective, typeof PaginationPreviousDirective, typeof PaginationPagesDirective, typeof PaginationStructureDirective, typeof ModalComponent, typeof ModalStructureDirective, typeof ModalHeaderDirective, typeof ModalTitleDirective, typeof ModalBodyDirective, typeof ModalFooterDirective, typeof AlertComponent, typeof AlertStructureDirective, typeof AlertBodyDirective, typeof AccordionDirective, typeof AccordionItemComponent, typeof AccordionHeaderDirective, typeof AccordionBodyDirective, typeof AccordionItemStructureDirective, typeof SliderComponent, typeof SliderHandleDirective, typeof SliderLabelDirective, typeof SliderStructureDirective, typeof SliderTickDirective, typeof ProgressbarComponent, typeof ProgressbarStructureDirective, typeof ProgressbarBodyDirective, typeof ToastComponent, typeof ToastStructureDirective, typeof ToastBodyDirective, typeof ToastHeaderDirective, typeof ToasterComponent, typeof CollapseDirective, typeof CollapseTriggerDirective, typeof TreeComponent, typeof TreeStructureDirective, typeof TreeItemToggleDirective, typeof TreeItemContentDirective, typeof TreeItemDirective, typeof CarouselComponent, typeof CarouselSlideDirective, typeof CarouselStructureDirective, typeof CarouselNavigationDirective, typeof DrawerComponent, typeof DrawerStructureDirective, typeof DrawerHeaderDirective, typeof DrawerBodyDirective], [typeof i1.SlotDirective, typeof SelectComponent, typeof SelectBadgeLabelDirective, typeof SelectItemLabelDirective, typeof i1.UseDirective, typeof i1.UseMultiDirective, typeof RatingComponent, typeof RatingStarDirective, typeof PaginationComponent, typeof PaginationEllipsisDirective, typeof PaginationFirstDirective, typeof PaginationLastDirective, typeof PaginationNextDirective, typeof PaginationNumberDirective, typeof PaginationPreviousDirective, typeof PaginationPagesDirective, typeof PaginationStructureDirective, typeof ModalComponent, typeof ModalStructureDirective, typeof ModalHeaderDirective, typeof ModalTitleDirective, typeof ModalBodyDirective, typeof ModalFooterDirective, typeof AlertComponent, typeof AlertStructureDirective, typeof AlertBodyDirective, typeof AccordionDirective, typeof AccordionItemComponent, typeof AccordionHeaderDirective, typeof AccordionBodyDirective, typeof AccordionItemStructureDirective, typeof SliderComponent, typeof SliderHandleDirective, typeof SliderLabelDirective, typeof SliderStructureDirective, typeof SliderTickDirective, typeof ProgressbarComponent, typeof ProgressbarStructureDirective, typeof ProgressbarBodyDirective, typeof ToastComponent, typeof ToastStructureDirective, typeof ToastBodyDirective, typeof ToastHeaderDirective, typeof ToasterComponent, typeof CollapseDirective, typeof CollapseTriggerDirective, typeof TreeComponent, typeof TreeStructureDirective, typeof TreeItemToggleDirective, typeof TreeItemContentDirective, typeof TreeItemDirective, typeof CarouselComponent, typeof CarouselSlideDirective, typeof CarouselStructureDirective, typeof CarouselNavigationDirective, typeof DrawerComponent, typeof DrawerStructureDirective, typeof DrawerHeaderDirective, typeof DrawerBodyDirective]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<AgnosUIAngularModule>;
}

/**
 * Retrieve a shallow copy of the default collapse config
 * @returns the default collapse config
 */
declare const export_getCollapseDefaultConfig: () => CollapseProps;

/**
 * Properties for the Collapse component.
 */
interface CollapseProps {
    /**
     * Callback called when the collapse visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     * @param visible - The new visibility state of the collapse.
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Callback called when the collapse is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHidden: () => void;
    /**
     * Callback called when the collapse is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onShown: () => void;
    /**
     * If \`true\`, collapse opening will be animated at init time.
     *
     * @defaultValue \`false\`
     */
    animatedOnInit: boolean;
    /**
     * If \`true\`, collapse closing and opening will be animated.
     *
     * @defaultValue \`true\`
     */
    animated: boolean;
    /**
     * id of the collapse
     *
     * @defaultValue \`''\`
     */
    id: string;
    /**
     * If \`true\` the collapse is visible to the user
     *
     * @defaultValue \`false\`
     */
    visible: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * If \`true\`, collapse will be done horizontally.
     *
     * @defaultValue \`false\`
     */
    horizontal: boolean;
}
/**
 * Represents a widget for handling collapse functionality.
 *
 * This type defines the structure of a CollapseWidget, which includes properties, state, API, and directives
 * necessary for managing the collapse behavior in the UI.
 *
 * @type {Widget<CollapseProps, CollapseState, CollapseApi, CollapseDirectives>}
 */
type CollapseWidget = Widget<CollapseProps, CollapseState, CollapseApi, CollapseDirectives>;
/**
 * Create an CollapseWidget with given config props
 * @param config - an optional collapse config
 * @returns an CollapseWidget
 */
declare const export_createCollapse: WidgetFactory<CollapseWidget>;

/**
 * Represents the state of a Collapse component.
 */
interface CollapseState {
    /**
     * Is \`true\` when the collapse is hidden. Compared to \`visible\`, this is updated after the transition is executed.
     */
    hidden: boolean;
    /**
     * If \`true\` the collapse is visible to the user
     *
     * @defaultValue \`false\`
     */
    visible: boolean;
}
/**
 * Interface representing the API for a collapsible component.
 */
interface CollapseApi {
    /**
     * Triggers collapse closing programmatically.
     */
    close(): void;
    /**
     * Triggers the collapse content to be displayed for the user.
     */
    open(): void;
    /**
     * Toggles the collapse content visibility.
     */
    toggle(): void;
}
/**
 * Interface representing the directives used in a collapse component.
 */
interface CollapseDirectives {
    /**
     * Directive to apply the collapse.
     */
    collapseDirective: Directive;
    /**
     * Directive to apply to a trigger;
     */
    triggerDirective: Directive;
}

/**
 * Service to handle the opening and management of modal components.
 */
declare class ModalService {
    private readonly _injector;
    private readonly _applicationRef;
    /**
     * Opens a modal dialog with the specified options.
     *
     * @template Data - The type of data that the modal will handle.
     * @param options - The options to configure the modal.
     * @param injector - The injector to use when creating the modal component
     * @returns A promise that resolves when the modal is closed.
     */
    open<Data>(options: Partial<ModalProps<Data>>, injector?: Injector): Promise<any>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ModalService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ModalService>;
}

type WidgetsConfig = {
    /**
     * the accordion widget config
     */
    accordion: AccordionProps;
    /**
     * the alert widget config
     */
    alert: AlertProps;
    /**
     * the carousel widget config
     */
    carousel: CarouselProps<any>;
    /**
     * the collapse widget config
     */
    collapse: CollapseProps;
    /**
     * the drawer widget config
     */
    drawer: DrawerProps;
    /**
     * the modal widget config
     */
    modal: ModalProps<any>;
    /**
     * the pagination widget config
     */
    pagination: PaginationProps;
    /**
     * the progressbar widget config
     */
    progressbar: ProgressbarProps;
    /**
     * the rating widget config
     */
    rating: RatingProps;
    /**
     * the select widget config
     */
    select: SelectProps<any>;
    /**
     * the slider widget config
     */
    slider: SliderProps;
    /**
     * the toast widget config
     */
    toast: ToastProps;
    /**
     * the tree widget config
     */
    tree: TreeProps;
};

type AdaptParentConfig = (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>;
type InjectWidgetsConfig = (config?: Partial2Levels<WidgetsConfig>) => WidgetsConfigStore<WidgetsConfig>;
/**
 * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
 */
declare const widgetsConfigInjectionToken: InjectionToken<WidgetsConfigStore<WidgetsConfig>>;
/**
 * Creates a provider of widgets default configuration that inherits from any widgets default configuration already defined at an upper level
 * in the Angular dependency injection system. It contains its own set of widgets configuration properties that override the same properties form
 * the parent configuration.
 *
 * @remarks
 * The configuration is computed from the parent configuration in two steps:
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
 * If adaptParentConfig is not specified, this step is skipped.
 * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
 * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by
 * {@link injectWidgetsConfig}.
 *
 * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
 * defined at an upper level in the Angular dependency injection system (or an empty object if there is none) and returns the widgets
 * default configuration to be used.
 * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
 * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
 * It is also called in an Angular injection context, so it can call the Angular inject function to get and use dependencies from the
 * Angular dependency injection system.
 *
 * @returns DI provider to be included a list of \`providers\` (for example at a component level or
 * any other level of the Angular dependency injection system)
 *
 * @example
 * \`\`\`typescript
 * @Component({
 *   // ...
 *   providers: [
 *     provideWidgetsConfig((parentConfig) => {
 *       // first step configuration: transforms the parent configuration
 *       parentConfig.rating = parentConfig.rating ?? {};
 *       parentConfig.rating.className = \`\${parentConfig.rating.className ?? ''} my-rating-extra-class\`
 *       return parentConfig;
 *     })
 *   ]
 * })
 * class MyComponent {
 *   widgetsConfig = injectWidgetsConfig();
 *   constructor() {
 *     this.widgetsConfig.set({
 *       // second step configuration: overrides the parent configuration
 *       rating: {
 *         slotStar: MyCustomSlotStar
 *       }
 *     });
 *   }
 *   // ...
 * }
 * \`\`\`
 */
declare const provideWidgetsConfig: (adaptParentConfig?: AdaptParentConfig) => FactoryProvider;
/**
 * Returns the widgets default configuration store that was provided in the current injection context.
 * Throws if the no widgets default configuration store was provided.
 *
 * @param defaultConfig - values to set as soon as the config is injected
 * @remarks
 * This function must be called from an injection context, such as a constructor, a factory function, a field initializer or
 * a function used with {@link https://angular.io/api/core/runInInjectionContext | runInInjectionContext}.
 *
 * @returns the widgets default configuration store.
 */
declare const injectWidgetsConfig: InjectWidgetsConfig;
/**
 * Injects the configuration for a specific widget.
 *
 * @template N - The key of the widget configuration in the \`Config\` type.
 * @param widgetName - The name of the widget whose configuration is to be injected.
 * @returns A \`ReadableSignal\` that provides a partial configuration of the specified widget or \`undefined\` if the configuration is not available.
 */
declare const injectWidgetConfig: <N extends keyof BootstrapWidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>;
/**
 * Creates and initializes a widget using the provided factory and configuration options.
 *
 * The resulting widget can be easily hooked into the lifecycle of an Angular component through {@link BaseWidgetDirective}.
 *
 * @template W - The type of the widget.
 * @param factory - The factory function to create the widget.
 * @param options - The options for creating the widget.
 * @param options.defaultConfig - The default configuration for the widget.
 * @param options.events - The event handlers for the widget.
 * @param options.slotTemplates - A function that returns the slot templates for the widget.
 * @param options.slotChildren - A function that returns the slot children for the widget.
 * @param options.afterInit - A callback function to be called after the widget is initialized.
 * @returns The initialized widget.
 */
declare const callWidgetFactory: <W extends Widget<object, object, object, object>>(factory: WidgetFactory<W>, options?: {
    widgetName?: keyof BootstrapWidgetsConfig | null | undefined;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>>;
    afterInit?: (widget: AngularWidget<W>) => void;
    slotTemplates?: () => { [K in keyof WidgetProps<W> as IsSlotContent<WidgetProps<W>[K]> extends 0 ? never : K]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never; };
    slotChildren?: () => TemplateRef<void> | undefined;
}) => AngularWidget<W>;

export { AccordionBodyDirective, AccordionDirective, AccordionHeaderDirective, AccordionItemComponent, AccordionItemStructureDirective, AgnosUIAngularModule, AlertBodyDirective, AlertComponent, AlertStructureDirective, CarouselComponent, CarouselNavigationDirective, CarouselSlideDirective, CarouselStructureDirective, CollapseDirective, CollapseTriggerDirective, DrawerBodyDirective, DrawerComponent, DrawerHeaderDirective, DrawerStructureDirective, ModalBodyDirective, ModalComponent, ModalFooterDirective, ModalHeaderDirective, ModalService, ModalStructureDirective, ModalTitleDirective, PaginationComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationPreviousDirective, PaginationStructureDirective, ProgressbarBodyDirective, ProgressbarComponent, ProgressbarStructureDirective, RatingComponent, RatingStarDirective, SelectBadgeLabelDirective, SelectComponent, SelectItemLabelDirective, SliderComponent, SliderHandleDirective, SliderLabelDirective, SliderStructureDirective, SliderTickDirective, ToastBodyDirective, ToastComponent, ToastHeaderDirective, ToastStructureDirective, ToasterComponent, ToasterService, TreeComponent, TreeItemContentDirective, TreeItemDirective, TreeItemToggleDirective, TreeStructureDirective, accordionItemDefaultSlotStructure, alertDefaultSlotStructure, callWidgetFactory, carouselDefaultSlotNavigation, carouselDefaultSlotStructure, export_createAccordion as createAccordion, export_createAccordionItem as createAccordionItem, export_createAlert as createAlert, export_createCarousel as createCarousel, export_createCollapse as createCollapse, export_createDrawer as createDrawer, export_createModal as createModal, export_createPagination as createPagination, export_createProgressbar as createProgressbar, export_createRating as createRating, export_createSelect as createSelect, export_createSlider as createSlider, export_createToast as createToast, export_createTree as createTree, export_defaultToasterProps as defaultToasterProps, drawerDefaultSlotStructure, export_factoryCreateAccordion as factoryCreateAccordion, export_getAccordionDefaultConfig as getAccordionDefaultConfig, export_getAlertDefaultConfig as getAlertDefaultConfig, export_getCarouselDefaultConfig as getCarouselDefaultConfig, export_getCollapseDefaultConfig as getCollapseDefaultConfig, export_getDrawerDefaultConfig as getDrawerDefaultConfig, export_getModalDefaultConfig as getModalDefaultConfig, export_getPaginationDefaultConfig as getPaginationDefaultConfig, export_getProgressbarDefaultConfig as getProgressbarDefaultConfig, export_getRatingDefaultConfig as getRatingDefaultConfig, export_getSelectDefaultConfig as getSelectDefaultConfig, export_getSliderDefaultConfig as getSliderDefaultConfig, export_getToastDefaultConfig as getToastDefaultConfig, export_getTreeDefaultConfig as getTreeDefaultConfig, injectWidgetConfig, injectWidgetsConfig, export_modalCloseButtonClick as modalCloseButtonClick, export_modalCloseEscape as modalCloseEscape, modalDefaultSlotHeader, modalDefaultSlotStructure, export_modalOutsideClick as modalOutsideClick, paginationDefaultSlotPages, paginationDefaultSlotStructure, progressbarDefaultSlotStructure, provideWidgetsConfig, sliderDefaultSlotHandle, sliderDefaultSlotStructure, sliderDefaultSlotTick, toastDefaultSlotStructure, export_toastPositions as toastPositions, treeDefaultItemToggle, treeDefaultSlotItem, treeDefaultSlotItemContent, treeDefaultSlotStructure, widgetsConfigInjectionToken };
export type { AccordionApi, AccordionDirectives, AccordionItemApi, AccordionItemContext, AccordionItemDirectives, AccordionItemProps, AccordionItemState, AccordionItemWidget, AccordionProps, AccordionState, AccordionWidget, AlertApi, AlertContext, AlertDirectives, AlertProps, AlertState, AlertWidget, CarouselApi, CarouselContext, CarouselDirectives, CarouselProps, CarouselSlideContext, CarouselState, CarouselWidget, CollapseApi, CollapseDirectives, CollapseProps, CollapseState, CollapseWidget, DirectionsHrefs, DrawerApi, DrawerContext, DrawerDirectives, DrawerPositions, DrawerProps, DrawerState, DrawerWidget, HandleDisplayOptions, ItemContext, ModalApi, ModalBeforeCloseEvent, ModalContext, ModalDirectives, ModalProps, ModalState, ModalWidget, NormalizedTreeItem, PaginationApi, PaginationContext, PaginationDirectives, PaginationNumberContext, PaginationProps, PaginationState, PaginationWidget, ProgressDisplayOptions, ProgressbarContext, ProgressbarDirectives, ProgressbarProps, ProgressbarState, ProgressbarWidget, RatingApi, RatingDirectives, RatingProps, RatingState, RatingWidget, SelectApi, SelectContext, SelectDirectives, SelectItemContext, SelectProps, SelectState, SelectWidget, SliderContext, SliderDirectives, SliderHandle, SliderProps, SliderSlotHandleContext, SliderSlotLabelContext, SliderSlotTickContext, SliderState, SliderTick, SliderWidget, StarContext, ToastApi, ToastContext, ToastDirectives, ToastPositions, ToastProps, ToastState, ToastWidget, ToasterProps, ToasterTimer, ToasterToast, TreeApi, TreeContext, TreeDirectives, TreeItem, TreeProps, TreeSlotItemContext, TreeState, TreeWidget, WidgetsConfig };
`;export{e as default};
