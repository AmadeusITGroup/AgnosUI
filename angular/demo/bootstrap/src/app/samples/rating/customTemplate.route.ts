import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<div class="rating-custom" auRating="7" auAriaLabel="custom rating">
			<ng-template auRatingStar let-fill="fill" let-index="index">
				<span class="star" [class.filled]="fill === 100" [class.bad]="index < 3">&#9733;</span>
			</ng-template>
		</div>
	`,
	styles: "@import '@agnos-ui/common/samples/rating/custom.scss';",
})
export default class CustomTemplateComponent {}
