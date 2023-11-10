const e=`import { SvelteComponentTyped } from "svelte";
import type { ModalSlots } from '@agnos-ui/svelte-headless';
declare class __sveltets_Render<Data> {
    props(): import("@agnos-ui/svelte-headless").WidgetSlotContext<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget<Data>>> & Omit<Omit<import("@agnos-ui/core").ModalContext<Data>, keyof import("@agnos-ui/svelte-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {};
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): ModalSlots<Data>;
}
export type ModalDefaultHeaderProps<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalDefaultHeaderEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalDefaultHeaderSlots<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class ModalDefaultHeader<Data> extends SvelteComponentTyped<ModalDefaultHeaderProps<Data>, ModalDefaultHeaderEvents<Data>, ModalDefaultHeaderSlots<Data>> {
}
export {};
`;export{e as default};
