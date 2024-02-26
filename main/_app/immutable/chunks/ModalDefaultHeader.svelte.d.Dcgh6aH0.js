const e=`import { SvelteComponentTyped } from "svelte";
declare class __sveltets_Render<Data> {
    props(): ModalSlots<Data_1>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): ModalSlots<Data_1>;
}
export type ModalDefaultHeaderProps<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalDefaultHeaderEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalDefaultHeaderSlots<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class ModalDefaultHeader<Data> extends SvelteComponentTyped<ModalDefaultHeaderProps<Data>, ModalDefaultHeaderEvents<Data>, ModalDefaultHeaderSlots<Data>> {
}
export {};
`;export{e as default};
