const t=`import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: AlertSlots;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: AlertSlots;
};
export type AlertDefaultStructureProps = typeof __propDef.props;
export type AlertDefaultStructureEvents = typeof __propDef.events;
export type AlertDefaultStructureSlots = typeof __propDef.slots;
export default class AlertDefaultStructure extends SvelteComponentTyped<AlertDefaultStructureProps, AlertDefaultStructureEvents, AlertDefaultStructureSlots> {
}
export {};
`;export{t as default};
