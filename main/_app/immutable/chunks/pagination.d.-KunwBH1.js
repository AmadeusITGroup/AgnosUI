const e=`import type { PropsConfig, Widget, Directive } from '../../types';
import type { WidgetsCommonPropsAndState } from '../commonProps';
export interface PaginationCommonPropsAndState extends WidgetsCommonPropsAndState {
    /**
     * The current page.
     *
     * Page numbers start with \`1\`.
     * @defaultValue 1
     */
    page: number;
    /**
     * The pagination display size.
     *
     * Bootstrap currently supports small and large sizes.
     * @defaultValue null
     */
    size: 'sm' | 'lg' | null;
    /**
     * The label for the nav element.
     *
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Page navigation'
     */
    ariaLabel: string;
    /**
     * The label for the "active" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '(current)'
     */
    activeLabel: string;
    /**
     * The label for the "First" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for first page'
     */
    ariaFirstLabel: string;
    /**
     * The label for the "Previous" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for previous page'
     */
    ariaPreviousLabel: string;
    /**
     * The label for the "Next" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for next page'
     */
    ariaNextLabel: string;
    /**
     * The label for the "Last" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for last page'
     */
    ariaLastLabel: string;
    /**
     * The label for the "Ellipsis" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Ellipsis page element'
     */
    ariaEllipsisLabel: string;
    /**
     * If \`true\`, pagination links will be disabled.
     * @defaultValue false
     */
    disabled: boolean;
    /**
     * If \`true\`, the "Next" and "Previous" page links are shown.
     * @defaultValue true
     */
    directionLinks: boolean;
    /**
     * If \`true\`, the "First" and "Last" page links are shown.
     * @defaultValue false
     */
    boundaryLinks: boolean;
}
export interface PaginationProps extends PaginationCommonPropsAndState {
    /**
     * The number of items in your paginated collection.
     *
     * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
     * \`collectionSize\` and \`pageSize\`.
     *
     * Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.
     *
     * Whatever the collectionSize the page number is of minimum 1.
     * @defaultValue 0
     */
    collectionSize: number;
    /**
     * The number of items per page.
     * @defaultValue 10
     * @remarks min value is 1
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
     * @defaultValue
     * \`\`\`ts
     * ({page, pageCount}) => {
     *  const pages: number[] = [];
     *	for (let i = 1; i <= pageCount; i++) {
     *		pages.push(i);
     * 	}
     * 	return pages;
     * }
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
     * @defaultValue
     * \`\`\`ts
     * ({processPage, pageCount}) => \`Page \${processPage} of \${pageCount}\`
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
     * @defaultValue
     * \`\`\`ts
     * ({currentPage, pageCount}) => \`Current page is \${currentPage}\`
     * \`\`\`
     */
    ariaLiveLabel: (currentPage: number, pageCount: number) => string;
    /**
     * Factory function providing the href for a "Page" page anchor,
     * based on the current page number
     * @param pageNumber - The index to use in the link
     * @defaultValue
     * \`\`\`ts
     * (_pageNumber) => '#'
     * \`\`\`
     */
    pageLink: (pageNumber: number) => string;
}
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
export interface PaginationState extends PaginationCommonPropsAndState {
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
}
export interface PaginationActions {
    /**
     * To "go" to a specific page
     * @param page - The page number to select
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
export type PaginationWidget = Widget<PaginationProps, PaginationState, PaginationApi, PaginationActions, PaginationDirectives>;
/**
 * Returns a shallow copy of the default pagination config
 * @returns a copy of the default config
 */
export declare function getPaginationDefaultConfig(): {
    /**
     * The number of items in your paginated collection.
     *
     * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
     * \`collectionSize\` and \`pageSize\`.
     *
     * Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.
     *
     * Whatever the collectionSize the page number is of minimum 1.
     * @defaultValue 0
     */
    collectionSize: number;
    /**
     * The number of items per page.
     * @defaultValue 10
     * @remarks min value is 1
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
     * @defaultValue
     * \`\`\`ts
     * ({page, pageCount}) => {
     *  const pages: number[] = [];
     *	for (let i = 1; i <= pageCount; i++) {
     *		pages.push(i);
     * 	}
     * 	return pages;
     * }
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
     * @defaultValue
     * \`\`\`ts
     * ({processPage, pageCount}) => \`Page \${processPage} of \${pageCount}\`
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
     * @defaultValue
     * \`\`\`ts
     * ({currentPage, pageCount}) => \`Current page is \${currentPage}\`
     * \`\`\`
     */
    ariaLiveLabel: (currentPage: number, pageCount: number) => string;
    /**
     * Factory function providing the href for a "Page" page anchor,
     * based on the current page number
     * @param pageNumber - The index to use in the link
     * @defaultValue
     * \`\`\`ts
     * (_pageNumber) => '#'
     * \`\`\`
     */
    pageLink: (pageNumber: number) => string;
    /**
     * The current page.
     *
     * Page numbers start with \`1\`.
     * @defaultValue 1
     */
    page: number;
    /**
     * The pagination display size.
     *
     * Bootstrap currently supports small and large sizes.
     * @defaultValue null
     */
    size: "sm" | "lg" | null;
    /**
     * The label for the nav element.
     *
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Page navigation'
     */
    ariaLabel: string;
    /**
     * The label for the "active" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '(current)'
     */
    activeLabel: string;
    /**
     * The label for the "First" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for first page'
     */
    ariaFirstLabel: string;
    /**
     * The label for the "Previous" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for previous page'
     */
    ariaPreviousLabel: string;
    /**
     * The label for the "Next" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for next page'
     */
    ariaNextLabel: string;
    /**
     * The label for the "Last" page button.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Action link for last page'
     */
    ariaLastLabel: string;
    /**
     * The label for the "Ellipsis" page.
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue 'Ellipsis page element'
     */
    ariaEllipsisLabel: string;
    /**
     * If \`true\`, pagination links will be disabled.
     * @defaultValue false
     */
    disabled: boolean;
    /**
     * If \`true\`, the "Next" and "Previous" page links are shown.
     * @defaultValue true
     */
    directionLinks: boolean;
    /**
     * If \`true\`, the "First" and "Last" page links are shown.
     * @defaultValue false
     */
    boundaryLinks: boolean;
    className: string;
};
/**
 * Create a PaginationWidget with given config props
 * @param config - an optional pagination config
 * @returns a PaginationWidget
 */
export declare function createPagination(config?: PropsConfig<PaginationProps>): PaginationWidget;
`;export{e as default};
