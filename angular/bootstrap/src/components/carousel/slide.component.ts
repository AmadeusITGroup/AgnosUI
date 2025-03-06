import {BaseWidgetDirective, callWidgetFactory, useDirectiveForHost} from '@agnos-ui/angular-headless';
import {type CarouselSlideWidget} from './carousel.gen';
import {Directive, inject, input} from '@angular/core';
import {CarouselComponent} from './carousel.component';

@Directive({
	selector: '[auSlide]',
})
export class SlideDirective extends BaseWidgetDirective<CarouselSlideWidget> {
	/**
	 * the id of the slide
	 * @defaultValue `''`
	 */
	readonly id = input<string>(undefined, {alias: 'auId'});

	constructor() {
		super(
			callWidgetFactory({
				factory: (arg) => inject(CarouselComponent).api.registerSlide(arg),
				afterInit: (widget) => {
					useDirectiveForHost(widget.directives.root);
				},
			}),
		);
	}
}
