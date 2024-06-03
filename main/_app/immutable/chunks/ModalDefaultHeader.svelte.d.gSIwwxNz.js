const e=`import { SvelteComponent } from "svelte";
import type { ModalContext, ModalSlots } from './modal';
declare class __sveltets_Render<Data> {
    props(): ModalContext<Data>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): ModalSlots<Data>;
}
export type ModalDefaultHeaderProps<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalDefaultHeaderEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalDefaultHeaderSlots<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class ModalDefaultHeader<Data> extends SvelteComponent<ModalDefaultHeaderProps<Data>, ModalDefaultHeaderEvents<Data>, ModalDefaultHeaderSlots<Data>> {
}
export {};
`;export{e as default};
