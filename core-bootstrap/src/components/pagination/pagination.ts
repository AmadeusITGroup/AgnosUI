import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import type {SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';
import type {
	PaginationApi,
	PaginationDirectives,
	PaginationProps as CoreProps,
	PaginationState as CoreState,
} from '@agnos-ui/core/components/pagination';
import {createPagination as createCorePagination, getPaginationDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/pagination';

export * from '@agnos-ui/core/components/pagination';

/**
 * A type for the slot context of the pagination widget
 */
export type PaginationContext = WidgetSlotContext<PaginationWidget>;

/**
 * A type for the slot context of the pagination widget when the slot is the number label
 */
export type PaginationNumberContext = PaginationContext & {
	/**
	 * Displayed page
	 */
	displayedPage: number;
};

interface PaginationExtraProps {
	/**
	 * The template to use for the structure of the pagination component
	 * The default structure uses {@link PaginationProps.ellipsisLabel|ellipsisLabel}, {@link PaginationProps.firstPageLabel|firstPageLabel},
	 * {@link PaginationProps.previousPageLabel|previousPageLabel}, {@link PaginationProps.nextPageLabel|nextPageLabel},
	 * {@link PaginationProps.lastPageLabel|lastPageLabel}, {@link PaginationProps.pagesDisplay|pagesDisplay},
	 * {@link PaginationProps.numberLabel|numberLabel},
	 */
	structure: SlotContent<PaginationContext>;

	/**
	 * The template to use for the ellipsis slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'…'`
	 */
	ellipsisLabel: SlotContent<PaginationContext>;

	/**
	 * The template to use for the first slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'«'`
	 */
	firstPageLabel: SlotContent<PaginationContext>;

	/**
	 * The template to use for the previous slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'‹'`
	 */
	previousPageLabel: SlotContent<PaginationContext>;

	/**
	 * The template to use for the next slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'›'`
	 */
	nextPageLabel: SlotContent<PaginationContext>;

	/**
	 * The template to use for the last slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'»'`
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
	 * @param displayedPage - The current page number
	 *
	 * @defaultValue
	 * ```ts
	 * ({displayedPage}: PaginationNumberContext) => `${displayedPage}`
	 * ```
	 */
	numberLabel: SlotContent<PaginationNumberContext>;
}

/**
 * Represents the state of a pagination component.
 */
export interface PaginationState extends CoreState, PaginationExtraProps {}
/**
 * Represents the properties for the Pagination component.
 */
export interface PaginationProps extends CoreProps, PaginationExtraProps {}

/**
 * Represents a pagination widget component.
 *
 * This type defines a widget that handles pagination functionality,
 * including properties, state, api and directives specific to pagination.
 */
export type PaginationWidget = Widget<PaginationProps, PaginationState, PaginationApi, PaginationDirectives>;

const defaultConfigExtraProps: PaginationExtraProps = {
	structure: undefined,
	ellipsisLabel: '…',
	firstPageLabel: '«',
	previousPageLabel: '‹',
	nextPageLabel: '›',
	lastPageLabel: '»',
	numberLabel: ({displayedPage}: PaginationNumberContext) => `${displayedPage}`,
	pagesDisplay: undefined,
};
/**
 * Retrieve a shallow copy of the default Pagination config
 * @returns the default Pagination config
 */
export function getPaginationDefaultConfig(): PaginationProps {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps} as any;
}

/**
 * Create a PaginationWidget with given config props
 * @param config - an optional alert config
 * @returns a PaginationWidget
 */
export const createPagination: WidgetFactory<PaginationWidget> = extendWidgetProps(createCorePagination, defaultConfigExtraProps, {});
