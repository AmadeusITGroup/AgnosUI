import type {RatingWidget, SlotContent, StarContext} from '@agnos-ui/angular-bootstrap';
import {BaseWidgetDirective, SlotDirective, callWidgetFactory, createRating} from '@agnos-ui/angular-bootstrap';
import {ChangeDetectionStrategy, Component, Directive, TemplateRef, contentChild, effect, inject, input, numberAttribute} from '@angular/core';

/**
 * This directive allows the component to retrieve the slot template.
 */
@Directive({selector: 'ng-template[appRatingStar]'})
export class RatingReadonlyStarDirective {
	public templateRef = inject(TemplateRef<StarContext>);
	static ngTemplateContextGuard(_dir: RatingReadonlyStarDirective, context: unknown): context is StarContext {
		return true;
	}
}

/**
 * To use the defined star, we simply need to use the {@link SlotDirective} and give it the prop as input.
 * The auSlotProps is used to provide context to the slot.
 */
@Component({
	selector: 'app-rating-readonly',
	imports: [SlotDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="d-inline-flex au-rating" [class]="state.className()">
			@for (item of state.stars(); track item) {
				<span class="au-rating-star">
					<ng-template [auSlot]="state.star()" [auSlotProps]="item" />
				</span>
			}
		</div>
	`,
})
export class RatingReadonlyComponent extends BaseWidgetDirective<RatingWidget> {
	readonly className = input<string>();
	readonly rating = input.required({transform: numberAttribute});
	readonly maxRating = input.required({transform: numberAttribute});

	readonly star = input<SlotContent<StarContext>>();
	readonly slotStarFromContent = contentChild(RatingReadonlyStarDirective);

	constructor() {
		const widget = callWidgetFactory(createRating, {
			defaultConfig: {
				readonly: true,
			},
			slotTemplates: () => ({
				star: this.slotStarFromContent()?.templateRef,
			}),
		});
		super(widget);
		effect(
			() => {
				widget.updateSlots();
			},
			{allowSignalWrites: true},
		);
	}
}
