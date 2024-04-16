const e=`import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
};
export type SliderDefaultStructureProps = typeof __propDef.props;
export type SliderDefaultStructureEvents = typeof __propDef.events;
export type SliderDefaultStructureSlots = typeof __propDef.slots;
export default class SliderDefaultStructure extends SvelteComponentTyped<SliderDefaultStructureProps, SliderDefaultStructureEvents, SliderDefaultStructureSlots> {
}
export {};
`;export{e as default};
