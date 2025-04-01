const a=`import {CarouselComponent, CarouselNavigationDirective, CarouselSlideDirective} from '@agnos-ui/angular-bootstrap';
import {Component, signal, ViewEncapsulation} from '@angular/core';
import {AutoplayNavigationComponent} from './autoplay-navigation.component';
import AutoPlay from 'embla-carousel-autoplay';

type Photo = {id: string; src: string};

@Component({
	imports: [CarouselComponent, CarouselSlideDirective, CarouselNavigationDirective, AutoplayNavigationComponent],
	template: \`
		<div auCarousel [auSlidesData]="photos" class="autoplay-carousel" auLoop [auPlugins]="plugins" [auAriaLive]="isPlaying() ? 'off' : 'polite'">
			<ng-template auCarouselNavigation let-directives="directives" let-state="state" let-api="api">
				<app-autoplay-navigation [state]="state" [api]="api" [directives]="directives" (playingChange)="isPlaying.set($event)" />
			</ng-template>
			<ng-template auCarouselSlide let-src="src" let-caption="caption">
				<img class="w-100 rounded-5" alt="random picsum" [style.aspect-ratio]="1.8 / 1" [src]="src" />
			</ng-template>
		</div>
	\`,
	styles: "@use './autoplay.css';",
	encapsulation: ViewEncapsulation.None,
})
export default class DefaultCarouselComponent {
	readonly photos: Photo[] = [944, 1011, 984].map((n) => ({id: \`carousel-autoplay-\${n}\`, src: \`https://picsum.photos/id/\${n}/900/500\`}));
	readonly plugins = [AutoPlay({playOnInit: true, stopOnFocusIn: true, delay: 4_000})];

	readonly isPlaying = signal(true);
}
`;export{a as default};
