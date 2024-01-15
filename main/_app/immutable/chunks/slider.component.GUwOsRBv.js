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
    i0.ɵɵstyleProp("left", option_r4.left, "%")("right", option_r4.right, "%")("bottom", option_r4.bottom, "%")("top", option_r4.top, "%")("width", option_r4.width, "%")("height", option_r4.height, "%");
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
    i0.ɵɵclassProp("au-slider-rtl", ctx_r1.state().rtl)("invisible", !ctx_r1.state().minValueLabelDisplay);
    i0.ɵɵproperty("auUse", ctx_r1.widget.directives.minLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.state().min, " ");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.state().vertical ? "au-slider-label-vertical au-slider-label-vertical-max" : "au-slider-label au-slider-label-max");
    i0.ɵɵclassProp("au-slider-rtl", ctx_r1.state().rtl)("invisible", !ctx_r1.state().maxValueLabelDisplay);
    i0.ɵɵproperty("auUse", ctx_r1.widget.directives.maxLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.state().max, " ");
} }
function SliderComponent_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r9.state().sortedValues[1], " - ", ctx_r9.state().sortedValues[0], " ");
} }
function SliderComponent_Conditional_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r10.state().sortedValues[0], " - ", ctx_r10.state().sortedValues[1], " ");
} }
function SliderComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, SliderComponent_Conditional_4_Conditional_1_Template, 1, 2)(2, SliderComponent_Conditional_4_Conditional_2_Template, 1, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.state().vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now");
    i0.ɵɵstyleProp("left", ctx_r2.state().combinedLabelPositionLeft, "%")("top", ctx_r2.state().combinedLabelPositionTop, "%");
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, ctx_r2.state().rtl ? 1 : 2);
} }
function SliderComponent_For_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r12 = i0.ɵɵnextContext().$index;
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r16.state().vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now");
    i0.ɵɵstyleProp("left", ctx_r16.state().handleDisplayOptions[i_r12].left, "%")("top", ctx_r16.state().handleDisplayOptions[i_r12].top, "%");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r16.state().values[i_r12], " ");
} }
function SliderComponent_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("keydown", function SliderComponent_For_6_Template_button_keydown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const item_r11 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.onKeyDown($event, item_r11.id)); })("mousedown", function SliderComponent_For_6_Template_button_mousedown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const item_r11 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.widget.actions.mouseDown($event, item_r11.id)); });
    i0.ɵɵtext(1, " \\u00A0 ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, SliderComponent_For_6_Conditional_2_Template, 2, 7, "div", 1);
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r3.state().vertical ? "au-slider-handle-vertical" : "au-slider-handle-horizontal");
    i0.ɵɵstyleProp("left", ctx_r3.state().handleDisplayOptions[item_r11.id].left, "%")("top", ctx_r3.state().handleDisplayOptions[item_r11.id].top, "%");
    i0.ɵɵproperty("disabled", ctx_r3.state().disabled);
    i0.ɵɵattribute("aria-valuemin", ctx_r3.state().min)("aria-valuemax", ctx_r3.state().max)("aria-readonly", ctx_r3.state().readonly ? true : null)("aria-disabled", ctx_r3.state().disabled ? true : null)("aria-valuenow", item_r11.value)("aria-valuetext", item_r11.value)("aria-label", item_r11.ariaLabel)("aria-orientation", ctx_r3.state().vertical ? "vertical" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(2, ctx_r3.state().showValueLabels && !ctx_r3.state().combinedLabelDisplay ? 2 : -1);
} }
export class SliderComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
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
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.sliderDirective);
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
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵSliderComponent_BaseFactory; return function SliderComponent_Factory(t) { return (ɵSliderComponent_BaseFactory || (ɵSliderComponent_BaseFactory = i0.ɵɵgetInheritedFactory(SliderComponent)))(t || SliderComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["", "auSlider", ""]], hostAttrs: [1, "au-slider"], hostVars: 4, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function SliderComponent_blur_HostBindingHandler() { return ctx.handleBlur(); });
        } if (rf & 2) {
            i0.ɵɵclassMap((ctx.state().vertical ? "au-slider-vertical" : "au-slider-horizontal") + " " + ctx.state().className);
            i0.ɵɵclassProp("disabled", ctx.state().disabled);
        } }, inputs: { className: ["auClassName", "className"], min: ["auMin", "min", auNumberAttribute], max: ["auMax", "max", auNumberAttribute], stepSize: ["auStepSize", "stepSize", auNumberAttribute], values: ["auValues", "values"], rtl: ["auRtl", "rtl", auBooleanAttribute], showValueLabels: ["auShowValueLabels", "showValueLabels", auBooleanAttribute], showMinMaxLabels: ["auShowMinMaxLabels", "showMinMaxLabels", auBooleanAttribute], ariaLabelHandle: ["auAriaLabelHandle", "ariaLabelHandle"], readonly: ["auReadonly", "readonly", auBooleanAttribute], disabled: ["auDisabled", "disabled", auBooleanAttribute], vertical: ["auVertical", "vertical", auBooleanAttribute] }, outputs: { valuesChange: "auValuesChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 7, vars: 4, consts: [[3, "click"], [3, "class", "left", "top"], [1, "au-slider-progress"], [3, "auUse"], ["role", "slider", 1, "au-slider-handle", 3, "disabled", "keydown", "mousedown"], ["class", "au-slider-progress", 3, "left", "right", "bottom", "top", "width", "height"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, SliderComponent_For_1_Template, 1, 12, "div", 5, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵlistener("click", function SliderComponent_Template_div_click_2_listener($event) { return ctx.sliderClick($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, SliderComponent_Conditional_3_Template, 4, 16)(4, SliderComponent_Conditional_4_Template, 3, 7, "div", 1);
            i0.ɵɵrepeaterCreate(5, SliderComponent_For_6_Template, 3, 16, null, null, _forTrack1);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.state().progressDisplayOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap(ctx.state().vertical ? "au-slider-clickable-area-vertical" : "au-slider-clickable-area");
            i0.ɵɵadvance();
            i0.ɵɵconditional(3, ctx.state().showMinMaxLabels ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(4, ctx.state().showValueLabels && ctx.state().combinedLabelDisplay ? 4 : -1);
            i0.ɵɵadvance();
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
				[style.right.%]="option.right"
				[style.bottom.%]="option.bottom"
				[style.top.%]="option.top"
				[style.width.%]="option.width"
				[style.height.%]="option.height"
			></div>
		}
		<div [class]="state().vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'" (click)="sliderClick($event)"></div>
		@if (state().showMinMaxLabels) {
			<div
				[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'"
				[class.au-slider-rtl]="state().rtl"
				[class.invisible]="!state().minValueLabelDisplay"
				[auUse]="widget.directives.minLabelDirective"
			>
				{{ state().min }}
			</div>
			<div
				[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'"
				[class.au-slider-rtl]="state().rtl"
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
				@if (state().rtl) {
					{{ state().sortedValues[1] }} - {{ state().sortedValues[0] }}
				} @else {
					{{ state().sortedValues[0] }} - {{ state().sortedValues[1] }}
				}
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
				[style.left.%]="state().handleDisplayOptions[item.id].left"
				[style.top.%]="state().handleDisplayOptions[item.id].top"
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
    }], null, { className: [{
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
        }], rtl: [{
            type: Input,
            args: [{ alias: 'auRtl', transform: auBooleanAttribute }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "components/slider/slider.component.ts", lineNumber: 105 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7O0lBaUJ2Qix5QkFRTzs7O0lBTk4sMkNBQTRCLCtCQUFBLGlDQUFBLDJCQUFBLCtCQUFBLGlDQUFBOzs7SUFVN0IsOEJBS0M7SUFDQSxZQUNEO0lBQUEsaUJBQU07SUFDTiw4QkFLQztJQUNBLFlBQ0Q7SUFBQSxpQkFBTTs7O0lBZEwsd0lBQTRIO0lBQzVILG1EQUFtQyxtREFBQTtJQUVuQyxrRUFBNkM7SUFFN0MsY0FDRDtJQURDLG1EQUNEO0lBRUMsY0FBNEg7SUFBNUgsd0lBQTRIO0lBQzVILG1EQUFtQyxtREFBQTtJQUVuQyxrRUFBNkM7SUFFN0MsY0FDRDtJQURDLG1EQUNEOzs7SUFTRSxZQUNEOzs7SUFEQyxzR0FDRDs7O0lBQ0MsWUFDRDs7O0lBREMsd0dBQ0Q7OztJQVRELDJCQUlDO0lBQ0EsNEVBRUMsK0RBQUE7SUFHRixpQkFBTTs7O0lBVEwsd0lBQTRIO0lBQzVILHFFQUFrRCxxREFBQTtJQUdsRCxjQUVDO0lBRkQsK0NBRUM7OztJ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QUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFTM0QsWUFBWTtrQkFEWCxNQUFNO21CQUFDLGdCQUFnQjs7a0ZBMUZaLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xpZGVyV2lkZ2V0fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVTbGlkZXIsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBmb3J3YXJkUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1U2xpZGVyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksIG11bHRpOiB0cnVlfV0sXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmVdLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6IGBhdS1zbGlkZXJgLFxuXHRcdCdbY2xhc3NdJzogJyhzdGF0ZSgpLnZlcnRpY2FsID8gXCJhdS1zbGlkZXItdmVydGljYWxcIiA6IFwiYXUtc2xpZGVyLWhvcml6b250YWxcIikgKyBcIiBcIiArIHN0YXRlKCkuY2xhc3NOYW1lJyxcblx0XHQnW2NsYXNzLmRpc2FibGVkXSc6ICdzdGF0ZSgpLmRpc2FibGVkJyxcblx0XHQnKGJsdXIpJzogJ2hhbmRsZUJsdXIoKScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGZvciAob3B0aW9uIG9mIHN0YXRlKCkucHJvZ3Jlc3NEaXNwbGF5T3B0aW9uczsgdHJhY2sgb3B0aW9uKSB7XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzPVwiYXUtc2xpZGVyLXByb2dyZXNzXCJcblx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJvcHRpb24ubGVmdFwiXG5cdFx0XHRcdFtzdHlsZS5yaWdodC4lXT1cIm9wdGlvbi5yaWdodFwiXG5cdFx0XHRcdFtzdHlsZS5ib3R0b20uJV09XCJvcHRpb24uYm90dG9tXCJcblx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cIm9wdGlvbi50b3BcIlxuXHRcdFx0XHRbc3R5bGUud2lkdGguJV09XCJvcHRpb24ud2lkdGhcIlxuXHRcdFx0XHRbc3R5bGUuaGVpZ2h0LiVdPVwib3B0aW9uLmhlaWdodFwiXG5cdFx0XHQ+PC9kaXY+XG5cdFx0fVxuXHRcdDxkaXYgW2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWNsaWNrYWJsZS1hcmVhLXZlcnRpY2FsJyA6ICdhdS1zbGlkZXItY2xpY2thYmxlLWFyZWEnXCIgKGNsaWNrKT1cInNsaWRlckNsaWNrKCRldmVudClcIj48L2Rpdj5cblx0XHRAaWYgKHN0YXRlKCkuc2hvd01pbk1heExhYmVscykge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW1pbicgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1taW4nXCJcblx0XHRcdFx0W2NsYXNzLmF1LXNsaWRlci1ydGxdPVwic3RhdGUoKS5ydGxcIlxuXHRcdFx0XHRbY2xhc3MuaW52aXNpYmxlXT1cIiFzdGF0ZSgpLm1pblZhbHVlTGFiZWxEaXNwbGF5XCJcblx0XHRcdFx0W2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLm1pbkxhYmVsRGlyZWN0aXZlXCJcblx0XHRcdD5cblx0XHRcdFx0e3sgc3RhdGUoKS5taW4gfX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW1heCcgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1tYXgnXCJcblx0XHRcdFx0W2NsYXNzLmF1LXNsaWRlci1ydGxdPVwic3RhdGUoKS5ydGxcIlxuXHRcdFx0XHRbY2xhc3MuaW52aXNpYmxlXT1cIiFzdGF0ZSgpLm1heFZhbHVlTGFiZWxEaXNwbGF5XCJcblx0XHRcdFx0W2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLm1heExhYmVsRGlyZWN0aXZlXCJcblx0XHRcdD5cblx0XHRcdFx0e3sgc3RhdGUoKS5tYXggfX1cblx0XHRcdDwvZGl2PlxuXHRcdH1cblx0XHRAaWYgKHN0YXRlKCkuc2hvd1ZhbHVlTGFiZWxzICYmIHN0YXRlKCkuY29tYmluZWRMYWJlbERpc3BsYXkpIHtcblx0XHRcdDxkaXZcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1ub3cnIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbm93J1wiXG5cdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUoKS5jb21iaW5lZExhYmVsUG9zaXRpb25MZWZ0XCJcblx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuY29tYmluZWRMYWJlbFBvc2l0aW9uVG9wXCJcblx0XHRcdD5cblx0XHRcdFx0QGlmIChzdGF0ZSgpLnJ0bCkge1xuXHRcdFx0XHRcdHt7IHN0YXRlKCkuc29ydGVkVmFsdWVzWzFdIH19IC0ge3sgc3RhdGUoKS5zb3J0ZWRWYWx1ZXNbMF0gfX1cblx0XHRcdFx0fSBAZWxzZSB7XG5cdFx0XHRcdFx0e3sgc3RhdGUoKS5zb3J0ZWRWYWx1ZXNbMF0gfX0gLSB7eyBzdGF0ZSgpLnNvcnRlZFZhbHVlc1sxXSB9fVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHR9XG5cdFx0QGZvciAoaXRlbSBvZiBzdGF0ZSgpLnNvcnRlZEhhbmRsZXM7IHRyYWNrIGl0ZW0uaWQ7IGxldCBpID0gJGluZGV4KSB7XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwiYXUtc2xpZGVyLWhhbmRsZVwiXG5cdFx0XHRcdHJvbGU9XCJzbGlkZXJcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbWluXT1cInN0YXRlKCkubWluXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZW1heF09XCJzdGF0ZSgpLm1heFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtcmVhZG9ubHldPVwic3RhdGUoKS5yZWFkb25seSA/IHRydWUgOiBudWxsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbm93XT1cIml0ZW0udmFsdWVcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJpdGVtLnZhbHVlXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJpdGVtLmFyaWFMYWJlbFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtb3JpZW50YXRpb25dPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiBudWxsXCJcblx0XHRcdFx0W2Rpc2FibGVkXT1cInN0YXRlKCkuZGlzYWJsZWRcIlxuXHRcdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItaGFuZGxlLXZlcnRpY2FsJyA6ICdhdS1zbGlkZXItaGFuZGxlLWhvcml6b250YWwnXCJcblx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2l0ZW0uaWRdLmxlZnRcIlxuXHRcdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpdGVtLmlkXS50b3BcIlxuXHRcdFx0XHQoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50LCBpdGVtLmlkKVwiXG5cdFx0XHRcdChtb3VzZWRvd24pPVwid2lkZ2V0LmFjdGlvbnMubW91c2VEb3duKCRldmVudCwgaXRlbS5pZClcIlxuXHRcdFx0PlxuXHRcdFx0XHQmbmJzcDtcblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0QGlmIChzdGF0ZSgpLnNob3dWYWx1ZUxhYmVscyAmJiAhc3RhdGUoKS5jb21iaW5lZExhYmVsRGlzcGxheSkge1xuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1ub3cnIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbm93J1wiXG5cdFx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2ldLmxlZnRcIlxuXHRcdFx0XHRcdFtzdHlsZS50b3AuJV09XCJzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2ldLnRvcFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7eyBzdGF0ZSgpLnZhbHVlc1tpXSB9fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHR9XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8U2xpZGVyV2lkZ2V0PiB7XG5cdHByaXZhdGUgX3pvbmUgPSBpbmplY3QoTmdab25lKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVNsaWRlcixcblx0XHR3aWRnZXROYW1lOiAnc2xpZGVyJyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uVmFsdWVzQ2hhbmdlOiAoZXZlbnQpID0+IHtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShldmVudCk7XG5cdFx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0XHRcdHRoaXMudmFsdWVzQ2hhbmdlLmVtaXQoZXZlbnQpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGFmdGVySW5pdDogKCkgPT4ge1xuXHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5zbGlkZXJEaXJlY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTWluaW11bSB2YWx1ZSB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNaW4nLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0bWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1heGltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBVbml0IHZhbHVlIGJldHdlZW4gc2xpZGVyIHN0ZXBzXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTdGVwU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRzdGVwU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXJyZW50IHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBJbnB1dCgnYXVWYWx1ZXMnKVxuXHR2YWx1ZXM6IG51bWJlcltdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJdCBgdHJ1ZWAgc2xpZGVyIGRpc3BsYXkgaXMgaW52ZXJzZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJ0bCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0cnRsOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIHZhbHVlIGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dWYWx1ZUxhYmVscycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgc2hvd1ZhbHVlTGFiZWxzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIG1pbiBhbmQgbWF4IGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dNaW5NYXhMYWJlbHMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHNob3dNaW5NYXhMYWJlbHM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtbGFiZWwnIGF0dHJpYnV0ZSBmb3IgdGhlIGhhbmRsZVxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbEhhbmRsZScpIGFyaWFMYWJlbEhhbmRsZTogKCh2YWx1ZTogbnVtYmVyLCBzb3J0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgc2xpZGVyIHZhbHVlIGNhbm5vdCBiZSBjaGFuZ2VkIGJ1dCB0aGUgc2xpZGVyIGlzIHN0aWxsIGZvY3VzYWJsZVxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmVhZG9ubHknLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgc2xpZGVyIHZhbHVlIGNhbm5vdCBiZSBjaGFuZ2VkIGFuZCB0aGUgc2xpZGVyIGNhbm5vdCBiZSBmb2N1c2VkXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBpcyB2ZXJ0aWNhbGx5IHBvc2l0aW9uZWQgb3RoZXJ3aXNlIGl0IGlzIGhvcml6b250YWxcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZlcnRpY2FsJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHR2ZXJ0aWNhbDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHNsaWRlciB2YWx1ZXMgYXJlIGNoYW5nZWRcblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBlcXVhbHMgdG8gdGhlIHVwZGF0ZWQgc2xpZGVyIHZhbHVlc1xuXHQgKi9cblx0QE91dHB1dCgnYXVWYWx1ZXNDaGFuZ2UnKVxuXHR2YWx1ZXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcltdPigpO1xuXG5cdC8qKlxuXHQgKiBDb250cm9sIHZhbHVlIGFjY2Vzc29yIG1ldGhvZHNcblx0ICovXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cblx0b25Ub3VjaGVkID0gKCkgPT4ge307XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0XHR2YWx1ZXM6IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRcdHZhbHVlczogW3ZhbHVlXSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRkaXNhYmxlZDogaXNEaXNhYmxlZCxcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUJsdXIoKSB7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0fVxuXG5cdHNsaWRlckNsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xuXHRcdHRoaXMud2lkZ2V0LmFjdGlvbnMuY2xpY2soJGV2ZW50KTtcblx0fVxuXG5cdG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCwgaGFuZGxlSWQ6IG51bWJlcikge1xuXHRcdHRoaXMud2lkZ2V0LmFjdGlvbnMua2V5ZG93bihldmVudCwgaGFuZGxlSWQpO1xuXHRcdHRoaXMuX3pvbmUub25TdGFibGUucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0KGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcblx0XHR9KTtcblx0fVxufVxuIl19`;export{t as default};
