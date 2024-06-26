const e=`import type { SlotContent } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import type { AfterContentChecked } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { Placement } from '@floating-ui/dom';
import type { ItemContext, SelectItemContext, SelectWidget } from './select';
import * as i0 from "@angular/core";
export declare class SelectBadgeLabelDirective<Item> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Item>(_dir: SelectBadgeLabelDirective<Item>, context: unknown): context is SelectItemContext<Item>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectBadgeLabelDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SelectBadgeLabelDirective<any>, "ng-template[auSelectBadgeLabel]", never, {}, {}, never, never, true, never>;
}
export declare class SelectItemLabelDirective<Item> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Item>(_dir: SelectItemLabelDirective<Item>, context: unknown): context is SelectItemContext<Item>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectItemLabelDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SelectItemLabelDirective<any>, "ng-template[auSelectItemLabel]", never, {}, {}, never, never, true, never>;
}
export declare class SelectComponent<Item> extends BaseWidgetDirective<SelectWidget<Item>> implements AfterContentChecked {
    /**
     * aria-label used for the input inside the select
     */
    ariaLabel: string | undefined;
    /**
     * id used for the input inside the select
     */
    id: string | undefined;
    /**
     * List of available items for the dropdown
     */
    items: Item[] | undefined;
    /**
     * List of allowed placements for the dropdown.
     * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
     */
    allowedPlacements: Placement[] | undefined;
    /**
     * true if the select is open
     */
    open: boolean | undefined;
    /**
     * Filtered text to be display in the filter input
     */
    filterText: string | undefined;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string | undefined;
    /**
     * true if the select is disabled
     */
    disabled: boolean | undefined;
    /**
     * List of selected item ids
     */
    selected: Item[] | undefined;
    /**
     * true if a loading process is being done
     */
    loading: boolean | undefined;
    /**
     * Custom function to get the id of an item
     * By default, the item is returned
     */
    itemIdFn: ((item: Item) => string) | undefined;
    /**
     * Class to be added on the dropdown menu container
     */
    menuClassName: string | undefined;
    /**
     * The template to override the way each badge on the left of the input is displayed.
     * This define the content of the badge inside the badge container.
     */
    badgeLabel: SlotContent<SelectItemContext<Item>>;
    slotSelectBadgeLabelFromContent: SelectBadgeLabelDirective<Item> | undefined;
    /**
     * The template to override the way each item is displayed in the list.
     * This define the content of the badge inside the badge container.
     */
    itemLabel: SlotContent<SelectItemContext<Item>>;
    slotSelectItemLabelFromContent: SelectItemLabelDirective<Item> | undefined;
    /**
     * Callback called when the text filter change
     */
    filterTextChange: EventEmitter<string>;
    /**
     * Callback called when the selection change
     */
    selectedChange: EventEmitter<Item[]>;
    /**
     * Callback called dropdown open state change
     */
    openChange: EventEmitter<boolean>;
    /**
     * Class to be added on menu items
     */
    menuItemClassName: string | undefined;
    /**
     * Class to be added on selected items (displayed in the input zone)
     */
    badgeClassName: string | undefined;
    /**
     * Retrieves navigable elements within an HTML element containing badges and the input.
     */
    navSelector: ((node: HTMLElement) => NodeListOf<HTMLSpanElement | HTMLInputElement>) | undefined;
    readonly _widget: import("@agnos-ui/angular-headless").AngularWidget<SelectWidget<Item>>;
    itemCtxTrackBy(_: number, itemContext: ItemContext<Item>): string;
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent<any>, "[auSelect]", never, { "ariaLabel": { "alias": "auAriaLabel"; "required": false; }; "id": { "alias": "auId"; "required": false; }; "items": { "alias": "auItems"; "required": false; }; "allowedPlacements": { "alias": "auAllowedPlacements"; "required": false; }; "open": { "alias": "auOpen"; "required": false; }; "filterText": { "alias": "auFilterText"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "disabled": { "alias": "auDisabled"; "required": false; }; "selected": { "alias": "auSelected"; "required": false; }; "loading": { "alias": "auLoading"; "required": false; }; "itemIdFn": { "alias": "auItemIdFn"; "required": false; }; "menuClassName": { "alias": "auMenuClassName"; "required": false; }; "badgeLabel": { "alias": "auBadgeLabel"; "required": false; }; "itemLabel": { "alias": "auItemLabel"; "required": false; }; "menuItemClassName": { "alias": "auMenuItemClassName"; "required": false; }; "badgeClassName": { "alias": "auBadgeClassName"; "required": false; }; "navSelector": { "alias": "auNavSelector"; "required": false; }; }, { "filterTextChange": "auFilterTextChange"; "selectedChange": "auSelectedChange"; "openChange": "auOpenChange"; }, ["slotSelectBadgeLabelFromContent", "slotSelectItemLabelFromContent"], never, true, never>;
    static ngAcceptInputType_open: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_loading: unknown;
}
`;export{e as default};
