const e=`import type { WidgetSlotContext, SlotContent, Widget, Directive } from '@agnos-ui/svelte-headless/types';
export type PaginationContext = WidgetSlotContext<PaginationWidget>;
export type PaginationNumberContext = PaginationContext & {
    /**
     * Displayed page
     */
    displayedPage: number;
};
export interface PaginationState {
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
    /**
     * The hrefs for each "Page" page link
     */
    pagesHrefs: string[];
    /**
     * The hrefs for the direction links
     */
    directionsHrefs: DirectionsHrefs;
    /**
     * The aria-live text
     */
    ariaLiveLabelText: string;
    /**
     * The current page.
     *
     * Page numbers start with \`1\`.
     */
    page: number;
    /**
     * The pagination display size.
     *
     * Bootstrap currently supports small and large sizes.
     */
    size: 'sm' | 'lg' | null;
    /**
     * The label for the nav element.
     *
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaLabel: string;
    /**
     * The label for the "active" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    activeLabel: string;
    /**
     * The label for the "First" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaFirstLabel: string;
    /**
     * The label for the "Previous" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaPreviousLabel: string;
    /**
     * The label for the "Next" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaNextLabel: string;
    /**
     * The label for the "Last" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaLastLabel: string;
    /**
     * The label for the "Ellipsis" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaEllipsisLabel: string;
    /**
     * If \`true\`, pagination links will be disabled.
     */
    disabled: boolean;
    /**
     * If \`true\`, the "Next" and "Previous" page links are shown.
     */
    directionLinks: boolean;
    /**
     * If \`true\`, the "First" and "Last" page links are shown.
     */
    boundaryLinks: boolean;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * The template to use for the structure of the pagination component
     * The default structure uses {@link PaginationProps.ellipsisLabelellipsisLabel}, {@link PaginationProps.firstPageLabelfirstPageLabel},
     * {@link PaginationProps.previousPageLabelpreviousPageLabel}, {@link PaginationProps.nextPageLabelnextPageLabel},
     * {@link PaginationProps.lastPageLabellastPageLabel}, {@link PaginationProps.pagesDisplaypagesDisplay},
     * {@link PaginationProps.numberLabelnumberLabel},
     */
    structure: SlotContent<PaginationContext>;
    /**
     * The template to use for the ellipsis slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ellipsisLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the first slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    firstPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the previous slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    previousPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the next slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    nextPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the last slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
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
     */
    numberLabel: SlotContent<PaginationNumberContext>;
}
export interface PaginationProps {
    /**
     * The number of items in your paginated collection.
     *
     * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
     * \`collectionSize\` and \`pageSize\`.
     *
     * Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.
     *
     * Whatever the collectionSize the page number is of minimum 1.
     */
    collectionSize: number;
    /**
     * The number of items per page.
     */
    pageSize: number;
    /**
     * An event fired when the page is changed.
     *
     * Event payload is the number of the newly selected page.
     *
     * Page numbers start with \`1\`.
     */
    onPageChange: (page: number) => void;
    /**
     * pagesFactory returns a function computing the array of pages to be displayed
     * as number (-1 are treated as ellipsis).
     * Use Page slot to customize the pages view and not this
     */
    pagesFactory: (page: number, pageCount: number) => number[];
    /**
     * Provide the label for each "Page" page button.
     * This is used for accessibility purposes.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaPageLabel: (processPage: number, pageCount: number) => string;
    /**
     * Provide the label for the aria-live element
     * This is used for accessibility purposes.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaLiveLabel: (currentPage: number, pageCount: number) => string;
    /**
     * Factory function providing the href for a "Page" page anchor,
     * based on the current page number
     */
    pageLink: (pageNumber: number) => string;
    /**
     * The current page.
     *
     * Page numbers start with \`1\`.
     */
    page: number;
    /**
     * The pagination display size.
     *
     * Bootstrap currently supports small and large sizes.
     */
    size: 'sm' | 'lg' | null;
    /**
     * The label for the nav element.
     *
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaLabel: string;
    /**
     * The label for the "active" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    activeLabel: string;
    /**
     * The label for the "First" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaFirstLabel: string;
    /**
     * The label for the "Previous" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaPreviousLabel: string;
    /**
     * The label for the "Next" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaNextLabel: string;
    /**
     * The label for the "Last" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaLastLabel: string;
    /**
     * The label for the "Ellipsis" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ariaEllipsisLabel: string;
    /**
     * If \`true\`, pagination links will be disabled.
     */
    disabled: boolean;
    /**
     * If \`true\`, the "Next" and "Previous" page links are shown.
     */
    directionLinks: boolean;
    /**
     * If \`true\`, the "First" and "Last" page links are shown.
     */
    boundaryLinks: boolean;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * The template to use for the structure of the pagination component
     * The default structure uses {@link PaginationProps.ellipsisLabelellipsisLabel}, {@link PaginationProps.firstPageLabelfirstPageLabel},
     * {@link PaginationProps.previousPageLabelpreviousPageLabel}, {@link PaginationProps.nextPageLabelnextPageLabel},
     * {@link PaginationProps.lastPageLabellastPageLabel}, {@link PaginationProps.pagesDisplaypagesDisplay},
     * {@link PaginationProps.numberLabelnumberLabel},
     */
    structure: SlotContent<PaginationContext>;
    /**
     * The template to use for the ellipsis slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    ellipsisLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the first slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    firstPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the previous slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    previousPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the next slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     */
    nextPageLabel: SlotContent<PaginationContext>;
    /**
     * The template to use for the last slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
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
     */
    numberLabel: SlotContent<PaginationNumberContext>;
}
export type PaginationWidget = Widget<PaginationProps, PaginationState, PaginationApi, PaginationActions, PaginationDirectives>;
export interface DirectionsHrefs {
    /**
     * The href for the 'Previous' navigation link
     */
    previous: string;
    /**
     * The href for the 'Next' direction link
     */
    next: string;
}
export interface PaginationActions {
    /**
     * To "go" to a specific page
     */
    select(page: number, event?: MouseEvent): void;
    /**
     * To "go" to the first page
     */
    first(event?: MouseEvent): void;
    /**
     * To "go" to the previous page
     */
    previous(event?: MouseEvent): void;
    /**
     * To "go" to the next page
     */
    next(event?: MouseEvent): void;
    /**
     * To "go" to the last page
     */
    last(event?: MouseEvent): void;
}
export interface PaginationDirectives {
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
export interface PaginationApi {
}
`;export{e as default};
