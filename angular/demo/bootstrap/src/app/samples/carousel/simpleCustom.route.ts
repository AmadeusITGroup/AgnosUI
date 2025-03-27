import {CarouselComponent, CarouselSlideDirective} from '@agnos-ui/angular-bootstrap';
import {Component, ViewEncapsulation} from '@angular/core';

type Photo = {id: string; src: string; className: string; aspectRatio: string; imgClass: string};

@Component({
	imports: [CarouselComponent, CarouselSlideDirective],
	template: `
		<div auCarousel [auSlidesData]="photos" auContainerClass="gap-2" class="custom-carousel" [auSlideClass]="slideClass">
			<ng-template auCarouselSlide let-src="src" let-aspectRatio="aspectRatio" let-imgClass="imgClass">
				<img class="w-100" [class]="imgClass" alt="random picsum" [style.aspect-ratio]="aspectRatio" [src]="src" />
			</ng-template>
		</div>
	`,
	styles: "@use '@agnos-ui/common/samples/carousel/custom.css';",
	encapsulation: ViewEncapsulation.None,
})
export default class SimpleCustomCarouselComponent {
	readonly photos: Photo[] = [
		{
			id: `carousel-simple-custom-944`,
			src: 'https://picsum.photos/id/944/900/500',
			className: 'basis-81',
			aspectRatio: '1.8 / 1',
			imgClass: 'rounded-5',
		},
		{
			id: `carousel-simple-custom-1011`,
			src: 'https://picsum.photos/id/1011/500/900',
			className: 'basis-25',
			aspectRatio: '1 / 1.8',
			imgClass: 'rounded-3',
		},
		{
			id: `carousel-simple-custom-984`,
			src: 'https://picsum.photos/id/984/900/500',
			className: ' basis-81',
			aspectRatio: '1.8 / 1',
			imgClass: 'rounded-5',
		},
	];
	readonly slideClass = ({index, active}: {index: number; active: boolean}) => this.photos[index].className + (active ? '' : ' opacity-50');
}
