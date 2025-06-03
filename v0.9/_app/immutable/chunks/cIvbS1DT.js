const e=`import {Component, signal} from '@angular/core';
import {CarouselComponent, CarouselSlideDirective} from './carousel.component';
import {FormsModule} from '@angular/forms';

@Component({
	template: \`
		<div class="w-full flex justify-center">
			<div class="max-w-[600px] grow">
				<app-carousel
					[showNavigationArrows]="showNavArrows()"
					[showNavigationIndicators]="showNavIndicators()"
					[loop]="loop()"
					[dragFree]="dragFree()"
					[autoplay]="autoplay() && loop()"
					[direction]="rtl() ? 'rtl' : 'ltr'"
					[photos]="photos"
				>
					<ng-template appCarouselSlide let-src="src" let-alt="alt">
						<img class="select-none object-contain aspect-[4/3] w-full" [src]="src" [alt]="alt" loading="lazy" />
					</ng-template>
				</app-carousel>

				<div class="flex justify-around mt-2">
					<div class="flex flex-col items-end gap-1">
						<label class="label text-sm md:text-base">
							Loop
							<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" [(ngModel)]="loop" />
						</label>
						<label class="label text-sm md:text-base" [class]="loop() ? '' : 'has-[input]:cursor-not-allowed'">
							Autoplay
							<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" [(ngModel)]="autoplay" [disabled]="!loop()" />
						</label>
						<label class="label text-sm md:text-base">
							Drag free
							<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" [(ngModel)]="dragFree" />
						</label>
					</div>
					<div class="flex flex-col items-end gap-1">
						<label class="label text-sm md:text-base">
							Right-to-left
							<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" [(ngModel)]="rtl" />
						</label>
						<label class="label text-sm md:text-base">
							Indicators
							<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" [(ngModel)]="showNavIndicators" />
						</label>
						<label class="label text-sm md:text-base">
							Arrows
							<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" [(ngModel)]="showNavArrows" />
						</label>
					</div>
				</div>
			</div>
		</div>
	\`,
	imports: [CarouselComponent, FormsModule, CarouselSlideDirective],
})
export default class DemoCarouselComponent {
	readonly photos = [
		'https://picsum.photos/600/450.webp?random=1',
		'https://picsum.photos/600/450.webp?random=2',
		'https://picsum.photos/450/600.webp?random=3',
		'https://picsum.photos/600/450.webp?random=4',
		'https://picsum.photos/600/450.webp?random=5',
		'https://picsum.photos/600/450.webp?random=6',
	].map((src, index) => ({src, id: \`photo-\${index}\`, alt: \`picsum photo \${index + 1} of 6\`}));

	readonly loop = signal(false);
	readonly dragFree = signal(false);
	readonly showNavArrows = signal(true);
	readonly showNavIndicators = signal(true);
	readonly autoplay = signal(true);
	readonly rtl = signal(false);
}
`;export{e as default};
