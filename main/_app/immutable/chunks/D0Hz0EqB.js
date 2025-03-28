const e=`import type { Directive, PropsConfig, SlotContent, Widget, WidgetSlotContext } from '@agnos-ui/core/types';
import type { CarouselProps as CoreProps, CarouselState as CoreState, CarouselApi, CarouselDirectives as CoreDirectives } from '@agnos-ui/core/components/carousel';
export * from '@agnos-ui/core/components/carousel';
/**
 * Represents the context for a carousel.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
export type CarouselContext<SlideData extends {
    id: string;
}> = WidgetSlotContext<CarouselWidget<SlideData>>;
/**
 * Represents the context for a carousel slide.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
export type CarouselSlideContext<SlideData extends {
    id: string;
}> = WidgetSlotContext<CarouselWidget<SlideData>> & SlideData;
interface CarouselExtraProps<SlideData extends {
    id: string;
}> {
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Class name to apply to the container of the carousel.
     *
     * @defaultValue \`''\`
     */
    containerClass: string;
    /**
     * Class name to apply to each slide in the carousel.
     *
     * @defaultValue \`''\`
     */
    slideClass: string | ((slideContext: {
        id: string;
        index: number;
        active: boolean;
    }) => string);
    /**
     * The data for each slide in the carousel.
     *
     * @defaultValue \`[]\`
     */
    slidesData: SlideData[];
    /**
     * The structure of the carousel.
     *
     * @defaultValue \`undefined\`
     */
    structure: SlotContent<CarouselContext<SlideData>>;
    /**
     * The navigation layer of the carousel.
     *
     * @defaultValue \`undefined\`
     */
    navigation: SlotContent<CarouselContext<SlideData>>;
    /**
     * The content of each slide in the carousel.
     *
     * @defaultValue \`undefined\`
     */
    slide: SlotContent<CarouselSlideContext<SlideData>>;
    /**
     * The aria-live attribute value for the carousel container.
     *
     * @defaultValue \`'polite'\`
     */
    ariaLive: string;
}
/**
 * Represents the state of a carousel component.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
export interface CarouselState<SlideData extends {
    id: string;
}> extends CoreState, CarouselExtraProps<SlideData> {
}
/**
 * Interface representing the properties for a carousel component.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
export interface CarouselProps<SlideData extends {
    id: string;
}> extends CoreProps, CarouselExtraProps<SlideData> {
}
/**
 * Represents the directives for a carousel component.
 */
export interface CarouselDirectives extends Omit<CoreDirectives, 'slide'> {
    /**
     * A directive to be applied to each slide in the carousel.
     */
    slide: Directive<{
        id: string;
        index: number;
    }>;
    /**
     * A directive to be applied to container of the carousel.
     */
    container: Directive;
}
/**
 * Represents a carousel widget with specific properties, state, API, and directives.
 *
 * @template SlideData - The type of the data for each slide.
 */
export type CarouselWidget<SlideData extends {
    id: string;
}> = Widget<CarouselProps<SlideData>, CarouselState<SlideData>, CarouselApi, CarouselDirectives>;
/**
 * Retrieve a shallow copy of the default Carousel config
 * @returns the default Carousel config
 */
export declare function getCarouselDefaultConfig(): CarouselProps<any>;
/**
 * Create a Carousel with given config props
 *
 * @template SlideData - The type of the data for each slide.
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
export declare function createCarousel<SlideData extends {
    id: string;
}>(config?: PropsConfig<CarouselProps<SlideData>>): CarouselWidget<SlideData>;
`;export{e as default};
