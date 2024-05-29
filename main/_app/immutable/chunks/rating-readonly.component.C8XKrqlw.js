const t=`import type {AdaptSlotContentProps, RatingWidget, SlotContent, StarContext} from '@agnos-ui/angular-bootstrap';
import {BaseWidgetDirective, SlotDirective, auNumberAttribute, callWidgetFactory, createRating} from '@agnos-ui/angular-bootstrap';
import type {AfterContentChecked} from '@angular/core';
import {ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, inject} from '@angular/core';

/**
 * This directive allows the component to retrieve the slot template.
 */
@Directive({selector: 'ng-template[appRatingStar]', standalone: true})
export class RatingReadonlyStarDirective {
	public templateRef = inject(TemplateRef<AdaptSlotContentProps<StarContext>>);
	static ngTemplateContextGuard(_dir: RatingReadonlyStarDirective, context: unknown): context is StarContext {
		return true;
	}
}

/**
 * To use the defined slotStar, we simply need to use the {@link SlotDirective} and give it the prop as input.
 * The auSlotProps is used to provide context to the slot.
 */
@Component({
	selector: 'app-rating-readonly',
	standalone: true,
	imports: [SlotDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: \`
		<div class="d-inline-flex au-rating" [class]="state().className">
			@for (item of state().stars; track item) {
				<span class="au-rating-star">
					<ng-template [auSlot]="state().slotStar" [auSlotProps]="item"></ng-template>
				</span>
			}
		</div>
	\`,
})
export class RatingReadonlyComponent extends BaseWidgetDirective<RatingWidget> implements AfterContentChecked {
	readonly _widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		defaultConfig: {
			readonly: true,
		},
		events: {
			onHover: () => {},
			onLeave: () => {},
			onRatingChange: () => {},
		},
	});

	@Input()
	slotStar: SlotContent<AdaptSlotContentProps<StarContext>>;
	@ContentChild(RatingReadonlyStarDirective, {static: false}) slotStarFromContent: RatingReadonlyStarDirective | undefined;

	@Input({transform: auNumberAttribute}) rating: number | undefined;

	@Input({transform: auNumberAttribute}) maxRating: number | undefined;

	@Input() className: string | undefined;

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotStar: this.slotStarFromContent?.templateRef,
		});
	}
}
`;export{t as default};
