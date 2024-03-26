const e=`import { SvelteComponentTyped } from "svelte";
declare class __sveltets_Render<Item> {
    props(): any;
    events(): {
        mousedown: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): Slots<Item_1>;
}
export type SelectProps<Item> = ReturnType<__sveltets_Render<Item>['props']>;
export type SelectEvents<Item> = ReturnType<__sveltets_Render<Item>['events']>;
export type SelectSlots<Item> = ReturnType<__sveltets_Render<Item>['slots']>;
export default class Select<Item> extends SvelteComponentTyped<SelectProps<Item>, SelectEvents<Item>, SelectSlots<Item>> {
    get api(): any;
}
export {};
`;export{e as default};
