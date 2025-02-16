const e=`import type { SlotContent } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import { TemplateRef } from '@angular/core';
import type { PaginationContext, PaginationNumberContext, PaginationWidget } from './pagination.gen';
import * as i0 from "@angular/core";
/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
export declare class PaginationEllipsisDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationEllipsisDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationEllipsisDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationEllipsisDirective, "ng-template[auPaginationEllipsis]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'first' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
export declare class PaginationFirstDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationFirstDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationFirstDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationFirstDirective, "ng-template[auPaginationFirst]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'last' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
export declare class PaginationLastDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationLastDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationLastDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationLastDirective, "ng-template[auPaginationLast]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'next' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
export declare class PaginationNextDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationNextDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationNextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationNextDirective, "ng-template[auPaginationNext]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the page 'number' template to the pagination component
 * This directive provides a template reference for the {@link PaginationNumberContext}.
 */
export declare class PaginationNumberDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationNumberDirective, context: unknown): context is PaginationNumberContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationNumberDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationNumberDirective, "ng-template[auPaginationNumber]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'previous' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
export declare class PaginationPreviousDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationPreviousDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationPreviousDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationPreviousDirective, "ng-template[auPaginationPrevious]", never, {}, {}, never, never, true, never>;
}
/**
 * A directive to use to give the 'Pages' template for the Pages slot
 * This directive provides a template reference for the {@link PaginationContext}.
 */
export declare class PaginationPagesDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationPagesDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationPagesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationPagesDirective, "ng-template[auPaginationPages]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot structure for the pagination widget.
 * This directive provides a template reference for the {@link PaginationContext}.
 */
export declare class PaginationStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: PaginationStructureDirective, context: unknown): context is PaginationContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaginationStructureDirective, "ng-template[auPaginationStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * The default slot for the pages
 */
export declare const paginationDefaultSlotPages: SlotContent<PaginationContext>;
/**
 * The default slot for the structure
 */
export declare const paginationDefaultSlotStructure: SlotContent<PaginationContext>;
/**
 * The \`PaginationComponent\` is an Angular component that extends the \`BaseWidgetDirective\`
 * to provide a customizable pagination widget. It includes various input properties
 * to configure labels, templates, and behavior for accessibility and internationalization (i18n).
 */
export declare class PaginationComponent extends BaseWidgetDirective<PaginationWidget> {
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
    readonly ariaPageLabel: import("@angular/core").InputSignal<((processPage: number, pageCount: number) => string) | undefined>;
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
    readonly ariaLiveLabel: import("@angular/core").InputSignal<((currentPage: number, pageCount: number) => string) | undefined>;
    /**
     * The label for the nav element.
     *
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'Page navigation'\`
     */
    readonly ariaLabel: import("@angular/core").InputSignal<string | undefined>;
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
    readonly activeLabel: import("@angular/core").InputSignal<string | undefined>;
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
    readonly ariaFirstLabel: import("@angular/core").InputSignal<string | undefined>;
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
    readonly ariaPreviousLabel: import("@angular/core").InputSignal<string | undefined>;
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
    readonly ariaNextLabel: import("@angular/core").InputSignal<string | undefined>;
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
    readonly ariaLastLabel: import("@angular/core").InputSignal<string | undefined>;
    /**
     * The label for the "Ellipsis" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'Ellipsis page element'\`
     */
    readonly ariaEllipsisLabel: import("@angular/core").InputSignal<string | undefined>;
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
    readonly pageLink: import("@angular/core").InputSignal<((pageNumber: number) => string) | undefined>;
    /**
     * The template to use for the ellipsis slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'…'\`
     */
    readonly ellipsisLabel: import("@angular/core").InputSignal<SlotContent<PaginationContext>>;
    readonly slotEllipsisFromContent: import("@angular/core").Signal<PaginationEllipsisDirective | undefined>;
    /**
     * The template to use for the first slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'«'\`
     */
    readonly firstPageLabel: import("@angular/core").InputSignal<SlotContent<PaginationContext>>;
    readonly slotFirstFromContent: import("@angular/core").Signal<PaginationFirstDirective | undefined>;
    /**
     * The template to use for the previous slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'‹'\`
     */
    readonly previousPageLabel: import("@angular/core").InputSignal<SlotContent<PaginationContext>>;
    readonly slotPreviousFromContent: import("@angular/core").Signal<PaginationPreviousDirective | undefined>;
    /**
     * The template to use for the next slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'›'\`
     */
    readonly nextPageLabel: import("@angular/core").InputSignal<SlotContent<PaginationContext>>;
    readonly slotNextFromContent: import("@angular/core").Signal<PaginationNextDirective | undefined>;
    /**
     * The template to use for the last slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     *
     * @defaultValue \`'»'\`
     */
    readonly lastPageLabel: import("@angular/core").InputSignal<SlotContent<PaginationContext>>;
    readonly slotLastFromContent: import("@angular/core").Signal<PaginationLastDirective | undefined>;
    /**
     * The template to use for the pages slot
     * To use to customize the pages view
     * override any configuration parameters provided for this
     */
    readonly pagesDisplay: import("@angular/core").InputSignal<SlotContent<PaginationContext>>;
    readonly slotPagesFromContent: import("@angular/core").Signal<PaginationPagesDirective | undefined>;
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
    readonly numberLabel: import("@angular/core").InputSignal<SlotContent<PaginationNumberContext>>;
    readonly slotNumberLabelFromContent: import("@angular/core").Signal<PaginationNumberDirective | undefined>;
    /**
     * The template to use for the structure of the pagination component
     * The default structure uses {@link PaginationProps.ellipsisLabel|ellipsisLabel}, {@link PaginationProps.firstPageLabel|firstPageLabel},
     * {@link PaginationProps.previousPageLabel|previousPageLabel}, {@link PaginationProps.nextPageLabel|nextPageLabel},
     * {@link PaginationProps.lastPageLabel|lastPageLabel}, {@link PaginationProps.pagesDisplay|pagesDisplay},
     * {@link PaginationProps.numberLabel|numberLabel},
     */
    readonly structure: import("@angular/core").InputSignal<SlotContent<PaginationContext>>;
    readonly slotStructureFromContent: import("@angular/core").Signal<PaginationStructureDirective | undefined>;
    /**
     * If \`true\`, pagination links will be disabled.
     *
     * @defaultValue \`false\`
     */
    readonly disabled: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, the "First" and "Last" page links are shown.
     *
     * @defaultValue \`false\`
     */
    readonly boundaryLinks: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, the "Next" and "Previous" page links are shown.
     *
     * @defaultValue \`true\`
     */
    readonly directionLinks: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
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
    readonly collectionSize: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The current page.
     *
     * Page numbers start with \`1\`.
     *
     * @defaultValue \`1\`
     */
    readonly page: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The number of items per page.
     * @remarks min value is 1
     *
     * @defaultValue \`10\`
     */
    readonly pageSize: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The pagination display size.
     *
     * Bootstrap currently supports small and large sizes.
     *
     * @defaultValue \`null\`
     */
    readonly size: import("@angular/core").InputSignal<"sm" | "lg" | null | undefined>;
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
    readonly pagesFactory: import("@angular/core").InputSignal<((page: number, pageCount: number) => number[]) | undefined>;
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
    readonly pageChange: import("@angular/core").OutputEmitterRef<number>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: import("@angular/core").InputSignal<string | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "[auPagination]", never, { "ariaPageLabel": { "alias": "auAriaPageLabel"; "required": false; "isSignal": true; }; "ariaLiveLabel": { "alias": "auAriaLiveLabel"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "auAriaLabel"; "required": false; "isSignal": true; }; "activeLabel": { "alias": "auActiveLabel"; "required": false; "isSignal": true; }; "ariaFirstLabel": { "alias": "auAriaFirstLabel"; "required": false; "isSignal": true; }; "ariaPreviousLabel": { "alias": "auAriaPreviousLabel"; "required": false; "isSignal": true; }; "ariaNextLabel": { "alias": "auAriaNextLabel"; "required": false; "isSignal": true; }; "ariaLastLabel": { "alias": "auAriaLastLabel"; "required": false; "isSignal": true; }; "ariaEllipsisLabel": { "alias": "auAriaEllipsisLabel"; "required": false; "isSignal": true; }; "pageLink": { "alias": "auPageLink"; "required": false; "isSignal": true; }; "ellipsisLabel": { "alias": "auEllipsisLabel"; "required": false; "isSignal": true; }; "firstPageLabel": { "alias": "auFirstPageLabel"; "required": false; "isSignal": true; }; "previousPageLabel": { "alias": "auPreviousPageLabel"; "required": false; "isSignal": true; }; "nextPageLabel": { "alias": "auNextPageLabel"; "required": false; "isSignal": true; }; "lastPageLabel": { "alias": "auLastPageLabel"; "required": false; "isSignal": true; }; "pagesDisplay": { "alias": "auPagesDisplay"; "required": false; "isSignal": true; }; "numberLabel": { "alias": "auNumberLabel"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "disabled": { "alias": "auDisabled"; "required": false; "isSignal": true; }; "boundaryLinks": { "alias": "auBoundaryLinks"; "required": false; "isSignal": true; }; "directionLinks": { "alias": "auDirectionLinks"; "required": false; "isSignal": true; }; "collectionSize": { "alias": "auCollectionSize"; "required": false; "isSignal": true; }; "page": { "alias": "auPage"; "required": false; "isSignal": true; }; "pageSize": { "alias": "auPageSize"; "required": false; "isSignal": true; }; "size": { "alias": "auSize"; "required": false; "isSignal": true; }; "pagesFactory": { "alias": "auPagesFactory"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; }, { "pageChange": "auPageChange"; }, ["slotEllipsisFromContent", "slotFirstFromContent", "slotPreviousFromContent", "slotNextFromContent", "slotLastFromContent", "slotPagesFromContent", "slotNumberLabelFromContent", "slotStructureFromContent"], never, true, never>;
}
`;export{e as default};
