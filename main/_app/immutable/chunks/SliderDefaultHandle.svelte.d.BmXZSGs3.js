const e=`import { SvelteComponentTyped } from "svelte";
import type { SliderSlotHandleContext, SliderSlots } from './slider';
declare const __propDef: {
    props: SliderSlotHandleContext;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: SliderSlots;
};
export type SliderDefaultHandleProps = typeof __propDef.props;
export type SliderDefaultHandleEvents = typeof __propDef.events;
export type SliderDefaultHandleSlots = typeof __propDef.slots;
export default class SliderDefaultHandle extends SvelteComponentTyped<SliderDefaultHandleProps, SliderDefaultHandleEvents, SliderDefaultHandleSlots> {
}
export {};
`;export{e as default};
