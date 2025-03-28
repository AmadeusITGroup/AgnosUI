import {CarouselComponent, CarouselSlideDirective} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

type Photo = {id: string; src: string; caption: {title: string; text: string}};

@Component({
	imports: [CarouselComponent, CarouselSlideDirective],
	template: `
		<div auCarousel [auSlidesData]="photos">
			<ng-template auCarouselSlide let-src="src" let-caption="caption">
				<img class="w-100" alt="random picsum" [style.aspect-ratio]="1.8 / 1" [src]="src" />
				<div class="carousel-caption d-none d-md-block">
					<h5>{{ caption.title }}</h5>
					<p>{{ caption.text }}</p>
				</div>
			</ng-template>
		</div>
	`,
})
export default class DefaultCarouselComponent {
	readonly photos: Photo[] = [
		{
			id: `carousel-default-944`,
			src: 'https://picsum.photos/id/944/900/500',
			caption: {title: 'First slide label', text: 'Some representative placeholder content for the first slide.'},
		},
		{
			id: `carousel-default-1011`,
			src: 'https://picsum.photos/id/1011/900/500',
			caption: {title: 'Second slide label', text: 'Some representative placeholder content for the second slide.'},
		},
		{
			id: `carousel-default-984`,
			src: 'https://picsum.photos/id/984/900/500',
			caption: {title: 'Third slide label', text: 'Some representative placeholder content for the third slide.'},
		},
	];
}
