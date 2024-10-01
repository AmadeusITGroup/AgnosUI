const n=`import type { RatingProps } from './rating.gen';
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
declare const Rating: $$__sveltets_2_IsomorphicComponent<Partial<RatingProps>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "rating">;
type Rating = InstanceType<typeof Rating>;
export default Rating;
`;export{n as default};
