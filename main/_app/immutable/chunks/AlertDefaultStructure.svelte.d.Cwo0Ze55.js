const t=`import { SvelteComponent } from "svelte";
import type { AlertSlots } from './alert';
declare const __propDef: {
    props: WidgetSlotContext<Widget<import("./alert.gen").AlertProps, import("./alert.gen").AlertState, import("./alert.gen").AlertApi, object, import("./alert.gen").AlertDirectives>>;
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
