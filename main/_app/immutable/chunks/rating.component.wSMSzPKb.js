const n=`import type {RatingWidget, RatingProps} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, auNumberAttribute, callWidgetFactory, createRating} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef} from '@angular/core';
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
	readonly _widget = callWidgetFactory({
		factory: createRating,
		widgetName: 'rating',
		events: {
			onHover: (event: any) => this.hover.emit(event),
			onLeave: (event: any) => this.leave.emit(event),
			onRatingChange: (rating: number) => {
				this.ratingChange.emit(rating);
				this.onChange(rating);
			},
		},
	});

	onChange = (_: any) => {};
	onTouched = () => {};

	// You can choose here the props from the core you want as inputs
	@Input({transform: auNumberAttribute}) maxRating: RatingProps['maxRating'];
	@Input({transform: auNumberAttribute}) rating: RatingProps['rating'];
	@Input() ariaLabel: RatingProps['ariaLabel'];
	@Input() className: RatingProps['className'];
	@Output() hover = new EventEmitter<number>();
	@Output() leave = new EventEmitter<number>();
	@Output() ratingChange = new EventEmitter<number>();

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
