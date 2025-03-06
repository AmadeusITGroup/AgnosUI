import type {CarouselSlideWidget} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, callWidgetFactory, useDirectiveForHost} from '@agnos-ui/angular-headless';
import {Directive, inject} from '@angular/core';
import {CarouselComponent} from './carousel.component';

@Directive({
	selector: 'div[appSlide]',
	host: {
		class: 'basis-full shrink-0 grow-0',
	},
})
export class SlideDirective extends BaseWidgetDirective<CarouselSlideWidget> {
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
