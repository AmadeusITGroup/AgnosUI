import {stateStores, true$, writablesForProps} from '../../utils/stores';
import type {ConfigValidator, Directive, PropsConfig, Widget, WidgetFactory} from '../../types';
import {bindDirective, browserDirective, createAttributesDirective, mergeDirectives} from '../../utils/directive';
import type {EmblaCarouselType, EmblaPluginsType, EmblaPluginType} from 'embla-carousel';
import EmblaCarousel from 'embla-carousel';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, readable, writable, asReadable} from '@amadeus-it-group/tansu';
import {createTypeEnum, typeArray, typeBoolean, typeFunction, typeNumber, typeString, typeStringOrNull} from '../../utils/writables';
import {createNavManager, type NavManagerItemConfig} from '../../services/navManager';
import {createWidgetFactory} from '../../utils/widget';

/**
 * Represents the Embla carousel options
 */
interface EmblaOptions {
	/**
	 * Align the slides relative to the carousel viewport
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#align}
	 * @defaultValue `'center'`
	 */
	align: 'start' | 'center' | 'end';
	/**
	 * Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#container}
	 *
	 * @defaultValue `null`
	 */
	container: string | null;
	/**
	 * Clear leading and trailing empty space that causes excessive scrolling
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#containScroll}
	 * @defaultValue `'trimSnaps'`
	 */
	containScroll: false | 'trimSnaps' | 'keepSnaps';
	/**
	 * Choose content direction between `ltr` and `rtl`
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#direction}
	 * @defaultValue `'ltr'`
	 */
	direction: 'ltr' | 'rtl';
	/**
	 * Enables momentum scrolling
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#dragFree}
	 * @defaultValue `false`
	 */
	dragFree: boolean;
	/**
	 * Drag threshold in pixels
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#dragThreshold}
	 * @defaultValue `10`
	 */
	dragThreshold: number;
	/**
	 * Set scroll duration when triggered by any of the API methods
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#duration}
	 * @defaultValue `25`
	 */
	duration: number;
	/**
	 * Enables infinite looping
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#loop}
	 * @defaultValue `false`
	 */
	loop: boolean;
	/**
	 * Allow the carousel to skip scroll snaps if it's dragged vigorously
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#skipsnaps}
	 * @defaultValue `false`
	 */
	skipSnaps: boolean;
}

interface CarouselCommonPropsState extends Pick<EmblaOptions, 'direction'> {
	/**
	 * If `true`, 'previous' and 'next' navigation arrows will be visible.
	 *
	 * @defaultValue `true`
	 */
	showNavigationArrows: boolean;
	/**
	 * If `true`, navigation indicators at the bottom of the slide will be visible.
	 *
	 * @defaultValue `true`
	 */
	showNavigationIndicators: boolean;
}

/**
 * Represents the properties for the carousel component.
 */
export interface CarouselProps extends EmblaOptions, CarouselCommonPropsState {
	/**
	 * Plugins to extend the carousel with additional features
	 * @defaultValue `[]`
	 */
	plugins: EmblaPluginType[];
	/**
	 * Aria label for navigation indicators
	 *
	 * @defaultValue
	 * ```ts
	 * (index: number) => `Select slide ${index + 1}`
	 * ```
	 */
	ariaIndicatorLabel: (index: number) => string;
	/**
	 * Aria label for previous button
	 *
	 * @defaultValue `'Select previous slide'`
	 */
	ariaPrevLabel: string;
	/**
	 * Aria label for next button
	 *
	 * @defaultValue `'Select next slide'`
	 */
	ariaNextLabel: string;
}

/**
 * Represents the state of a carousel component.
 */
export interface CarouselState extends CarouselCommonPropsState {
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
}

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
	 * A directive to be applied to a navigation button allowing to scroll to the previous slide.
	 */
	scrollPrev: Directive;
	/**
	 * A directive to be applied to a navigation button allowing to scroll to the next slide.
	 */
	scrollNext: Directive;
	/**
	 * A directive to be applied to each slide in the carousel.
	 */
	slide: Directive<{id: string; index: number}>;
	/**
	 * A directive to be applied to a tab list allowing to navigate to the corresponding slide.
	 * This directive adds the role `tablist` and is recommended to be used together with {@link tabIndicator}.
	 */
	tabList: Directive;
	/**
	 * A directive to be applied to a navigation indicator allowing to scroll to the corresponding slide.
	 * As this directive adds the role `tab` to the element, it is recommended to use it on a button or a link and the parent element should have the {@link tabList} directive attached.
	 */
	tabIndicator: Directive<{index: number; id: string; jump?: boolean}>;
}
/**
 * Represents a carousel widget with specific properties, state, API, and directives.
 */
export type CarouselWidget = Widget<CarouselProps, CarouselState, CarouselApi, CarouselDirectives>;

const defaultConfig: CarouselProps = {
	align: 'center',
	container: null,
	containScroll: 'trimSnaps',
	direction: 'ltr',
	dragFree: false,
	dragThreshold: 10,
	duration: 25,
	loop: false,
	skipSnaps: false,
	plugins: [],
	showNavigationArrows: true,
	showNavigationIndicators: true,
	ariaPrevLabel: 'Select previous slide',
	ariaNextLabel: 'Select next slide',
	ariaIndicatorLabel: (index: number) => `Select slide ${index + 1}`,
};

/**
 * Retrieve a shallow copy of the default Carousel config
 * @returns the default Carousel config
 */
export function getCarouselDefaultConfig(): CarouselProps {
	return {...defaultConfig};
}

const configValidator: ConfigValidator<CarouselProps> = {
	dragFree: typeBoolean,
	plugins: typeArray,
	align: createTypeEnum(['start', 'center', 'end']),
	container: typeStringOrNull,
	containScroll: createTypeEnum([false, 'trimSnaps', 'keepSnaps']),
	direction: createTypeEnum(['ltr', 'rtl']),
	dragThreshold: typeNumber,
	duration: typeNumber,
	loop: typeBoolean,
	skipSnaps: typeBoolean,
	showNavigationArrows: typeBoolean,
	showNavigationIndicators: typeBoolean,
	ariaPrevLabel: typeString,
	ariaNextLabel: typeString,
	ariaIndicatorLabel: typeFunction,
};

/**
 * An Embla Carousel widget factory.
 *
 * @internal
 * @param options$ - the store of Embla options
 * @param plugins$ - the store of Embla plugins
 * @returns the Embla carousel widget
 */
export function createEmblaCarousel(
	options$: ReadableSignal<Partial<EmblaOptions>>,
	plugins$?: ReadableSignal<EmblaPluginType[]>,
): {
	directive: Directive;
	stores: {
		scrolling$: ReadableSignal<boolean>;
		canScrollPrev$: ReadableSignal<boolean>;
		canScrollNext$: ReadableSignal<boolean>;
		selectedScrollSnap$: ReadableSignal<number>;
		initialized$: ReadableSignal<boolean>;
		slideNodes$: ReadableSignal<HTMLElement[]>;
	};
	api: EmblaCarouselType | undefined;
} {
	let emblaApi: EmblaCarouselType | undefined;

	const scrolling$ = writable(false);
	const canScrollPrev$ = writable(false);
	const canScrollNext$ = writable(true);
	const selectedScrollSnap$ = writable(0);
	const initialized$ = writable(false);
	const slideNodes$ = writable<HTMLElement[]>([]);

	const directiveArgs$ = computed(() => ({
		options: options$(),
		plugins: plugins$ ? plugins$() : [],
	}));

	return {
		directive: bindDirective(
			browserDirective((element: HTMLElement, {options, plugins}: {options: Partial<EmblaOptions>; plugins: EmblaPluginType[]}) => {
				if (emblaApi) {
					throw new Error('Only one Embla directive can be attached per carousel widget !');
				}
				emblaApi = EmblaCarousel(element, options, plugins);
				emblaApi.on('scroll', () => {
					scrolling$.set(true);
				});
				emblaApi.on('settle', () => {
					scrolling$.set(false);
				});
				emblaApi.on('select', (api) => {
					canScrollNext$.set(api.canScrollNext());
					canScrollPrev$.set(api.canScrollPrev());
					selectedScrollSnap$.set(api.selectedScrollSnap());
				});
				emblaApi.on('init', () => {
					initialized$.set(true);
				});
				emblaApi.on('reInit', (api) => {
					canScrollNext$.set(api.canScrollNext());
					canScrollPrev$.set(api.canScrollPrev());
					scrolling$.set(false);
					selectedScrollSnap$.set(api.selectedScrollSnap());
				});
				emblaApi.on('slidesChanged', (api) => {
					slideNodes$.set(api.slideNodes());
				});
				canScrollNext$.set(emblaApi.canScrollNext());
				canScrollPrev$.set(emblaApi.canScrollPrev());
				slideNodes$.set(emblaApi.slideNodes());

				return {
					update: ({options, plugins}: {options: Partial<EmblaOptions>; plugins: EmblaPluginType[]}) => {
						emblaApi!.reInit(options, plugins);
					},
					destroy: () => {
						emblaApi?.destroy();
						emblaApi = undefined;
						initialized$.set(false);
						scrolling$.set(false);
						canScrollPrev$.set(false);
						canScrollNext$.set(true);
						selectedScrollSnap$.set(0);
						slideNodes$.set([]);
					},
				};
			}),
			directiveArgs$,
		),
		stores: {
			scrolling$: asReadable(scrolling$),
			canScrollPrev$: asReadable(canScrollPrev$),
			canScrollNext$: asReadable(canScrollNext$),
			selectedScrollSnap$: asReadable(selectedScrollSnap$),
			initialized$: asReadable(initialized$),
			slideNodes$: asReadable(slideNodes$),
		},
		get api() {
			return emblaApi;
		},
	};
}

/**
 * Create an CarouselWidget with given config props
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
export const createCarousel: WidgetFactory<CarouselWidget> = createWidgetFactory('carousel', (config?: PropsConfig<CarouselProps>) => {
	const [
		{
			align$,
			container$,
			containScroll$,
			direction$,
			dragFree$,
			dragThreshold$,
			duration$,
			loop$,
			skipSnaps$,
			plugins$,
			ariaPrevLabel$,
			ariaNextLabel$,
			ariaIndicatorLabel$,
			showNavigationIndicators$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultConfig, config, configValidator);

	const emblaOptions$ = computed(() => ({
		align: align$(),
		container: container$(),
		containScroll: containScroll$(),
		direction: direction$(),
		dragFree: dragFree$(),
		dragThreshold: dragThreshold$(),
		duration: duration$(),
		loop: loop$(),
		skipSnaps: skipSnaps$(),
	}));

	const emblaCarousel = createEmblaCarousel(emblaOptions$, plugins$);
	const {
		stores: {slideNodes$, ...emblaStores},
	} = emblaCarousel;
	const {directive: navDirective, refreshElements, focusLeft, focusRight, focusFirst, focusLast} = createNavManager();
	const navManagerConfig: NavManagerItemConfig = {
		keys: {
			ArrowLeft: focusLeft,
			ArrowRight: focusRight,
			Home: focusFirst,
			End: focusLast,
		},
		selector: (node: HTMLElement) => node.querySelectorAll("[role='tab']"),
	};

	return {
		...stateStores({
			...emblaStores,
			...stateProps,
			direction$,
			showNavigationIndicators$,
		}),
		patch,
		api: {
			scrollPrev: (jump?: boolean) => {
				emblaCarousel.api?.scrollPrev?.(jump);
			},
			scrollNext: (jump?: boolean) => {
				emblaCarousel.api?.scrollNext?.(jump);
			},
			scrollTo: (index: number, jump?: boolean) => {
				emblaCarousel.api?.scrollTo?.(index, jump);
			},
			plugins: () => emblaCarousel.api?.plugins?.(),
			emblaApi: () => emblaCarousel.api,
		},
		directives: {
			root: mergeDirectives(
				emblaCarousel.directive,
				createAttributesDirective(() => ({
					classNames: {
						'au-carousel': true$,
					},
					attributes: {
						role: readable('region'),
						'aria-roledescription': readable('carousel'),
						dir: direction$,
					},
				})),
			),
			scrollPrev: createAttributesDirective(() => ({
				attributes: {
					'aria-label': ariaPrevLabel$,
					disabled: computed(() => !emblaCarousel.stores.canScrollPrev$() || undefined),
				},
				events: {
					click: () => emblaCarousel.api?.scrollPrev(),
					pointerdown: (event) => event.preventDefault(),
					touchstart: (event) => event.stopPropagation(),
				},
			})),
			scrollNext: createAttributesDirective(() => ({
				attributes: {
					'aria-label': ariaNextLabel$,
					disabled: computed(() => !emblaCarousel.stores.canScrollNext$() || undefined),
				},
				events: {
					click: () => emblaCarousel.api?.scrollNext(),
					pointerdown: (event) => event.preventDefault(),
					touchstart: (event) => event.stopPropagation(),
				},
			})),
			tabList: mergeDirectives(
				bindDirective(navDirective, readable(navManagerConfig)),
				browserDirective(() => {
					const unsubscribe = slideNodes$.subscribe(() => {
						refreshElements();
					});
					return {
						destroy: unsubscribe,
					};
				}),
				createAttributesDirective(() => ({
					attributes: {
						role: readable('tablist'),
					},
				})),
			),
			tabIndicator: createAttributesDirective((slide$: ReadableSignal<{id: string; index: number; jump?: boolean}>) => ({
				events: {
					click: () => {
						emblaCarousel.api?.scrollTo(slide$().index, slide$().jump ?? true);
					},
				},
				attributes: {
					'aria-label': computed(() => ariaIndicatorLabel$()(slide$().index)),
					'aria-selected': computed(() => (slide$().index === emblaCarousel.stores.selectedScrollSnap$() ? 'true' : undefined)),
					'aria-controls': computed(() => slide$().id),
					role: readable('tab'),
					tabindex: computed(() => (slide$().index === emblaCarousel.stores.selectedScrollSnap$() ? '0' : '-1')),
				},
			})),
			slide: createAttributesDirective((slide$: ReadableSignal<{id: string; index: number}>) => {
				const selected$ = computed(() => slide$().index === emblaCarousel.stores.selectedScrollSnap$());
				return {
					attributes: {
						id: computed(() => slide$().id),
						'aria-hidden': computed(() => (selected$() ? undefined : 'true')),
						role: computed(() => (showNavigationIndicators$() ? 'tabpanel' : 'group')),
						'aria-roledescription': computed(() => (showNavigationIndicators$() ? undefined : 'slide')),
						tabindex: computed(() => (showNavigationIndicators$() && selected$() ? '0' : undefined)),
					},
					classNames: {
						'au-carousel-slide': true$,
					},
				};
			}),
		},
	};
});
