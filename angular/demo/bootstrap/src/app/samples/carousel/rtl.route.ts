import {CarouselComponent, CarouselSlideDirective} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	imports: [CarouselComponent, CarouselSlideDirective],
	template: `
		<div auCarousel [auSlidesData]="photos" auDirection="rtl">
			<ng-template auCarouselSlide let-src="src">
				<img class="w-100" alt="random picsum" [style.aspect-ratio]="1.8 / 1" [src]="src" />
			</ng-template>
		</div>
	`,
})
export default class RtlCarouselComponent {
	readonly photos = [944, 1011, 984].map((n) => ({id: `carousel-rtl-${n}`, src: `https://picsum.photos/id/${n}/900/500`}));
}
