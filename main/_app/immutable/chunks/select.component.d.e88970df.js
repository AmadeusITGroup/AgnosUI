const e=`import type { ItemCtx, SelectWidget, WidgetState } from '@agnos-ui/angular-headless';
import type { OnChanges, Signal, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SelectComponent<Item> implements OnChanges {
    /**
     * List of available items for the dropdown
     */
    items: Item[] | undefined;
    /**
     * true if the select is open
     */
    opened: boolean | undefined;
    /**
     * Filtered text to be display in the filter input
     */
    filterText: string | undefined;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string | undefined;
    /**
     * Callback called when the text filter change
     */
    filterTextChange: EventEmitter<string>;
    /**
     * true if the select is disabled
     */
    disabled: boolean | undefined;
    /**
     * Custom function to filter an item.
     * By default, item is considered as a string, and the function returns true if the text is found
     */
    matchFn: ((item: Item, text: string) => boolean) | undefined;
    /**
     * Custom function to get the id of an item
     * By default, the item is returned
     */
    itemId: ((item: Item) => string) | undefined;
    /**
     * List of selected items
     */
    selected: Item[] | undefined;
    /**
     * true if a loading process is being done
     */
    loading: boolean | undefined;
    readonly _widget: import("@agnos-ui/angular-headless").WithPatchSlots<SelectWidget<Item>>;
    readonly api: import("@agnos-ui/angular-headless").SelectApi<Item>;
    state$: Signal<WidgetState<SelectWidget<Item>>>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    itemCtxTrackBy(_: number, itemCtx: ItemCtx<Item>): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent<any>, "[auSelect]", never, { "items": { "alias": "auItems"; "required": false; }; "opened": { "alias": "auOpened"; "required": false; }; "filterText": { "alias": "auFilterText"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "disabled": { "alias": "auDisabled"; "required": false; }; "matchFn": { "alias": "auMatchFn"; "required": false; }; "itemId": { "alias": "auItemId"; "required": false; }; "selected": { "alias": "auSelected"; "required": false; }; "loading": { "alias": "auLoading"; "required": false; }; }, { "filterTextChange": "auFilterTextChange"; }, never, never, true, never>;
}
`;export{e as default};
