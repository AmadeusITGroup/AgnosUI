import type {RatingWidget} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, auNumberAttribute, callWidgetFactory, createRating} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, input, model, output} from '@angular/core';
import type {FormValueControl} from '@angular/forms/signals';

@Component({
	selector: 'app-rating',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './rating.component.html',
})
export class RatingComponent extends BaseWidgetDirective<RatingWidget> implements FormValueControl<number> {
	readonly maxRating = input(undefined, {transform: auNumberAttribute});
	readonly value = model(0);
	readonly disabled = input(false);
	readonly ariaLabel = input<string>();
	readonly className = input<string>();
	readonly hover = output<number>();
	readonly leave = output<number>();
	readonly touched = output<boolean>();

	constructor() {
		super(
			callWidgetFactory(createRating, {
				events: {
					onHover: (rating) => this.hover.emit(rating),
					onLeave: (rating) => this.leave.emit(rating),
					onRatingChange: (rating: number) => {
						this.value.set(rating);
					},
				},
			}),
			{value: 'rating'},
		);
	}

	getAriaLabel(index: number) {
		return `${this.state.ariaLabel()} star ${index + 1}`;
	}
}
