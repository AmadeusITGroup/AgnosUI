const e=`import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: SliderSlots;
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
