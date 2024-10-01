const t=`import type { ToastApi, ToastProps } from './toast.gen';
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
declare const Toast: $$__sveltets_2_IsomorphicComponent<Partial<ToastProps>, {
    [evt: string]: CustomEvent<any>;
}, {}, {
    api: ToastApi;
}, "visible">;
type Toast = InstanceType<typeof Toast>;
export default Toast;
`;export{t as default};
