const t=`import { callWidgetFactory, createSlider, patchSimpleChanges, toSlotContextWidget, UseDirective } from '@agnos-ui/angular-headless';
import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, inject, Input, NgZone, Output, ViewEncapsulation, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
export class SliderComponent {
    constructor() {
        /**
         * auSlider element reference
         */
        this._elementRef = inject(ElementRef);
        this._zone = inject(NgZone);
        this._widget = callWidgetFactory({
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
        this.widget = toSlotContextWidget(this._widget);
        this.state = toSignal(this._widget.state$, { requireSync: true });
        this.api = this._widget.api;
        /**
         * An event emitted when slider values are changed
         *
         * Event payload equals to the updated slider values
         */
        this.valuesChange = new EventEmitter();
        /**
         * Control value accessor methods
         */
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        if (Array.isArray(value)) {
            this._widget.patch({
                values: value,
            });
        }
        else {
            this._widget.patch({
                values: [value],
            });
        }
    }
    setDisabledState(isDisabled) {
        this._widget.patch({
            disabled: isDisabled,
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    ngAfterViewInit() {
        this._sliderDirective = this._widget.directives.sliderDirective(this._elementRef.nativeElement);
    }
    ngOnDestroy() {
        this._sliderDirective?.destroy?.();
    }
    handleBlur() {
        this.onTouched();
    }
    sliderClick($event) {
        this.widget.actions.click($event);
    }
    trackHandle(index, handle) {
        return handle.id;
    }
    onKeyDown(event, handleId) {
        this.widget.actions.keydown(event, handleId);
        this._zone.onStable.pipe(take(1)).subscribe(() => {
            event.target.focus();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: SliderComponent, isStandalone: true, selector: "[auSlider]", inputs: { className: ["auClassName", "className"], min: ["auMin", "min"], max: ["auMax", "max"], stepSize: ["auStepSize", "stepSize"], values: ["auValues", "values"], readonly: ["auReadonly", "readonly"], disabled: ["auDisabled", "disabled"], vertical: ["auVertical", "vertical"] }, outputs: { valuesChange: "auValuesChange" }, host: { listeners: { "blur": "handleBlur()" }, properties: { "class": "state().vertical ? \\"au-slider-vertical\\" : \\"au-slider-horizontal\\"" }, classAttribute: "au-slider" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }], usesOnChanges: true, ngImport: i0, template: \`
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
	\`, isInline: true, styles: [".au-slider-handle{background-color:var(--bs-primary, #005eb8);border:none;width:1.25rem;height:1.25rem;border-radius:.625rem;outline:none;position:absolute;&-horizontal{transform:translate(-50%,-40%)}&-vertical{transform:translate(-40%,-50%)}}.au-slider-handle:focus{box-shadow:0 0 25px 5px var(--bs-info, #48abe0)}.au-slider-progress{background-color:var(--bs-primary, #005eb8);height:.25rem;position:absolute;&-vertical{transform:rotate(90deg)}}.au-slider-label{margin-top:-1.9rem;position:absolute;&-min{left:0}&-max{right:0}&-now{transform:translate(-50%)}}.au-slider-label-vertical{margin-left:1rem;position:absolute;transform:translateY(-40%);white-space:nowrap;&-min{top:100%}&-max{top:0%}&-now{transform:translateY(-50%)}}.au-slider{display:flex;background-color:var(--bs-secondary-bg, #d3d3d3);position:relative}.au-slider-horizontal{width:100%;height:.25rem;margin-top:2rem;margin-bottom:1rem}.au-slider-vertical{height:100%;width:.25rem;margin:1rem 2rem 1rem 1rem}.au-slider-progress[disabled],.au-slider-handle[disabled]{background-color:var(--bs-dark-bg-subtle, #b3b3b3);cursor:not-allowed}.au-slider-label[disabled],.au-slider-label-vertical[disabled]{color:var(--bs-dark-bg-subtle, #b3b3b3)}au-slider[disabled]{cursor:not-allowed}.au-clickable-slider-area{height:1.5rem;width:100%;transform:translateY(-50%)}.au-clickable-slider-area-vertical{width:1.5rem;height:100%;transform:translate(-50%);flex-shrink:0}\\n"], dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SliderComponent, decorators: [{
            type: Component,
            args: [{ selector: '[auSlider]', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }], imports: [NgIf, NgFor, UseDirective], host: {
                        class: 'au-slider',
                        '[class]': 'state().vertical ? "au-slider-vertical" : "au-slider-horizontal"',
                        '(blur)': 'handleBlur()',
                    }, template: \`
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
	\`, styles: [".au-slider-handle{background-color:var(--bs-primary, #005eb8);border:none;width:1.25rem;height:1.25rem;border-radius:.625rem;outline:none;position:absolute;&-horizontal{transform:translate(-50%,-40%)}&-vertical{transform:translate(-40%,-50%)}}.au-slider-handle:focus{box-shadow:0 0 25px 5px var(--bs-info, #48abe0)}.au-slider-progress{background-color:var(--bs-primary, #005eb8);height:.25rem;position:absolute;&-vertical{transform:rotate(90deg)}}.au-slider-label{margin-top:-1.9rem;position:absolute;&-min{left:0}&-max{right:0}&-now{transform:translate(-50%)}}.au-slider-label-vertical{margin-left:1rem;position:absolute;transform:translateY(-40%);white-space:nowrap;&-min{top:100%}&-max{top:0%}&-now{transform:translateY(-50%)}}.au-slider{display:flex;background-color:var(--bs-secondary-bg, #d3d3d3);position:relative}.au-slider-horizontal{width:100%;height:.25rem;margin-top:2rem;margin-bottom:1rem}.au-slider-vertical{height:100%;width:.25rem;margin:1rem 2rem 1rem 1rem}.au-slider-progress[disabled],.au-slider-handle[disabled]{background-color:var(--bs-dark-bg-subtle, #b3b3b3);cursor:not-allowed}.au-slider-label[disabled],.au-slider-label-vertical[disabled]{color:var(--bs-dark-bg-subtle, #b3b3b3)}au-slider[disabled]{cursor:not-allowed}.au-clickable-slider-area{height:1.5rem;width:100%;transform:translateY(-50%)}.au-clickable-slider-area-vertical{width:1.5rem;height:100%;transform:translate(-50%);flex-shrink:0}\\n"] }]
        }], propDecorators: { className: [{
                type: Input,
                args: ['auClassName']
            }], min: [{
                type: Input,
                args: ['auMin']
            }], max: [{
                type: Input,
                args: ['auMax']
            }], stepSize: [{
                type: Input,
                args: ['auStepSize']
            }], values: [{
                type: Input,
                args: ['auValues']
            }], readonly: [{
                type: Input,
                args: ['auReadonly']
            }], disabled: [{
                type: Input,
                args: ['auDisabled']
            }], vertical: [{
                type: Input,
                args: ['auVertical']
            }], valuesChange: [{
                type: Output,
                args: ['auValuesChange']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFbEksT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04saUJBQWlCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQTBNMUIsTUFBTSxPQUFPLGVBQWU7SUF4TTVCO1FBeU1DOztXQUVHO1FBQ0ssZ0JBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFakMsVUFBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0QixZQUFPLEdBQUcsaUJBQWlCLENBQUM7WUFDcEMsT0FBTyxFQUFFLFlBQVk7WUFDckIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsTUFBTSxFQUFFO2dCQUNQLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxZQUFZLENB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QUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLCtDQU81Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRVQsMjlDQXZFZSxLQUFLLG1IQUFFLFlBQVk7OzRGQWtNdkIsZUFBZTtrQkF4TTNCLFNBQVM7K0JBQ0MsWUFBWSxjQUNWLElBQUksbUJBQ0MsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxhQUMxQixDQUFDLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLFdBQzdGLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsUUFDOUI7d0JBQ0wsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLFNBQVMsRUFBRSxrRUFBa0U7d0JBQzdFLFFBQVEsRUFBRSxjQUFjO3FCQUN4QixZQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlFVDs4QkF3SnFCLFNBQVM7c0JBQTlCLEtBQUs7dUJBQUMsYUFBYTtnQkFNcEIsR0FBRztzQkFERixLQUFLO3VCQUFDLE9BQU87Z0JBT2QsR0FBRztzQkFERixLQUFLO3VCQUFDLE9BQU87Z0JBT2QsUUFBUTtzQkFEUCxLQUFLO3VCQUFDLFlBQVk7Z0JBT25CLE1BQU07c0JBREwsS0FBSzt1QkFBQyxVQUFVO2dCQU9qQixRQUFRO3NCQURQLEtBQUs7dUJBQUMsWUFBWTtnQkFPbkIsUUFBUTtzQkFEUCxLQUFLO3VCQUFDLFlBQVk7Z0JBT25CLFFBQVE7c0JBRFAsS0FBSzt1QkFBQyxZQUFZO2dCQVNuQixZQUFZO3NCQURYLE1BQU07dUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1NsaWRlclN0YXRlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5LCBjcmVhdGVTbGlkZXIsIHBhdGNoU2ltcGxlQ2hhbmdlcywgdG9TbG90Q29udGV4dFdpZGdldCwgVXNlRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7RGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvY29yZSc7XG5pbXBvcnQge05nRm9yLCBOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaWduYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRmb3J3YXJkUmVmLFxuXHRpbmplY3QsXG5cdElucHV0LFxuXHROZ1pvbmUsXG5cdE91dHB1dCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0b1NpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1U2xpZGVyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksIG11bHRpOiB0cnVlfV0sXG5cdGltcG9ydHM6IFtOZ0lmLCBOZ0ZvciwgVXNlRGlyZWN0aXZlXSxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiAnYXUtc2xpZGVyJyxcblx0XHQnW2NsYXNzXSc6ICdzdGF0ZSgpLnZlcnRpY2FsID8gXCJhdS1zbGlkZXItdmVydGljYWxcIiA6IFwiYXUtc2xpZGVyLWhvcml6b250YWxcIicsXG5cdFx0JyhibHVyKSc6ICdoYW5kbGVCbHVyKCknLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtY2xpY2thYmxlLXNsaWRlci1hcmVhLXZlcnRpY2FsJyA6ICdhdS1jbGlja2FibGUtc2xpZGVyLWFyZWEnXCIgKGNsaWNrKT1cInNsaWRlckNsaWNrKCRldmVudClcIj48L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHQqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHN0YXRlKCkucHJvZ3Jlc3NEaXNwbGF5T3B0aW9uc1wiXG5cdFx0XHRjbGFzcz1cImF1LXNsaWRlci1wcm9ncmVzc1wiXG5cdFx0XHRbYXR0ci5kaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0W3N0eWxlLmxlZnQuJV09XCJvcHRpb24ubGVmdFwiXG5cdFx0XHRbc3R5bGUuYm90dG9tLiVdPVwib3B0aW9uLmJvdHRvbVwiXG5cdFx0XHRbc3R5bGUud2lkdGguJV09XCJvcHRpb24ud2lkdGhcIlxuXHRcdFx0W3N0eWxlLmhlaWdodC4lXT1cIm9wdGlvbi5oZWlnaHRcIlxuXHRcdD48L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW1pbicgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1taW4nXCJcblx0XHRcdFtzdHlsZS52aXNpYmlsaXR5XT1cInN0YXRlKCkubWluVmFsdWVMYWJlbERpc3BsYXlcIlxuXHRcdFx0W2F0dHIuZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsXCJcblx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5taW5MYWJlbERpcmVjdGl2ZVwiXG5cdFx0PlxuXHRcdFx0e3sgc3RhdGUoKS5taW4gfX1cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW1heCcgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1tYXgnXCJcblx0XHRcdFtzdHlsZS52aXNpYmlsaXR5XT1cInN0YXRlKCkubWF4VmFsdWVMYWJlbERpc3BsYXlcIlxuXHRcdFx0W2F0dHIuZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsXCJcblx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5tYXhMYWJlbERpcmVjdGl2ZVwiXG5cdFx0PlxuXHRcdFx0e3sgc3RhdGUoKS5tYXggfX1cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW5vdycgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1ub3cnXCJcblx0XHRcdFtzdHlsZS52aXNpYmlsaXR5XT1cInN0YXRlKCkuY29tYmluZWRMYWJlbERpc3BsYXlcIlxuXHRcdFx0W3N0eWxlLmxlZnQuJV09XCJzdGF0ZSgpLmNvbWJpbmVkTGFiZWxQb3NpdGlvbkxlZnRcIlxuXHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuY29tYmluZWRMYWJlbFBvc2l0aW9uVG9wXCJcblx0XHRcdFthdHRyLmRpc2FibGVkXT1cInN0YXRlKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbFwiXG5cdFx0PlxuXHRcdFx0e3sgc3RhdGUoKS5zb3J0ZWRWYWx1ZXNbMF0gfX0gLSB7eyBzdGF0ZSgpLnNvcnRlZFZhbHVlc1sxXSB9fVxuXHRcdDwvZGl2PlxuXHRcdDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJzdGF0ZSgpLnNvcnRlZEhhbmRsZXNcIiBsZXQtaT1cImluZGV4XCIgOyBbbmdGb3JUcmFja0J5XT1cInRyYWNrSGFuZGxlXCI+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwiYXUtc2xpZGVyLWhhbmRsZVwiXG5cdFx0XHRcdHJvbGU9XCJzbGlkZXJcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbWluXT1cInN0YXRlKCkubWluXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZW1heF09XCJzdGF0ZSgpLm1heFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtcmVhZG9ubHldPVwic3RhdGUoKS5yZWFkb25seSA/IHRydWUgOiBudWxsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbm93XT1cIml0ZW0udmFsdWVcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJpdGVtLnZhbHVlXCJcblx0XHRcdFx0W2F0dHIuZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsXCJcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWhhbmRsZS12ZXJ0aWNhbCcgOiAnYXUtc2xpZGVyLWhhbmRsZS1ob3Jpem9udGFsJ1wiXG5cdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpdGVtLmlkXS5sZWZ0XCJcblx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaXRlbS5pZF0udG9wXCJcblx0XHRcdFx0KGtleWRvd24pPVwib25LZXlEb3duKCRldmVudCwgaXRlbS5pZClcIlxuXHRcdFx0XHQobW91c2Vkb3duKT1cIndpZGdldC5hY3Rpb25zLm1vdXNlRG93bigkZXZlbnQsIGl0ZW0uaWQpXCJcblx0XHRcdD5cblx0XHRcdFx0Jm5ic3A7XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxkaXZcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1ub3cnIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbm93J1wiXG5cdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpXS5sZWZ0XCJcblx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaV0udG9wXCJcblx0XHRcdFx0W3N0eWxlLnZpc2liaWxpdHldPVwic3RhdGUoKS5jb21iaW5lZExhYmVsRGlzcGxheSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIlxuXHRcdFx0XHRbYXR0ci5kaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0PlxuXHRcdFx0XHR7eyBzdGF0ZSgpLnZhbHVlc1tpXSB9fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcblx0c3R5bGVzOiBbXG5cdFx0YFxuXHRcdFx0LmF1LXNsaWRlci1oYW5kbGUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1wcmltYXJ5LCAjMDA1ZWI4KTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHR3aWR0aDogMS4yNXJlbTtcblx0XHRcdFx0aGVpZ2h0OiAxLjI1cmVtO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcblx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXG5cdFx0XHRcdCYtaG9yaXpvbnRhbCB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLXZlcnRpY2FsIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNTAlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuYXUtc2xpZGVyLWhhbmRsZTpmb2N1cyB7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAyNXB4IDVweCB2YXIoLS1icy1pbmZvLCAjNDhhYmUwKTtcblx0XHRcdH1cblxuXHRcdFx0LmF1LXNsaWRlci1wcm9ncmVzcyB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXByaW1hcnksICMwMDVlYjgpO1xuXHRcdFx0XHRoZWlnaHQ6IDAuMjVyZW07XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXHRcdFx0XHQmLXZlcnRpY2FsIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmF1LXNsaWRlci1sYWJlbCB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IC0xLjlyZW07XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXHRcdFx0XHQmLW1pbiB7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYtbWF4IHtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYtbm93IHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCB7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxcmVtO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTtcblx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuXHRcdFx0XHQmLW1pbiB7XG5cdFx0XHRcdFx0dG9wOiAxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji1tYXgge1xuXHRcdFx0XHRcdHRvcDogMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLW5vdyB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5hdS1zbGlkZXIge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnktYmcsICNkM2QzZDMpO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHR9XG5cblx0XHRcdC5hdS1zbGlkZXItaG9yaXpvbnRhbCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDAuMjVyZW07XG5cdFx0XHRcdG1hcmdpbi10b3A6IDJyZW07XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdFx0XHR9XG5cblx0XHRcdC5hdS1zbGlkZXItdmVydGljYWwge1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdHdpZHRoOiAwLjI1cmVtO1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDJyZW07XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxcmVtO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxcmVtO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAxcmVtO1xuXHRcdFx0fVxuXG5cdFx0XHQuYXUtc2xpZGVyLXByb2dyZXNzW2Rpc2FibGVkXSxcblx0XHRcdC5hdS1zbGlkZXItaGFuZGxlW2Rpc2FibGVkXSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWRhcmstYmctc3VidGxlLCAjYjNiM2IzKTtcblx0XHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcblx0XHRcdH1cblxuXHRcdFx0LmF1LXNsaWRlci1sYWJlbFtkaXNhYmxlZF0sXG5cdFx0XHQuYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsW2Rpc2FibGVkXSB7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1icy1kYXJrLWJnLXN1YnRsZSwgI2IzYjNiMyk7XG5cdFx0XHR9XG5cblx0XHRcdGF1LXNsaWRlcltkaXNhYmxlZF0ge1xuXHRcdFx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRcdFx0fVxuXG5cdFx0XHQuYXUtY2xpY2thYmxlLXNsaWRlci1hcmVhIHtcblx0XHRcdFx0aGVpZ2h0OiAxLjVyZW07XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdFx0XHR9XG5cblx0XHRcdC5hdS1jbGlja2FibGUtc2xpZGVyLWFyZWEtdmVydGljYWwge1xuXHRcdFx0XHR3aWR0aDogMS41cmVtO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0XHR9XG5cdFx0YCxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXHQvKipcblx0ICogYXVTbGlkZXIgZWxlbWVudCByZWZlcmVuY2Vcblx0ICovXG5cdHByaXZhdGUgX2VsZW1lbnRSZWYgPSBpbmplY3QoRWxlbWVudFJlZik7XG5cdHByaXZhdGUgX3NsaWRlckRpcmVjdGl2ZTogUmV0dXJuVHlwZTxEaXJlY3RpdmU+O1xuXHRwcml2YXRlIF96b25lID0gaW5qZWN0KE5nWm9uZSk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVTbGlkZXIsXG5cdFx0d2lkZ2V0TmFtZTogJ3NsaWRlcicsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvblZhbHVlc0NoYW5nZTogKGV2ZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMub25DaGFuZ2UoZXZlbnQpO1xuXHRcdFx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHRcdFx0XHR0aGlzLnZhbHVlc0NoYW5nZS5lbWl0KGV2ZW50KTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdC8qKlxuXHQgKiBTbGlkZXJXaWRnZXQgaG9sZCB0aGUgc3RhdGUgYW5kIGFjdGlvbnMgYXBwbGljYWJsZSB0byB0aGUgYXVTbGlkZXJDb21wb25lbnRcblx0ICovXG5cdHJlYWRvbmx5IHdpZGdldCA9IHRvU2xvdENvbnRleHRXaWRnZXQodGhpcy5fd2lkZ2V0KTtcblx0cmVhZG9ubHkgc3RhdGU6IFNpZ25hbDxTbGlkZXJTdGF0ZT4gPSB0b1NpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkLCB7cmVxdWlyZVN5bmM6IHRydWV9KTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1pbmltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KCdhdU1pbicpXG5cdG1pbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBNYXhpbXVtIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCgnYXVNYXgnKVxuXHRtYXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVW5pdCB2YWx1ZSBiZXR3ZWVuIHNsaWRlciBzdGVwc1xuXHQgKi9cblx0QElucHV0KCdhdVN0ZXBTaXplJylcblx0c3RlcFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ3VycmVudCBzbGlkZXIgdmFsdWVzXG5cdCAqL1xuXHRASW5wdXQoJ2F1VmFsdWVzJylcblx0dmFsdWVzOiBudW1iZXJbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBidXQgdGhlIHNsaWRlciBpcyBzdGlsbCBmb2N1c2FibGVcblx0ICovXG5cdEBJbnB1dCgnYXVSZWFkb25seScpXG5cdHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgc2xpZGVyIHZhbHVlIGNhbm5vdCBiZSBjaGFuZ2VkIGFuZCB0aGUgc2xpZGVyIGNhbm5vdCBiZSBmb2N1c2VkXG5cdCAqL1xuXHRASW5wdXQoJ2F1RGlzYWJsZWQnKVxuXHRkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIGlzIHZlcnRpY2FsbHkgcG9zaXRpb25lZCBvdGhlcndpc2UgaXQgaXMgaG9yaXpvbnRhbFxuXHQgKi9cblx0QElucHV0KCdhdVZlcnRpY2FsJylcblx0dmVydGljYWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiBzbGlkZXIgdmFsdWVzIGFyZSBjaGFuZ2VkXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgZXF1YWxzIHRvIHRoZSB1cGRhdGVkIHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBPdXRwdXQoJ2F1VmFsdWVzQ2hhbmdlJylcblx0dmFsdWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4oKTtcblxuXHQvKipcblx0ICogQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBtZXRob2RzXG5cdCAqL1xuXHRvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdFx0dmFsdWVzOiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0XHR2YWx1ZXM6IFt2YWx1ZV0sXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0ZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5fc2xpZGVyRGlyZWN0aXZlID0gdGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuc2xpZGVyRGlyZWN0aXZlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLl9zbGlkZXJEaXJlY3RpdmU/LmRlc3Ryb3k/LigpO1xuXHR9XG5cblx0aGFuZGxlQmx1cigpIHtcblx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHR9XG5cblx0c2xpZGVyQ2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdFx0dGhpcy53aWRnZXQuYWN0aW9ucy5jbGljaygkZXZlbnQpO1xuXHR9XG5cblx0dHJhY2tIYW5kbGUoaW5kZXg6IG51bWJlciwgaGFuZGxlOiB7aWQ6IG51bWJlcjsgdmFsdWU6IG51bWJlcn0pIHtcblx0XHRyZXR1cm4gaGFuZGxlLmlkO1xuXHR9XG5cblx0b25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyKSB7XG5cdFx0dGhpcy53aWRnZXQuYWN0aW9ucy5rZXlkb3duKGV2ZW50LCBoYW5kbGVJZCk7XG5cdFx0dGhpcy5fem9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHQoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
