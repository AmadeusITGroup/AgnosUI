const t=`import { SvelteComponentTyped } from "svelte";
declare class __sveltets_Render<Data> {
    props(): WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
}
export type ModalDefaultStructureProps<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalDefaultStructureEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalDefaultStructureSlots<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class ModalDefaultStructure<Data> extends SvelteComponentTyped<ModalDefaultStructureProps<Data>, ModalDefaultStructureEvents<Data>, ModalDefaultStructureSlots<Data>> {
}
export {};
`;export{t as default};
