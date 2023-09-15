const e=`import { SvelteComponentTyped } from "svelte";
import type { SelectProps as Props, SelectSlots as Slots, WidgetPropsEvents } from '@agnos-ui/svelte-headless';
declare class __sveltets_Render<Item> {
    props(): {
        items?: Item[] | undefined;
        matchFn?: ((item: Item, text: string) => boolean) | undefined;
        itemId?: ((item: Item) => string) | undefined;
        selected?: Item[] | undefined;
        filterText?: string | undefined;
        disabled?: boolean | undefined;
        opened?: boolean | undefined;
        loading?: boolean | undefined;
        className?: string | undefined;
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
