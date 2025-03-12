import {CarouselComponent, SlideDirective} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	imports: [CarouselComponent, SlideDirective],
	template: `
		<div auCarousel>
			@for (photo of photos; track photo) {
				<div auSlide>
					<img class="w-100" alt="random picsum" [src]="photo" />
				</div>
			}
		</div>
	`,
})
export default class DefaultCarouselComponent {
	readonly photos = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
