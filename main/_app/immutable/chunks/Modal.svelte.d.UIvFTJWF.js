const e=`import { SvelteComponentTyped } from "svelte";
import type { ModalProps as Props, ModalSlots as Slots } from '@agnos-ui/svelte-headless';
declare class __sveltets_Render<Data> {
    props(): {
        api?: import("@agnos-ui/svelte-headless").AdaptWidgetFactories<import("@agnos-ui/svelte-headless").ModalApi<Data>> | undefined;
    } & Partial<Props<Data>>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): Slots<Data>;
}
export type ModalProps<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalSlots<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class Modal<Data> extends SvelteComponentTyped<ModalProps<Data>, ModalEvents<Data>, ModalSlots<Data>> {
    get api(): import("@agnos-ui/svelte-headless").AdaptWidgetFactories<import("@agnos-ui/svelte-headless").ModalApi<Data>>;
}
export {};
`;export{e as default};
