const t=`import { SvelteComponentTyped } from "svelte";
import type { PaginationSlots } from '@agnos-ui/svelte-headless';
declare const __propDef: {
    props: import("@agnos-ui/svelte-headless").WidgetSlotContext<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>> & Omit<Omit<import("@agnos-ui/core").PaginationContext, keyof import("@agnos-ui/svelte-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {};
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: PaginationSlots;
};
export type PaginationDefaultPagesProps = typeof __propDef.props;
export type PaginationDefaultPagesEvents = typeof __propDef.events;
export type PaginationDefaultPagesSlots = typeof __propDef.slots;
export default class PaginationDefaultPages extends SvelteComponentTyped<PaginationDefaultPagesProps, PaginationDefaultPagesEvents, PaginationDefaultPagesSlots> {
}
export {};
`;export{t as default};
