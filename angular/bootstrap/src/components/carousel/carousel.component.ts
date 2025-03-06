import {auBooleanAttribute, auNumberAttribute, BaseWidgetDirective, UseDirective, useDirectiveForHost} from '@agnos-ui/angular-headless';
import {type CarouselWidget, createCarousel} from './carousel.gen';
import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {callWidgetFactory} from '../../config';

@Component({
	selector: '[auCarousel]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective],
	template: `
		@if (state.showNavigationArrows()) {
			@if (state.canScrollPrev()) {
				<button class="carousel-control-prev" [auUse]="directives.slidePrev">
					<span class="carousel-control-prev-icon"></span>
				</button>
			}
			@if (state.canScrollNext()) {
				<button class="carousel-control-next" [auUse]="directives.slideNext">
					<span class="carousel-control-next-icon"></span>
				</button>
			}
		}
		@if (state.showNavigationIndicators()) {
			<div class="carousel-indicators" role="tablist">
				@for (slideNode of state.slides(); track slideNode.id; let index = $index) {
					<button [auUse]="[directives.tabIndicator, {index, id: slideNode.id}]"></button>
				}
			</div>
		}
		<div class="au-carousel-container" aria-atomic="false" aria-live="polite"><ng-content /></div>
	`,
})
export class CarouselComponent extends BaseWidgetDirective<CarouselWidget> {
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

	constructor() {
		super(
			callWidgetFactory({
				factory: createCarousel,
				widgetName: 'carousel',
				afterInit: (widget) => useDirectiveForHost(widget.directives.root),
			}),
		);
	}
}
