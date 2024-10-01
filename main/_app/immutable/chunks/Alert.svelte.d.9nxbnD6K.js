const t=`import { type AlertApi, type AlertProps } from './alert.gen';
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
declare const Alert: $$__sveltets_2_IsomorphicComponent<Partial<AlertProps>, {
    [evt: string]: CustomEvent<any>;
}, {}, {
    api: AlertApi;
}, "visible">;
type Alert = InstanceType<typeof Alert>;
export default Alert;
`;export{t as default};
