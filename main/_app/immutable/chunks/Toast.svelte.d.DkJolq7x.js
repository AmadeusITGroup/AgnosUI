const t=`import { SvelteComponentTyped } from "svelte";
import type { ToastApi, ToastProps, ToastSlots } from './toast';
declare const __propDef: {
    props: {
        api?: ToastApi | undefined;
    } & Partial<ToastProps>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: ToastSlots;
};
type ToastProps_ = typeof __propDef.props;
export { ToastProps_ as ToastProps };
export type ToastEvents = typeof __propDef.events;
type ToastSlots_ = typeof __propDef.slots;
export { ToastSlots_ as ToastSlots };
export default class Toast extends SvelteComponentTyped<ToastProps_, ToastEvents, ToastSlots_> {
    get api(): ToastApi;
}
`;export{t as default};
