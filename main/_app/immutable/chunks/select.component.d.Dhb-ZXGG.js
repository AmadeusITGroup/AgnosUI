const e=`import type { SlotContent } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { Placement } from '@floating-ui/dom';
import type { ItemContext, SelectItemContext, SelectWidget } from './select.gen';
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
export declare class SelectComponent<Item> extends BaseWidgetDirective<SelectWidget<Item>> {
    /**
     * aria-label used for the input inside the select
     *
     * @defaultValue \`'Select'\`
     */
    ariaLabel: string | undefined;
    /**
     * id used for the input inside the select
     */
    id: string | undefined;
    /**
     * List of available items for the dropdown
     *
     * @defaultValue \`[]\`
     */
    items: Item[] | undefined;
    /**
     * List of allowed placements for the dropdown.
     * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
     *
     * @defaultValue
     * \`\`\`ts
     * ['bottom-start', 'top-start', 'bottom-end', 'top-end']
     * \`\`\`
     */
    allowedPlacements: Placement[] | undefined;
    /**
     * true if the select is open
     *
     * @defaultValue \`false\`
     */
    open: boolean | undefined;
    /**
     * Filtered text to be display in the filter input
     *
     * @defaultValue \`''\`
     */
    filterText: string | undefined;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string | undefined;
    /**
     * true if the select is disabled
     *
     * @defaultValue \`false\`
     */
    disabled: boolean | undefined;
    /**
     * List of selected item ids
     *
     * @defaultValue \`[]\`
     */
    selected: Item[] | undefined;
    /**
     * true if a loading process is being done
     *
     * @defaultValue \`false\`
     */
    loading: boolean | undefined;
    /**
     * Custom function to get the id of an item
     * By default, the item is returned
     *
     * @defaultValue
     * \`\`\`ts
     * (item: any) => '' + item
     * \`\`\`
     */
    itemIdFn: ((item: Item) => string) | undefined;
    /**
     * Class to be added on the dropdown menu container
     *
     * @defaultValue \`''\`
     */
    menuClassName: string | undefined;
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
    slotSelectBadgeLabelFromContent: SelectBadgeLabelDirective<Item> | undefined;
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
    slotSelectItemLabelFromContent: SelectItemLabelDirective<Item> | undefined;
    /**
     * Callback called when the text filter change
     * @param text - Filtered text
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    filterTextChange: EventEmitter<string>;
    /**
     * Callback called when the selection change
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    selectedChange: EventEmitter<Item[]>;
    /**
     * Callback called dropdown open state change
     * @param isOpen - updated open state
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    openChange: EventEmitter<boolean>;
    /**
     * Class to be added on menu items
     *
     * @defaultValue \`''\`
     */
    menuItemClassName: string | undefined;
    /**
     * Class to be added on selected items (displayed in the input zone)
     *
     * @defaultValue \`''\`
     */
    badgeClassName: string | undefined;
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
    navSelector: ((node: HTMLElement) => NodeListOf<HTMLSpanElement | HTMLInputElement>) | undefined;
    constructor();
    itemCtxTrackBy(_: number, itemContext: ItemContext<Item>): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent<any>, "[auSelect]", never, { "ariaLabel": { "alias": "auAriaLabel"; "required": false; }; "id": { "alias": "auId"; "required": false; }; "items": { "alias": "auItems"; "required": false; }; "allowedPlacements": { "alias": "auAllowedPlacements"; "required": false; }; "open": { "alias": "auOpen"; "required": false; }; "filterText": { "alias": "auFilterText"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "disabled": { "alias": "auDisabled"; "required": false; }; "selected": { "alias": "auSelected"; "required": false; }; "loading": { "alias": "auLoading"; "required": false; }; "itemIdFn": { "alias": "auItemIdFn"; "required": false; }; "menuClassName": { "alias": "auMenuClassName"; "required": false; }; "badgeLabel": { "alias": "auBadgeLabel"; "required": false; }; "itemLabel": { "alias": "auItemLabel"; "required": false; }; "menuItemClassName": { "alias": "auMenuItemClassName"; "required": false; }; "badgeClassName": { "alias": "auBadgeClassName"; "required": false; }; "navSelector": { "alias": "auNavSelector"; "required": false; }; }, { "filterTextChange": "auFilterTextChange"; "selectedChange": "auSelectedChange"; "openChange": "auOpenChange"; }, ["slotSelectBadgeLabelFromContent", "slotSelectItemLabelFromContent"], never, true, never>;
    static ngAcceptInputType_open: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_loading: unknown;
}
`;export{e as default};
