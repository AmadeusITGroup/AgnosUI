const e=`import type { SliderSlotHandleContext } from './slider.gen';
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
declare const SliderDefaultHandle: $$__sveltets_2_IsomorphicComponent<SliderSlotHandleContext, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type SliderDefaultHandle = InstanceType<typeof SliderDefaultHandle>;
export default SliderDefaultHandle;
`;export{e as default};
