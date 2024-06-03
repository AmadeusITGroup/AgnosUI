const e=`import { SvelteComponent } from "svelte";
import { type AlertApi, type AlertProps, type AlertSlots } from './alert';
declare const __propDef: {
    props: {
        api?: AlertApi | undefined;
    } & Partial<AlertProps>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: AlertSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
type AlertProps_ = typeof __propDef.props;
export { AlertProps_ as AlertProps };
export type AlertEvents = typeof __propDef.events;
type AlertSlots_ = typeof __propDef.slots;
export { AlertSlots_ as AlertSlots };
export default class Alert extends SvelteComponent<AlertProps_, AlertEvents, AlertSlots_> {
    get api(): AlertApi;
}
`;export{e as default};
