const e=`import type { ModalContext } from './modal.gen';
declare class __sveltets_Render<Data> {
    props(): ModalContext<Data>;
    events(): {};
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <Data>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<Data>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<Data>['props']>, ReturnType<__sveltets_Render<Data>['events']>, ReturnType<__sveltets_Render<Data>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<Data>['bindings']>;
    } & ReturnType<__sveltets_Render<Data>['exports']>;
    <Data>(internal: unknown, props: ReturnType<__sveltets_Render<Data>['props']> & {}): ReturnType<__sveltets_Render<Data>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const ModalDefaultHeader: $$IsomorphicComponent;
type ModalDefaultHeader<Data> = InstanceType<typeof ModalDefaultHeader<Data>>;
export default ModalDefaultHeader;
`;export{e as default};