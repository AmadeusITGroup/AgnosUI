const e=`import { SvelteComponentTyped } from "svelte";
declare class __sveltets_Render<Data> {
    props(): WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
}
export type ModalDefaultHeaderProps<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalDefaultHeaderEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalDefaultHeaderSlots<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class ModalDefaultHeader<Data> extends SvelteComponentTyped<ModalDefaultHeaderProps<Data>, ModalDefaultHeaderEvents<Data>, ModalDefaultHeaderSlots<Data>> {
}
export {};
`;export{e as default};
