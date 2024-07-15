const e=`import { SvelteComponent } from "svelte";
import type { SliderApi, SliderProps, SliderSlots } from './slider';
declare const __propDef: {
    props: {
        api?: SliderApi;
    } & Partial<SliderProps>;
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
    get api(): SliderApi;
}
`;export{e as default};
