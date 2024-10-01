const e=`import type { SliderProps } from './slider.gen';
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
declare const Slider: $$__sveltets_2_IsomorphicComponent<Partial<SliderProps>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "values">;
type Slider = InstanceType<typeof Slider>;
export default Slider;
`;export{e as default};
