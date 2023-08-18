const e=`import { SvelteComponentTyped } from "svelte";
import type { ModalSlots } from './modal';
declare const __propDef: {
    props: {
        state: import("..").AdaptPropsSlots<import("core/dist/lib").ModalState>;
        widget: Pick<import("..").AdaptWidgetSlots<import("core/dist/lib").ModalWidget>, "api" | "actions" | "directives" | "state$" | "stores">;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: ModalSlots;
};
export type ModalDefaultHeaderProps = typeof __propDef.props;
export type ModalDefaultHeaderEvents = typeof __propDef.events;
export type ModalDefaultHeaderSlots = typeof __propDef.slots;
export default class ModalDefaultHeader extends SvelteComponentTyped<ModalDefaultHeaderProps, ModalDefaultHeaderEvents, ModalDefaultHeaderSlots> {
}
export {};
`;export{e as default};
