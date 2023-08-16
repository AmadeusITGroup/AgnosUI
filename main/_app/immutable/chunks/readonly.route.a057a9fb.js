const a=`import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component, inject} from '@angular/core';
import heartFill from '!raw-loader!bootstrap-icons/icons/heart-fill.svg';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: \`
		<ng-template auRatingStar #custom let-fill="fill">
			<span class="star" [class.full]="fill === 100">
				<span class="half" [style.width.%]="fill" [innerHTML]="sanitizer.bypassSecurityTrustHtml(heartFill)"></span>
				<span [innerHTML]="sanitizer.bypassSecurityTrustHtml(heartFill)"></span>
			</span>
		</ng-template>
		<au-rating class="rating-custom" [rating]="3.64" [slotStar]="custom" [readonly]="true" [maxRating]="5" ariaLabel="readonly rating" />
	\`,
})
export default class ReadonlyRatingComponent {
	readonly sanitizer = inject(DomSanitizer);
	readonly heartFill = heartFill;
}
`;export{a as default};
