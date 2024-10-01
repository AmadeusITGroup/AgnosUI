const t=`import type { AccordionItemApi, AccordionItemProps } from './accordion';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const Item: $$__sveltets_2_IsomorphicComponent<Partial<AccordionItemProps>, {
    [evt: string]: CustomEvent<any>;
}, {}, {
    api: AccordionItemApi;
}, "visible">;
type Item = InstanceType<typeof Item>;
export default Item;
`;export{t as default};
