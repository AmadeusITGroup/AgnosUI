const e=`import { SvelteComponentTyped } from "svelte";
import type { AlertSlots } from '@agnos-ui/svelte-headless';
declare const __propDef: {
    props: import("@agnos-ui/svelte-headless").WidgetSlotContext<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("@agnos-ui/svelte-headless").ExtendWidgetProps<import("@agnos-ui/svelte-headless").CommonAlertWidget, import("@agnos-ui/svelte-headless").AlertExtraProps>>> & Omit<Omit<import("@agnos-ui/svelte-headless").WidgetSlotContext<import("@agnos-ui/svelte-headless").ExtendWidgetProps<import("@agnos-ui/svelte-headless").CommonAlertWidget, import("@agnos-ui/svelte-headless").AlertExtraProps>> & Omit<import("@agnos-ui/svelte-headless").CommonAlertContext, keyof import("@agnos-ui/svelte-headless").WidgetSlotContext<any>>, keyof import("@agnos-ui/svelte-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {};
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
`;export{e as default};
