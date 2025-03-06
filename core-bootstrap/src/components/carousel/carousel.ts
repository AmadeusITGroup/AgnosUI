import type {PropsConfig, Widget, WidgetFactory} from '@agnos-ui/core/types';
import type {CarouselProps as CoreProps, CarouselState, CarouselApi, CarouselDirectives} from '@agnos-ui/core/components/carousel';
import {createCarousel as createCoreCarousel} from '@agnos-ui/core/components/carousel';
import {isStore, true$} from '@agnos-ui/core/utils/stores';
import {asWritable, computed, readable, type ReadableSignal} from '@amadeus-it-group/tansu';
import {mergeDirectives, createAttributesDirective} from '@agnos-ui/core/utils/directive';

export * from '@agnos-ui/core/components/carousel';

/**
 * Represents the properties for the carousel component.
 */
export interface CarouselProps extends Omit<CoreProps, 'align' | 'container' | 'containScroll' | 'plugins'> {}

/**
 * Represents a carousel widget with specific properties, state, API, and directives.
 */
export type CarouselWidget = Widget<CarouselProps, CarouselState, CarouselApi, CarouselDirectives>;

/**
 * Create a Carousel with given config props
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
export const createCarousel: WidgetFactory<CarouselWidget> = (config?: PropsConfig<CarouselProps>) => {
	const storeToIgnore = asWritable(readable(undefined));
	const storesToIgnore = {
		align: storeToIgnore,
		container: asWritable(readable('.au-carousel-container')),
		containScroll: storeToIgnore,
	};
	const configConfig = config?.config;
	const coreCarousel = createCoreCarousel({
		props: {
			...config?.props,
			...storesToIgnore,
		},
		config: isStore(configConfig)
			? computed(() => ({
					...configConfig(),
					...Object.fromEntries(Object.keys(storesToIgnore).map((key) => [key, undefined])),
				}))
			: {
					...configConfig,
					...storesToIgnore,
				},
	});

	return {
		...coreCarousel,
		directives: {
			...coreCarousel.directives,
			root: mergeDirectives(
				coreCarousel.directives.root,
				createAttributesDirective(() => ({
					classNames: {
						carousel: true$,
					},
				})),
			),
			tabIndicator: mergeDirectives(
				coreCarousel.directives.tabIndicator,
				createAttributesDirective((slide$: ReadableSignal<{index: number}>) => ({
					classNames: {
						active: computed(() => slide$().index === coreCarousel.stores.selectedScrollSnap$()),
					},
					attributes: {
						['data-bs-target']: readable(''),
					},
				})),
			),
		},
	};
};
