const t=`import { SvelteComponent } from "svelte";
import type { ModalSlots } from './modal';
declare class __sveltets_Render<Data> {
    props(): WidgetSlotContext<Widget<import("./modal.gen").ModalProps<Data_1>, import("./modal.gen").ModalState<Data_1>, import("./modal.gen").ModalApi<Data_1>, import("./modal.gen").ModalActions, import("./modal.gen").ModalDirectives>>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): ModalSlots;
}
export type ModalDefaultStructureProps<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalDefaultStructureEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalDefaultStructureSlots<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class ModalDefaultStructure<Data> extends SvelteComponent<ModalDefaultStructureProps<Data>, ModalDefaultStructureEvents<Data>, ModalDefaultStructureSlots<Data>> {
}
export {};
`;export{t as default};
