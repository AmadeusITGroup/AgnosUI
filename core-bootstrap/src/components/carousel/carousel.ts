import type {ConfigValidator, PropsConfig, SlotContent, Widget, WidgetSlotContext} from '@agnos-ui/core/types';
import type {CarouselProps as CoreProps, CarouselState as CoreState, CarouselApi, CarouselDirectives} from '@agnos-ui/core/components/carousel';
import {createCarousel as createCoreCarousel, getCarouselDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/carousel';
import {true$} from '@agnos-ui/core/utils/stores';
import {computed, readable, type ReadableSignal} from '@amadeus-it-group/tansu';
import {mergeDirectives, createAttributesDirective} from '@agnos-ui/core/utils/directive';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {typeArray} from '@agnos-ui/core/utils/writables';

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
	 * The data for each slide in the carousel.
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
	slidesData: [],
	structure: undefined,
	navigation: undefined,
	slide: undefined,
};

const configValidator: ConfigValidator<CarouselExtraProps<any>> = {
	slidesData: typeArray,
	structure: undefined,
	navigation: undefined,
	slide: undefined,
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
export function createCarousel<SlideData extends {id: string}>(config?: PropsConfig<CarouselProps<SlideData>>): CarouselWidget<SlideData> {
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
				})),
			),
			tabIndicator: mergeDirectives(
				widget.directives.tabIndicator,
				createAttributesDirective((slide$: ReadableSignal<{index: number}>) => ({
					classNames: {
						active: computed(() => slide$().index === widget.stores.selectedScrollSnap$()),
					},
					attributes: {
						['data-bs-target']: readable(''),
					},
					events: {
						pointerdown: (e) => e.preventDefault(),
					},
				})),
			),
			scrollPrev: mergeDirectives(
				widget.directives.scrollPrev,
				createAttributesDirective(() => ({
					classNames: {
						'carousel-control-prev': true$,
					},
					events: {
						pointerdown: (e) => e.preventDefault(),
					},
				})),
			),
			scrollNext: mergeDirectives(
				widget.directives.scrollNext,
				createAttributesDirective(() => ({
					classNames: {
						'carousel-control-next': true$,
					},
					events: {
						pointerdown: (e) => e.preventDefault(),
					},
				})),
			),
		},
	};
}
