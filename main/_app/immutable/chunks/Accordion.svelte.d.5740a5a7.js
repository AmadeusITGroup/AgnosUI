const o=`import { SvelteComponentTyped } from "svelte";
import type { WidgetPropsEvents } from '../utils';
import type { AccordionProps, AccordionSlots } from './accordion';
declare const __propDef: {
    props: {
        itemId?: string | undefined;
        closeOthers?: boolean | undefined;
        itemDestroyOnHide?: boolean | undefined;
        itemDisabled?: boolean | undefined;
        itemCollapsed?: boolean | undefined;
        itemAnimation?: boolean | undefined;
        itemTransition?: import("@agnos-ui/core").TransitionFn | undefined;
        slotItemStructure?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").AccordionItemWidget>> & Omit<Omit<import("@agnos-ui/core").AccordionItemContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotItemBody?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").AccordionItemWidget>> & Omit<Omit<import("@agnos-ui/core").AccordionItemContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotItemHeader?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").AccordionItemWidget>> & Omit<Omit<import("@agnos-ui/core").AccordionItemContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        itemClass?: string | undefined;
        itemHeaderClass?: string | undefined;
        itemButtonClass?: string | undefined;
        itemCollapseClass?: string | undefined;
        itemBodyClass?: string | undefined;
        accordionClass?: string | undefined;
    };
    slots: {
        default: Record<string, never>;
    } & AccordionSlots;
    events: WidgetPropsEvents<Omit<import("@agnos-ui/core").AccordionProps, \`slot\${string}\`> & {
        slotItemStructure: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").AccordionItemWidget>> & Omit<Omit<import("@agnos-ui/core").AccordionItemContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotItemBody: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").AccordionItemWidget>> & Omit<Omit<import("@agnos-ui/core").AccordionItemContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotItemHeader: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").AccordionItemWidget>> & Omit<Omit<import("@agnos-ui/core").AccordionItemContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>;
};
type AccordionProps_ = typeof __propDef.props;
export { AccordionProps_ as AccordionProps };
export type AccordionEvents = typeof __propDef.events;
type AccordionSlots_ = typeof __propDef.slots;
export { AccordionSlots_ as AccordionSlots };
export default class Accordion extends SvelteComponentTyped<AccordionProps, AccordionEvents, AccordionSlots> {
}
`;export{o as default};
