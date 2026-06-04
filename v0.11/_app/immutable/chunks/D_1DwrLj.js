const e=`import type { SlotContent } from './types';
declare function $$render<Props extends object>(): {
    props: {
        content: SlotContent<Props>;
        props: Props;
    };
    exports: {};
    bindings: "";
    slots: {};
    events: {};
};
declare class __sveltets_Render<Props extends object> {
    props(): ReturnType<typeof $$render<Props>>['props'];
    events(): ReturnType<typeof $$render<Props>>['events'];
    slots(): ReturnType<typeof $$render<Props>>['slots'];
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <Props extends object>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<Props>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<Props>['props']>, ReturnType<__sveltets_Render<Props>['events']>, ReturnType<__sveltets_Render<Props>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<Props>['bindings']>;
    } & ReturnType<__sveltets_Render<Props>['exports']>;
    <Props extends object>(internal: unknown, props: ReturnType<__sveltets_Render<Props>['props']> & {}): ReturnType<__sveltets_Render<Props>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Slot: $$IsomorphicComponent;
type Slot<Props extends object> = InstanceType<typeof Slot<Props>>;
export default Slot;
`;export{e as default};
