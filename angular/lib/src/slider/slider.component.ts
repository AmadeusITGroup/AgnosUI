import type {SliderWidget} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	UseDirective,
	auBooleanAttribute,
	auNumberAttribute,
	callWidgetFactory,
	createSlider,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, Output, ViewEncapsulation, forwardRef, inject} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {take} from 'rxjs';

@Component({
	selector: '[auSlider]',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true}],
	imports: [UseDirective],
	host: {
		class: `au-slider`,
		'[class]': '(state().vertical ? "au-slider-vertical" : "au-slider-horizontal") + " " + state().className',
		'[class.disabled]': 'state().disabled',
		'(blur)': 'handleBlur()',
	},
	template: `
		@for (option of state().progressDisplayOptions; track option) {
			<div
				class="au-slider-progress"
				[style.left.%]="option.left"
				[style.bottom.%]="option.bottom"
				[style.width.%]="option.width"
				[style.height.%]="option.height"
			></div>
		}
		<div [class]="state().vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'" (click)="sliderClick($event)"></div>
		@if (state().showMinMaxLabels) {
			<div
				[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'"
				[class.invisible]="!state().minValueLabelDisplay"
				[auUse]="widget.directives.minLabelDirective"
			>
				{{ state().min }}
			</div>
			<div
				[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'"
				[class.invisible]="!state().maxValueLabelDisplay"
				[auUse]="widget.directives.maxLabelDirective"
			>
				{{ state().max }}
			</div>
		}
		@if (state().showValueLabels && state().combinedLabelDisplay) {
			<div
				[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
				[style.left.%]="state().combinedLabelPositionLeft"
				[style.top.%]="state().combinedLabelPositionTop"
			>
				{{ state().sortedValues[0] }} - {{ state().sortedValues[1] }}
			</div>
		}
		@for (item of state().sortedHandles; track item.id; let i = $index) {
			<button
				class="au-slider-handle"
				role="slider"
				[attr.aria-valuemin]="state().min"
				[attr.aria-valuemax]="state().max"
				[attr.aria-readonly]="state().readonly ? true : null"
				[attr.aria-disabled]="state().disabled ? true : null"
				[attr.aria-valuenow]="item.value"
				[attr.aria-valuetext]="item.value"
				[attr.aria-label]="item.ariaLabel"
				[attr.aria-orientation]="state().vertical ? 'vertical' : null"
				[disabled]="state().disabled"
				[class]="state().vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'"
				[style.left.%]="state().vertical ? null : state().handleDisplayOptions[item.id].left"
				[style.top.%]="state().vertical ? state().handleDisplayOptions[item.id].top : null"
				(keydown)="onKeyDown($event, item.id)"
				(mousedown)="widget.actions.mouseDown($event, item.id)"
			>
				&nbsp;
			</button>
			@if (state().showValueLabels && !state().combinedLabelDisplay) {
				<div
					[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
					[style.left.%]="state().handleDisplayOptions[i].left"
					[style.top.%]="state().handleDisplayOptions[i].top"
				>
					{{ state().values[i] }}
				</div>
			}
		}
	`,
})
export class SliderComponent extends BaseWidgetDirective<SliderWidget> {
	private _zone = inject(NgZone);

	readonly _widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		events: {
			onValuesChange: (event) => {
				this.onChange(event);
				this.onTouched();
				this.valuesChange.emit(event);
			},
		},
	});

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * Minimum value that can be assigned to the slider
	 */
	@Input({alias: 'auMin', transform: auNumberAttribute})
	min: number | undefined;

	/**
	 * Maximum value that can be assigned to the slider
	 */
	@Input({alias: 'auMax', transform: auNumberAttribute})
	max: number | undefined;

	/**
	 * Unit value between slider steps
	 */
	@Input({alias: 'auStepSize', transform: auNumberAttribute})
	stepSize: number | undefined;

	/**
	 * Current slider values
	 */
	@Input('auValues')
	values: number[] | undefined;

	/**
	 * If `true` the value labels are displayed on the slider
	 */
	@Input({alias: 'auShowValueLabels', transform: auBooleanAttribute}) showValueLabels: boolean | undefined;

	/**
	 * If `true` the min and max labels are displayed on the slider
	 */
	@Input({alias: 'auShowMinMaxLabels', transform: auBooleanAttribute}) showMinMaxLabels: boolean | undefined;
	/**
	 * Return the value for the 'aria-label' attribute for the handle
	 */
	@Input('auAriaLabelHandle') ariaLabelHandle: ((value: number, sortedIndex: number, index: number) => string) | undefined;

	/**
	 * If `true` slider value cannot be changed but the slider is still focusable
	 */
	@Input({alias: 'auReadonly', transform: auBooleanAttribute})
	readonly: boolean | undefined;

	/**
	 * If `true` slider value cannot be changed and the slider cannot be focused
	 */
	@Input({alias: 'auDisabled', transform: auBooleanAttribute})
	disabled: boolean | undefined;

	/**
	 * If `true` is vertically positioned otherwise it is horizontal
	 */
	@Input({alias: 'auVertical', transform: auBooleanAttribute})
	vertical: boolean | undefined;

	/**
	 * An event emitted when slider values are changed
	 *
	 * Event payload equals to the updated slider values
	 */
	@Output('auValuesChange')
	valuesChange = new EventEmitter<number[]>();

	constructor() {
		super();
		useDirectiveForHost(this._widget.directives.sliderDirective);
	}

	/**
	 * Control value accessor methods
	 */
	onChange = (_: any) => {};

	onTouched = () => {};

	registerOnChange(fn: (value: any) => any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => any): void {
		this.onTouched = fn;
	}

	writeValue(value: any): void {
		if (Array.isArray(value)) {
			this._widget.patch({
				values: value,
			});
		} else {
			this._widget.patch({
				values: [value],
			});
		}
	}

	setDisabledState(isDisabled: boolean) {
		this._widget.patch({
			disabled: isDisabled,
		});
	}

	handleBlur() {
		this.onTouched();
	}

	sliderClick($event: MouseEvent) {
		this.widget.actions.click($event);
	}

	onKeyDown(event: KeyboardEvent, handleId: number) {
		this.widget.actions.keydown(event, handleId);
		this._zone.onStable.pipe(take(1)).subscribe(() => {
			(event.target as HTMLElement).focus();
		});
	}
}
