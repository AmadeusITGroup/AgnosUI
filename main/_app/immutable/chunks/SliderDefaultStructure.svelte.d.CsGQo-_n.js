const e=`import { SvelteComponent } from "svelte";
import type { SliderSlots } from './slider';
declare const __propDef: {
    props: WidgetSlotContext<Widget<import("./slider.gen").SliderProps, import("./slider.gen").SliderState, import("./slider.gen").SliderApi, import("./slider.gen").SliderActions, import("./slider.gen").SliderDirectives>>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: SliderSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SliderDefaultStructureProps = typeof __propDef.props;
export type SliderDefaultStructureEvents = typeof __propDef.events;
export type SliderDefaultStructureSlots = typeof __propDef.slots;
export default class SliderDefaultStructure extends SvelteComponent<SliderDefaultStructureProps, SliderDefaultStructureEvents, SliderDefaultStructureSlots> {
}
export {};
`;export{e as default};
