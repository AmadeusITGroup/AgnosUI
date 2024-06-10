const n=`import type {RatingWidget} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, auNumberAttribute, callWidgetFactory, createRating} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, forwardRef, input, model, output} from '@angular/core';
import type {ControlValueAccessor} from '@angular/forms';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
	selector: 'app-rating',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './rating.component.html',
	providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true}],
})
export class RatingComponent extends BaseWidgetDirective<RatingWidget> implements ControlValueAccessor {
	readonly maxRating = input(undefined, {transform: auNumberAttribute});
	readonly rating = model(0);
	readonly ariaLabel = input<string>();
	readonly className = input<string>();
	readonly hover = output<number>();
	readonly leave = output<number>();

	readonly _widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		events: {
			onHover: this.hover.emit,
			onLeave: this.leave.emit,
			onRatingChange: (rating: number) => {
				this.rating.set(rating);
				this.onChange(rating);
			},
		},
	});

	onChange = (_: any) => {};
	onTouched = () => {};

	writeValue(value: any): void {
		this._widget.patch({rating: value});
	}

	// Interface for usage within form with ControlValueAccessor system
	registerOnChange(fn: (value: any) => any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => any): void {
		this.onTouched = fn;
	}

	setDisabledState(disabled: boolean): void {
		this._widget.patch({disabled});
	}

	// API used in the template
	trackByIndex(index: number) {
		return index;
	}

	getAriaLabel(index: number) {
		return \`\${this._widget.stores.ariaLabel$()} star \${index + 1}\`;
	}
}
`;export{n as default};
