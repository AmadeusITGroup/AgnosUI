const e=`import { SvelteComponentTyped } from "svelte";
import type { ModalSlots } from '@agnos-ui/svelte-headless';
declare const __propDef: {
    props: import("@agnos-ui/svelte-headless").WidgetSlotContext<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/svelte-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {};
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
