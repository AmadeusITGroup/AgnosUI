const t=`import { SvelteComponentTyped } from "svelte";
import type { AlertSlots } from './alert';
declare const __propDef: {
    props: {
        state: import("..").AdaptPropsSlots<import("core/dist/lib").AlertState>;
        widget: Pick<import("..").AdaptWidgetSlots<import("core/dist/lib").AlertWidget>, "api" | "actions" | "directives" | "state$" | "stores">;
    };
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
