const e=`import { SvelteComponentTyped } from "svelte";
import type { WidgetPropsEvents, WidgetPropsSlots } from '../utils';
import type { SelectProps } from './select';
declare class __sveltets_Render<Item> {
    props(): {
        disabled?: boolean | undefined;
        className?: string | undefined;
        items?: Item[] | undefined;
        matchFn?: ((item: Item, text: string) => boolean) | undefined;
        itemId?: ((item: Item) => string) | undefined;
        selected?: Item[] | undefined;
        filterText?: string | undefined;
        opened?: boolean | undefined;
        loading?: boolean | undefined;
    };
    events(): WidgetPropsEvents<SelectProps<Item>>;
    slots(): WidgetPropsSlots<SelectProps<Item>>;
}
export type SelectProps<Item> = ReturnType<__sveltets_Render<Item>['props']>;
export type SelectEvents<Item> = ReturnType<__sveltets_Render<Item>['events']>;
export type SelectSlots<Item> = ReturnType<__sveltets_Render<Item>['slots']>;
export default class Select<Item> extends SvelteComponentTyped<SelectProps<Item>, SelectEvents<Item>, SelectSlots<Item>> {
}
export {};
`;export{e as default};
