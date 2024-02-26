const t=`import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: ToastSlots;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: ToastSlots;
};
export type ToastDefaultStructureProps = typeof __propDef.props;
export type ToastDefaultStructureEvents = typeof __propDef.events;
export type ToastDefaultStructureSlots = typeof __propDef.slots;
export default class ToastDefaultStructure extends SvelteComponentTyped<ToastDefaultStructureProps, ToastDefaultStructureEvents, ToastDefaultStructureSlots> {
}
export {};
`;export{t as default};
