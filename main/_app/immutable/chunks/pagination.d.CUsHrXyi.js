const t=`import { type ExtendWidgetAdaptSlotWidgetProps } from '@agnos-ui/core/services/extendWidget';
import type { SlotContent, Widget, WidgetFactory, WidgetSlotContext } from '@agnos-ui/core/types';
import type { PaginationActions, PaginationApi, PaginationDirectives, PaginationProps as CoreProps, PaginationState as CoreState } from '@agnos-ui/core/components/pagination';
export * from '@agnos-ui/core/components/pagination';
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
interface PaginationExtraProps {
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
export interface PaginationState extends ExtendWidgetAdaptSlotWidgetProps<CoreState, PaginationExtraProps, object> {
}
export interface PaginationProps extends ExtendWidgetAdaptSlotWidgetProps<CoreProps, PaginationExtraProps, object> {
}
export type PaginationWidget = Widget<PaginationProps, PaginationState, PaginationApi, PaginationActions, PaginationDirectives>;
/**
 * Retrieve a shallow copy of the default Pagination config
 * @returns the default Pagination config
 */
export declare function getPaginationDefaultConfig(): PaginationProps;
/**
 * Create a PaginationWidget with given config props
 * @param config - an optional alert config
 * @returns a PaginationWidget
 */
export declare const createPagination: WidgetFactory<PaginationWidget>;
`;export{t as default};
