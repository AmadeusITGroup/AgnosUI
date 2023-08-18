const t=`import { SvelteComponentTyped } from "svelte";
import type { WidgetPropsEvents } from '../utils';
import type { PaginationProps, PaginationSlots } from './pagination';
declare const __propDef: {
    props: {
        collectionSize?: number | undefined;
        pageSize?: number | undefined;
        pagesFactory?: ((page: number, pageCount: number) => number[]) | undefined;
        ariaPageLabel?: ((processPage: number, pageCount: number) => string) | undefined;
        page?: number | undefined;
        size?: "sm" | "lg" | null | undefined;
        ariaLabel?: string | undefined;
        activeLabel?: string | undefined;
        ariaFirstLabel?: string | undefined;
        ariaPreviousLabel?: string | undefined;
        ariaNextLabel?: string | undefined;
        ariaLastLabel?: string | undefined;
        disabled?: boolean | undefined;
        directionLinks?: boolean | undefined;
        boundaryLinks?: boolean | undefined;
        className?: string | undefined;
        slotEllipsis?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotFirst?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotPrevious?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotNext?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotLast?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotPages?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotNumberLabel?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationNumberContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    };
    slots: PaginationSlots;
    events: WidgetPropsEvents<Omit<import("@agnos-ui/core").PaginationProps, \`slot\${string}\`> & {
        slotEllipsis: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotFirst: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotPrevious: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotNext: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotLast: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotPages: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotNumberLabel: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationNumberContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>;
};
type PaginationProps_ = typeof __propDef.props;
export { PaginationProps_ as PaginationProps };
export type PaginationEvents = typeof __propDef.events;
type PaginationSlots_ = typeof __propDef.slots;
export { PaginationSlots_ as PaginationSlots };
export default class Pagination extends SvelteComponentTyped<PaginationProps, PaginationEvents, PaginationSlots> {
}
`;export{t as default};
