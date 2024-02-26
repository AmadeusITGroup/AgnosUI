import {ProgressbarComponent, provideWidgetsConfig} from '@agnos-ui/angular';
import type {OnDestroy} from '@angular/core';
import {Component} from '@angular/core';
import type {Subscription} from 'rxjs';
import {interval, takeWhile} from 'rxjs';
import CoffeeProgressbarComponent from './cofee-progressbar.component';

@Component({
	standalone: true,
	imports: [ProgressbarComponent],
	providers: [provideWidgetsConfig(() => ({progressbar: {slotStructure: CoffeeProgressbarComponent}}))],
	template: `
		<div class="d-flex align-items-center flex-wrap">
			<div style="width: 350px">
				<div auProgressbar #progressbar [auValue]="value"></div>
			</div>
			<div class="d-flex flex-column justify-content-evenly h-100 ms-5">
				<div class="btn-group" role="group">
					<button class="btn btn-outline-primary" (click)="start()" [disabled]="progressbar.state().started">Start</button>
					<button
						class="btn btn-outline-primary"
						[disabled]="!progressbar.state().started || progressbar.state().finished"
						(click)="toggleProgress()"
					>
						{{ subscription ? 'Pause' : 'Resume' }}
					</button>
					<button class="btn btn-outline-primary" [disabled]="!progressbar.state().started" (click)="stop(true)">Reset</button>
				</div>
				<p class="mt-3">
					<span>{{ value === 0 ? 'Need to wake up.' : value < 100 ? 'Retrieving coffee... ' + value + '%' : 'Ready to work !' }}</span>
				</p>
			</div>
		</div>
	`,
	styles: "@import '@agnos-ui/common/samples/progressbar/custom.scss';",
})
export default class FullCustomProgressBarComponent implements OnDestroy {
	value = 0;
	subscription: Subscription | undefined;

	start() {
		if (!this.subscription) {
			this.subscription = interval(500)
				.pipe(takeWhile(() => this.value < 100))
				.subscribe(() => {
					this.value += 10;
				});
		}
	}
	stop(reset = false) {
		this.subscription?.unsubscribe();
		this.subscription = undefined;
		if (reset) {
			this.value = 0;
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
