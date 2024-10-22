import type {SlotContent} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	SlotDirective,
	UseDirective,
	auBooleanAttribute,
	auNumberAttribute,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
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
import {callWidgetFactory} from '../../config';
import type {RatingWidget, StarContext} from './rating.gen';
import {createRating} from './rating.gen';

@Directive({selector: 'ng-template[auRatingStar]', standalone: true})
export class RatingStarDirective {
	public templateRef = inject(TemplateRef<StarContext>);
	static ngTemplateContextGuard(_dir: RatingStarDirective, context: unknown): context is StarContext {
		return true;
	}
}

@Component({
	selector: '[auRating]',
	standalone: true,
	imports: [UseDirective, SlotDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		class: 'd-inline-flex',
		'(blur)': 'onTouched()',
	},
	template: `
		@for (item of state.stars(); track trackByIndex(index); let index = $index) {
			<span class="visually-hidden">({{ index < state.visibleRating() ? '*' : ' ' }})</span>
			<span [auUse]="[directives.starDirective, {index}]">
				<ng-template [auSlot]="state.star()" [auSlotProps]="state.stars()[index]"></ng-template>
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
		afterInit: () => {
			useDirectiveForHost(this._widget.directives.containerDirective);
		},
	});

	onChange = (_: any) => {};
	onTouched = () => {};

	/**
	 * Return the value for the 'aria-valuetext' attribute.
	 * @param rating - Current rating value.
	 * @param maxRating - maxRating value.
	 *
	 * @defaultValue
	 * ```ts
	 * (rating: number, maxRating: number) => `${rating} out of ${maxRating}`
	 * ```
	 */
	@Input('auAriaValueTextFn') ariaValueTextFn: ((rating: number, maxRating: number) => string) | undefined;

	/**
	 * If `true`, the rating is disabled.
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auDisabled', transform: auBooleanAttribute}) disabled: boolean | undefined;

	/**
	 * The maximum rating that can be given.
	 *
	 * @defaultValue `10`
	 */
	@Input({alias: 'auMaxRating', transform: auNumberAttribute}) maxRating: number | undefined;

	/**
	 * The current rating. Could be a decimal value like `3.75`.
	 *
	 * @defaultValue `0`
	 */
	@Input({alias: 'auRating', transform: auNumberAttribute}) rating: number | undefined;

	/**
	 * If `true`, the rating can't be changed.
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auReadonly', transform: auBooleanAttribute}) readonly: boolean | undefined;

	/**
	 * Define if the rating can be reset.
	 *
	 * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
	 *
	 * @defaultValue `true`
	 */
	@Input({alias: 'auResettable', transform: auBooleanAttribute}) resettable: boolean | undefined;

	/**
	 * The template to override the way each star is displayed.
	 *
	 * @defaultValue
	 * ```ts
	 * ({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
	 * ```
	 */
	@Input('auStar') star: SlotContent<StarContext>;
	@ContentChild(RatingStarDirective, {static: false}) slotStarFromContent: RatingStarDirective | undefined;

	/**
	 * Allows setting a custom rating tabindex.
	 * If the component is disabled, `tabindex` will still be set to `-1`.
	 *
	 * @defaultValue `0`
	 */
	@Input({alias: 'auTabindex', transform: auNumberAttribute}) tabindex: number | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * The aria label
	 *
	 * @defaultValue `'Rating'`
	 */
	@Input('auAriaLabel') ariaLabel: string | undefined;

	/**
	 * The aria labelled by
	 *
	 * @defaultValue `''`
	 */
	@Input('auAriaLabelledBy') ariaLabelledBy: string | undefined;

	/**
	 * An event emitted when the user is hovering over a given rating.
	 *
	 * Event payload is equal to the rating being hovered over.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auHover') hover = new EventEmitter<number>();

	/**
	 * An event emitted when the user stops hovering over a given rating.
	 *
	 * Event payload is equal to the rating of the last item being hovered over.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auLeave') leave = new EventEmitter<number>();

	/**
	 * An event emitted when the rating is changed.
	 *
	 * Event payload is equal to the newly selected rating.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
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
			star: this.slotStarFromContent?.templateRef,
		});
	}

	trackByIndex(index: number) {
		return index;
	}
}
