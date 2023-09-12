const a=`import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: \`
		<au-rating className="rating-custom" [rating]="7" ariaLabel="custom rating">
			<ng-template auRatingStar let-fill="fill" let-index="index">
				<span class="star" [class.filled]="fill === 100" [class.bad]="index < 3">&#9733;</span>
			</ng-template>
		</au-rating>
	\`,
	styles: ["@import '@agnos-ui/common/samples/rating/custom.scss';"],
})
export default class CustomTemplateComponent {}
`;export{a as default};
