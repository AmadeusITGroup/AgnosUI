import {
	auBooleanAttribute,
	BaseWidgetDirective,
	callWidgetFactory,
	createCarousel,
	UseDirective,
	type CarouselWidget,
} from '@agnos-ui/angular-headless';
import {NgTemplateOutlet} from '@angular/common';
import {Component, contentChild, Directive, effect, inject, input, TemplateRef} from '@angular/core';
import AutoPlay from 'embla-carousel-autoplay';

export interface CarouselSlideContext {
	$implicit: string;
}

@Directive({standalone: true, selector: 'ng-template[appCarouselSlide]'})
export class CarouselSlideDirective {
	public templateRef = inject(TemplateRef<CarouselSlideContext>);
	static ngTemplateContextGuard(_dir: CarouselSlideDirective, context: unknown): context is CarouselSlideContext {
		return true;
	}
}

@Component({
	selector: 'app-carousel',
	standalone: true,
	templateUrl: 'carousel.component.html',
	imports: [UseDirective, NgTemplateOutlet],
})
export class CarouselComponent<Item> extends BaseWidgetDirective<CarouselWidget> {
	readonly dragFree = input(false, {transform: auBooleanAttribute});
	readonly loop = input(true, {transform: auBooleanAttribute});
	readonly autoplay = input(true, {transform: auBooleanAttribute});
	readonly withNavIndicators = input(true, {transform: auBooleanAttribute});
	readonly withNavArrows = input(true, {transform: auBooleanAttribute});
	readonly items = input.required<Item[]>();

	readonly slideRef = contentChild.required(CarouselSlideDirective);

	readonly _widget = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'carousel',
	});

	constructor() {
		super();
		effect(() => {
			this._widget.patch({
				plugins: this.autoplay() ? [AutoPlay({playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true})] : [],
			});
		});
	}
}
