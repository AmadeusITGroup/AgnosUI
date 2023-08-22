const e=`import { SvelteComponentTyped } from "svelte";
import type { WidgetPropsEvents } from '../utils';
import type { SelectProps as Props, SelectSlots as Slots } from './select';
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
    events(): WidgetPropsEvents<Props<Item>>;
    slots(): Slots<Item>;
}
export type SelectProps<Item> = ReturnType<__sveltets_Render<Item>['props']>;
export type SelectEvents<Item> = ReturnType<__sveltets_Render<Item>['events']>;
export type SelectSlots<Item> = ReturnType<__sveltets_Render<Item>['slots']>;
export default class Select<Item> extends SvelteComponentTyped<SelectProps<Item>, SelectEvents<Item>, SelectSlots<Item>> {
}
export {};
`;export{e as default};
