const a=`import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: \`
		<ng-template auRatingStar #custom let-fill="fill">
			<span class="star" [class.full]="fill === 100"> <span class="half" [style.width.%]="fill">&hearts;</span>&hearts;</span>
		</ng-template>
		<au-rating class="rating-custom" [rating]="3.64" [slotStar]="custom" [readonly]="true" [maxRating]="5" ariaLabel="readonly rating" />
	\`,
})
export default class ReadonlyRatingComponent {}
`;export{a as default};
