const e=`import { SvelteComponentTyped } from "svelte";
import type { SelectProps as Props, SelectSlots as Slots } from '@agnos-ui/svelte-headless';
declare class __sveltets_Render<Item> {
    props(): Partial<Props<Item>>;
    events(): {
        mousedown: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): Slots<Item>;
}
export type SelectProps<Item> = ReturnType<__sveltets_Render<Item>['props']>;
export type SelectEvents<Item> = ReturnType<__sveltets_Render<Item>['events']>;
export type SelectSlots<Item> = ReturnType<__sveltets_Render<Item>['slots']>;
export default class Select<Item> extends SvelteComponentTyped<SelectProps<Item>, SelectEvents<Item>, SelectSlots<Item>> {
}
export {};
`;export{e as default};
