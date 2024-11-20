import type {RatingProps} from '@agnos-ui/angular-bootstrap';
import {RatingComponent, RatingStarDirective, injectWidgetsConfig, provideWidgetsConfig, toAngularSignal} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';

@Component({
	imports: [RatingComponent, RatingStarDirective],
	providers: [provideWidgetsConfig()],
	template: `
		<ng-template #custom auRatingStar let-fill="fill">
			<span class="star" [class.full]="fill === 100"> <span class="half" [style.width.%]="fill">&hearts;</span>&hearts; </span>
		</ng-template>
		<div [(auRating)]="rating"></div>
		<div class="mt-3">
			Disabled:
			<div id="btn-config-disabled" class="btn-group mb-2">
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="widgetsConfig().rating?.disabled === true"
					(click)="updateRatingConfig({disabled: true})"
				>
					true
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="widgetsConfig().rating?.disabled !== true"
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
					[class.active]="widgetsConfig().rating?.maxRating === 40"
					(click)="updateRatingConfig({maxRating: 40})"
				>
					40
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="widgetsConfig().rating?.maxRating === 30"
					(click)="updateRatingConfig({maxRating: 30})"
				>
					30
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="widgetsConfig().rating?.maxRating === 20"
					(click)="updateRatingConfig({maxRating: 20})"
				>
					20
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="!widgetsConfig().rating?.maxRating"
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
					[class.active]="widgetsConfig().rating?.className === 'fs-1'"
					(click)="updateRatingConfig({className: 'fs-1'})"
				>
					fs-1
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="widgetsConfig().rating?.className === 'fs-2'"
					(click)="updateRatingConfig({className: 'fs-2'})"
				>
					fs-2
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="!widgetsConfig().rating?.className"
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
					[class.active]="widgetsConfig().rating?.star === custom"
					(click)="updateRatingConfig({star: custom})"
				>
					custom
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="widgetsConfig().rating?.star === '*'"
					(click)="updateRatingConfig({star: '*'})"
				>
					'*'
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="!widgetsConfig().rating?.star"
					(click)="updateRatingConfig({star: undefined})"
				>
					undefined
				</button>
			</div>
		</div>
	`,
})
export default class RatingConfigComponent {
	readonly rating = signal(3);
	private readonly widgetsConfig$ = injectWidgetsConfig();
	public readonly widgetsConfig = toAngularSignal(this.widgetsConfig$);

	updateRatingConfig(change: Partial<RatingProps>) {
		this.widgetsConfig$.update((value) => ({...value, rating: {...value.rating, ...change}}));
	}
}
