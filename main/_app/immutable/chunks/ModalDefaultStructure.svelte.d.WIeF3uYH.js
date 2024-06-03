const t=`import { SvelteComponent } from "svelte";
import type { ModalContext, ModalSlots } from './modal';
declare class __sveltets_Render<Data> {
    props(): ModalContext<Data>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): ModalSlots<Data>;
}
export type ModalDefaultStructureProps<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalDefaultStructureEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalDefaultStructureSlots<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class ModalDefaultStructure<Data> extends SvelteComponent<ModalDefaultStructureProps<Data>, ModalDefaultStructureEvents<Data>, ModalDefaultStructureSlots<Data>> {
}
export {};
`;export{t as default};
