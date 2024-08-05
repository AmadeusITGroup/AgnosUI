const e=`import { SvelteComponent } from "svelte";
import type { SliderProps, SliderSlots } from './slider';
declare const __propDef: {
    props: Partial<SliderProps>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: SliderSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
type SliderProps_ = typeof __propDef.props;
export { SliderProps_ as SliderProps };
export type SliderEvents = typeof __propDef.events;
type SliderSlots_ = typeof __propDef.slots;
export { SliderSlots_ as SliderSlots };
export default class Slider extends SvelteComponent<SliderProps_, SliderEvents, SliderSlots_> {
}
`;export{e as default};
