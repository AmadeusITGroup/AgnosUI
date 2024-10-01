const e=`import type { SelectApi, SelectProps } from './select.gen';
declare class __sveltets_Render<Item> {
    props(): Partial<SelectProps<Item>>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "open" | "selected" | "filterText";
    exports(): {
        api: SelectApi<Item>;
    };
}
interface $$IsomorphicComponent {
    new <Item>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<Item>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<Item>['props']>, ReturnType<__sveltets_Render<Item>['events']>, ReturnType<__sveltets_Render<Item>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<Item>['bindings']>;
    } & ReturnType<__sveltets_Render<Item>['exports']>;
    <Item>(internal: unknown, props: ReturnType<__sveltets_Render<Item>['props']> & {
        $$events?: ReturnType<__sveltets_Render<Item>['events']>;
    }): ReturnType<__sveltets_Render<Item>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Select: $$IsomorphicComponent;
type Select<Item> = InstanceType<typeof Select<Item>>;
export default Select;
`;export{e as default};
