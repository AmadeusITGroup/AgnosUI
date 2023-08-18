const t=`import { SvelteComponentTyped } from "svelte";
import type { AccordionSlots } from './accordion';
declare const __propDef: {
    props: {
        state: import("..").AdaptPropsSlots<import("core/dist/lib").AccordionItemState>;
        widget: Pick<import("..").AdaptWidgetSlots<import("core/dist/lib").AccordionItemWidget>, "api" | "actions" | "directives" | "state$" | "stores">;
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
