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
declare const ProgressbarDefaultStructure: $$__sveltets_2_IsomorphicComponent<WidgetSlotContext<Widget<import("./progressbar.gen").ProgressbarProps, import("./progressbar.gen").ProgressbarState, object, object, import("./progressbar.gen").ProgressbarDirectives>>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type ProgressbarDefaultStructure = InstanceType<typeof ProgressbarDefaultStructure>;
export default ProgressbarDefaultStructure;
`;export{t as default};
