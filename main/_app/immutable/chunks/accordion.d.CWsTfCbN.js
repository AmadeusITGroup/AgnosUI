const o=`import type { AccordionApi, AccordionDirectives, AccordionItemActions, AccordionItemApi, AccordionProps as CoreProps, AccordionState as CoreState, AccordionItemState as CoreItemState, AccordionItemProps as CoreItemProps, AccordionItemDirectives } from '@agnos-ui/core/components/accordion';
import type { SlotContent, Widget, WidgetFactory, WidgetSlotContext } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/components/accordion';
export type AccordionItemContext = WidgetSlotContext<AccordionItemWidget>;
interface AccordionExtraProps {
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    itemStructure: SlotContent<AccordionItemContext>;
}
interface AccordionItemExtraProps {
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    structure: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion body.
     *
     * It is a prop of the accordion-item.
     */
    children: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion button inside the accordion header.
     *
     * It is a prop of the accordion-item.
     */
    header: SlotContent<AccordionItemContext>;
}
export interface AccordionState extends CoreState, AccordionExtraProps {
}
export interface AccordionProps extends CoreProps, AccordionExtraProps {
}
export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, object, AccordionDirectives>;
export interface AccordionItemState extends CoreItemState, AccordionItemExtraProps {
}
export interface AccordionItemProps extends CoreItemProps, AccordionItemExtraProps {
}
export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemActions, AccordionItemDirectives>;
/**
 * Create an AccordioItemnWidget with given config props
 * @param config - an optional alert config
 * @returns an AccordionWidget
 */
export declare const createAccordionItem: WidgetFactory<import("@agnos-ui/core/services/extendWidget").ExtendWidgetProps<import("@agnos-ui/core/components/accordion").AccordionItemWidget, AccordionItemExtraProps, object>>;
/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
export declare function getAccordionDefaultConfig(): AccordionProps;
export declare const createAccordion: WidgetFactory<AccordionWidget>;
`;export{o as default};
