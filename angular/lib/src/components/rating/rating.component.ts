import type {AdaptSlotContentProps, RatingWidget, SlotContent, StarContext} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, SlotDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createRating} from '@agnos-ui/angular-headless';
import type {AfterContentChecked} from '@angular/core';
import {
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	Directive,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
	ViewEncapsulation,
	forwardRef,
	inject,
} from '@angular/core';
import type {ControlValueAccessor} from '@angular/forms';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({selector: 'ng-template[auRatingStar]', standalone: true})
export class RatingStarDirective {
	public templateRef = inject(TemplateRef<AdaptSlotContentProps<StarContext>>);
	static ngTemplateContextGuard(_dir: RatingStarDirective, context: unknown): context is StarContext {
		return true;
	}
}

@Component({
	selector: '[auRating]',
	standalone: true,
	imports: [SlotDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		class: 'd-inline-flex au-rating',
		'[tabindex]': 'state().tabindex',
		role: 'slider',
		'aria-valuemin': '0',
		'[attr.aria-valuemax]': 'state().maxRating',
		'[attr.aria-valuenow]': 'state().visibleRating',
		'[attr.aria-valuetext]': 'state().ariaValueText',
		'[attr.aria-disabled]': 'state().disabled ? true : null',
		'[attr.aria-readonly]': 'state().readonly ? true : null',
		'[attr.aria-label]': 'state().ariaLabel || null',
		'[attr.aria-labelledby]': 'state().ariaLabelledBy || null',
		'(blur)': 'onTouched()',
		'(keydown)': '_widget.actions.handleKey($event)',
		'(mouseleave)': '_widget.actions.leave()',
		'[class]': 'state().className',
	},
	template: `
		@for (item of state().stars; track trackByIndex(index); let index = $index) {
			<span class="visually-hidden">({{ index < state().visibleRating ? '*' : ' ' }})</span>
			<span
				class="au-rating-star"
				(mouseenter)="_widget.actions.hover(index + 1)"
				(click)="_widget.actions.click(index + 1)"
				[style.cursor]="state().interactive ? 'pointer' : 'default'"
			>
				<ng-template [auSlot]="state().slotStar" [auSlotProps]="state().stars[index]"></ng-template>
			</span>
		}
	`,
	providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true}],
})
export class RatingComponent extends BaseWidgetDirective<RatingWidget> implements ControlValueAccessor, AfterContentChecked {
	readonly _widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		events: {
			onHover: (event) => this.hover.emit(event),
			onLeave: (event) => this.leave.emit(event),
			onRatingChange: (rating: number) => {
				this.ratingChange.emit(rating);
				this.onChange(rating);
			},
		},
	});

	onChange = (_: any) => {};
	onTouched = () => {};

	/**
	 * Return the value for the 'aria-valuetext' attribute.
	 */
	@Input('auAriaValueTextFn') ariaValueTextFn: ((rating: number, maxRating: number) => string) | undefined;

	/**
	 * If `true`, the rating is disabled.
	 */
	@Input({alias: 'auDisabled', transform: auBooleanAttribute}) disabled: boolean | undefined;

	/**
	 * The maximum rating that can be given.
	 */
	@Input({alias: 'auMaxRating', transform: auNumberAttribute}) maxRating: number | undefined;

	/**
	 * The current rating. Could be a decimal value like `3.75`.
	 */
	@Input({alias: 'auRating', transform: auNumberAttribute}) rating: number | undefined;

	/**
	 * If `true`, the rating can't be changed.
	 */
	@Input({alias: 'auReadonly', transform: auBooleanAttribute}) readonly: boolean | undefined;

	/**
	 * Define if the rating can be reset.
	 *
	 * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
	 */
	@Input({alias: 'auResettable', transform: auBooleanAttribute}) resettable: boolean | undefined;

	@Input('auSlotStar') slotStar: SlotContent<AdaptSlotContentProps<StarContext>>;
	@ContentChild(RatingStarDirective, {static: false}) slotStarFromContent: RatingStarDirective | undefined;

	/**
	 * Allows setting a custom rating tabindex.
	 * If the component is disabled, `tabindex` will still be set to `-1`.
	 */
	@Input({alias: 'auTabindex', transform: auNumberAttribute}) tabindex: number | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * The aria label
	 */
	@Input('auAriaLabel') ariaLabel: string | undefined;

	/**
	 * The aria labelled by
	 */
	@Input('auAriaLabelledBy') ariaLabelledBy: string | undefined;

	/**
	 * An event emitted when the user is hovering over a given rating.
	 *
	 * Event payload is equal to the rating being hovered over.
	 */
	@Output('auHover') hover = new EventEmitter<number>();

	/**
	 * An event emitted when the user stops hovering over a given rating.
	 *
	 * Event payload is equal to the rating of the last item being hovered over.
	 */
	@Output('auLeave') leave = new EventEmitter<number>();

	/**
	 * An event emitted when the rating is changed.
	 *
	 * Event payload is equal to the newly selected rating.
	 */
	@Output('auRatingChange') ratingChange = new EventEmitter<number>();

	writeValue(value: any): void {
		this._widget.patch({rating: value});
	}

	registerOnChange(fn: (value: any) => any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => any): void {
		this.onTouched = fn;
	}

	setDisabledState(disabled: boolean): void {
		this._widget.patch({disabled});
	}

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotStar: this.slotStarFromContent?.templateRef,
		});
	}

	trackByIndex(index: number) {
		return index;
	}
}
