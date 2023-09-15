const e=`import type { PaginationContext, PaginationNumberContext, PaginationState, SlotContent } from '@agnos-ui/angular-headless';
import { ComponentTemplate } from '@agnos-ui/angular-headless';
import type { AfterContentChecked, OnChanges, Signal, SimpleChanges } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 */
export declare class PaginationEllipsisDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: PaginationEllipsisDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationEllipsisDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationEllipsisDirective, "ng-template[auPaginationEllipsis]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'first' link template to the pagination component
 */
export declare class PaginationFirstDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: PaginationFirstDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationFirstDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationFirstDirective, "ng-template[auPaginationFirst]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'last' link template to the pagination component
 */
export declare class PaginationLastDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: PaginationLastDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationLastDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationLastDirective, "ng-template[auPaginationLast]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'next' link template to the pagination component
 */
export declare class PaginationNextDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: PaginationNextDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationNextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationNextDirective, "ng-template[auPaginationNext]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the page 'number' template to the pagination component
 */
export declare class PaginationNumberDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: PaginationNumberDirective, context: unknown): context is PaginationNumberContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationNumberDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationNumberDirective, "ng-template[auPaginationNumber]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'previous' link template to the pagination component
 */
export declare class PaginationPreviousDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: PaginationPreviousDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationPreviousDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationPreviousDirective, "ng-template[auPaginationPrevious]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'Pages' template for the Pages slot
 */
export declare class PaginationPagesDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: PaginationPagesDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationPagesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationPagesDirective, "ng-template[auPaginationPages]", never, {}, {}, never, never, true, never>;
}
export declare class PaginationDefaultSlotsComponent {
    pages: TemplateRef<PaginationContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationDefaultSlotsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationDefaultSlotsComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
/**
 * The default slot for the pages
 */
export declare const paginationDefaultSlotPages: ComponentTemplate<unknown, "pages", PaginationDefaultSlotsComponent>;
export declare class PaginationComponent implements OnChanges, AfterContentChecked {
    /**
     * Provide the label for each "Page" page button.
     * This is used for accessibility purposes.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @param processPage - The current page number
     * @param pageCount - The total number of pages
     */
    ariaPageLabel: ((processPage: number, pageCount: number) => string) | undefined;
    /**
     * The label for the nav element.
     *
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Page navigation'
     */
    ariaLabel: string | undefined;
    /**
     * The label for the "active" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '(current)'
     */
    activeLabel: string | undefined;
    /**
     * The label for the "First" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for first page'
     */
    ariaFirstLabel: string | undefined;
    /**
     * The label for the "Previous" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for previous page'
     */
    ariaPreviousLabel: string | undefined;
    /**
     * The label for the "Next" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for next page'
     */
    ariaNextLabel: string | undefined;
    /**
     * The label for the "Last" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for last page'
     */
    ariaLastLabel: string | undefined;
    readonly _widget: import("@agnos-ui/angular-headless").WithPatchSlots<import("@agnos-ui/core").PaginationWidget>;
    readonly widget: Pick<import("@agnos-ui/angular-headless").WithPatchSlots<import("@agnos-ui/core").PaginationWidget>, "actions" | "api" | "directives" | "state$" | "stores">;
    readonly api: import("@agnos-ui/angular-headless").PaginationApi;
    slotEllipsis: SlotContent<PaginationContext>;
    slotEllipsisFromContent: PaginationEllipsisDirective | undefined;
    slotFirst: SlotContent<PaginationContext>;
    slotFirstFromContent: PaginationFirstDirective | undefined;
    slotPrevious: SlotContent<PaginationContext>;
    slotPreviousFromContent: PaginationPreviousDirective | undefined;
    slotNext: SlotContent<PaginationContext>;
    slotNextFromContent: PaginationNextDirective | undefined;
    slotLast: SlotContent<PaginationContext>;
    slotLastFromContent: PaginationLastDirective | undefined;
    slotPages: SlotContent<PaginationContext>;
    slotPagesFromContent: PaginationPagesDirective | undefined;
    slotNumberLabel: SlotContent<PaginationNumberContext>;
    slotNumberLabelFromContent: PaginationNumberDirective | undefined;
    /**
     * If \`true\`, pagination links will be disabled.
     */
    disabled: boolean | undefined;
    /**
     * If \`true\`, the "First" and "Last" page links are shown.
     */
    boundaryLinks: boolean | undefined;
    /**
     * If \`true\`, the "Next" and "Previous" page links are shown.
     */
    directionLinks: boolean | undefined;
    /**
     * The number of items in your paginated collection.
     *
     * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
     * \`collectionSize\` and \`pageSize\`. Ex. if you have 100 items in your collection and displaying 20 items per page,
     * you'll end up with 5 pages.
     * Whatever the collectionSize the page number is of minimum 1.
     * @defaultValue 0
     */
    collectionSize: number | undefined;
    /**
     * The current page.
     *
     * Page numbers start with \`1\`.
     * @defaultValue 1
     */
    page: number | undefined;
    /**
     * The number of items per page.
     * @defaultValue 10
     */
    pageSize: number | undefined;
    /**
     * The pagination display size.
     *
     * Bootstrap currently supports small and large sizes.
     * @defaultValue null
     */
    size: 'sm' | 'lg' | null | undefined;
    /**
     * pagesFactory returns a function computing the array of pages to be displayed
     * as number (-1 are treated as ellipsis).
     * Use Page slot to customize the pages view and not this
     */
    pagesFactory: ((page: number, pageCount: number) => number[]) | undefined;
    /**
     * An event fired when the page is changed.
     *
     * Event payload is the number of the newly selected page.
     *
     * Page numbers start with \`1\`.
     */
    pageChange: EventEmitter<number>;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string | undefined;
    state$: Signal<PaginationState>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "nav[au-pagination]", never, { "ariaPageLabel": { "alias": "ariaPageLabel"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "activeLabel": { "alias": "activeLabel"; "required": false; }; "ariaFirstLabel": { "alias": "ariaFirstLabel"; "required": false; }; "ariaPreviousLabel": { "alias": "ariaPreviousLabel"; "required": false; }; "ariaNextLabel": { "alias": "ariaNextLabel"; "required": false; }; "ariaLastLabel": { "alias": "ariaLastLabel"; "required": false; }; "slotEllipsis": { "alias": "slotEllipsis"; "required": false; }; "slotFirst": { "alias": "slotFirst"; "required": false; }; "slotPrevious": { "alias": "slotPrevious"; "required": false; }; "slotNext": { "alias": "slotNext"; "required": false; }; "slotLast": { "alias": "slotLast"; "required": false; }; "slotPages": { "alias": "slotPages"; "required": false; }; "slotNumberLabel": { "alias": "slotNumberLabel"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "boundaryLinks": { "alias": "boundaryLinks"; "required": false; }; "directionLinks": { "alias": "directionLinks"; "required": false; }; "collectionSize": { "alias": "collectionSize"; "required": false; }; "page": { "alias": "page"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "size": { "alias": "size"; "required": false; }; "pagesFactory": { "alias": "pagesFactory"; "required": false; }; "className": { "alias": "className"; "required": false; }; }, { "pageChange": "pageChange"; }, ["slotEllipsisFromContent", "slotFirstFromContent", "slotPreviousFromContent", "slotNextFromContent", "slotLastFromContent", "slotPagesFromContent", "slotNumberLabelFromContent"], never, true, never>;
}
`;export{e as default};
