const t=`import { SvelteComponentTyped } from "svelte";
import type { ToastContext, ToastSlots } from './toast';
declare const __propDef: {
    props: ToastContext;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: ToastSlots;
};
export type ToastDefaultStructureProps = typeof __propDef.props;
export type ToastDefaultStructureEvents = typeof __propDef.events;
export type ToastDefaultStructureSlots = typeof __propDef.slots;
export default class ToastDefaultStructure extends SvelteComponentTyped<ToastDefaultStructureProps, ToastDefaultStructureEvents, ToastDefaultStructureSlots> {
}
export {};
`;export{t as default};
