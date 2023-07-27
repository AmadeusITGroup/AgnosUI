import type {RatingProps} from '@agnos-ui/angular';
import {AgnosUIAngularModule, injectWidgetsConfig, provideWidgetsConfig} from '@agnos-ui/angular';
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, AsyncPipe],
	providers: [provideWidgetsConfig()],
	template: `
		<ng-template #custom let-fill="fill">
			<span class="star" [class.full]="fill === 100"> <span class="half" [style.width.%]="fill">&hearts;</span>&hearts; </span>
		</ng-template>
		<au-rating [(rating)]="rating"></au-rating>
		<div class="mt-3">
			Disabled:
			<div id="btn-config-disabled" class="btn-group mb-2">
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.rating?.disabled === true"
					(click)="updateRatingConfig({disabled: true})"
				>
					true
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.rating?.disabled !== true"
					(click)="updateRatingConfig({disabled: false})"
				>
					false
				</button>
			</div>
			<br />
			maxRating:
			<div id="btn-config-maxRating" class="btn-group mb-2">
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.rating?.maxRating === 40"
					(click)="updateRatingConfig({maxRating: 40})"
				>
					40
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.rating?.maxRating === 30"
					(click)="updateRatingConfig({maxRating: 30})"
				>
					30
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.rating?.maxRating === 20"
					(click)="updateRatingConfig({maxRating: 20})"
				>
					20
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.rating?.maxRating === undefined"
					(click)="updateRatingConfig({maxRating: undefined})"
				>
					undefined
				</button>
			</div>
			<br />
			className:
			<div id="btn-config-className" class="btn-group mb-2">
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.rating?.className === 'fs-1'"
					(click)="updateRatingConfig({className: 'fs-1'})"
				>
					fs-1
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.rating?.className === 'fs-2'"
					(click)="updateRatingConfig({className: 'fs-2'})"
				>
					fs-2
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="!(widgetsConfig$ | async)?.rating?.className"
					(click)="updateRatingConfig({className: undefined})"
				>
					undefined
				</button>
			</div>
			<br />
			slotStar:
			<div id="btn-config-slotStar" class="btn-group mb-2">
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.rating?.slotStar === custom"
					(click)="updateRatingConfig({slotStar: custom})"
				>
					custom
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.rating?.slotStar === '*'"
					(click)="updateRatingConfig({slotStar: '*'})"
				>
					'*'
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="!(widgetsConfig$ | async)?.rating?.slotStar"
					(click)="updateRatingConfig({slotStar: undefined})"
				>
					undefined
				</button>
			</div>
		</div>
	`,
})
export default class RatingConfigComponent {
	rating = 3;
	widgetsConfig$ = injectWidgetsConfig();

	updateRatingConfig(change: Partial<RatingProps>) {
		this.widgetsConfig$.update((value) => ({...value, rating: {...value.rating, ...change}}));
	}
}
