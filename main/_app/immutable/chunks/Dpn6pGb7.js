const o=`import {CarouselComponent, CarouselSlideDirective} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	imports: [CarouselComponent, CarouselSlideDirective],
	template: \`
		<div auCarousel [auSlidesData]="photos">
			<ng-template auCarouselSlide let-src="src">
				<img class="w-100" alt="random picsum" [src]="src" />
			</ng-template>
		</div>
	\`,
})
export default class DefaultCarouselComponent {
	readonly photos = [944, 1011, 984].map((n) => ({id: \`carousel-photo-\${n}\`, src: \`https://picsum.photos/id/\${n}/900/500\`}));
}
`;export{o as default};
