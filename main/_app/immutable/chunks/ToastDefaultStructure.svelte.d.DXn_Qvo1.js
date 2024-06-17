const t=`import { SvelteComponent } from "svelte";
import type { ToastSlots } from './toast';
declare const __propDef: {
    props: WidgetSlotContext<Widget<import("./toast.gen").ToastProps, import("./toast.gen").ToastState, import("./toast.gen").ToastApi, object, import("./toast.gen").ToastDirectives>>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: ToastSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ToastDefaultStructureProps = typeof __propDef.props;
export type ToastDefaultStructureEvents = typeof __propDef.events;
export type ToastDefaultStructureSlots = typeof __propDef.slots;
export default class ToastDefaultStructure extends SvelteComponent<ToastDefaultStructureProps, ToastDefaultStructureEvents, ToastDefaultStructureSlots> {
}
export {};
`;export{t as default};
