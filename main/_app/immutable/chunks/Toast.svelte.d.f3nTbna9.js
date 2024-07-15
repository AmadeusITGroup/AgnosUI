const t=`import { SvelteComponent } from "svelte";
import type { ToastApi, ToastProps, ToastSlots } from './toast';
declare const __propDef: {
    props: {
        api?: ToastApi;
    } & Partial<ToastProps>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: ToastSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
type ToastProps_ = typeof __propDef.props;
export { ToastProps_ as ToastProps };
export type ToastEvents = typeof __propDef.events;
type ToastSlots_ = typeof __propDef.slots;
export { ToastSlots_ as ToastSlots };
export default class Toast extends SvelteComponent<ToastProps_, ToastEvents, ToastSlots_> {
    get api(): ToastApi;
}
`;export{t as default};
