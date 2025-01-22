import type {SlotContent} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	SlotDirective,
	UseDirective,
	auBooleanAttribute,
	auNumberAttribute,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import {
	ChangeDetectionStrategy,
	Component,
	Directive,
	TemplateRef,
	ViewEncapsulation,
	forwardRef,
	inject,
	input,
	output,
	contentChild,
} from '@angular/core';
import type {ControlValueAccessor} from '@angular/forms';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {callWidgetFactory} from '../../config';
import type {RatingWidget, StarContext} from './rating.gen';
import {createRating} from './rating.gen';

/**
 * Directive to represent a rating star.
 *
 * This directive uses a template reference to render the {@link StarContext}.
 */
@Directive({selector: 'ng-template[auRatingStar]'})
export class RatingStarDirective {
	public templateRef = inject(TemplateRef<StarContext>);
	static ngTemplateContextGuard(_dir: RatingStarDirective, context: unknown): context is StarContext {
		return true;
	}
}

/**
 * The `RatingComponent` is an Angular component that allows users to provide a rating.
 * It extends `BaseWidgetDirective` and implements `ControlValueAccessor` to integrate with Angular forms.
 */
@Component({
	selector: '[auRating]',
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
				<ng-template [auSlot]="state.star()" [auSlotProps]="state.stars()[index]" />
			</span>
		}
	`,
	providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true}],
})
export class RatingComponent extends BaseWidgetDirective<RatingWidget> implements ControlValueAccessor {
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
	readonly ariaValueTextFn = input<(rating: number, maxRating: number) => string>(undefined, {alias: 'auAriaValueTextFn'});

	/**
	 * If `true`, the rating is disabled.
	 *
	 * @defaultValue `false`
	 */
	readonly disabled = input(undefined, {alias: 'auDisabled', transform: auBooleanAttribute});

	/**
	 * The maximum rating that can be given.
	 *
	 * @defaultValue `10`
	 */
	readonly maxRating = input(undefined, {alias: 'auMaxRating', transform: auNumberAttribute});

	/**
	 * The current rating. Could be a decimal value like `3.75`.
	 *
	 * @defaultValue `0`
	 */
	readonly rating = input(undefined, {alias: 'auRating', transform: auNumberAttribute});

	/**
	 * If `true`, the rating can't be changed.
	 *
	 * @defaultValue `false`
	 */
	readonly readonly = input(undefined, {alias: 'auReadonly', transform: auBooleanAttribute});

	/**
	 * Define if the rating can be reset.
	 *
	 * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
	 *
	 * @defaultValue `true`
	 */
	readonly resettable = input(undefined, {alias: 'auResettable', transform: auBooleanAttribute});

	/**
	 * The template to override the way each star is displayed.
	 *
	 * @defaultValue
	 * ```ts
	 * ({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
	 * ```
	 */
	readonly star = input<SlotContent<StarContext>>(undefined, {alias: 'auStar'});
	readonly slotStarFromContent = contentChild(RatingStarDirective);

	/**
	 * Allows setting a custom rating tabindex.
	 * If the component is disabled, `tabindex` will still be set to `-1`.
	 *
	 * @defaultValue `0`
	 */
	readonly tabindex = input(undefined, {alias: 'auTabindex', transform: auNumberAttribute});

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});

	/**
	 * The aria label
	 *
	 * @defaultValue `'Rating'`
	 */
	readonly ariaLabel = input<string>(undefined, {alias: 'auAriaLabel'});

	/**
	 * The aria labelled by
	 *
	 * @defaultValue `''`
	 */
	readonly ariaLabelledBy = input<string>(undefined, {alias: 'auAriaLabelledBy'});

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
	readonly hover = output<number>({alias: 'auHover'});

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
	readonly leave = output<number>({alias: 'auLeave'});

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
	readonly ratingChange = output<number>({alias: 'auRatingChange'});

	writeValue(value: any): void {
		this['_widget'].patch({rating: value});
	}

	registerOnChange(fn: (value: any) => any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => any): void {
		this.onTouched = fn;
	}

	setDisabledState(disabled: boolean): void {
		this['_widget'].patch({disabled});
	}

	constructor() {
		super(
			callWidgetFactory({
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
				afterInit: (widget) => {
					useDirectiveForHost(widget.directives.containerDirective);
				},
				slotTemplates: () => ({
					star: this.slotStarFromContent()?.templateRef,
				}),
			}),
		);
	}

	trackByIndex(index: number) {
		return index;
	}
}
