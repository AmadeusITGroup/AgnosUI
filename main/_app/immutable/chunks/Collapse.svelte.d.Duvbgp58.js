const e=`import type { CollapseProps, CollapseApi } from './collapse.gen';
import type { Snippet } from 'svelte';
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
declare const Collapse: $$__sveltets_2_IsomorphicComponent<Partial<CollapseProps> & {
    children: Snippet;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {
    api: CollapseApi;
}, "">;
type Collapse = InstanceType<typeof Collapse>;
export default Collapse;
`;export{e as default};
