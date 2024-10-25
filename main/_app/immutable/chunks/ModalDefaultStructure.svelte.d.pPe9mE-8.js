const e=`import type { ModalContext } from './modal.gen';
declare class __sveltets_Render<Data> {
    props(): ModalContext<Data>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <Data>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<Data>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<Data>['props']>, ReturnType<__sveltets_Render<Data>['events']>, ReturnType<__sveltets_Render<Data>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<Data>['bindings']>;
    } & ReturnType<__sveltets_Render<Data>['exports']>;
    <Data>(internal: unknown, props: ReturnType<__sveltets_Render<Data>['props']> & {
        $$events?: ReturnType<__sveltets_Render<Data>['events']>;
    }): ReturnType<__sveltets_Render<Data>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const ModalDefaultStructure: $$IsomorphicComponent;
type ModalDefaultStructure<Data> = InstanceType<typeof ModalDefaultStructure<Data>>;
export default ModalDefaultStructure;
`;export{e as default};
