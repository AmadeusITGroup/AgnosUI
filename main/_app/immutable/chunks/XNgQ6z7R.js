const e=`import type { ModalProps, ModalApi } from './modal.gen';
declare function $$render<Data>(): {
    props: Partial<ModalProps<Data>>;
    exports: {
        api: ModalApi<Data>;
    };
    bindings: "visible";
    slots: {};
    events: {};
};
declare class __sveltets_Render<Data> {
    props(): ReturnType<typeof $$render<Data>>['props'];
    events(): ReturnType<typeof $$render<Data>>['events'];
    slots(): ReturnType<typeof $$render<Data>>['slots'];
    bindings(): "visible";
    exports(): {
        api: ModalApi<Data>;
    };
}
interface $$IsomorphicComponent {
    new <Data>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<Data>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<Data>['props']>, ReturnType<__sveltets_Render<Data>['events']>, ReturnType<__sveltets_Render<Data>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<Data>['bindings']>;
    } & ReturnType<__sveltets_Render<Data>['exports']>;
    <Data>(internal: unknown, props: ReturnType<__sveltets_Render<Data>['props']> & {}): ReturnType<__sveltets_Render<Data>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Modal: $$IsomorphicComponent;
type Modal<Data> = InstanceType<typeof Modal<Data>>;
export default Modal;
`;export{e as default};
