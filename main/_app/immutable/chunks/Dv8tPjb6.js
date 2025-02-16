const e=`import type { SlotContent } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import { TemplateRef } from '@angular/core';
import type { Placement } from '@floating-ui/dom';
import type { ItemContext, SelectItemContext, SelectWidget } from './select.gen';
import * as i0 from "@angular/core";
/**
 * Directive to provide a custom template for the badge label in a select component.
 *
 * @template Item - The type of the item in the select component.
 *
 * This directive uses a template reference to render the {@link SelectItemContext<Item>}.
 */
export declare class SelectBadgeLabelDirective<Item> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Item>(_dir: SelectBadgeLabelDirective<Item>, context: unknown): context is SelectItemContext<Item>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectBadgeLabelDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SelectBadgeLabelDirective<any>, "ng-template[auSelectBadgeLabel]", never, {}, {}, never, never, true, never>;
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
export declare class SelectItemLabelDirective<Item> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Item>(_dir: SelectItemLabelDirective<Item>, context: unknown): context is SelectItemContext<Item>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectItemLabelDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SelectItemLabelDirective<any>, "ng-template[auSelectItemLabel]", never, {}, {}, never, never, true, never>;
}
/**
 * A component that represents a customizable select dropdown widget.
 *
 * @template Item - The type of items in the select dropdown.
 */
export declare class SelectComponent<Item> extends BaseWidgetDirective<SelectWidget<Item>> {
    /**
     * aria-label used for the input inside the select
     *
     * @defaultValue \`'Select'\`
     */
    readonly ariaLabel: import("@angular/core").InputSignal<string | undefined>;
    /**
     * id used for the input inside the select
     */
    readonly id: import("@angular/core").InputSignal<string | undefined>;
    /**
     * List of available items for the dropdown
     *
     * @defaultValue \`[]\`
     */
    readonly items: import("@angular/core").InputSignal<Item[] | undefined>;
    /**
     * List of allowed placements for the dropdown.
     * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
     *
     * @defaultValue
     * \`\`\`ts
     * ['bottom-start', 'top-start', 'bottom-end', 'top-end']
     * \`\`\`
     */
    readonly allowedPlacements: import("@angular/core").InputSignal<Placement[] | undefined>;
    /**
     * true if the select is open
     *
     * @defaultValue \`false\`
     */
    readonly open: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Filtered text to be display in the filter input
     *
     * @defaultValue \`''\`
     */
    readonly filterText: import("@angular/core").InputSignal<string | undefined>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: import("@angular/core").InputSignal<string | undefined>;
    /**
     * true if the select is disabled
     *
     * @defaultValue \`false\`
     */
    readonly disabled: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * List of selected item ids
     *
     * @defaultValue \`[]\`
     */
    readonly selected: import("@angular/core").InputSignal<Item[] | undefined>;
    /**
     * true if a loading process is being done
     *
     * @defaultValue \`false\`
     */
    readonly loading: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Custom function to get the id of an item
     * By default, the item is returned
     *
     * @defaultValue
     * \`\`\`ts
     * (item: any) => '' + item
     * \`\`\`
     */
    readonly itemIdFn: import("@angular/core").InputSignal<((item: Item) => string) | undefined>;
    /**
     * Class to be added on the dropdown menu container
     *
     * @defaultValue \`''\`
     */
    readonly menuClassName: import("@angular/core").InputSignal<string | undefined>;
    /**
     * The template to override the way each badge on the left of the input is displayed.
     * This define the content of the badge inside the badge container.
     *
     * @defaultValue
     * \`\`\`ts
     * ({itemContext}: SelectItemContext<any>) => itemContext.item
     * \`\`\`
     */
    readonly badgeLabel: import("@angular/core").InputSignal<SlotContent<SelectItemContext<Item>>>;
    readonly slotSelectBadgeLabelFromContent: import("@angular/core").Signal<SelectBadgeLabelDirective<any> | undefined>;
    /**
     * The template to override the way each item is displayed in the list.
     * This define the content of the badge inside the badge container.
     *
     * @defaultValue
     * \`\`\`ts
     * ({itemContext}: SelectItemContext<any>) => itemContext.item
     * \`\`\`
     */
    readonly itemLabel: import("@angular/core").InputSignal<SlotContent<SelectItemContext<Item>>>;
    readonly slotSelectItemLabelFromContent: import("@angular/core").Signal<SelectItemLabelDirective<any> | undefined>;
    /**
     * Callback called when the text filter change
     * @param text - Filtered text
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly filterTextChange: import("@angular/core").OutputEmitterRef<string>;
    /**
     * Callback called when the selection change
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly selectedChange: import("@angular/core").OutputEmitterRef<Item[]>;
    /**
     * Callback called dropdown open state change
     * @param isOpen - updated open state
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly openChange: import("@angular/core").OutputEmitterRef<boolean>;
    /**
     * Class to be added on menu items
     *
     * @defaultValue \`''\`
     */
    readonly menuItemClassName: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Class to be added on selected items (displayed in the input zone)
     *
     * @defaultValue \`''\`
     */
    readonly badgeClassName: import("@angular/core").InputSignal<string | undefined>;
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
    readonly navSelector: import("@angular/core").InputSignal<((node: HTMLElement) => NodeListOf<HTMLSpanElement | HTMLInputElement>) | undefined>;
    constructor();
    itemCtxTrackBy(_: number, itemContext: ItemContext<Item>): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent<any>, "[auSelect]", never, { "ariaLabel": { "alias": "auAriaLabel"; "required": false; "isSignal": true; }; "id": { "alias": "auId"; "required": false; "isSignal": true; }; "items": { "alias": "auItems"; "required": false; "isSignal": true; }; "allowedPlacements": { "alias": "auAllowedPlacements"; "required": false; "isSignal": true; }; "open": { "alias": "auOpen"; "required": false; "isSignal": true; }; "filterText": { "alias": "auFilterText"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "disabled": { "alias": "auDisabled"; "required": false; "isSignal": true; }; "selected": { "alias": "auSelected"; "required": false; "isSignal": true; }; "loading": { "alias": "auLoading"; "required": false; "isSignal": true; }; "itemIdFn": { "alias": "auItemIdFn"; "required": false; "isSignal": true; }; "menuClassName": { "alias": "auMenuClassName"; "required": false; "isSignal": true; }; "badgeLabel": { "alias": "auBadgeLabel"; "required": false; "isSignal": true; }; "itemLabel": { "alias": "auItemLabel"; "required": false; "isSignal": true; }; "menuItemClassName": { "alias": "auMenuItemClassName"; "required": false; "isSignal": true; }; "badgeClassName": { "alias": "auBadgeClassName"; "required": false; "isSignal": true; }; "navSelector": { "alias": "auNavSelector"; "required": false; "isSignal": true; }; }, { "filterTextChange": "auFilterTextChange"; "selectedChange": "auSelectedChange"; "openChange": "auOpenChange"; }, ["slotSelectBadgeLabelFromContent", "slotSelectItemLabelFromContent"], never, true, never>;
}
`;export{e as default};
