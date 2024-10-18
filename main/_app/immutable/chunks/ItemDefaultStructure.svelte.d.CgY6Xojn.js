const t=`interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
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
declare const ItemDefaultStructure: $$__sveltets_2_IsomorphicComponent<WidgetSlotContext<Widget<import("./accordion.gen").AccordionItemProps, import("./accordion.gen").AccordionItemState, import("./accordion.gen").AccordionItemApi, object, import("./accordion.gen").AccordionItemDirectives>>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type ItemDefaultStructure = InstanceType<typeof ItemDefaultStructure>;
export default ItemDefaultStructure;
`;export{t as default};
