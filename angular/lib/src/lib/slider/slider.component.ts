import type {SliderState} from '@agnos-ui/angular-headless';
import {
	UseDirective,
	callWidgetFactory,
	createSlider,
	patchSimpleChanges,
	toAngularSignal,
	toSlotContextWidget,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import {NgFor, NgIf} from '@angular/common';
import type {OnChanges, Signal, SimpleChanges} from '@angular/core';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, Output, ViewEncapsulation, forwardRef, inject} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {take} from 'rxjs';

@Component({
	selector: '[auSlider]',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true}],
	imports: [NgIf, NgFor, UseDirective],
	host: {
		class: 'au-slider',
		'[class]': 'state().vertical ? "au-slider-vertical" : "au-slider-horizontal"',
		'(blur)': 'handleBlur()',
	},
	template: `
		<div [class]="state().vertical ? 'au-clickable-slider-area-vertical' : 'au-clickable-slider-area'" (click)="sliderClick($event)"></div>
		<div
			*ngFor="let option of state().progressDisplayOptions"
			class="au-slider-progress"
			[attr.disabled]="state().disabled ? true : null"
			[style.left.%]="option.left"
			[style.bottom.%]="option.bottom"
			[style.width.%]="option.width"
			[style.height.%]="option.height"
		></div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'"
			[style.visibility]="state().minValueLabelDisplay"
			[attr.disabled]="state().disabled ? true : null"
			[auUse]="widget.directives.minLabelDirective"
		>
			{{ state().min }}
		</div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'"
			[style.visibility]="state().maxValueLabelDisplay"
			[attr.disabled]="state().disabled ? true : null"
			[auUse]="widget.directives.maxLabelDirective"
		>
			{{ state().max }}
		</div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
			[style.visibility]="state().combinedLabelDisplay"
			[style.left.%]="state().combinedLabelPositionLeft"
			[style.top.%]="state().combinedLabelPositionTop"
			[attr.disabled]="state().disabled ? true : null"
		>
			{{ state().sortedValues[0] }} - {{ state().sortedValues[1] }}
		</div>
		<ng-template ngFor let-item [ngForOf]="state().sortedHandles" let-i="index" ; [ngForTrackBy]="trackHandle">
			<button
				class="au-slider-handle"
				role="slider"
				[attr.aria-valuemin]="state().min"
				[attr.aria-valuemax]="state().max"
				[attr.aria-readonly]="state().readonly ? true : null"
				[attr.aria-disabled]="state().disabled ? true : null"
				[attr.aria-valuenow]="item.value"
				[attr.aria-valuetext]="item.value"
				[attr.disabled]="state().disabled ? true : null"
				[class]="state().vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'"
				[style.left.%]="state().handleDisplayOptions[item.id].left"
				[style.top.%]="state().handleDisplayOptions[item.id].top"
				(keydown)="onKeyDown($event, item.id)"
				(mousedown)="widget.actions.mouseDown($event, item.id)"
			>
				&nbsp;
			</button>
			<div
				[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
				[style.left.%]="state().handleDisplayOptions[i].left"
				[style.top.%]="state().handleDisplayOptions[i].top"
				[style.visibility]="state().combinedLabelDisplay === 'visible' ? 'hidden' : 'visible'"
				[attr.disabled]="state().disabled ? true : null"
			>
				{{ state().values[i] }}
			</div>
		</ng-template>
	`,
	styles: ["@import '@agnos-ui/common/lib/slider.scss';"],
})
export class SliderComponent implements OnChanges {
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
	 * SliderWidget hold the state and actions applicable to the auSliderComponent
	 */
	readonly widget = toSlotContextWidget(this._widget);
	readonly state: Signal<SliderState> = toAngularSignal(this._widget.state$);
	readonly api = this._widget.api;

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * Minimum value that can be assigned to the slider
	 */
	@Input('auMin')
	min: number | undefined;

	/**
	 * Maximum value that can be assigned to the slider
	 */
	@Input('auMax')
	max: number | undefined;

	/**
	 * Unit value between slider steps
	 */
	@Input('auStepSize')
	stepSize: number | undefined;

	/**
	 * Current slider values
	 */
	@Input('auValues')
	values: number[] | undefined;

	/**
	 * If `true` slider value cannot be changed but the slider is still focusable
	 */
	@Input('auReadonly')
	readonly: boolean | undefined;

	/**
	 * If `true` slider value cannot be changed and the slider cannot be focused
	 */
	@Input('auDisabled')
	disabled: boolean | undefined;

	/**
	 * If `true` is vertically positioned otherwise it is horizontal
	 */
	@Input('auVertical')
	vertical: boolean | undefined;

	/**
	 * An event emitted when slider values are changed
	 *
	 * Event payload equals to the updated slider values
	 */
	@Output('auValuesChange')
	valuesChange = new EventEmitter<number[]>();

	constructor() {
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

	ngOnChanges(changes: SimpleChanges) {
		patchSimpleChanges(this._widget.patch, changes);
	}

	handleBlur() {
		this.onTouched();
	}

	sliderClick($event: MouseEvent) {
		this.widget.actions.click($event);
	}

	trackHandle(index: number, handle: {id: number; value: number}) {
		return handle.id;
	}

	onKeyDown(event: KeyboardEvent, handleId: number) {
		this.widget.actions.keydown(event, handleId);
		this._zone.onStable.pipe(take(1)).subscribe(() => {
			(event.target as HTMLElement).focus();
		});
	}
}
