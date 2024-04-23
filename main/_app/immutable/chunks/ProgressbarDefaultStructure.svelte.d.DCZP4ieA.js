const r=`import { SvelteComponentTyped } from "svelte";
import type { ProgressbarContext, ProgressbarSlots } from './progressbar';
declare const __propDef: {
    props: ProgressbarContext;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: ProgressbarSlots;
};
export type ProgressbarDefaultStructureProps = typeof __propDef.props;
export type ProgressbarDefaultStructureEvents = typeof __propDef.events;
export type ProgressbarDefaultStructureSlots = typeof __propDef.slots;
export default class ProgressbarDefaultStructure extends SvelteComponentTyped<ProgressbarDefaultStructureProps, ProgressbarDefaultStructureEvents, ProgressbarDefaultStructureSlots> {
}
export {};
`;export{r as default};
