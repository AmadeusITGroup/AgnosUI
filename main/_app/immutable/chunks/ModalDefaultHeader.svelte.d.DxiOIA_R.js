const e=`import { SvelteComponent } from "svelte";
import type { ModalSlots } from './modal';
declare class __sveltets_Render<Data> {
    props(): WidgetSlotContext<Widget<import("./modal.gen").ModalProps<Data_1>, import("./modal.gen").ModalState<Data_1>, import("./modal.gen").ModalApi<Data_1>, import("./modal.gen").ModalActions, import("./modal.gen").ModalDirectives>>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): ModalSlots;
}
export type ModalDefaultHeaderProps<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalDefaultHeaderEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalDefaultHeaderSlots<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class ModalDefaultHeader<Data> extends SvelteComponent<ModalDefaultHeaderProps<Data>, ModalDefaultHeaderEvents<Data>, ModalDefaultHeaderSlots<Data>> {
}
export {};
`;export{e as default};
