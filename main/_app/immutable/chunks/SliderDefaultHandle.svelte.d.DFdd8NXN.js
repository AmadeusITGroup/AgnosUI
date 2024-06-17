const e=`import { SvelteComponent } from "svelte";
import type { SliderSlots } from './slider';
declare const __propDef: {
    props: any;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: SliderSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SliderDefaultHandleProps = typeof __propDef.props;
export type SliderDefaultHandleEvents = typeof __propDef.events;
export type SliderDefaultHandleSlots = typeof __propDef.slots;
export default class SliderDefaultHandle extends SvelteComponent<SliderDefaultHandleProps, SliderDefaultHandleEvents, SliderDefaultHandleSlots> {
}
export {};
`;export{e as default};
