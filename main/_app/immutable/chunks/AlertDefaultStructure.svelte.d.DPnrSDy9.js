const t=`import { SvelteComponent } from "svelte";
import type { AlertContext, AlertSlots } from './alert';
declare const __propDef: {
    props: AlertContext;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: AlertSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AlertDefaultStructureProps = typeof __propDef.props;
export type AlertDefaultStructureEvents = typeof __propDef.events;
export type AlertDefaultStructureSlots = typeof __propDef.slots;
export default class AlertDefaultStructure extends SvelteComponent<AlertDefaultStructureProps, AlertDefaultStructureEvents, AlertDefaultStructureSlots> {
}
export {};
`;export{t as default};
