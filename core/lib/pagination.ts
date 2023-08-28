import {computed} from '@amadeus-it-group/tansu';
import type {ConfigValidator, PropsConfig} from './services';
import {bindableDerived, INVALID_VALUE, stateStores, writablesForProps} from './services';
import {clamp, isNumber} from './services/checks';
import {typeBoolean, typeFunction, typeNumber, typeString} from './services/writables';
import type {Widget, SlotContent, WidgetSlotContext} from './types';
import {noop} from './utils';
import type {WidgetsCommonPropsAndState} from './commonProps';

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
	 * Page numbers start with `1`.
	 * @defaultValue 1
	 */
	page: number; // value of the current/init page to display

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
	 * If `true`, pagination links will be disabled.
	 * @defaultValue false
	 */
	disabled: boolean;

	/**
	 * If `true`, the "Next" and "Previous" page links are shown.
	 * @defaultValue true
	 */
	directionLinks: boolean;

	/**
	 * If `true`, the "First" and "Last" page links are shown.
	 * @defaultValue false
	 */
	boundaryLinks: boolean;

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
	 * ```ts
	 * ({displayedPage}) => `${displayedPage}`
	 * ```
	 * @param displayedPage - The current page number
	 */
	slotNumberLabel: SlotContent<PaginationNumberContext>;
}

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
	 * @defaultValue
	 * ```ts
	 * ({page, pageCount}) => {
	 *  const pages: number[] = [];
	 *	for (let i = 1; i <= pageCount; i++) {
	 *		pages.push(i);
	 * 	}
	 * 	return pages;
	 * }
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
	 * @defaultValue
	 * ```ts
	 * ({processPage, pageCount}) => `Page ${processPage} of ${pageCount}`
	 * ```
	 */
	ariaPageLabel: (processPage: number, pageCount: number) => string;
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
}

export interface PaginationActions {
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

export interface PaginationApi {
	// FIXME: should this be in actions too (even though it is not an action, but it is mostly only useful from slots)??
	/**
	 * If the page number is -1 return true
	 * @param page - The page number to check
	 */
	isEllipsis(page: number): boolean;
}

export type PaginationWidget = Widget<PaginationProps, PaginationState, PaginationApi, PaginationActions>;

const defaultConfig: PaginationProps = {
	page: 1,
	collectionSize: 0,
	pageSize: 10,
	disabled: false,
	directionLinks: true,
	boundaryLinks: false,
	size: null,
	onPageChange: noop,
	pagesFactory: (page: number, pageCount: number) => {
		// TODO extract this for testing
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
	className: '',
	slotEllipsis: '…',
	slotFirst: '«',
	slotPrevious: '‹',
	slotNext: '›',
	slotLast: '»',
	slotPages: undefined,
	slotNumberLabel: ({displayedPage}) => `${displayedPage}`,
};

/**
 * Returns a shallow copy of the default pagination config
 * @returns a copy of the default config
 */
export function getPaginationDefaultConfig() {
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
	className: typeString,
};

/**
 * Create a PaginationWidget with given config props
 * @param config - an optional alert config
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
	const page$ = bindableDerived(onPageChange$, [_dirtyPage$, pageCount$], ([dirtyPage, pageCount]) => clamp(dirtyPage, pageCount, 1));

	const pages$ = computed(() => pagesFactory$()(page$(), pageCount$()));

	const nextDisabled$ = computed(() => page$() === pageCount$() || stateProps.disabled$());
	const previousDisabled$ = computed(() => page$() === 1 || stateProps.disabled$());

	const pagesLabel$ = computed(() => {
		const ariaPageLabel = ariaPageLabel$();
		const pageCount = pageCount$();
		return pages$().map((page) => ariaPageLabel(page, pageCount));
	});

	return {
		...stateStores({
			pageCount$,
			page$,
			pages$,
			nextDisabled$,
			previousDisabled$,
			pagesLabel$,
			...stateProps,
		}),
		patch,
		actions: {
			/**
			 * Set the current page pageNumber (starting from 1)
			 * @param pageNumber - Current page number to set.
			 * Value is normalized between 1 and the number of page
			 */
			select(pageNumber: number) {
				patch({page: pageNumber});
			},

			/**
			 * Select the first page
			 */
			first() {
				patch({page: 1});
			},

			/**
			 * Select the previous page
			 */
			previous() {
				patch({page: page$() - 1});
			},

			/**
			 * Select the next page
			 */
			next() {
				patch({page: page$() + 1});
			},

			/**
			 * Select the last page
			 */
			last() {
				patch({page: pageCount$()});
			},
		},
		api: {
			isEllipsis(pageNumber: number): boolean {
				return pageNumber === -1;
			},
		},
		directives: {},
	};
}
