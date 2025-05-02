import {
	auBooleanAttribute,
	auNumberAttribute,
	BaseWidgetDirective,
	ComponentTemplate,
	type SlotContent,
	SlotDirective,
	UseDirective,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type {CarouselContext, CarouselSlideContext, CarouselWidget, CarouselProps} from './carousel.gen';
import {createCarousel} from './carousel.gen';
import type {InputSignal} from '@angular/core';
import {ChangeDetectionStrategy, Component, contentChild, Directive, inject, input, TemplateRef, viewChild} from '@angular/core';
import {callWidgetFactory} from '../../config';
import type {EmblaPluginType} from 'embla-carousel';

/**
 * Directive that provides a template reference for the carousel structure using the {@link CarouselContext}.
 */
@Directive({selector: 'ng-template[auCarouselStructure]'})
export class CarouselStructureDirective<SlideData extends {id: string}> {
	public templateRef = inject(TemplateRef<CarouselContext<SlideData>>);

	static ngTemplateContextGuard<SlideData extends {id: string}>(
		_dir: CarouselStructureDirective<SlideData>,
		context: unknown,
	): context is CarouselContext<SlideData> {
		return true;
	}
}

/**
 * Directive that provides a template reference for the carousel navigation using the {@link CarouselContext}.
 */
@Directive({selector: 'ng-template[auCarouselNavigation]'})
export class CarouselNavigationDirective<SlideData extends {id: string}> {
	public templateRef = inject(TemplateRef<CarouselContext<SlideData>>);

	static ngTemplateContextGuard<SlideData extends {id: string}>(
		_dir: CarouselNavigationDirective<SlideData>,
		context: unknown,
	): context is CarouselContext<SlideData> {
		return true;
	}
}

/**
 * Directive that provides a template reference for the carousel slide  using the {@link CarouselSlideContext}.
 */
@Directive({selector: 'ng-template[auCarouselSlide]'})
export class CarouselSlideDirective<SlideData extends {id: string}> {
	public templateRef = inject(TemplateRef<CarouselSlideContext<SlideData>>);

	static ngTemplateContextGuard<SlideData extends {id: string}>(
		_dir: CarouselSlideDirective<SlideData>,
		context: unknown,
	): context is CarouselSlideContext<SlideData> {
		return true;
	}
}

@Component({
	imports: [SlotDirective, CarouselStructureDirective, CarouselNavigationDirective, UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ng-template auCarouselNavigation #navigation let-state="state" let-api="api" let-directives="directives">
			@if (state.showNavigationArrows()) {
				@if (state.canScrollPrev()) {
					@let prevBtnClassPrefix = state.direction() === 'rtl' ? 'carousel-control-next' : 'carousel-control-prev';
					<button class="{{ prevBtnClassPrefix }}" [auUse]="directives.scrollPrev">
						<span class="{{ prevBtnClassPrefix }}-icon"></span>
					</button>
				}
				@if (state.canScrollNext()) {
					@let nextBtnClassPrefix = state.direction() === 'ltr' ? 'carousel-control-next' : 'carousel-control-prev';
					<button class="{{ nextBtnClassPrefix }}" [auUse]="directives.scrollNext">
						<span class="{{ nextBtnClassPrefix }}-icon"></span>
					</button>
				}
			}
			@if (state.showNavigationIndicators()) {
				<div class="carousel-indicators" [auUse]="directives.tabList">
					@for (slideData of state.slidesData(); track slideData.id; let index = $index) {
						<button
							data-bs-target="true"
							[attr.class]="state.selectedScrollSnap() === index ? 'active' : undefined"
							[auUse]="[directives.tabIndicator, {index, id: slideData.id}]"
						></button>
					}
				</div>
			}
		</ng-template>
		<ng-template auCarouselStructure #structure let-state="state" let-api="api" let-directives="directives">
			<ng-template [auSlot]="state.navigation()" [auSlotProps]="{state, api, directives}" />
			<div [auUse]="directives.container">
				@for (slideData of state.slidesData(); track slideData.id; let index = $index) {
					<div [auUse]="[directives.slide, {index, id: slideData.id}]">
						<ng-template [auSlot]="state.slide()" [auSlotProps]="toSlideContext(slideData, {state, api, directives})" />
					</div>
				}
			</div>
		</ng-template>
	`,
})
class CarouselDefaultSlotsComponent<SlideData extends {id: string}> {
	readonly structure = viewChild.required<TemplateRef<CarouselContext<SlideData>>>('structure');
	readonly navigation = viewChild.required<TemplateRef<CarouselContext<SlideData>>>('navigation');

	toSlideContext(slideData: SlideData, carouselContext: CarouselContext<SlideData>): CarouselSlideContext<SlideData> {
		return {
			...slideData,
			...carouselContext,
		};
	}
}
/**
 * The default slot for the structure
 */
export const carouselDefaultSlotStructure: SlotContent<CarouselContext<any>> = new ComponentTemplate(CarouselDefaultSlotsComponent, 'structure');
/**
 * The default slot for the navigation
 */
export const carouselDefaultSlotNavigation: SlotContent<CarouselContext<any>> = new ComponentTemplate(CarouselDefaultSlotsComponent, 'navigation');

/**
 * CarouselComponent is an Angular Component that extends {@link BaseWidgetDirective}<{@link CarouselWidget}>
 * to create a customizable carousel widget. It provides various inputs (see {@link CarouselProps})
 * to configure the appearance and behavior of the carousel.
 */
@Component({
	selector: '[auCarousel]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective],
	template: ` <ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" /> `,
})
export class CarouselComponent<SlideData extends {id: string}> extends BaseWidgetDirective<CarouselWidget<SlideData>> {
	/**
	 * Aria label for navigation indicators
	 */
	readonly ariaIndicatorLabel = input<(index: number) => string>(undefined, {alias: 'auAriaIndicatorLabel'});

	/**
	 * Aria label for previous button
	 */
	readonly ariaPrevLabel = input<string>(undefined, {alias: 'auAriaPrevLabel'});

	/**
	 * Aria label for next button
	 */
	readonly ariaNextLabel = input<string>(undefined, {alias: 'auAriaNextLabel'});

	/**
	 * Choose content direction between `ltr` and `rtl`
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#direction}
	 * @defaultValue `'ltr'`
	 */
	readonly direction = input<'ltr' | 'rtl'>(undefined, {alias: 'auDirection'});

	/**
	 * Enables momentum scrolling
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#dragFree}
	 * @defaultValue `false`
	 */
	readonly dragFree = input(undefined, {alias: 'auDragFree', transform: auBooleanAttribute});

	/**
	 * Drag threshold in pixels
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#dragThreshold}
	 * @defaultValue `10`
	 */
	readonly dragThreshold = input(undefined, {alias: 'auDragThreshold', transform: auNumberAttribute});

	/**
	 * Set scroll duration when triggered by any of the API methods
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#duration}
	 * @defaultValue `25`
	 */
	readonly duration = input(undefined, {alias: 'auDuration', transform: auNumberAttribute});

	/**
	 * Enables infinite looping
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#loop}
	 * @defaultValue `false`
	 */
	readonly loop = input(undefined, {alias: 'auLoop', transform: auBooleanAttribute});

	/**
	 * Allow the carousel to skip scroll snaps if it's dragged vigorously
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#skipsnaps}
	 * @defaultValue `false`
	 */
	readonly skipSnaps = input(undefined, {alias: 'auSkipSnaps', transform: auBooleanAttribute});

	/**
	 * If `true`, 'previous' and 'next' navigation arrows will be visible.
	 */
	readonly showNavigationArrows = input(undefined, {alias: 'auShowNavigationArrows', transform: auBooleanAttribute});

	/**
	 * If `true`, navigation indicators at the bottom of the slide will be visible.
	 */
	readonly showNavigationIndicators = input(undefined, {alias: 'auShowNavigationIndicators', transform: auBooleanAttribute});

	/**
	 * Plugins to extend the carousel with additional features
	 * @defaultValue `[]`
	 */
	readonly plugins: InputSignal<EmblaPluginType[] | undefined> = input<EmblaPluginType[]>(undefined, {alias: 'auPlugins'});

	/**
	 * Align the slides relative to the carousel viewport
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#align}
	 * @defaultValue `'center'`
	 */
	readonly align = input<'start' | 'center' | 'end'>(undefined, {alias: 'auAlign'});

	/**
	 * Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#container}
	 */
	readonly container = input<string | null>(undefined, {alias: 'auContainer'});

	/**
	 * Clear leading and trailing empty space that causes excessive scrolling
	 *
	 * @see {@link https://www.embla-carousel.com/api/options/#containScroll}
	 * @defaultValue `'trimSnaps'`
	 */
	readonly containScroll = input<false | 'trimSnaps' | 'keepSnaps'>(undefined, {alias: 'auContainScroll'});

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});

	/**
	 * Class name to apply to the container of the carousel.
	 *
	 * @defaultValue `''`
	 */
	readonly containerClass = input<string>(undefined, {alias: 'auContainerClass'});

	/**
	 * Class name to apply to each slide in the carousel.
	 *
	 * @defaultValue `''`
	 */
	readonly slideClass = input<string | ((slideContext: {id: string; index: number; active: boolean}) => string)>(undefined, {alias: 'auSlideClass'});

	/**
	 * The aria-live attribute value for the carousel container.
	 *
	 * @defaultValue `'polite'`
	 */
	readonly ariaLive = input<string>(undefined, {alias: 'auAriaLive'});

	/**
	 * The data for each slide in the carousel.
	 *
	 * @defaultValue `[]`
	 */
	readonly slidesData = input<SlideData[]>(undefined, {alias: 'auSlidesData'});

	/**
	 * The structure of the carousel.
	 *
	 * @defaultValue `undefined`
	 */
	readonly structure = input<SlotContent<CarouselContext<SlideData>>>(undefined, {alias: 'auStructure'});

	/**
	 * The navigation layer of the carousel.
	 *
	 * @defaultValue `undefined`
	 */
	readonly navigation = input<SlotContent<CarouselContext<SlideData>>>(undefined, {alias: 'auNavigation'});

	/**
	 * The content of each slide in the carousel.
	 *
	 * @defaultValue `undefined`
	 */
	readonly slide = input<SlotContent<CarouselSlideContext<SlideData>>>(undefined, {alias: 'auSlide'});

	readonly slotSlideFromContent = contentChild(CarouselSlideDirective<SlideData>);
	readonly slotStructureFromContent = contentChild(CarouselStructureDirective<SlideData>);
	readonly slotNavigationFromContent = contentChild(CarouselNavigationDirective<SlideData>);

	constructor() {
		super(
			callWidgetFactory<CarouselWidget<SlideData>>(createCarousel, {
				afterInit: (widget) => useDirectiveForHost(widget.directives.root),
				defaultConfig: {
					structure: carouselDefaultSlotStructure,
					navigation: carouselDefaultSlotNavigation,
				},
				slotTemplates: () => ({
					slide: this.slotSlideFromContent()?.templateRef,
					structure: this.slotStructureFromContent()?.templateRef,
					navigation: this.slotNavigationFromContent()?.templateRef,
				}),
			}),
		);
	}
}
