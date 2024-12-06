import {Component, signal} from '@angular/core';
import {CarouselComponent, CarouselSlideDirective} from './carousel.component';
import {FormsModule} from '@angular/forms';

@Component({
	standalone: true,
	template: `
		<div class="w-full flex justify-center">
			<div class="max-w-[600px] self-center">
				<app-carousel
					[items]="photos"
					[withNavArrows]="withNavArrows()"
					[withNavIndicators]="withNavIndicators()"
					[loop]="loop()"
					[dragFree]="dragFree()"
					[autoplay]="autoplay() && loop()"
				>
					<img
						*appCarouselSlide="let photo"
						[src]="photo"
						class="select-none object-contain aspect-[4/3] w-full"
						alt="random picsum"
						loading="lazy"
					/>
				</app-carousel>
				<div class="form-control items-start">
					<label class="label cursor-pointer gap-3">
						<span class="label-text">Loop</span>
						<input type="checkbox" class="toggle toggle-primary" [(ngModel)]="loop" />
					</label>
					<label class="label gap-3" [class.cursor-pointer]="loop()">
						<span class="label-text">Autoplay</span>
						<input type="checkbox" class="toggle toggle-primary" [(ngModel)]="autoplay" [disabled]="!loop()" />
					</label>
					<label class="label cursor-pointer gap-3">
						<span class="label-text">Drag free</span>
						<input type="checkbox" class="toggle toggle-primary" [(ngModel)]="dragFree" />
					</label>
					<label class="label cursor-pointer gap-3">
						<span class="label-text">Navigation Indicators</span>
						<input type="checkbox" class="toggle toggle-primary" [(ngModel)]="withNavIndicators" />
					</label>
					<label class="label cursor-pointer gap-3">
						<span class="label-text">Navigation Arrows</span>
						<input type="checkbox" class="toggle toggle-primary" [(ngModel)]="withNavArrows" />
					</label>
				</div>
			</div>
		</div>
	`,
	imports: [CarouselComponent, CarouselSlideDirective, FormsModule],
})
export default class DemoCarouselComponent {
	readonly photos = [
		'https://picsum.photos/600/450.webp?random=1',
		'https://picsum.photos/600/450.webp?random=2',
		'https://picsum.photos/450/600.webp?random=3',
		'https://picsum.photos/600/450.webp?random=4',
		'https://picsum.photos/600/450.webp?random=5',
		'https://picsum.photos/600/450.webp?random=6',
	];
	readonly loop = signal(false);
	readonly dragFree = signal(false);
	readonly withNavArrows = signal(true);
	readonly withNavIndicators = signal(true);
	readonly autoplay = signal(true);
}
