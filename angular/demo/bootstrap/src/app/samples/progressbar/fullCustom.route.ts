import {ProgressbarComponent, provideWidgetsConfig} from '@agnos-ui/angular-bootstrap';
import type {OnDestroy} from '@angular/core';
import {Component, inject, signal} from '@angular/core';
import type {Subscription} from 'rxjs';
import {interval, takeWhile} from 'rxjs';
import CoffeeProgressbarComponent from './cofee-progressbar.component';
import {DomSanitizer} from '@angular/platform-browser';
import playSvg from 'bootstrap-icons/icons/play-fill.svg';
import pauseSvg from 'bootstrap-icons/icons/pause-fill.svg';
import stopSvg from 'bootstrap-icons/icons/stop-fill.svg';

@Component({
	standalone: true,
	imports: [ProgressbarComponent],
	providers: [provideWidgetsConfig(() => ({progressbar: {structure: CoffeeProgressbarComponent}}))],
	template: `
		<div class="d-flex align-items-center flex-wrap">
			<div style="width: 350px">
				<div auProgressbar #progressbar [auValue]="value()"></div>
			</div>
			<div class="d-flex flex-column justify-content-evenly h-100 ms-5">
				<div class="d-flex gap-1">
					<button
						class="btn btn-primary d-flex align-items-center"
						[disabled]="value() >= 100"
						(click)="toggleProgress()"
						[attr.aria-label]="subscription ? 'pause' : 'play'"
						[innerHTML]="subscription ? pauseSvg : playSvg"
					></button>
					<button
						class="btn btn-primary d-flex align-items-center"
						[disabled]="!subscription"
						(click)="stop(true)"
						aria-label="stop"
						[innerHTML]="stopSvg"
					></button>
				</div>
				<p class="mt-3">
					<span>{{ !subscription ? 'Need to wake up.' : value() < 100 ? 'Retrieving coffee... ' + value() + '%' : 'Ready to work !' }}</span>
				</p>
			</div>
		</div>
	`,
	styles: "@import '@agnos-ui/common/samples/progressbar/custom.scss';",
})
export default class FullCustomProgressBarComponent implements OnDestroy {
	readonly sanitizer = inject(DomSanitizer);
	readonly playSvg = this.sanitizer.bypassSecurityTrustHtml(playSvg);
	readonly pauseSvg = this.sanitizer.bypassSecurityTrustHtml(pauseSvg);
	readonly stopSvg = this.sanitizer.bypassSecurityTrustHtml(stopSvg);

	readonly value = signal(0);
	subscription: Subscription | undefined;

	start() {
		if (!this.subscription) {
			this.subscription = interval(500)
				.pipe(takeWhile(() => this.value() < 100))
				.subscribe(() => {
					this.value.update((val) => val + 10);
				});
		}
	}
	stop(reset = false) {
		this.subscription?.unsubscribe();
		this.subscription = undefined;
		if (reset) {
			this.value.set(0);
		}
	}
	toggleProgress() {
		if (this.subscription) {
			this.stop();
		} else {
			this.start();
		}
	}
	ngOnDestroy() {
		this.stop();
	}
}
