const e=`declare class __sveltets_Render<SlideData extends {
    id: string;
}> {
    props(): WidgetSlotContext<Widget<import("./carousel.gen").CarouselProps<SlideData_1>, import("./carousel.gen").CarouselState<SlideData_1>, import("./carousel.gen").CarouselApi, import("./carousel.gen").CarouselDirectives>>;
    events(): {};
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <SlideData extends {
        id: string;
    }>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<SlideData>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<SlideData>['props']>, ReturnType<__sveltets_Render<SlideData>['events']>, ReturnType<__sveltets_Render<SlideData>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<SlideData>['bindings']>;
    } & ReturnType<__sveltets_Render<SlideData>['exports']>;
    <SlideData extends {
        id: string;
    }>(internal: unknown, props: ReturnType<__sveltets_Render<SlideData>['props']> & {}): ReturnType<__sveltets_Render<SlideData>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const CarouselDefaultStructure: $$IsomorphicComponent;
type CarouselDefaultStructure<SlideData extends {
    id: string;
}> = InstanceType<typeof CarouselDefaultStructure<SlideData>>;
export default CarouselDefaultStructure;
`;export{e as default};
