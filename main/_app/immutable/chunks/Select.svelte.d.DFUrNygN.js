const e=`import { SvelteComponent } from "svelte";
import type { SelectApi, SelectProps, SelectSlots } from './select';
declare class __sveltets_Render<Item> {
    props(): {
        api?: SelectApi<Item> | undefined;
    } & Partial<SelectProps<Item>>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): SelectSlots<Item>;
}
export type SelectProps_<Item> = ReturnType<__sveltets_Render<Item>['props']>;
export type SelectEvents<Item> = ReturnType<__sveltets_Render<Item>['events']>;
export type SelectSlots_<Item> = ReturnType<__sveltets_Render<Item>['slots']>;
export default class Select<Item> extends SvelteComponent<SelectProps_<Item>, SelectEvents<Item>, SelectSlots_<Item>> {
    get api(): SelectApi<Item>;
}
export {};
`;export{e as default};
