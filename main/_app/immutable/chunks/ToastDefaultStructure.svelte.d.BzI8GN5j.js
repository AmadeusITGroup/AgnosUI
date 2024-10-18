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
declare const ToastDefaultStructure: $$__sveltets_2_IsomorphicComponent<WidgetSlotContext<Widget<import("./toast.gen").ToastProps, import("./toast.gen").ToastState, import("./toast.gen").ToastApi, import("./toast.gen").ToastDirectives>>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type ToastDefaultStructure = InstanceType<typeof ToastDefaultStructure>;
export default ToastDefaultStructure;
`;export{t as default};
