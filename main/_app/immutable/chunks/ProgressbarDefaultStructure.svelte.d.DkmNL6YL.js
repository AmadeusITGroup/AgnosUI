const e=`import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
};
export type ProgressbarDefaultStructureProps = typeof __propDef.props;
export type ProgressbarDefaultStructureEvents = typeof __propDef.events;
export type ProgressbarDefaultStructureSlots = typeof __propDef.slots;
export default class ProgressbarDefaultStructure extends SvelteComponentTyped<ProgressbarDefaultStructureProps, ProgressbarDefaultStructureEvents, ProgressbarDefaultStructureSlots> {
}
export {};
`;export{e as default};
