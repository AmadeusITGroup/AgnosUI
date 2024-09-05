import {Component, computed, type ElementRef, inject, input, type OnDestroy, type OnInit, signal, viewChild} from '@angular/core';
import type {Photo} from '@agnos-ui/common/samples/carousel/photo';
import {auBooleanAttribute, callWidgetFactory, createCarousel, UseDirective} from '@agnos-ui/angular-headless';
import {GalleryImageComponent} from './gallery-image.component';
import type {UnsubscribeFunction, UnsubscribeObject} from '@amadeus-it-group/tansu';
import expandSvg from '@agnos-ui/common/samples/carousel/expand.svg';
import compressSvg from '@agnos-ui/common/samples/carousel/compress.svg';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'app-gallery',
	standalone: true,
	templateUrl: 'gallery.component.html',
	imports: [UseDirective, GalleryImageComponent],
})
export class GalleryComponent implements OnInit, OnDestroy {
	readonly photos = input.required<Photo[]>();
	readonly withNavArrows = input(false, {transform: auBooleanAttribute});
	readonly withShowFullscreen = input(false, {transform: auBooleanAttribute});
	readonly aspectRatio = input(4 / 3);

	private readonly domSanitizer = inject(DomSanitizer);
	readonly expandSvg = this.domSanitizer.bypassSecurityTrustHtml(expandSvg);
	readonly compressSvg = this.domSanitizer.bypassSecurityTrustHtml(compressSvg);

	private readonly _mainCarousel = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'carousel',
	});
	get mainCarouselWidget() {
		return this._mainCarousel.widget;
	}
	get mainCarouselState() {
		return this._mainCarousel.ngState;
	}

	private readonly _thumbCarousel = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'carousel',
		defaultConfig: {
			dragFree: true,
			containScroll: 'keepSnaps',
		},
	});
	get thumbCarouselWidget() {
		return this._thumbCarousel.widget;
	}
	get thumbCarouselState() {
		return this._thumbCarousel.ngState;
	}

	readonly photosWithLoadState = computed(() => this.photos().map((photo, index) => ({...photo, loadRequested: signal(index === 0)})));
	readonly canFullScreen = computed(() => this.withShowFullscreen() && document?.fullscreenEnabled);
	readonly isFullScreen = signal(false);
	readonly mainContainer = viewChild.required<ElementRef>('mainContainer');
	private selectedScrollSnapSubscription?: UnsubscribeFunction & UnsubscribeObject;

	ngOnInit() {
		this._mainCarousel.ngInit();
		this._thumbCarousel.ngInit();
		this.selectedScrollSnapSubscription = this._mainCarousel.stores.selectedScrollSnap$.subscribe((selectedSnap: number) => {
			this.thumbCarouselWidget.api.scrollTo(selectedSnap);
			const photosWithLoadState = this.photosWithLoadState();
			photosWithLoadState[selectedSnap].loadRequested.set(true);
			if (selectedSnap > 0) {
				photosWithLoadState[selectedSnap - 1].loadRequested.set(true);
			}
			if (selectedSnap < photosWithLoadState.length - 1) {
				photosWithLoadState[selectedSnap + 1].loadRequested.set(true);
			}
		});
	}

	ngOnDestroy() {
		this.selectedScrollSnapSubscription?.();
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
		this.mainCarouselWidget.api.scrollTo(index, Math.abs(this.mainCarouselState().selectedScrollSnap - index) > 1);
	}

	showImage(index: number) {
		return Math.abs(this.mainCarouselState().selectedScrollSnap - index) <= 1;
	}
}
