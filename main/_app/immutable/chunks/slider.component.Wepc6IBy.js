const t=`import { BaseWidgetDirective, UseDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createSlider, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, Output, ViewEncapsulation, forwardRef, inject } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
const _c0 = ["auSlider", ""];
const _forTrack1 = ($index, $item) => $item.id;
function SliderComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    i0.ɵɵstyleProp("left", option_r4.left, "%")("bottom", option_r4.bottom, "%")("width", option_r4.width, "%")("height", option_r4.height, "%");
} }
function SliderComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.state().vertical ? "au-slider-label-vertical au-slider-label-vertical-min" : "au-slider-label au-slider-label-min");
    i0.ɵɵclassProp("invisible", !ctx_r1.state().minValueLabelDisplay);
    i0.ɵɵproperty("auUse", ctx_r1.widget.directives.minLabelDirective);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.state().min, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r1.state().vertical ? "au-slider-label-vertical au-slider-label-vertical-max" : "au-slider-label au-slider-label-max");
    i0.ɵɵclassProp("invisible", !ctx_r1.state().maxValueLabelDisplay);
    i0.ɵɵproperty("auUse", ctx_r1.widget.directives.maxLabelDirective);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.state().max, " ");
} }
function SliderComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.state().vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now");
    i0.ɵɵstyleProp("left", ctx_r2.state().combinedLabelPositionLeft, "%")("top", ctx_r2.state().combinedLabelPositionTop, "%");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", ctx_r2.state().sortedValues[0], " - ", ctx_r2.state().sortedValues[1], " ");
} }
function SliderComponent_For_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r10 = i0.ɵɵnextContext().$index;
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r14.state().vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now");
    i0.ɵɵstyleProp("left", ctx_r14.state().handleDisplayOptions[i_r10].left, "%")("top", ctx_r14.state().handleDisplayOptions[i_r10].top, "%");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r14.state().values[i_r10], " ");
} }
function SliderComponent_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("keydown", function SliderComponent_For_6_Template_button_keydown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r17); const item_r9 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.onKeyDown($event, item_r9.id)); })("mousedown", function SliderComponent_For_6_Template_button_mousedown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r17); const item_r9 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.widget.actions.mouseDown($event, item_r9.id)); });
    i0.ɵɵtext(1, " \\u00A0 ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, SliderComponent_For_6_Conditional_2_Template, 2, 7, "div", 1);
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r3.state().vertical ? "au-slider-handle-vertical" : "au-slider-handle-horizontal");
    i0.ɵɵstyleProp("left", ctx_r3.state().vertical ? null : ctx_r3.state().handleDisplayOptions[item_r9.id].left, "%")("top", ctx_r3.state().vertical ? ctx_r3.state().handleDisplayOptions[item_r9.id].top : null, "%");
    i0.ɵɵproperty("disabled", ctx_r3.state().disabled);
    i0.ɵɵattribute("aria-valuemin", ctx_r3.state().min)("aria-valuemax", ctx_r3.state().max)("aria-readonly", ctx_r3.state().readonly ? true : null)("aria-disabled", ctx_r3.state().disabled ? true : null)("aria-valuenow", item_r9.value)("aria-valuetext", item_r9.value)("aria-label", item_r9.ariaLabel)("aria-orientation", ctx_r3.state().vertical ? "vertical" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(2, ctx_r3.state().showValueLabels && !ctx_r3.state().combinedLabelDisplay ? 2 : -1);
} }
export class SliderComponent extends BaseWidgetDirective {
    constructor() {
        super();
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
    handleBlur() {
        this.onTouched();
    }
    sliderClick($event) {
        this.widget.actions.click($event);
    }
    onKeyDown(event, handleId) {
        this.widget.actions.keydown(event, handleId);
        this._zone.onStable.pipe(take(1)).subscribe(() => {
            event.target.focus();
        });
    }
    static { this.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["", "auSlider", ""]], hostAttrs: [1, "au-slider"], hostVars: 4, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function SliderComponent_blur_HostBindingHandler() { return ctx.handleBlur(); });
        } if (rf & 2) {
            i0.ɵɵclassMap((ctx.state().vertical ? "au-slider-vertical" : "au-slider-horizontal") + " " + ctx.state().className);
            i0.ɵɵclassProp("disabled", ctx.state().disabled);
        } }, inputs: { className: ["auClassName", "className"], min: ["auMin", "min", auNumberAttribute], max: ["auMax", "max", auNumberAttribute], stepSize: ["auStepSize", "stepSize", auNumberAttribute], values: ["auValues", "values"], showValueLabels: ["auShowValueLabels", "showValueLabels", auBooleanAttribute], showMinMaxLabels: ["auShowMinMaxLabels", "showMinMaxLabels", auBooleanAttribute], ariaLabelHandle: ["auAriaLabelHandle", "ariaLabelHandle"], readonly: ["auReadonly", "readonly", auBooleanAttribute], disabled: ["auDisabled", "disabled", auBooleanAttribute], vertical: ["auVertical", "vertical", auBooleanAttribute] }, outputs: { valuesChange: "auValuesChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 7, vars: 4, consts: [[3, "click"], [3, "class", "left", "top"], [1, "au-slider-progress"], [3, "auUse"], ["role", "slider", 1, "au-slider-handle", 3, "disabled", "keydown", "mousedown"], ["class", "au-slider-progress", 3, "left", "bottom", "width", "height"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, SliderComponent_For_1_Template, 1, 8, "div", 5, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵlistener("click", function SliderComponent_Template_div_click_2_listener($event) { return ctx.sliderClick($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, SliderComponent_Conditional_3_Template, 4, 12)(4, SliderComponent_Conditional_4_Template, 2, 8, "div", 1);
            i0.ɵɵrepeaterCreate(5, SliderComponent_For_6_Template, 3, 16, null, null, _forTrack1);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.state().progressDisplayOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap(ctx.state().vertical ? "au-slider-clickable-area-vertical" : "au-slider-clickable-area");
            i0.ɵɵadvance(1);
            i0.ɵɵconditional(3, ctx.state().showMinMaxLabels ? 3 : -1);
            i0.ɵɵadvance(1);
            i0.ɵɵconditional(4, ctx.state().showValueLabels && ctx.state().combinedLabelDisplay ? 4 : -1);
            i0.ɵɵadvance(1);
            i0.ɵɵrepeater(ctx.state().sortedHandles);
        } }, dependencies: [UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{
                selector: '[auSlider]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }],
                imports: [UseDirective],
                host: {
                    class: \`au-slider\`,
                    '[class]': '(state().vertical ? "au-slider-vertical" : "au-slider-horizontal") + " " + state().className',
                    '[class.disabled]': 'state().disabled',
                    '(blur)': 'handleBlur()',
                },
                template: \`
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
	\`,
            }]
    }], () => [], { className: [{
            type: Input,
            args: ['auClassName']
        }], min: [{
            type: Input,
            args: [{ alias: 'auMin', transform: auNumberAttribute }]
        }], max: [{
            type: Input,
            args: [{ alias: 'auMax', transform: auNumberAttribute }]
        }], stepSize: [{
            type: Input,
            args: [{ alias: 'auStepSize', transform: auNumberAttribute }]
        }], values: [{
            type: Input,
            args: ['auValues']
        }], showValueLabels: [{
            type: Input,
            args: [{ alias: 'auShowValueLabels', transform: auBooleanAttribute }]
        }], showMinMaxLabels: [{
            type: Input,
            args: [{ alias: 'auShowMinMaxLabels', transform: auBooleanAttribute }]
        }], ariaLabelHandle: [{
            type: Input,
            args: ['auAriaLabelHandle']
        }], readonly: [{
            type: Input,
            args: [{ alias: 'auReadonly', transform: auBooleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ alias: 'auDisabled', transform: auBooleanAttribute }]
        }], vertical: [{
            type: Input,
            args: [{ alias: 'auVertical', transform: auBooleanAttribute }]
        }], valuesChange: [{
            type: Output,
            args: ['auValuesChange']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "slider/slider.component.ts", lineNumber: 97 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEdBQ25CLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3SSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7OztJQWlCdkIseUJBTU87OztJQUpOLDJDQUE0QixpQ0FBQSwrQkFBQSxpQ0FBQTs7O0lBUTdCLDhCQUlDO0lBQ0EsWUFDRDtJQUFBLGlCQUFNO0lBQ04sOEJBSUM7SUFDQSxZQUNEO0lBQUEsaUJBQU07OztJQVpMLHdJQUE0SDtJQUM1SCxpRUFBaUQ7SUFDakQsa0VBQTZDO0lBRTdDLGVBQ0Q7SUFEQyxtREFDRDtJQUVDLGVBQTRIO0lBQTVILHdJQUE0SDtJQUM1SCxpRUFBaUQ7SUFDakQsa0VBQTZDO0lBRTdDLGVBQ0Q7SUFEQyxtREFDRDs7O0lBR0EsMkJBSUM7SUFDQSxZQUNEO0lBQUEsaUJBQU07OztJQUxMLHdJQUE0SDtJQUM1SCxxRUFBa0QscURBQUE7SUFHbEQsZUFDRDtJQURDLHNHQUNEOzs7SUF3QkMsMkJBSUM7SUFDQSxZQUNEO0lBQUEsaUJBQU07Ozs7SUFMTCx5SUFBNEg7SUFDNUgsNkVBQXFELDZEQUFBO0lBR3JELGVBQ0Q7SUFEQyw4REFDRDs7OztJQTNC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Ozs7Ozs7Ozs7RUFtRVQ7YUFDRDtvQkFtQnNCLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQU1wQixHQUFHO2tCQURGLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQU9yRCxHQUFHO2tCQURGLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQU9yRCxRQUFRO2tCQURQLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQU8xRCxNQUFNO2tCQURMLEtBQUs7bUJBQUMsVUFBVTtZQU1tRCxlQUFlO2tCQUFsRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUtHLGdCQUFnQjtrQkFBcEYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFJdkMsZUFBZTtrQkFBMUMsS0FBSzttQkFBQyxtQkFBbUI7WUFNMUIsUUFBUTtrQkFEUCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPM0QsUUFBUTtrQkFEUCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPM0QsUUFBUTtrQkFEUCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFTM0QsWUFBWTtrQkFEWCxNQUFNO21CQUFDLGdCQUFnQjs7a0ZBakZaLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xpZGVyV2lkZ2V0fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVTbGlkZXIsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBmb3J3YXJkUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1U2xpZGVyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksIG11bHRpOiB0cnVlfV0sXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmVdLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6IGBhdS1zbGlkZXJgLFxuXHRcdCdbY2xhc3NdJzogJyhzdGF0ZSgpLnZlcnRpY2FsID8gXCJhdS1zbGlkZXItdmVydGljYWxcIiA6IFwiYXUtc2xpZGVyLWhvcml6b250YWxcIikgKyBcIiBcIiArIHN0YXRlKCkuY2xhc3NOYW1lJyxcblx0XHQnW2NsYXNzLmRpc2FibGVkXSc6ICdzdGF0ZSgpLmRpc2FibGVkJyxcblx0XHQnKGJsdXIpJzogJ2hhbmRsZUJsdXIoKScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGZvciAob3B0aW9uIG9mIHN0YXRlKCkucHJvZ3Jlc3NEaXNwbGF5T3B0aW9uczsgdHJhY2sgb3B0aW9uKSB7XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzPVwiYXUtc2xpZGVyLXByb2dyZXNzXCJcblx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJvcHRpb24ubGVmdFwiXG5cdFx0XHRcdFtzdHlsZS5ib3R0b20uJV09XCJvcHRpb24uYm90dG9tXCJcblx0XHRcdFx0W3N0eWxlLndpZHRoLiVdPVwib3B0aW9uLndpZHRoXCJcblx0XHRcdFx0W3N0eWxlLmhlaWdodC4lXT1cIm9wdGlvbi5oZWlnaHRcIlxuXHRcdFx0PjwvZGl2PlxuXHRcdH1cblx0XHQ8ZGl2IFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1jbGlja2FibGUtYXJlYS12ZXJ0aWNhbCcgOiAnYXUtc2xpZGVyLWNsaWNrYWJsZS1hcmVhJ1wiIChjbGljayk9XCJzbGlkZXJDbGljaygkZXZlbnQpXCI+PC9kaXY+XG5cdFx0QGlmIChzdGF0ZSgpLnNob3dNaW5NYXhMYWJlbHMpIHtcblx0XHRcdDxkaXZcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1taW4nIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbWluJ1wiXG5cdFx0XHRcdFtjbGFzcy5pbnZpc2libGVdPVwiIXN0YXRlKCkubWluVmFsdWVMYWJlbERpc3BsYXlcIlxuXHRcdFx0XHRbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMubWluTGFiZWxEaXJlY3RpdmVcIlxuXHRcdFx0PlxuXHRcdFx0XHR7eyBzdGF0ZSgpLm1pbiB9fVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbWF4JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW1heCdcIlxuXHRcdFx0XHRbY2xhc3MuaW52aXNpYmxlXT1cIiFzdGF0ZSgpLm1heFZhbHVlTGFiZWxEaXNwbGF5XCJcblx0XHRcdFx0W2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLm1heExhYmVsRGlyZWN0aXZlXCJcblx0XHRcdD5cblx0XHRcdFx0e3sgc3RhdGUoKS5tYXggfX1cblx0XHRcdDwvZGl2PlxuXHRcdH1cblx0XHRAaWYgKHN0YXRlKCkuc2hvd1ZhbHVlTGFiZWxzICYmIHN0YXRlKCkuY29tYmluZWRMYWJlbERpc3BsYXkpIHtcblx0XHRcdDxkaXZcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1ub3cnIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbm93J1wiXG5cdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUoKS5jb21iaW5lZExhYmVsUG9zaXRpb25MZWZ0XCJcblx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuY29tYmluZWRMYWJlbFBvc2l0aW9uVG9wXCJcblx0XHRcdD5cblx0XHRcdFx0e3sgc3RhdGUoKS5zb3J0ZWRWYWx1ZXNbMF0gfX0gLSB7eyBzdGF0ZSgpLnNvcnRlZFZhbHVlc1sxXSB9fVxuXHRcdFx0PC9kaXY+XG5cdFx0fVxuXHRcdEBmb3IgKGl0ZW0gb2Ygc3RhdGUoKS5zb3J0ZWRIYW5kbGVzOyB0cmFjayBpdGVtLmlkOyBsZXQgaSA9ICRpbmRleCkge1xuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRjbGFzcz1cImF1LXNsaWRlci1oYW5kbGVcIlxuXHRcdFx0XHRyb2xlPVwic2xpZGVyXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZW1pbl09XCJzdGF0ZSgpLm1pblwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVtYXhdPVwic3RhdGUoKS5tYXhcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXJlYWRvbmx5XT1cInN0YXRlKCkucmVhZG9ubHkgPyB0cnVlIDogbnVsbFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZW5vd109XCJpdGVtLnZhbHVlXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiaXRlbS52YWx1ZVwiXG5cdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiaXRlbS5hcmlhTGFiZWxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLW9yaWVudGF0aW9uXT1cInN0YXRlKCkudmVydGljYWwgPyAndmVydGljYWwnIDogbnVsbFwiXG5cdFx0XHRcdFtkaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkXCJcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWhhbmRsZS12ZXJ0aWNhbCcgOiAnYXUtc2xpZGVyLWhhbmRsZS1ob3Jpem9udGFsJ1wiXG5cdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUoKS52ZXJ0aWNhbCA/IG51bGwgOiBzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2l0ZW0uaWRdLmxlZnRcIlxuXHRcdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUoKS52ZXJ0aWNhbCA/IHN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaXRlbS5pZF0udG9wIDogbnVsbFwiXG5cdFx0XHRcdChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQsIGl0ZW0uaWQpXCJcblx0XHRcdFx0KG1vdXNlZG93bik9XCJ3aWRnZXQuYWN0aW9ucy5tb3VzZURvd24oJGV2ZW50LCBpdGVtLmlkKVwiXG5cdFx0XHQ+XG5cdFx0XHRcdCZuYnNwO1xuXHRcdFx0PC9idXR0b24+XG5cdFx0XHRAaWYgKHN0YXRlKCkuc2hvd1ZhbHVlTGFiZWxzICYmICFzdGF0ZSgpLmNvbWJpbmVkTGFiZWxEaXNwbGF5KSB7XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW5vdycgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1ub3cnXCJcblx0XHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaV0ubGVmdFwiXG5cdFx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaV0udG9wXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt7IHN0YXRlKCkudmFsdWVzW2ldIH19XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdH1cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxTbGlkZXJXaWRnZXQ+IHtcblx0cHJpdmF0ZSBfem9uZSA9IGluamVjdChOZ1pvbmUpO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlU2xpZGVyLFxuXHRcdHdpZGdldE5hbWU6ICdzbGlkZXInLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25WYWx1ZXNDaGFuZ2U6IChldmVudCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKGV2ZW50KTtcblx0XHRcdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0XHRcdFx0dGhpcy52YWx1ZXNDaGFuZ2UuZW1pdChldmVudCk7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTWluaW11bSB2YWx1ZSB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNaW4nLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0bWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1heGltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBVbml0IHZhbHVlIGJldHdlZW4gc2xpZGVyIHN0ZXBzXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTdGVwU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRzdGVwU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXJyZW50IHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBJbnB1dCgnYXVWYWx1ZXMnKVxuXHR2YWx1ZXM6IG51bWJlcltdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIHZhbHVlIGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dWYWx1ZUxhYmVscycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgc2hvd1ZhbHVlTGFiZWxzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIG1pbiBhbmQgbWF4IGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dNaW5NYXhMYWJlbHMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHNob3dNaW5NYXhMYWJlbHM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtbGFiZWwnIGF0dHJpYnV0ZSBmb3IgdGhlIGhhbmRsZVxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbEhhbmRsZScpIGFyaWFMYWJlbEhhbmRsZTogKCh2YWx1ZTogbnVtYmVyLCBzb3J0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgc2xpZGVyIHZhbHVlIGNhbm5vdCBiZSBjaGFuZ2VkIGJ1dCB0aGUgc2xpZGVyIGlzIHN0aWxsIGZvY3VzYWJsZVxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmVhZG9ubHknLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgc2xpZGVyIHZhbHVlIGNhbm5vdCBiZSBjaGFuZ2VkIGFuZCB0aGUgc2xpZGVyIGNhbm5vdCBiZSBmb2N1c2VkXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBpcyB2ZXJ0aWNhbGx5IHBvc2l0aW9uZWQgb3RoZXJ3aXNlIGl0IGlzIGhvcml6b250YWxcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZlcnRpY2FsJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHR2ZXJ0aWNhbDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHNsaWRlciB2YWx1ZXMgYXJlIGNoYW5nZWRcblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBlcXVhbHMgdG8gdGhlIHVwZGF0ZWQgc2xpZGVyIHZhbHVlc1xuXHQgKi9cblx0QE91dHB1dCgnYXVWYWx1ZXNDaGFuZ2UnKVxuXHR2YWx1ZXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcltdPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5zbGlkZXJEaXJlY3RpdmUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnRyb2wgdmFsdWUgYWNjZXNzb3IgbWV0aG9kc1xuXHQgKi9cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuXHRvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRcdHZhbHVlczogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdFx0dmFsdWVzOiBbdmFsdWVdLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlQmx1cigpIHtcblx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHR9XG5cblx0c2xpZGVyQ2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdFx0dGhpcy53aWRnZXQuYWN0aW9ucy5jbGljaygkZXZlbnQpO1xuXHR9XG5cblx0b25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyKSB7XG5cdFx0dGhpcy53aWRnZXQuYWN0aW9ucy5rZXlkb3duKGV2ZW50LCBoYW5kbGVJZCk7XG5cdFx0dGhpcy5fem9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHQoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
