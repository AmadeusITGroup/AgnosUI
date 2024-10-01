const n=`import type { PaginationProps } from './pagination.gen';
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
declare const Pagination: $$__sveltets_2_IsomorphicComponent<Partial<PaginationProps>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "page">;
type Pagination = InstanceType<typeof Pagination>;
export default Pagination;
`;export{n as default};
