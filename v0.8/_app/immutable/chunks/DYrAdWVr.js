const e=`import {RatingComponent} from './rating.component';
import {Component} from '@angular/core';

@Component({
	imports: [RatingComponent],
	template: \`
		<app-rating [(rating)]="rating" (hover)="hovered = $event" (leave)="left = $event" />
		<div class="mt-2">
			Current rate: <span id="defaultRating">{{ rating }}</span
			><br />
			Hovered: <span id="defaultHovered">{{ hovered }}</span
			><br />
			Left: <span id="defaultLeft">{{ left }}</span>
		</div>
	\`,
})
export default class DefaultRatingComponent {
	rating = 3;
	hovered = 0;
	left = 0;
}
`;export{e as default};
