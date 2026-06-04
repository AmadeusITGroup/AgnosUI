const e=`import type { CarouselProps, CarouselApi } from './carousel.gen';
declare function $$render<SlideData extends {
    id: string;
}>(): {
    props: Partial<CarouselProps<SlideData>>;
    exports: {
        api: CarouselApi;
    };
    bindings: "";
    slots: {};
    events: {};
};
declare class __sveltets_Render<SlideData extends {
    id: string;
}> {
    props(): ReturnType<typeof $$render<SlideData>>['props'];
    events(): ReturnType<typeof $$render<SlideData>>['events'];
    slots(): ReturnType<typeof $$render<SlideData>>['slots'];
    bindings(): "";
    exports(): {
        api: CarouselApi;
    };
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
declare const Carousel: $$IsomorphicComponent;
type Carousel<SlideData extends {
    id: string;
}> = InstanceType<typeof Carousel<SlideData>>;
export default Carousel;
`;export{e as default};
