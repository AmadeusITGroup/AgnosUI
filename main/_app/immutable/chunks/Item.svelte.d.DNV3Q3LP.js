const e=`import { SvelteComponent } from "svelte";
import type { AccordionItemApi, AccordionItemProps, AccordionSlots } from './accordion';
declare const __propDef: {
    props: {
        api?: AccordionItemApi | undefined;
    } & Partial<AccordionItemProps>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: AccordionSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ItemProps = typeof __propDef.props;
export type ItemEvents = typeof __propDef.events;
export type ItemSlots = typeof __propDef.slots;
export default class Item extends SvelteComponent<ItemProps, ItemEvents, ItemSlots> {
    get api(): AccordionItemApi;
}
export {};
`;export{e as default};
