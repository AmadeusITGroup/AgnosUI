const t=`import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
};
export type ToastDefaultStructureProps = typeof __propDef.props;
export type ToastDefaultStructureEvents = typeof __propDef.events;
export type ToastDefaultStructureSlots = typeof __propDef.slots;
export default class ToastDefaultStructure extends SvelteComponentTyped<ToastDefaultStructureProps, ToastDefaultStructureEvents, ToastDefaultStructureSlots> {
}
export {};
`;export{t as default};
