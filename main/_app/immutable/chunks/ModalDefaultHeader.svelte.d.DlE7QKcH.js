const e=`declare class __sveltets_Render<Data> {
    props(): WidgetSlotContext<Widget<import("./modal.gen").ModalProps<Data_1>, import("./modal.gen").ModalState<Data_1>, import("./modal.gen").ModalApi<Data_1>, object, import("./modal.gen").ModalDirectives>>;
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
declare const ModalDefaultHeader: $$IsomorphicComponent;
type ModalDefaultHeader<Data> = InstanceType<typeof ModalDefaultHeader<Data>>;
export default ModalDefaultHeader;
`;export{e as default};
