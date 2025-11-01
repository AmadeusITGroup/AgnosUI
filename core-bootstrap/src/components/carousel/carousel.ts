import type {ConfigValidator, Directive, PropsConfig, SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';
import type {
	CarouselProps as CoreProps,
	CarouselState as CoreState,
	CarouselApi,
	CarouselDirectives as CoreDirectives,
} from '@agnos-ui/core/components/carousel';
import {createCarousel as createCoreCarousel, getCarouselDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/carousel';
import {true$} from '@agnos-ui/core/utils/stores';
import {computed, readable, type ReadableSignal} from '@amadeus-it-group/tansu';
import {mergeDirectives, createAttributesDirective} from '@agnos-ui/core/utils/directive';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {typeArray, typeString} from '@agnos-ui/core/utils/writables';
import {createWidgetFactory} from '@agnos-ui/core/utils/widget';

export * from '@agnos-ui/core/components/carousel';

/**
 * Represents the context for a carousel.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
export type CarouselContext<SlideData extends {id: string}> = WidgetSlotContext<CarouselWidget<SlideData>>;

/**
 * Represents the context for a carousel slide.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
export type CarouselSlideContext<SlideData extends {id: string}> = WidgetSlotContext<CarouselWidget<SlideData>> & SlideData;

interface CarouselExtraProps<SlideData extends {id: string}> {
	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	className: string;
	/**
	 * Class name to apply to the container of the carousel.
	 *
	 * @defaultValue `''`
	 */
	containerClass: string;
	/**
	 * Class name to apply to each slide in the carousel.
	 *
	 * @defaultValue `''`
	 */
	slideClass: string | ((slideContext: {id: string; index: number; active: boolean}) => string);
	/**
	 * The data for each slide in the carousel.
	 *
	 * @defaultValue `[]`
	 */
	slidesData: SlideData[];
	/**
	 * The structure of the carousel.
	 */
	structure: SlotContent<CarouselContext<SlideData>>;
	/**
	 * The navigation layer of the carousel.
	 */
	navigation: SlotContent<CarouselContext<SlideData>>;
	/**
	 * The content of each slide in the carousel.
	 */
	slide: SlotContent<CarouselSlideContext<SlideData>>;
	/**
	 * The aria-live attribute value for the carousel container.
	 *
	 * @defaultValue `'polite'`
	 */
	ariaLive: string;
}

/**
 * Represents the state of a carousel component.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
export interface CarouselState<SlideData extends {id: string}> extends CoreState, CarouselExtraProps<SlideData> {}

/**
 * Interface representing the properties for a carousel component.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 */
export interface CarouselProps<SlideData extends {id: string}> extends CoreProps, CarouselExtraProps<SlideData> {}

/**
 * Represents the directives for a carousel component.
 */
export interface CarouselDirectives extends Omit<CoreDirectives, 'slide'> {
	/**
	 * A directive to be applied to each slide in the carousel.
	 */
	slide: Directive<{id: string; index: number}>;
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
export type CarouselWidget<SlideData extends {id: string}> = Widget<
	CarouselProps<SlideData>,
	CarouselState<SlideData>,
	CarouselApi,
	CarouselDirectives
>;

const defaultConfigExtraProps: CarouselExtraProps<any> = {
	className: '',
	containerClass: '',
	slideClass: '',
	slidesData: [],
	structure: undefined,
	navigation: undefined,
	slide: undefined,
	ariaLive: 'polite',
};

const configValidator: ConfigValidator<CarouselExtraProps<any>> = {
	className: typeString,
	containerClass: typeString,
	slideClass: undefined,
	slidesData: typeArray,
	structure: undefined,
	navigation: undefined,
	slide: undefined,
	ariaLive: typeString,
};

const coreOverride: Partial<CoreProps> = {
	container: '.au-carousel-container',
};

/**
 * Retrieve a shallow copy of the default Carousel config
 * @returns the default Carousel config
 */
export function getCarouselDefaultConfig(): CarouselProps<any> {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps} as any;
}

/**
 * Create a Carousel with given config props
 *
 * @template SlideData - The type of the data for each slide.
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
export const createCarousel: WidgetFactory<
	CarouselWidget<{id: string}>,
	<SlideData extends {id: string}>(config?: PropsConfig<CarouselProps<SlideData>>) => CarouselWidget<SlideData>
> = createWidgetFactory('carousel', <SlideData extends {id: string}>(config?: PropsConfig<CarouselProps<SlideData>>): CarouselWidget<SlideData> => {
	const widget = extendWidgetProps(createCoreCarousel, defaultConfigExtraProps, configValidator, coreOverride)(config);
	return {
		...widget,
		directives: {
			...widget.directives,
			root: mergeDirectives(
				widget.directives.root,
				createAttributesDirective(() => ({
					classNames: {
						carousel: true$,
					},
					attributes: {
						class: widget.stores.className$,
					},
				})),
			),
			slide: mergeDirectives(
				widget.directives.slide,
				createAttributesDirective((slideData$: ReadableSignal<{id: string; index: number}>) => ({
					attributes: {
						class: computed(() => {
							const slideClass = widget.stores.slideClass$();
							if (typeof slideClass === 'function') {
								const slideData = slideData$();
								return slideClass({
									id: slideData.id,
									index: slideData.index,
									active: slideData.index === widget.stores.selectedScrollSnap$(),
								});
							} else {
								return slideClass;
							}
						}),
					},
				})),
			),
			container: createAttributesDirective(() => ({
				classNames: {
					'au-carousel-container': true$,
				},
				attributes: {
					class: widget.stores.containerClass$,
					'aria-atomic': readable('false'),
					'aria-live': widget.stores.ariaLive$,
				},
			})),
		},
	};
});
