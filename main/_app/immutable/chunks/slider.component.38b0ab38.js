const t=`import { UseDirective, callWidgetFactory, createSlider, patchSimpleChanges, toAngularSignal, toSlotContextWidget, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, Output, ViewEncapsulation, forwardRef, inject } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
export class SliderComponent {
    constructor() {
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
        this.state = toAngularSignal(this._widget.state$);
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
        useDirectiveForHost(this._widget.directives.sliderDirective);
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
        }], ctorParameters: function () { return []; }, propDecorators: { className: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTVDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUEwTTFCLE1BQU0sT0FBTyxlQUFlO0lBNEUzQjtRQTNFUSxVQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRCLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztZQUNwQyxPQUFPLEVBQUUsWUFBWTtZQUNyQixVQUFVLEVBQUUsUUFBUTtZQUNwQixNQUFNLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7YUFDRDtTQUNELENBQUMsQ0FBQztRQUNIOztXQUVHO1FBQ00sV0FBTSxH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QUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLFdBQzdGLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsUUFDOUI7d0JBQ0wsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLFNBQVMsRUFBRSxrRUFBa0U7d0JBQzdFLFFBQVEsRUFBRSxjQUFjO3FCQUN4QixZQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlFVDswRUFtSnFCLFNBQVM7c0JBQTlCLEtBQUs7dUJBQUMsYUFBYTtnQkFNcEIsR0FBRztzQkFERixLQUFLO3VCQUFDLE9BQU87Z0JBT2QsR0FBRztzQkFERixLQUFLO3VCQUFDLE9BQU87Z0JBT2QsUUFBUTtzQkFEUCxLQUFLO3VCQUFDLFlBQVk7Z0JBT25CLE1BQU07c0JBREwsS0FBSzt1QkFBQyxVQUFVO2dCQU9qQixRQUFRO3NCQURQLEtBQUs7dUJBQUMsWUFBWTtnQkFPbkIsUUFBUTtzQkFEUCxLQUFLO3VCQUFDLFlBQVk7Z0JBT25CLFFBQVE7c0JBRFAsS0FBSzt1QkFBQyxZQUFZO2dCQVNuQixZQUFZO3NCQURYLE1BQU07dUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1NsaWRlclN0YXRlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRVc2VEaXJlY3RpdmUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVTbGlkZXIsXG5cdHBhdGNoU2ltcGxlQ2hhbmdlcyxcblx0dG9Bbmd1bGFyU2lnbmFsLFxuXHR0b1Nsb3RDb250ZXh0V2lkZ2V0LFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nRm9yLCBOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge09uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBmb3J3YXJkUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1U2xpZGVyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksIG11bHRpOiB0cnVlfV0sXG5cdGltcG9ydHM6IFtOZ0lmLCBOZ0ZvciwgVXNlRGlyZWN0aXZlXSxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiAnYXUtc2xpZGVyJyxcblx0XHQnW2NsYXNzXSc6ICdzdGF0ZSgpLnZlcnRpY2FsID8gXCJhdS1zbGlkZXItdmVydGljYWxcIiA6IFwiYXUtc2xpZGVyLWhvcml6b250YWxcIicsXG5cdFx0JyhibHVyKSc6ICdoYW5kbGVCbHVyKCknLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtY2xpY2thYmxlLXNsaWRlci1hcmVhLXZlcnRpY2FsJyA6ICdhdS1jbGlja2FibGUtc2xpZGVyLWFyZWEnXCIgKGNsaWNrKT1cInNsaWRlckNsaWNrKCRldmVudClcIj48L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHQqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHN0YXRlKCkucHJvZ3Jlc3NEaXNwbGF5T3B0aW9uc1wiXG5cdFx0XHRjbGFzcz1cImF1LXNsaWRlci1wcm9ncmVzc1wiXG5cdFx0XHRbYXR0ci5kaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0W3N0eWxlLmxlZnQuJV09XCJvcHRpb24ubGVmdFwiXG5cdFx0XHRbc3R5bGUuYm90dG9tLiVdPVwib3B0aW9uLmJvdHRvbVwiXG5cdFx0XHRbc3R5bGUud2lkdGguJV09XCJvcHRpb24ud2lkdGhcIlxuXHRcdFx0W3N0eWxlLmhlaWdodC4lXT1cIm9wdGlvbi5oZWlnaHRcIlxuXHRcdD48L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW1pbicgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1taW4nXCJcblx0XHRcdFtzdHlsZS52aXNpYmlsaXR5XT1cInN0YXRlKCkubWluVmFsdWVMYWJlbERpc3BsYXlcIlxuXHRcdFx0W2F0dHIuZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsXCJcblx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5taW5MYWJlbERpcmVjdGl2ZVwiXG5cdFx0PlxuXHRcdFx0e3sgc3RhdGUoKS5taW4gfX1cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW1heCcgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1tYXgnXCJcblx0XHRcdFtzdHlsZS52aXNpYmlsaXR5XT1cInN0YXRlKCkubWF4VmFsdWVMYWJlbERpc3BsYXlcIlxuXHRcdFx0W2F0dHIuZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsXCJcblx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5tYXhMYWJlbERpcmVjdGl2ZVwiXG5cdFx0PlxuXHRcdFx0e3sgc3RhdGUoKS5tYXggfX1cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW5vdycgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1ub3cnXCJcblx0XHRcdFtzdHlsZS52aXNpYmlsaXR5XT1cInN0YXRlKCkuY29tYmluZWRMYWJlbERpc3BsYXlcIlxuXHRcdFx0W3N0eWxlLmxlZnQuJV09XCJzdGF0ZSgpLmNvbWJpbmVkTGFiZWxQb3NpdGlvbkxlZnRcIlxuXHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuY29tYmluZWRMYWJlbFBvc2l0aW9uVG9wXCJcblx0XHRcdFthdHRyLmRpc2FibGVkXT1cInN0YXRlKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbFwiXG5cdFx0PlxuXHRcdFx0e3sgc3RhdGUoKS5zb3J0ZWRWYWx1ZXNbMF0gfX0gLSB7eyBzdGF0ZSgpLnNvcnRlZFZhbHVlc1sxXSB9fVxuXHRcdDwvZGl2PlxuXHRcdDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJzdGF0ZSgpLnNvcnRlZEhhbmRsZXNcIiBsZXQtaT1cImluZGV4XCIgOyBbbmdGb3JUcmFja0J5XT1cInRyYWNrSGFuZGxlXCI+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwiYXUtc2xpZGVyLWhhbmRsZVwiXG5cdFx0XHRcdHJvbGU9XCJzbGlkZXJcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbWluXT1cInN0YXRlKCkubWluXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZW1heF09XCJzdGF0ZSgpLm1heFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtcmVhZG9ubHldPVwic3RhdGUoKS5yZWFkb25seSA/IHRydWUgOiBudWxsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbm93XT1cIml0ZW0udmFsdWVcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJpdGVtLnZhbHVlXCJcblx0XHRcdFx0W2F0dHIuZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsXCJcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWhhbmRsZS12ZXJ0aWNhbCcgOiAnYXUtc2xpZGVyLWhhbmRsZS1ob3Jpem9udGFsJ1wiXG5cdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpdGVtLmlkXS5sZWZ0XCJcblx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaXRlbS5pZF0udG9wXCJcblx0XHRcdFx0KGtleWRvd24pPVwib25LZXlEb3duKCRldmVudCwgaXRlbS5pZClcIlxuXHRcdFx0XHQobW91c2Vkb3duKT1cIndpZGdldC5hY3Rpb25zLm1vdXNlRG93bigkZXZlbnQsIGl0ZW0uaWQpXCJcblx0XHRcdD5cblx0XHRcdFx0Jm5ic3A7XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxkaXZcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1ub3cnIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbm93J1wiXG5cdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpXS5sZWZ0XCJcblx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaV0udG9wXCJcblx0XHRcdFx0W3N0eWxlLnZpc2liaWxpdHldPVwic3RhdGUoKS5jb21iaW5lZExhYmVsRGlzcGxheSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIlxuXHRcdFx0XHRbYXR0ci5kaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0PlxuXHRcdFx0XHR7eyBzdGF0ZSgpLnZhbHVlc1tpXSB9fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcblx0c3R5bGVzOiBbXG5cdFx0YFxuXHRcdFx0LmF1LXNsaWRlci1oYW5kbGUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1wcmltYXJ5LCAjMDA1ZWI4KTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHR3aWR0aDogMS4yNXJlbTtcblx0XHRcdFx0aGVpZ2h0OiAxLjI1cmVtO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcblx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXG5cdFx0XHRcdCYtaG9yaXpvbnRhbCB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLXZlcnRpY2FsIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNTAlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuYXUtc2xpZGVyLWhhbmRsZTpmb2N1cyB7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAyNXB4IDVweCB2YXIoLS1icy1pbmZvLCAjNDhhYmUwKTtcblx0XHRcdH1cblxuXHRcdFx0LmF1LXNsaWRlci1wcm9ncmVzcyB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXByaW1hcnksICMwMDVlYjgpO1xuXHRcdFx0XHRoZWlnaHQ6IDAuMjVyZW07XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXHRcdFx0XHQmLXZlcnRpY2FsIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmF1LXNsaWRlci1sYWJlbCB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IC0xLjlyZW07XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXHRcdFx0XHQmLW1pbiB7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYtbWF4IHtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYtbm93IHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCB7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxcmVtO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTtcblx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuXHRcdFx0XHQmLW1pbiB7XG5cdFx0XHRcdFx0dG9wOiAxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji1tYXgge1xuXHRcdFx0XHRcdHRvcDogMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLW5vdyB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5hdS1zbGlkZXIge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnktYmcsICNkM2QzZDMpO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHR9XG5cblx0XHRcdC5hdS1zbGlkZXItaG9yaXpvbnRhbCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDAuMjVyZW07XG5cdFx0XHRcdG1hcmdpbi10b3A6IDJyZW07XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdFx0XHR9XG5cblx0XHRcdC5hdS1zbGlkZXItdmVydGljYWwge1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdHdpZHRoOiAwLjI1cmVtO1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDJyZW07XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxcmVtO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxcmVtO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAxcmVtO1xuXHRcdFx0fVxuXG5cdFx0XHQuYXUtc2xpZGVyLXByb2dyZXNzW2Rpc2FibGVkXSxcblx0XHRcdC5hdS1zbGlkZXItaGFuZGxlW2Rpc2FibGVkXSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWRhcmstYmctc3VidGxlLCAjYjNiM2IzKTtcblx0XHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcblx0XHRcdH1cblxuXHRcdFx0LmF1LXNsaWRlci1sYWJlbFtkaXNhYmxlZF0sXG5cdFx0XHQuYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsW2Rpc2FibGVkXSB7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1icy1kYXJrLWJnLXN1YnRsZSwgI2IzYjNiMyk7XG5cdFx0XHR9XG5cblx0XHRcdGF1LXNsaWRlcltkaXNhYmxlZF0ge1xuXHRcdFx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRcdFx0fVxuXG5cdFx0XHQuYXUtY2xpY2thYmxlLXNsaWRlci1hcmVhIHtcblx0XHRcdFx0aGVpZ2h0OiAxLjVyZW07XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdFx0XHR9XG5cblx0XHRcdC5hdS1jbGlja2FibGUtc2xpZGVyLWFyZWEtdmVydGljYWwge1xuXHRcdFx0XHR3aWR0aDogMS41cmVtO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0XHR9XG5cdFx0YCxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0cHJpdmF0ZSBfem9uZSA9IGluamVjdChOZ1pvbmUpO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlU2xpZGVyLFxuXHRcdHdpZGdldE5hbWU6ICdzbGlkZXInLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25WYWx1ZXNDaGFuZ2U6IChldmVudCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKGV2ZW50KTtcblx0XHRcdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0XHRcdFx0dGhpcy52YWx1ZXNDaGFuZ2UuZW1pdChldmVudCk7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXHQvKipcblx0ICogU2xpZGVyV2lkZ2V0IGhvbGQgdGhlIHN0YXRlIGFuZCBhY3Rpb25zIGFwcGxpY2FibGUgdG8gdGhlIGF1U2xpZGVyQ29tcG9uZW50XG5cdCAqL1xuXHRyZWFkb25seSB3aWRnZXQgPSB0b1Nsb3RDb250ZXh0V2lkZ2V0KHRoaXMuX3dpZGdldCk7XG5cdHJlYWRvbmx5IHN0YXRlOiBTaWduYWw8U2xpZGVyU3RhdGU+ID0gdG9Bbmd1bGFyU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQpO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTWluaW11bSB2YWx1ZSB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1TWluJylcblx0bWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1heGltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KCdhdU1heCcpXG5cdG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBVbml0IHZhbHVlIGJldHdlZW4gc2xpZGVyIHN0ZXBzXG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RlcFNpemUnKVxuXHRzdGVwU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXJyZW50IHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBJbnB1dCgnYXVWYWx1ZXMnKVxuXHR2YWx1ZXM6IG51bWJlcltdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgc2xpZGVyIHZhbHVlIGNhbm5vdCBiZSBjaGFuZ2VkIGJ1dCB0aGUgc2xpZGVyIGlzIHN0aWxsIGZvY3VzYWJsZVxuXHQgKi9cblx0QElucHV0KCdhdVJlYWRvbmx5Jylcblx0cmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBzbGlkZXIgdmFsdWUgY2Fubm90IGJlIGNoYW5nZWQgYW5kIHRoZSBzbGlkZXIgY2Fubm90IGJlIGZvY3VzZWRcblx0ICovXG5cdEBJbnB1dCgnYXVEaXNhYmxlZCcpXG5cdGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgaXMgdmVydGljYWxseSBwb3NpdGlvbmVkIG90aGVyd2lzZSBpdCBpcyBob3Jpem9udGFsXG5cdCAqL1xuXHRASW5wdXQoJ2F1VmVydGljYWwnKVxuXHR2ZXJ0aWNhbDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHNsaWRlciB2YWx1ZXMgYXJlIGNoYW5nZWRcblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBlcXVhbHMgdG8gdGhlIHVwZGF0ZWQgc2xpZGVyIHZhbHVlc1xuXHQgKi9cblx0QE91dHB1dCgnYXVWYWx1ZXNDaGFuZ2UnKVxuXHR2YWx1ZXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcltdPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHVzZURpcmVjdGl2ZUZvckhvc3QodGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuc2xpZGVyRGlyZWN0aXZlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb250cm9sIHZhbHVlIGFjY2Vzc29yIG1ldGhvZHNcblx0ICovXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cblx0b25Ub3VjaGVkID0gKCkgPT4ge307XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0XHR2YWx1ZXM6IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRcdHZhbHVlczogW3ZhbHVlXSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRkaXNhYmxlZDogaXNEaXNhYmxlZCxcblx0XHR9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRwYXRjaFNpbXBsZUNoYW5nZXModGhpcy5fd2lkZ2V0LnBhdGNoLCBjaGFuZ2VzKTtcblx0fVxuXG5cdGhhbmRsZUJsdXIoKSB7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0fVxuXG5cdHNsaWRlckNsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xuXHRcdHRoaXMud2lkZ2V0LmFjdGlvbnMuY2xpY2soJGV2ZW50KTtcblx0fVxuXG5cdHRyYWNrSGFuZGxlKGluZGV4OiBudW1iZXIsIGhhbmRsZToge2lkOiBudW1iZXI7IHZhbHVlOiBudW1iZXJ9KSB7XG5cdFx0cmV0dXJuIGhhbmRsZS5pZDtcblx0fVxuXG5cdG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCwgaGFuZGxlSWQ6IG51bWJlcikge1xuXHRcdHRoaXMud2lkZ2V0LmFjdGlvbnMua2V5ZG93bihldmVudCwgaGFuZGxlSWQpO1xuXHRcdHRoaXMuX3pvbmUub25TdGFibGUucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0KGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcblx0XHR9KTtcblx0fVxufVxuIl19`;export{t as default};
