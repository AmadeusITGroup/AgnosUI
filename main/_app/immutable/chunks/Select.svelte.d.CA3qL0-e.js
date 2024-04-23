const e=`import { SvelteComponentTyped } from "svelte";
import type { SelectProps, SelectSlots, SelectApi } from './select';
declare class __sveltets_Render<Item> {
    props(): {
        api?: SelectApi<Item> | undefined;
    } & Partial<SelectProps<Item>>;
    events(): {
        mousedown: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): SelectSlots<Item>;
}
export type SelectProps_<Item> = ReturnType<__sveltets_Render<Item>['props']>;
export type SelectEvents<Item> = ReturnType<__sveltets_Render<Item>['events']>;
export type SelectSlots_<Item> = ReturnType<__sveltets_Render<Item>['slots']>;
export default class Select<Item> extends SvelteComponentTyped<SelectProps_<Item>, SelectEvents<Item>, SelectSlots_<Item>> {
    get api(): SelectApi<Item>;
}
export {};
`;export{e as default};
