const o=`import type { AccordionApi, AccordionDirectives, AccordionItemActions, AccordionItemApi, AccordionProps as CoreProps, AccordionState as CoreState, AccordionItemState as CoreItemState, AccordionItemProps as CoreItemProps, AccordionItemDirectives } from '@agnos-ui/core/components/accordion';
import type { ExtendWidgetAdaptSlotWidgetProps } from '@agnos-ui/core/services/extendWidget';
import type { SlotContent, Widget, WidgetFactory, WidgetSlotContext } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/components/accordion';
export type AccordionItemContext = WidgetSlotContext<AccordionItemWidget>;
interface AccordionExtraProps {
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`slotItemHeader\`), while the accordion-item body container contains the accordion body (that contains \`slotItemBody\`).
     * The itemTransition it applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    slotItemStructure: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion body.
     *
     * It is a prop of the accordion-item.
     */
    slotItemBody: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion button inside the accordion header.
     *
     * It is a prop of the accordion-item.
     */
    slotItemHeader: SlotContent<AccordionItemContext>;
}
export interface AccordionState extends ExtendWidgetAdaptSlotWidgetProps<CoreState, AccordionExtraProps, object> {
}
export interface AccordionProps extends ExtendWidgetAdaptSlotWidgetProps<CoreProps, AccordionExtraProps, object> {
}
export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, object, AccordionDirectives>;
export interface AccordionItemState extends ExtendWidgetAdaptSlotWidgetProps<CoreItemState, AccordionExtraProps, object> {
}
export interface AccordionItemProps extends ExtendWidgetAdaptSlotWidgetProps<CoreItemProps, AccordionExtraProps, object> {
}
export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemActions, AccordionItemDirectives>;
/**
 * Create an AccordioItemnWidget with given config props
 * @param config - an optional alert config
 * @returns an AccordionWidget
 */
export declare const createAccordionItem: WidgetFactory<import("@agnos-ui/core/services/extendWidget").ExtendWidgetProps<import("@agnos-ui/core/components/accordion").AccordionItemWidget, AccordionExtraProps, object>>;
/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
export declare function getAccordionDefaultConfig(): AccordionProps;
export declare const createAccordion: WidgetFactory<AccordionWidget>;
`;export{o as default};
