const e=`import type { PropsConfig, Widget, SlotContent, WidgetSlotContext } from '../../types';
import type { WidgetsCommonPropsAndState } from '../commonProps';
/**
 * A type for the slot context of the pagination widget
 */
export type PaginationContext = WidgetSlotContext<PaginationWidget>;
/**
 * A type for the slot context of the pagination widget when the slot is the number label
 */
export interface PaginationNumberContext extends PaginationContext {
    /**
     * Displayed page
     */
    displayedPage: number;
}
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
    /**
     * The template to use for the structure of the pagination component
     * The default structure uses {@link PaginationCommonPropsAndState.slotEllipsis|slotEllipsis}, {@link PaginationCommonPropsAndState.slotFirst|slotFirst},
     * {@link PaginationCommonPropsAndState.slotPrevious|slotPrevious}, {@link PaginationCommonPropsAndState.slotNext|slotNext},
     * {@link PaginationCommonPropsAndState.slotLast|slotLast}, {@link PaginationCommonPropsAndState.slotPages|slotPages},
     * {@link PaginationCommonPropsAndState.slotNumberLabel|slotNumberLabel},
     */
    slotStructure: SlotContent<PaginationContext>;
    /**
     * The template to use for the ellipsis slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '…'
     */
    slotEllipsis: SlotContent<PaginationContext>;
    /**
     * The template to use for the first slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '«'
     */
    slotFirst: SlotContent<PaginationContext>;
    /**
     * The template to use for the previous slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '‹'
     */
    slotPrevious: SlotContent<PaginationContext>;
    /**
     * The template to use for the next slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '›'
     */
    slotNext: SlotContent<PaginationContext>;
    /**
     * The template to use for the last slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '»'
     */
    slotLast: SlotContent<PaginationContext>;
    /**
     * The template to use for the pages slot
     * To use to customize the pages view
     * override any configuration parameters provided for this
     */
    slotPages: SlotContent<PaginationContext>;
    /**
     * The template to use for the number slot
     * override any configuration parameters provided for this
     * for I18n, we suggest to use the global configuration
     * @defaultValue
     * \`\`\`ts
     * ({displayedPage}) => \`\${displayedPage}\`
     * \`\`\`
     * @param displayedPage - The current page number
     */
    slotNumberLabel: SlotContent<PaginationNumberContext>;
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
export interface PaginationApi {
    /**
     * If the page number is -1 return true
     * @param page - The page number to check
     */
    isEllipsis(page: number): boolean;
}
export type PaginationWidget = Widget<PaginationProps, PaginationState, PaginationApi, PaginationActions>;
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
    /**
     * The template to use for the structure of the pagination component
     * The default structure uses {@link PaginationCommonPropsAndState.slotEllipsis|slotEllipsis}, {@link PaginationCommonPropsAndState.slotFirst|slotFirst},
     * {@link PaginationCommonPropsAndState.slotPrevious|slotPrevious}, {@link PaginationCommonPropsAndState.slotNext|slotNext},
     * {@link PaginationCommonPropsAndState.slotLast|slotLast}, {@link PaginationCommonPropsAndState.slotPages|slotPages},
     * {@link PaginationCommonPropsAndState.slotNumberLabel|slotNumberLabel},
     */
    slotStructure: SlotContent<PaginationContext>;
    /**
     * The template to use for the ellipsis slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '…'
     */
    slotEllipsis: SlotContent<PaginationContext>;
    /**
     * The template to use for the first slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '«'
     */
    slotFirst: SlotContent<PaginationContext>;
    /**
     * The template to use for the previous slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '‹'
     */
    slotPrevious: SlotContent<PaginationContext>;
    /**
     * The template to use for the next slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '›'
     */
    slotNext: SlotContent<PaginationContext>;
    /**
     * The template to use for the last slot
     * for I18n, we suggest to use the global configuration
     * override any configuration parameters provided for this
     * @defaultValue '»'
     */
    slotLast: SlotContent<PaginationContext>;
    /**
     * The template to use for the pages slot
     * To use to customize the pages view
     * override any configuration parameters provided for this
     */
    slotPages: SlotContent<PaginationContext>;
    /**
     * The template to use for the number slot
     * override any configuration parameters provided for this
     * for I18n, we suggest to use the global configuration
     * @defaultValue
     * \`\`\`ts
     * ({displayedPage}) => \`\${displayedPage}\`
     * \`\`\`
     * @param displayedPage - The current page number
     */
    slotNumberLabel: SlotContent<PaginationNumberContext>;
    className: string;
};
/**
 * Create a PaginationWidget with given config props
 * @param config - an optional pagination config
 * @returns a PaginationWidget
 */
export declare function createPagination(config?: PropsConfig<PaginationProps>): PaginationWidget;
`;export{e as default};
