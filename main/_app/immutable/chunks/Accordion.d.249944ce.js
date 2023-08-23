const t=`/// <reference types="react" />
import type { AccordionItemContext as AccordionItemCoreContext, AccordionItemWidget as AccordionItemCoreWidget, WidgetProps } from '@agnos-ui/core';
import type { AdaptWidgetSlots, AdaptSlotContentProps } from './Slot';
import { createAccordion } from '@agnos-ui/core';
export type AccordionItemContext = AdaptSlotContentProps<AccordionItemCoreContext>;
export type AccordionItemWidget = AdaptWidgetSlots<AccordionItemCoreWidget>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type AccordionItemState = WidgetProps<AccordionItemWidget>;
export type AccordionWidget = AdaptWidgetSlots<ReturnType<typeof createAccordion>>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionState = WidgetProps<AccordionWidget>;
export declare const AccordionItem: import("react").ForwardRefExoticComponent<Partial<Omit<import("@agnos-ui/core").AccordionItemProps, \`slot\${string}\`> & {
    slotItemStructure: import("./Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemCoreWidget>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    slotItemBody: import("./Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemCoreWidget>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    slotItemHeader: import("./Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemCoreWidget>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
}> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<unknown>>;
export declare const Accordion: import("react").ForwardRefExoticComponent<Partial<Omit<import("@agnos-ui/core").AccordionProps, \`slot\${string}\`> & {
    slotItemStructure: import("./Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemCoreWidget>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    slotItemBody: import("./Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemCoreWidget>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    slotItemHeader: import("./Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemCoreWidget>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
}> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<unknown>>;
`;export{t as default};
