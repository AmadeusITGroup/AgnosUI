import {Component, computed, effect, inject, Injector, input, signal, untracked, viewChild, ChangeDetectionStrategy} from '@angular/core';
import type {ElementRef, OnInit} from '@angular/core';
import type {Photo} from '@agnos-ui/common/samples/carousel/photo';
import {auBooleanAttribute, callWidgetFactory, createCarousel, UseDirective} from '@agnos-ui/angular-headless';
import {GalleryImageComponent} from './gallery-image.component';
import previousSvg from '@agnos-ui/common/samples/carousel/previous.svg';
import nextSvg from '@agnos-ui/common/samples/carousel/next.svg';
import expandSvg from '@agnos-ui/common/samples/carousel/expand.svg';
import compressSvg from '@agnos-ui/common/samples/carousel/compress.svg';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-gallery',
	templateUrl: 'gallery.component.html',
	imports: [UseDirective, GalleryImageComponent],
})
export class GalleryComponent implements OnInit {
	readonly photos = input.required<Photo[]>();
	readonly withNavArrows = input(false, {transform: auBooleanAttribute});
	readonly withShowFullscreen = input(false, {transform: auBooleanAttribute});
	readonly aspectRatio = input(4 / 3);

	private readonly domSanitizer = inject(DomSanitizer);
	readonly previousSvg = this.domSanitizer.bypassSecurityTrustHtml(previousSvg);
	readonly nextSvg = this.domSanitizer.bypassSecurityTrustHtml(nextSvg);
	readonly expandSvg = this.domSanitizer.bypassSecurityTrustHtml(expandSvg);
	readonly compressSvg = this.domSanitizer.bypassSecurityTrustHtml(compressSvg);

	private readonly _mainCarousel = callWidgetFactory(createCarousel);
	get mainCarouselApi() {
		return this._mainCarousel.api;
	}
	get mainCarouselDirectives() {
		return this._mainCarousel.directives;
	}
	get mainCarouselState() {
		return this._mainCarousel.state;
	}

	private readonly _thumbCarousel = callWidgetFactory(createCarousel, {
		defaultConfig: {
			dragFree: true,
			containScroll: 'keepSnaps',
		},
	});
	get thumbCarouselApi() {
		return this._thumbCarousel.api;
	}
	get thumbCarouselState() {
		return this._thumbCarousel.state;
	}
	get thumbCarouselDirectives() {
		return this._thumbCarousel.directives;
	}

	readonly photosWithLoadState = computed(() => this.photos().map((photo, index) => ({...photo, loadRequested: signal(index === 0)})));
	readonly canFullScreen = computed(() => this.withShowFullscreen() && document?.fullscreenEnabled);
	readonly isFullScreen = signal(false);
	readonly mainContainer = viewChild.required<ElementRef>('mainContainer');
	private readonly injector = inject(Injector);

	ngOnInit() {
		this._mainCarousel.ngInit();
		this._thumbCarousel.ngInit();
		effect(
			() => {
				const selectedSnap = this.mainCarouselState.selectedScrollSnap();
				untracked(() => {
					this.thumbCarouselApi.scrollTo(selectedSnap);
					const photosWithLoadState = this.photosWithLoadState();
					photosWithLoadState[selectedSnap].loadRequested.set(true);
					if (selectedSnap > 0) {
						photosWithLoadState[selectedSnap - 1].loadRequested.set(true);
					}
					if (selectedSnap < photosWithLoadState.length - 1) {
						photosWithLoadState[selectedSnap + 1].loadRequested.set(true);
					}
				});
			},
			{injector: this.injector},
		);
	}

	toggleFullScreen() {
		if (!this.isFullScreen()) {
			this.mainContainer().nativeElement.requestFullscreen();
		} else {
			void document.exitFullscreen();
		}
		this.isFullScreen.update((val) => !val);
	}

	scrollToSlide(index: number) {
		this.mainCarouselApi.scrollTo(index, Math.abs(this.mainCarouselState.selectedScrollSnap() - index) > 1);
	}
}
