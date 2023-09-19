const t=`import { SvelteComponentTyped } from "svelte";
import type { AlertSlots } from '@agnos-ui/svelte-headless';
declare const __propDef: {
    props: {
        state: import("@agnos-ui/svelte-headless").AdaptPropsSlots<import("@agnos-ui/core").AlertState>;
        widget: Pick<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("@agnos-ui/core").AlertWidget>, "api" | "actions" | "directives" | "stores" | "state$">;
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
