const t=`import { SvelteComponentTyped } from "svelte";
import type { WidgetPropsEvents } from '../utils';
import type { AlertProps, AlertSlots } from './alert';
declare const __propDef: {
    props: {
        [x: string]: any;
        widget?: (import("..").AdaptWidgetSlots<import("@agnos-ui/core").AlertWidget> & {
            patchChangedProps: (parameters: Partial<import("..").AdaptPropsSlots<import("@agnos-ui/core").AlertProps>>) => void;
        }) | undefined;
        visible?: boolean | undefined;
        api?: import("@agnos-ui/core").AlertApi | undefined;
    };
    events: WidgetPropsEvents<Omit<import("@agnos-ui/core").AlertProps, \`slot\${string}\`> & {
        slotDefault: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").AlertWidget>> & Omit<Omit<import("@agnos-ui/core").AlertContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotStructure: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").AlertWidget>> & Omit<Omit<import("@agnos-ui/core").AlertContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>;
    slots: AlertSlots;
};
type AlertProps_ = typeof __propDef.props;
export { AlertProps_ as AlertProps };
export type AlertEvents = typeof __propDef.events;
type AlertSlots_ = typeof __propDef.slots;
export { AlertSlots_ as AlertSlots };
export default class Alert extends SvelteComponentTyped<AlertProps, AlertEvents, AlertSlots> {
    get widget(): any;
    get api(): any;
}
`;export{t as default};
