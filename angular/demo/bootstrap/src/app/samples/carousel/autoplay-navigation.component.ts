import {UseDirective, type CarouselContext} from '@agnos-ui/angular-bootstrap';
import type {ElementRef} from '@angular/core';
import {ChangeDetectionStrategy, Component, effect, inject, input, output, signal, viewChild} from '@angular/core';
import playSvg from 'bootstrap-icons/icons/play-fill.svg';
import pauseSvg from 'bootstrap-icons/icons/pause-fill.svg';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'app-autoplay-navigation',
	template: `
		<div class="navigation">
			<div class="d-flex bg-light rounded-4 py-1 px-2" (pointerdown)="$event.preventDefault()" (touchstart)="$event.stopPropagation()">
				<button
					type="button"
					class="btn btn-sm btn-outline-primary rounded-5 d-flex align-items-center"
					(click)="onClick()"
					[attr.aria-label]="isPlaying() ? 'Pause rotation of slides' : 'Play rotation of slides'"
					[innerHTML]="isPlaying() ? pauseSvg : playSvg"
				></button>
			</div>
			<div
				class="d-flex bg-light rounded-4 py-1 px-3 align-items-center"
				(pointerdown)="$event.preventDefault()"
				(touchstart)="$event.stopPropagation()"
			>
				<div class="pagination pagination-sm align-items-center" [auUse]="directives().tabList">
					@for (slideData of state().slidesData(); track slideData.id; let index = $index) {
						<div class="page-item">
							<button
								type="button"
								class="page-link"
								[class.active]="state().selectedScrollSnap() === index"
								[auUse]="[directives().tabIndicator, {index, id: slideData.id}]"
							>
								{{ index + 1 }}
							</button>
						</div>
					}
				</div>
			</div>
		</div>
		<div class="progress-container d-none d-sm-flex" [class.opacity-0]="!isPlaying()" aria-hidden="true">
			<div class="bg-light rounded-4 py-1 px-3 w-100 d-flex align-items-center">
				<div class="progress w-100">
					<div class="autoplay-progress-bar progress-bar" #progressbar></div>
				</div>
			</div>
		</div>
	`,
	imports: [UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoplayNavigationComponent {
	readonly state = input.required<CarouselContext<any>['state']>();
	readonly api = input.required<CarouselContext<any>['api']>();
	readonly directives = input.required<CarouselContext<any>['directives']>();
	readonly playingChange = output<boolean>();

	readonly sanitizer = inject(DomSanitizer);

	readonly playSvg = this.sanitizer.bypassSecurityTrustHtml(playSvg);
	readonly pauseSvg = this.sanitizer.bypassSecurityTrustHtml(pauseSvg);

	readonly progressbar = viewChild.required<ElementRef<HTMLDivElement>>('progressbar');

	readonly isPlaying = signal(true);

	onClick() {
		if (this.isPlaying()) {
			this.api().plugins()!.autoplay.stop();
		} else {
			this.api().plugins()!.autoplay.play();
		}
	}

	launchProgressbar() {
		this.progressbar().nativeElement.style.transition = 'none';
		this.progressbar().nativeElement.style.width = '0%';
		window.requestAnimationFrame(() => {
			window.setTimeout(() => {
				this.progressbar().nativeElement.style.transition = `width ${this.api().plugins()!.autoplay.timeUntilNext()}ms linear`;
				this.progressbar().nativeElement.style.width = '100%';
			});
		});
	}

	constructor() {
		effect(() => {
			if (this.state().initialized()) {
				this.api()
					.emblaApi()!
					.on('autoplay:play', () => {
						this.isPlaying.set(true);
						this.playingChange.emit(true);
					})
					.on('autoplay:stop', () => {
						this.isPlaying.set(false);
						this.playingChange.emit(false);
					})
					.on('autoplay:timerset', () => {
						this.launchProgressbar();
					})
					.on('autoplay:timerstopped', () => {
						this.progressbar().nativeElement.style.transition = 'none';
						this.progressbar().nativeElement.style.width = '0%';
					});
				this.launchProgressbar();
			}
		});
	}
}
