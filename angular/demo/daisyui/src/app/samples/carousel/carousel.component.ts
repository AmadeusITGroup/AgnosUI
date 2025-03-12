import {
	auBooleanAttribute,
	BaseWidgetDirective,
	callWidgetFactory,
	createCarousel,
	UseDirective,
	type CarouselWidget,
} from '@agnos-ui/angular-headless';
import {Component, effect, inject, input, ChangeDetectionStrategy, linkedSignal} from '@angular/core';
import AutoPlay from 'embla-carousel-autoplay';
import previousSvg from '@agnos-ui/common/samples/carousel/previous.svg';
import nextSvg from '@agnos-ui/common/samples/carousel/next.svg';
import pauseSvg from '@agnos-ui/common/samples/carousel/pause.svg';
import playSvg from '@agnos-ui/common/samples/carousel/play.svg';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-carousel',
	templateUrl: 'carousel.component.html',
	imports: [UseDirective],
})
export class CarouselComponent extends BaseWidgetDirective<CarouselWidget> {
	readonly dragFree = input(false, {transform: auBooleanAttribute});
	readonly loop = input(true, {transform: auBooleanAttribute});
	readonly autoplay = input(true, {transform: auBooleanAttribute});
	readonly showNavigationIndicators = input(true, {transform: auBooleanAttribute});
	readonly showNavigationArrows = input(true, {transform: auBooleanAttribute});
	readonly direction = input<'rtl' | 'ltr'>('ltr');

	private readonly sanitizer = inject(DomSanitizer);
	readonly previousSvg = this.sanitizer.bypassSecurityTrustHtml(previousSvg);
	readonly nextSvg = this.sanitizer.bypassSecurityTrustHtml(nextSvg);
	readonly pauseSvg = this.sanitizer.bypassSecurityTrustHtml(pauseSvg);
	readonly playSvg = this.sanitizer.bypassSecurityTrustHtml(playSvg);

	readonly playing = linkedSignal(() => this.autoplay());

	constructor() {
		const widget = callWidgetFactory({
			factory: createCarousel,
			widgetName: 'carousel',
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
