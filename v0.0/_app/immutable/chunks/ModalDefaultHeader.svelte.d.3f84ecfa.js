const e=`import { SvelteComponentTyped } from "svelte";
import type { ModalSlots } from '@agnos-ui/svelte-headless';
declare const __propDef: {
    props: {
        state: import("@agnos-ui/svelte-headless").AdaptPropsSlots<import("@agnos-ui/core").ModalState>;
        widget: Pick<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>, "api" | "actions" | "directives" | "stores" | "state$">;
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
