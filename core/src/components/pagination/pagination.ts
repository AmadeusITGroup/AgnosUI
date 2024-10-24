import {computed} from '@amadeus-it-group/tansu';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {INVALID_VALUE} from '../../types';
import {bindableProp, stateStores, writablesForProps} from '../../utils/stores';
import {clamp, isNumber} from '../../utils/internal/checks';
import {typeBoolean, typeFunction, typeNumber, typeString} from '../../utils/writables';
import type {ConfigValidator, PropsConfig, Widget, Directive} from '../../types';
import {noop} from '../../utils/internal/func';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import {createAttributesDirective} from '../../utils/directive';

/**
 * Interface representing the common properties and state for a pagination component.
 */
interface PaginationCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * The current page.
	 *
	 * Page numbers start with `1`.
	 *
	 * @defaultValue `1`
	 */
	page: number; // value of the current/init page to display

	/**
	 * The pagination display size.
	 *
	 * Bootstrap currently supports small and large sizes.
	 *
	 * @defaultValue `null`
	 */
	size: 'sm' | 'lg' | null;

	/**
	 * The label for the nav element.
	 *
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'Page navigation'`
	 */
	ariaLabel: string;

	/**
	 * The label for the "active" page.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * '(current)'
	 * ```
	 */
	activeLabel: string;

	/**
	 * The label for the "First" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for first page'
	 * ```
	 */
	ariaFirstLabel: string;

	/**
	 * The label for the "Previous" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for previous page'
	 * ```
	 */
	ariaPreviousLabel: string;

	/**
	 * The label for the "Next" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for next page'
	 * ```
	 */
	ariaNextLabel: string;

	/**
	 * The label for the "Last" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for last page'
	 * ```
	 */
	ariaLastLabel: string;

	/**
	 * The label for the "Ellipsis" page.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'Ellipsis page element'`
	 */
	ariaEllipsisLabel: string;

	/**
	 * If `true`, pagination links will be disabled.
	 *
	 * @defaultValue `false`
	 */
	disabled: boolean;

	/**
	 * If `true`, the "Next" and "Previous" page links are shown.
	 *
	 * @defaultValue `true`
	 */
	directionLinks: boolean;

	/**
	 * If `true`, the "First" and "Last" page links are shown.
	 *
	 * @defaultValue `false`
	 */
	boundaryLinks: boolean;
}

/**
 * Interface representing the properties for the Pagination component.
 */
export interface PaginationProps extends PaginationCommonPropsAndState {
	/**
	 * The number of items in your paginated collection.
	 *
	 * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
	 * `collectionSize` and `pageSize`.
	 *
	 * Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.
	 *
	 * Whatever the collectionSize the page number is of minimum 1.
	 *
	 * @defaultValue `0`
	 */
	collectionSize: number;

	/**
	 * The number of items per page.
	 * @remarks min value is 1
	 *
	 * @defaultValue `10`
	 */
	pageSize: number;

	/**
	 * An event fired when the page is changed.
	 *
	 * Event payload is the number of the newly selected page.
	 *
	 * Page numbers start with `1`.
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onPageChange: (page: number) => void;

	/**
	 * pagesFactory returns a function computing the array of pages to be displayed
	 * as number (-1 are treated as ellipsis).
	 * Use Page slot to customize the pages view and not this
	 * @param page - The current page number
	 * @param pageCount - The total number of pages
	 *
	 * @defaultValue
	 * ```ts
	 * (_page: number, pageCount: number) => {
	 * 		const pages: number[] = [];
	 * 		for (let i = 1; i <= pageCount; i++) {
	 * 			pages.push(i);
	 * 		}
	 * 		return pages;
	 * 	}
	 * ```
	 */
	pagesFactory: (page: number, pageCount: number) => number[];

	/**
	 * Provide the label for each "Page" page button.
	 * This is used for accessibility purposes.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @param processPage - The current page number
	 * @param pageCount - The total number of pages
	 *
	 * @defaultValue
	 * ```ts
	 * (processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`
	 * ```
	 */
	ariaPageLabel: (processPage: number, pageCount: number) => string;

	/**
	 * Provide the label for the aria-live element
	 * This is used for accessibility purposes.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @param currentPage - The current page number
	 * @param pageCount - The total number of pages
	 *
	 * @defaultValue
	 * ```ts
	 * (currentPage: number) => `Current page is ${currentPage}`
	 * ```
	 */
	ariaLiveLabel: (currentPage: number, pageCount: number) => string;

	/**
	 * Factory function providing the href for a "Page" page anchor,
	 * based on the current page number
	 * @param pageNumber - The index to use in the link
	 *
	 * @defaultValue
	 * ```ts
	 * (_page: number) => PAGE_LINK_DEFAULT
	 * ```
	 */
	pageLink: (pageNumber: number) => string;
}

/**
 * Interface representing the hrefs for pagination navigation links.
 */
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

/**
 * Represents the state of the pagination component.
 */
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

/**
 * Interface representing pagination API for navigating through pages.
 */
export interface PaginationApi {
	/**
	 * To "go" to a specific page
	 * @param page - The page number to select
	 */
	select(page: number): void;
	/**
	 * To "go" to the first page
	 */
	first(): void;
	/**
	 * To "go" to the previous page
	 */
	previous(): void;
	/**
	 * To "go" to the next page
	 */
	next(): void;
	/**
	 * To "go" to the last page
	 */
	last(): void;
}

/**
 * Interface representing the directives for pagination components.
 */
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

/**
 * Represents a pagination widget with specific properties, state, API, actions, and directives.
 */
export type PaginationWidget = Widget<PaginationProps, PaginationState, PaginationApi, PaginationDirectives>;

const PAGE_LINK_DEFAULT = '#';

const defaultConfig: PaginationProps = {
	page: 1,
	collectionSize: 0,
	pageSize: 10,
	disabled: false,
	directionLinks: true,
	boundaryLinks: false,
	size: null,
	onPageChange: noop,
	pagesFactory: (_page: number, pageCount: number) => {
		const pages: number[] = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}
		return pages;
	},
	ariaLabel: 'Page navigation',
	activeLabel: '(current)',
	ariaPageLabel: (processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`,
	ariaFirstLabel: 'Action link for first page',
	ariaPreviousLabel: 'Action link for previous page',
	ariaNextLabel: 'Action link for next page',
	ariaLastLabel: 'Action link for last page',
	ariaEllipsisLabel: 'Ellipsis page element',
	ariaLiveLabel: (currentPage: number) => `Current page is ${currentPage}`,
	className: '',
	pageLink: (_page: number) => PAGE_LINK_DEFAULT,
};

/**
 * Returns a shallow copy of the default pagination config
 * @returns a copy of the default config
 */
export function getPaginationDefaultConfig(): PaginationProps {
	return {...defaultConfig};
}

const configValidator: ConfigValidator<PaginationProps> = {
	page: typeNumber,
	collectionSize: typeNumber,
	pageSize: typeNumber,
	disabled: typeBoolean,
	directionLinks: typeBoolean,
	boundaryLinks: typeBoolean,
	size: {normalizeValue: (value) => (value === 'lg' || value === 'sm' || value === null ? value : INVALID_VALUE)},
	onPageChange: typeFunction,
	pagesFactory: typeFunction,
	ariaLabel: typeString,
	activeLabel: typeString,
	ariaPageLabel: typeFunction,
	ariaFirstLabel: typeString,
	ariaPreviousLabel: typeString,
	ariaNextLabel: typeString,
	ariaLastLabel: typeString,
	ariaLiveLabel: typeFunction,
	className: typeString,
	pageLink: typeFunction,
};

/**
 * Create a PaginationWidget with given config props
 * @param config - an optional pagination config
 * @returns a PaginationWidget
 */
export function createPagination(config?: PropsConfig<PaginationProps>): PaginationWidget {
	const [
		{
			// dirty inputs that need adjustment:
			page$: _dirtyPage$,
			// clean inputs with value validation:
			collectionSize$,
			pageSize$,
			onPageChange$,
			pagesFactory$,
			ariaPageLabel$,
			ariaLiveLabel$,
			pageLink$,
			disabled$,
			ariaFirstLabel$,
			ariaLastLabel$,
			ariaNextLabel$,
			ariaPreviousLabel$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultConfig, config, configValidator);

	// computed
	// nb total of Pages.
	const pageCount$ = computed(() => {
		let pageCount = Math.ceil(collectionSize$() / pageSize$());
		// Here we choose to always display a page when collection size is 0
		if (!isNumber(pageCount) || pageCount < 1) {
			pageCount = 1;
		}
		return pageCount;
	});
	// current page
	const page$ = bindableProp(_dirtyPage$, onPageChange$, (dirtyPage) => clamp(dirtyPage, pageCount$(), 1));

	const pages$ = computed(() => pagesFactory$()(page$(), pageCount$()));

	const nextDisabled$ = computed(() => page$() === pageCount$() || disabled$());
	const previousDisabled$ = computed(() => page$() === 1 || disabled$());

	const pagesLabel$ = computed(() => {
		const ariaPageLabel = ariaPageLabel$();
		const pageCount = pageCount$();
		return pages$().map((page) => ariaPageLabel(page, pageCount));
	});

	const pagesHrefs$ = computed(() => {
		const pageLinkFactory = pageLink$();
		const pageCount = pageCount$();
		return Array.from({length: pageCount}, (_, index) => pageLinkFactory(index + 1));
	});

	const directionsHrefs$ = computed(() => {
		const pagesHrefs = pagesHrefs$();
		const pageIndex = page$() - 1;
		return {
			previous: pagesHrefs.at(pageIndex > 0 ? pageIndex - 1 : 0)!,
			next: pagesHrefs.at(pageIndex + 1) ?? pagesHrefs.at(-1)!,
		};
	});

	const ariaLiveLabelText$ = computed(() => ariaLiveLabel$()(page$(), pageCount$()));

	/**
	 * Stop event propagation when href is the default value;
	 * Update page number when navigation is in the same tab and stop the event propagation;
	 * For navigation outside current browser tab let the default behavior, without updating the page number;
	 * @param pageNumber current page number
	 * @param event UI event triggered when page changed
	 */
	function handleNavigation(pageNumber: number, event?: MouseEvent) {
		if (pagesHrefs$()[pageNumber - 1] === PAGE_LINK_DEFAULT) {
			event?.preventDefault();
		}
		if (!event || !(event.ctrlKey || event.metaKey)) {
			event?.preventDefault();
			page$.set(pageNumber);
		}
	}

	const widget: PaginationWidget = {
		...stateStores({
			pageCount$,
			page$,
			pages$,
			nextDisabled$,
			previousDisabled$,
			pagesLabel$,
			pagesHrefs$,
			directionsHrefs$,
			disabled$,
			ariaFirstLabel$,
			ariaLastLabel$,
			ariaNextLabel$,
			ariaPreviousLabel$,
			ariaLiveLabelText$,
			...stateProps,
		}),
		patch,
		api: {
			/**
			 * Set the current page pageNumber (starting from 1)
			 * @param pageNumber - Current page number to set.
			 * Value is normalized between 1 and the number of page
			 */
			select(pageNumber: number) {
				page$.set(pageNumber);
			},

			/**
			 * Select the first page
			 */
			first() {
				page$.set(1);
			},

			/**
			 * Select the previous page
			 */
			previous() {
				page$.update((p) => p - 1);
			},

			/**
			 * Select the next page
			 */
			next() {
				page$.update((p) => p + 1);
			},

			/**
			 * Select the last page
			 */
			last() {
				page$.set(pageCount$());
			},
		},
		directives: {
			pageLink: createAttributesDirective((pageLinkContext$: ReadableSignal<{page: number}>) => ({
				events: {
					click: (e) => handleNavigation(pageLinkContext$().page, e),
				},
				attributes: {
					'aria-current': computed(() => (page$() === pageLinkContext$().page ? 'page' : undefined)),
					'aria-label': computed(() => pagesLabel$()[pageLinkContext$().page - 1]),
					href: computed(() => pagesHrefs$()[pageLinkContext$().page - 1]),
					tabindex: computed(() => (disabled$() ? '-1' : undefined)),
					'aria-disabled': computed(() => (disabled$() ? 'true' : undefined)),
				},
				classNames: {
					'au-page': true,
				},
			})),
			pageFirst: createAttributesDirective(() => ({
				events: {
					click: (e) => handleNavigation(1, e),
				},
				attributes: {
					'aria-label': ariaFirstLabel$,
					href: computed(() => pagesHrefs$()[0]),
					tabindex: computed(() => (previousDisabled$() ? '-1' : undefined)),
					'aria-disabled': computed(() => (previousDisabled$() ? 'true' : undefined)),
				},
				classNames: {
					'au-first': true,
				},
			})),
			pagePrev: createAttributesDirective(() => ({
				events: {
					click: (e) => handleNavigation(page$() - 1, e),
				},
				attributes: {
					'aria-label': ariaPreviousLabel$,
					href: computed(() => directionsHrefs$().previous),
					tabindex: computed(() => (previousDisabled$() ? '-1' : undefined)),
					'aria-disabled': computed(() => (previousDisabled$() ? 'true' : undefined)),
				},
				classNames: {
					'au-previous': true,
				},
			})),
			pageNext: createAttributesDirective(() => ({
				events: {
					click: (e) => handleNavigation(page$() + 1, e),
				},
				attributes: {
					'aria-label': ariaNextLabel$,
					href: computed(() => directionsHrefs$().next),
					tabindex: computed(() => (nextDisabled$() ? '-1' : undefined)),
					'aria-disabled': computed(() => (nextDisabled$() ? 'true' : undefined)),
				},
				classNames: {
					'au-next': true,
				},
			})),
			pageLast: createAttributesDirective(() => ({
				events: {
					click: (e) => handleNavigation(pageCount$(), e),
				},
				attributes: {
					'aria-label': ariaLastLabel$,
					href: computed(() => pagesHrefs$().at(-1)),
					tabindex: computed(() => (nextDisabled$() ? '-1' : undefined)),
					'aria-disabled': computed(() => (nextDisabled$() ? 'true' : undefined)),
				},
				classNames: {
					'au-last': true,
				},
			})),
		},
	};

	return widget;
}
