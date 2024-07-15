const o=`import { SvelteComponent } from "svelte";
import type { AccordionApi, AccordionProps, AccordionSlots } from './accordion';
declare const __propDef: {
    props: {
        api?: AccordionApi;
    } & Partial<AccordionProps>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: Record<string, never>;
    } & AccordionSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
type AccordionProps_ = typeof __propDef.props;
export { AccordionProps_ as AccordionProps };
export type AccordionEvents = typeof __propDef.events;
type AccordionSlots_ = typeof __propDef.slots;
export { AccordionSlots_ as AccordionSlots };
export default class Accordion extends SvelteComponent<AccordionProps_, AccordionEvents, AccordionSlots_> {
    get api(): AccordionApi;
}
`;export{o as default};
