import {Component, ViewEncapsulation} from '@angular/core';
import {RatingReadonlyComponent, RatingReadonlyStarDirective} from './rating-readonly.component';

@Component({
	imports: [RatingReadonlyComponent, RatingReadonlyStarDirective],
	encapsulation: ViewEncapsulation.None,
	template: `
		<div>The readonly rating without slot:</div>
		<app-rating-readonly [rating]="7" [maxRating]="10" />

		<div class="mt-2">Using a slot to customize the display:</div>
		<app-rating-readonly className="rating-custom" [rating]="7" [maxRating]="10">
			<ng-template appRatingStar let-fill="fill" let-index="index">
				<span class="star" [class.filled]="fill === 100" [class.bad]="index < 3">&#9733;</span>
			</ng-template>
		</app-rating-readonly>
	`,
	styles: "@use '@agnos-ui/common/samples/rating/custom.scss';",
})
export default class SlotsHeadlessComponent {}
