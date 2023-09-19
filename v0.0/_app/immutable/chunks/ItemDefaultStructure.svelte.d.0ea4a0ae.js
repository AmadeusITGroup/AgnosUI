const t=`import { SvelteComponentTyped } from "svelte";
import type { AccordionSlots } from '@agnos-ui/svelte-headless';
declare const __propDef: {
    props: {
        state: import("@agnos-ui/svelte-headless").AdaptPropsSlots<import("@agnos-ui/core").AccordionItemState>;
        widget: Pick<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("@agnos-ui/core").AccordionItemWidget>, "api" | "actions" | "directives" | "stores" | "state$">;
    };
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
