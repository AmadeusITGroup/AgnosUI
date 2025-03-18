const e=`import type { PropsConfig, SlotContent, Widget, WidgetSlotContext } from '@agnos-ui/core/types';
import type { CarouselProps as CoreProps, CarouselState as CoreState, CarouselApi, CarouselDirectives } from '@agnos-ui/core/components/carousel';
export * from '@agnos-ui/core/components/carousel';
/**
 * Represents the context for a carousel component.
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
     * The data for each slide in the carousel.
     */
    slidesData: SlideData[];
    /**
     * The content of each slide in the carousel.
     */
    slide: SlotContent<SlideData>;
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
