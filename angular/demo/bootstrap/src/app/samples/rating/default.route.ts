import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<div [(auRating)]="rating" #rat (auHover)="hovered = $event" (auLeave)="left = $event" auAriaLabel="rating"></div>
		<div>
			Current rate: <span id="defaultRating">{{ rating }}</span
			><br />
			Hovered: <span id="defaultHovered">{{ hovered }}</span
			><br />
			Left: <span id="defaultLeft">{{ left }}</span>
		</div>
	`,
})
export default class DefaultRatingComponent {
	rating = 3;
	hovered = 0;
	left = 0;
}
