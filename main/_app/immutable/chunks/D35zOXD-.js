const e=`import type { PropsConfig, WidgetSlotContext, SlotContent, Widget, Directive } from '@agnos-ui/react-headless/types';
import type { EmblaPluginType, EmblaPluginsType, EmblaCarouselType } from 'embla-carousel';
/**
 * Retrieve a shallow copy of the default Carousel config
 * @returns the default Carousel config
 */
declare const export_getCarouselDefaultConfig: () => CarouselProps<any>;
export { export_getCarouselDefaultConfig as getCarouselDefaultConfig };
/**
 * Create a Carousel with given config props
 *
 * @template SlideData - The type of the data for each slide.
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
declare const export_createCarousel: <SlideData extends {
    id: string;
}>(config?: PropsConfig<CarouselProps<SlideData>>) => CarouselWidget<SlideData>;
export { export_createCarousel as createCarousel };
/**
 * Represents the context for a carousel component.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
export type CarouselSlideContext<SlideData extends {
    id: string;
}> = WidgetSlotContext<CarouselWidget<SlideData>> & SlideData;
/**
 * Represents the state of a carousel component.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
export interface CarouselState<SlideData extends {
    id: string;
}> {
    /**
     * is the carousel currently scrolling
     */
    scrolling: boolean;
    /**
     * can carousel scroll to previous slide
     */
    canScrollPrev: boolean;
    /**
     * can carousel scroll to next slide
     */
    canScrollNext: boolean;
    /**
     * selected scroll snap
     */
    selectedScrollSnap: number;
    /**
     * is the carousel initialized
     */
    initialized: boolean;
    /**
     * If \`true\`, 'previous' and 'next' navigation arrows will be visible.
     */
    showNavigationArrows: boolean;
    /**
     * If \`true\`, navigation indicators at the bottom of the slide will be visible.
     */
    showNavigationIndicators: boolean;
    /**
     * Choose content direction between \`ltr\` and \`rtl\`
     *
     * @see {@link https://www.embla-carousel.com/api/options/#direction}
     * @defaultValue \`'ltr'\`
     */
    direction: 'ltr' | 'rtl';
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
 * Interface representing the properties for a carousel component.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
export interface CarouselProps<SlideData extends {
    id: string;
}> {
    /**
     * Plugins to extend the carousel with additional features
     * @defaultValue \`[]\`
     */
    plugins: EmblaPluginType[];
    /**
     * Aria label for navigation indicators
     */
    ariaIndicatorLabel: (index: number) => string;
    /**
     * Aria label for previous button
     */
    ariaPrevLabel: string;
    /**
     * Aria label for next button
     */
    ariaNextLabel: string;
    /**
     * Align the slides relative to the carousel viewport
     *
     * @see {@link https://www.embla-carousel.com/api/options/#align}
     * @defaultValue \`'center'\`
     */
    align: 'start' | 'center' | 'end';
    /**
     * Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.
     *
     * @see {@link https://www.embla-carousel.com/api/options/#container}
     */
    container: string | null;
    /**
     * Clear leading and trailing empty space that causes excessive scrolling
     *
     * @see {@link https://www.embla-carousel.com/api/options/#containScroll}
     * @defaultValue \`'trimSnaps'\`
     */
    containScroll: false | 'trimSnaps' | 'keepSnaps';
    /**
     * Choose content direction between \`ltr\` and \`rtl\`
     *
     * @see {@link https://www.embla-carousel.com/api/options/#direction}
     * @defaultValue \`'ltr'\`
     */
    direction: 'ltr' | 'rtl';
    /**
     * Enables momentum scrolling
     *
     * @see {@link https://www.embla-carousel.com/api/options/#dragFree}
     * @defaultValue \`false\`
     */
    dragFree: boolean;
    /**
     * Drag threshold in pixels
     *
     * @see {@link https://www.embla-carousel.com/api/options/#dragThreshold}
     * @defaultValue \`10\`
     */
    dragThreshold: number;
    /**
     * Set scroll duration when triggered by any of the API methods
     *
     * @see {@link https://www.embla-carousel.com/api/options/#duration}
     * @defaultValue \`25\`
     */
    duration: number;
    /**
     * Enables infinite looping
     *
     * @see {@link https://www.embla-carousel.com/api/options/#loop}
     * @defaultValue \`false\`
     */
    loop: boolean;
    /**
     * Allow the carousel to skip scroll snaps if it's dragged vigorously
     *
     * @see {@link https://www.embla-carousel.com/api/options/#skipsnaps}
     * @defaultValue \`false\`
     */
    skipSnaps: boolean;
    /**
     * If \`true\`, 'previous' and 'next' navigation arrows will be visible.
     */
    showNavigationArrows: boolean;
    /**
     * If \`true\`, navigation indicators at the bottom of the slide will be visible.
     */
    showNavigationIndicators: boolean;
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
 * Represents a carousel widget with specific properties, state, API, and directives.
 *
 * @template SlideData - The type of the data for each slide.
 */
export type CarouselWidget<SlideData extends {
    id: string;
}> = Widget<CarouselProps<SlideData>, CarouselState<SlideData>, CarouselApi, CarouselDirectives>;
/**
 * Represents the API for a carousel component.
 */
export interface CarouselApi {
    /**
     * Scroll to the previous snap point if possible.
     * @param jump - scroll instantly
     */
    scrollPrev: (jump?: boolean) => void;
    /**
     * Scroll to the next snap point if possible.
     * @param jump - scroll instantly
     */
    scrollNext: (jump?: boolean) => void;
    /**
     * Scroll to a snap point by index
     * @param index - the snap point index
     * @param jump - scroll instantly
     */
    scrollTo: (index: number, jump?: boolean) => void;
    /**
     * Retrieve the enabled plugins
     */
    plugins: () => EmblaPluginsType | undefined;
    /**
     * Retrieve the inner EmblaApi object
     */
    emblaApi: () => EmblaCarouselType | undefined;
}
/**
 * Represents the directives for a carousel component.
 */
export interface CarouselDirectives {
    /**
     * the root directive
     */
    root: Directive;
    /**
     * A directive to be applied to a navigation button allowing to slide to the previous slide.
     */
    scrollPrev: Directive;
    /**
     * A directive to be applied to a navigation button allowing to slide to the next slide.
     */
    scrollNext: Directive;
    /**
     * A directive to be applied to each slide in the carousel.
     */
    slide: Directive<{
        id: string;
        index: number;
    }>;
    /**
     * A directive to be applied to a navigation indicator allowing to slide to the corresponding slide.
     * As this directive adds the role \`tab\` to the element, it is recommended to use it on a button or a link and the parent element should have the role \`tablist\`.
     */
    tabIndicator: Directive<{
        index: number;
        id: string;
        jump?: boolean;
    }>;
}
`;export{e as default};
