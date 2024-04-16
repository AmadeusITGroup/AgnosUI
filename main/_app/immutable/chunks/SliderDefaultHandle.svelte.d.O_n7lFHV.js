const e=`import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
};
export type SliderDefaultHandleProps = typeof __propDef.props;
export type SliderDefaultHandleEvents = typeof __propDef.events;
export type SliderDefaultHandleSlots = typeof __propDef.slots;
export default class SliderDefaultHandle extends SvelteComponentTyped<SliderDefaultHandleProps, SliderDefaultHandleEvents, SliderDefaultHandleSlots> {
}
export {};
`;export{e as default};
