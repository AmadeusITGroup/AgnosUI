const t=`import { SvelteComponent } from "svelte";
import type { ModalProps, ModalSlots, ModalApi } from './modal';
declare class __sveltets_Render<Data> {
    props(): {
        api?: ModalApi<Data> | undefined;
    } & Partial<ModalProps<Data>>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): ModalSlots<Data>;
}
export type ModalProps_<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalSlots_<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class Modal<Data> extends SvelteComponent<ModalProps_<Data>, ModalEvents<Data>, ModalSlots_<Data>> {
    get api(): ModalApi<Data>;
}
export {};
`;export{t as default};
