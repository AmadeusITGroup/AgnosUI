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
declare const PaginationDefaultStructure: $$__sveltets_2_IsomorphicComponent<WidgetSlotContext<Widget<import("./pagination.gen").PaginationProps, import("./pagination.gen").PaginationState, import("./pagination.gen").PaginationApi, import("./pagination.gen").PaginationDirectives>>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type PaginationDefaultStructure = InstanceType<typeof PaginationDefaultStructure>;
export default PaginationDefaultStructure;
`;export{t as default};
