const t=`import { SvelteComponentTyped } from "svelte";
import type { AccordionSlots } from '@agnos-ui/svelte-headless';
declare const __propDef: {
    props: import("@agnos-ui/svelte-headless").WidgetSlotContext<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("@agnos-ui/core").AccordionItemWidget>> & Omit<Omit<import("@agnos-ui/core").AccordionItemContext, keyof import("@agnos-ui/svelte-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: AccordionSlots;
};
export type ItemDefaultStructureProps = typeof __propDef.props;
export type ItemDefaultStructureEvents = typeof __propDef.events;
export type ItemDefaultStructureSlots = typeof __propDef.slots;
export default class ItemDefaultStructure extends SvelteComponentTyped<ItemDefaultStructureProps, ItemDefaultStructureEvents, ItemDefaultStructureSlots> {
}
export {};
`;export{t as default};
