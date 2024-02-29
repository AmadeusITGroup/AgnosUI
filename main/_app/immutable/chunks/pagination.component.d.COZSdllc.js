const e=`import type { PaginationContext, PaginationNumberContext, PaginationWidget, SlotContent } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective, ComponentTemplate } from '@agnos-ui/angular-headless';
import type { AfterContentChecked } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 */
export declare class PaginationEllipsisDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationEllipsisDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationEllipsisDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationEllipsisDirective, "ng-template[auPaginationEllipsis]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'first' link template to the pagination component
 */
export declare class PaginationFirstDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationFirstDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationFirstDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationFirstDirective, "ng-template[auPaginationFirst]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'last' link template to the pagination component
 */
export declare class PaginationLastDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationLastDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationLastDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationLastDirective, "ng-template[auPaginationLast]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'next' link template to the pagination component
 */
export declare class PaginationNextDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationNextDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationNextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationNextDirective, "ng-template[auPaginationNext]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the page 'number' template to the pagination component
 */
export declare class PaginationNumberDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationNumberDirective, context: unknown): context is PaginationNumberContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationNumberDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationNumberDirective, "ng-template[auPaginationNumber]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'previous' link template to the pagination component
 */
export declare class PaginationPreviousDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationPreviousDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationPreviousDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationPreviousDirective, "ng-template[auPaginationPrevious]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'Pages' template for the Pages slot
 */
export declare class PaginationPagesDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationPagesDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationPagesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationPagesDirective, "ng-template[auPaginationPages]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot structure for the pagination widget.
 */
export declare class PaginationStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: PaginationStructureDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationStructureDirective, "ng-template[auPaginationStructure]", never, {}, {}, never, never, true, never>;
}
export declare class PaginationDefaultSlotsComponent {
    pages: TemplateRef<PaginationContext>;
    structure: TemplateRef<PaginationContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationDefaultSlotsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationDefaultSlotsComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
/**
 * The default slot for the pages
 */
export declare const paginationDefaultSlotPages: ComponentTemplate<unknown, "pages", PaginationDefaultSlotsComponent>;
/**
 * The default slot for the structure
 */
export declare const paginationDefaultSlotStructure: ComponentTemplate<unknown, "structure", PaginationDefaultSlotsComponent>;
export declare class PaginationComponent extends BaseWidgetDirective<PaginationWidget> implements AfterContentChecked {
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
    /**
     * Factory function providing the href for a "Page" page anchor,
     * based on the current page number
     * @param pageNumber - The index to use in the link
     *
     */
    pageLink: ((pageNumber: number) => string) | undefined;
    readonly _widget: import("@agnos-ui/angular-headless").AngularWidget<PaginationWidget>;
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
    slotStructure: SlotContent<PaginationContext>;
    slotStructureFromContent: PaginationStructureDirective | undefined;
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
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "[auPagination]", never, { "ariaPageLabel": { "alias": "auAriaPageLabel"; "required": false; }; "ariaLabel": { "alias": "auAriaLabel"; "required": false; }; "activeLabel": { "alias": "auActiveLabel"; "required": false; }; "ariaFirstLabel": { "alias": "auAriaFirstLabel"; "required": false; }; "ariaPreviousLabel": { "alias": "auAriaPreviousLabel"; "required": false; }; "ariaNextLabel": { "alias": "auAriaNextLabel"; "required": false; }; "ariaLastLabel": { "alias": "auAriaLastLabel"; "required": false; }; "pageLink": { "alias": "auPageLink"; "required": false; }; "slotEllipsis": { "alias": "auSlotEllipsis"; "required": false; }; "slotFirst": { "alias": "auSlotFirst"; "required": false; }; "slotPrevious": { "alias": "auSlotPrevious"; "required": false; }; "slotNext": { "alias": "auSlotNext"; "required": false; }; "slotLast": { "alias": "auSlotLast"; "required": false; }; "slotPages": { "alias": "auSlotPages"; "required": false; }; "slotNumberLabel": { "alias": "auSlotNumberLabel"; "required": false; }; "slotStructure": { "alias": "auSlotStructure"; "required": false; }; "disabled": { "alias": "auDisabled"; "required": false; }; "boundaryLinks": { "alias": "auBoundaryLinks"; "required": false; }; "directionLinks": { "alias": "auDirectionLinks"; "required": false; }; "collectionSize": { "alias": "auCollectionSize"; "required": false; }; "page": { "alias": "auPage"; "required": false; }; "pageSize": { "alias": "auPageSize"; "required": false; }; "size": { "alias": "auSize"; "required": false; }; "pagesFactory": { "alias": "auPagesFactory"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; }, { "pageChange": "auPageChange"; }, ["slotEllipsisFromContent", "slotFirstFromContent", "slotPreviousFromContent", "slotNextFromContent", "slotLastFromContent", "slotPagesFromContent", "slotNumberLabelFromContent", "slotStructureFromContent"], never, true, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_boundaryLinks: unknown;
    static ngAcceptInputType_directionLinks: unknown;
    static ngAcceptInputType_collectionSize: unknown;
    static ngAcceptInputType_page: unknown;
    static ngAcceptInputType_pageSize: unknown;
}
`;export{e as default};
