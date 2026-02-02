import {form, FormField} from '@angular/forms/signals';
import {RatingComponent} from './rating.component';
import {Component, signal} from '@angular/core';

@Component({
	imports: [RatingComponent, FormField],
	template: `
		<app-rating (hover)="hovered.set($event)" (leave)="left.set($event)" [formField]="form.rating" />
		<div class="mt-2">
			Current rate: <span id="defaultRating">{{ model().rating }}</span
			><br />
			Hovered: <span id="defaultHovered">{{ hovered() }}</span
			><br />
			Left: <span id="defaultLeft">{{ left() }}</span>
		</div>
	`,
})
export default class DefaultRatingComponent {
	readonly model = signal<{rating: number}>({rating: 3});
	readonly form = form(this.model);
	readonly hovered = signal(0);
	readonly left = signal(0);
}
