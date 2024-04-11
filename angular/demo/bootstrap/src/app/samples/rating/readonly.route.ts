import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component, ViewEncapsulation, inject} from '@angular/core';
import heartFill from 'bootstrap-icons/icons/heart-fill.svg';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<ng-template auRatingStar #custom let-fill="fill">
			<span class="star" [class.full]="fill === 100">
				<span class="half" [style.width.%]="fill" [innerHTML]="sanitizer.bypassSecurityTrustHtml(heartFill)"></span>
				<span [innerHTML]="sanitizer.bypassSecurityTrustHtml(heartFill)"></span>
			</span>
		</ng-template>
		<div class="rating-readonly" auRating="3.64" [auSlotStar]="custom" auReadonly auMaxRating="5" auAriaLabel="readonly rating"></div>
	`,
	encapsulation: ViewEncapsulation.None,
	styles: "@import '@agnos-ui/common/samples/rating/readonly.scss';",
})
export default class ReadonlyRatingComponent {
	readonly sanitizer = inject(DomSanitizer);
	readonly heartFill = heartFill;
}
