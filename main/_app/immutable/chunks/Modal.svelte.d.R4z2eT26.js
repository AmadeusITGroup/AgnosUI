const e=`import { SvelteComponentTyped } from "svelte";
declare class __sveltets_Render<Data> {
    props(): any;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): Slots<Data_1>;
}
export type ModalProps<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalSlots<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class Modal<Data> extends SvelteComponentTyped<ModalProps<Data>, ModalEvents<Data>, ModalSlots<Data>> {
    get api(): any;
}
export {};
`;export{e as default};
