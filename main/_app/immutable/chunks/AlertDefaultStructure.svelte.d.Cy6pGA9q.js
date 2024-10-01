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
declare const AlertDefaultStructure: $$__sveltets_2_IsomorphicComponent<WidgetSlotContext<Widget<import("./alert.gen").AlertProps, import("./alert.gen").AlertState, import("./alert.gen").AlertApi, object, import("./alert.gen").AlertDirectives>>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type AlertDefaultStructure = InstanceType<typeof AlertDefaultStructure>;
export default AlertDefaultStructure;
`;export{t as default};
