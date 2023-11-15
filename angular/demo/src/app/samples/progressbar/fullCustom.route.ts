import {ProgressbarComponent, ProgressbarContentDirective} from '@agnos-ui/angular';
import type {OnDestroy} from '@angular/core';
import {Component} from '@angular/core';
import type {Subscription} from 'rxjs';
import {interval, takeWhile} from 'rxjs';

@Component({
	standalone: true,
	imports: [ProgressbarComponent, ProgressbarContentDirective],
	template: `
		<div class="d-flex align-items-center flex-wrap">
			<div style="width: 350px">
				<div auProgressbar #progressbar [auValue]="value">
					<ng-template auProgressbarContent let-state="state">
						<div class="position-relative" style="height: 300px">
							<div class="cup">
								<div class="cup-fill-parent">
									<div class="cup-fill" [style.height.px]="value * 1.7">
										@if (value >= 50) {
											<div class="bubble bubble-1"></div>
											<div class="bubble bubble-2"></div>
											<div class="bubble bubble-3"></div>
										}
									</div>
								</div>
							</div>
						</div>
					</ng-template>
				</div>
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
