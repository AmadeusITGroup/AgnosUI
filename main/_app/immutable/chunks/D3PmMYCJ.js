const e=`import {
	auBooleanAttribute,
	BaseWidgetDirective,
	callWidgetFactory,
	createCarousel,
	UseDirective,
	type CarouselWidget,
} from '@agnos-ui/angular-headless';
import {Component, effect, inject, input, ChangeDetectionStrategy, linkedSignal, Directive, contentChild, TemplateRef} from '@angular/core';
import AutoPlay from 'embla-carousel-autoplay';
import previousSvg from './previous.svg';
import nextSvg from './next.svg';
import pauseSvg from './pause.svg';
import playSvg from './play.svg';
import {DomSanitizer} from '@angular/platform-browser';
import {NgTemplateOutlet} from '@angular/common';

interface Photo {
	src: string;
	alt: string;
	id: string;
}

@Directive({selector: 'ng-template[appCarouselSlide]'})
export class CarouselSlideDirective {
	readonly templateRef = inject(TemplateRef);
	static ngTemplateContextGuard(_dir: CarouselSlideDirective, context: unknown): context is Photo {
		return true;
	}
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-carousel',
	templateUrl: 'carousel.component.html',
	imports: [UseDirective, NgTemplateOutlet],
})
export class CarouselComponent extends BaseWidgetDirective<CarouselWidget> {
	readonly photos = input.required<Photo[]>();
	readonly dragFree = input(false, {transform: auBooleanAttribute});
	readonly loop = input(true, {transform: auBooleanAttribute});
	readonly autoplay = input(true, {transform: auBooleanAttribute});
	readonly showNavigationIndicators = input(true, {transform: auBooleanAttribute});
	readonly showNavigationArrows = input(true, {transform: auBooleanAttribute});
	readonly direction = input<'rtl' | 'ltr'>('ltr');

	readonly slideTemplate = contentChild.required(CarouselSlideDirective);

	private readonly sanitizer = inject(DomSanitizer);
	readonly previousSvg = this.sanitizer.bypassSecurityTrustHtml(previousSvg);
	readonly nextSvg = this.sanitizer.bypassSecurityTrustHtml(nextSvg);
	readonly pauseSvg = this.sanitizer.bypassSecurityTrustHtml(pauseSvg);
	readonly playSvg = this.sanitizer.bypassSecurityTrustHtml(playSvg);

	readonly playing = linkedSignal(() => this.autoplay());

	constructor() {
		const widget = callWidgetFactory(createCarousel, {
			defaultConfig: {
				container: '.container',
			},
		});
		super(widget);
		effect(() => {
			widget.patch({
				plugins: this.autoplay() ? [AutoPlay({playOnInit: true, stopOnFocusIn: true, delay: 2_000})] : [],
			});
		});
	}

	togglePlay() {
		if (!this.playing()) {
			this.api.plugins()!.autoplay.play();
		} else {
			this.api.plugins()!.autoplay.stop();
		}
		this.playing.update((val) => !val);
	}
}
`;export{e as default};
