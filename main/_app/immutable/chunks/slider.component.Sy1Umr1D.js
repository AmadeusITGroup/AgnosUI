const t=`import { BaseWidgetDirective, UseDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createSlider, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, Output, ViewEncapsulation, forwardRef, inject } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
const _c0 = ["auSlider", ""];
const _forTrack0 = ($index, $item) => $item.id;
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
    i0.ɵɵlistener("keydown", function SliderComponent_For_6_Template_button_keydown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const item_r11 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.onKeyDown($event, item_r11.id)); })("mousedown", function SliderComponent_For_6_Template_button_mousedown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const item_r11 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.widget.actions.mouseDown($event, item_r11.id)); })("touchstart", function SliderComponent_For_6_Template_button_touchstart_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const item_r11 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.widget.actions.touchStart($event, item_r11.id)); });
    i0.ɵɵtext(1, " \\u00A0 ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, SliderComponent_For_6_Conditional_2_Template, 2, 7, "div", 1);
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r3.state().vertical ? "au-slider-handle-vertical" : "au-slider-handle-horizontal");
    i0.ɵɵstyleProp("left", ctx_r3.state().handleDisplayOptions[item_r11.id].left, "%")("top", ctx_r3.state().handleDisplayOptions[item_r11.id].top, "%");
    i0.ɵɵproperty("disabled", ctx_r3.state().disabled);
    i0.ɵɵattribute("aria-valuemin", ctx_r3.state().min)("aria-valuemax", ctx_r3.state().max)("aria-readonly", ctx_r3.state().readonly ? true : null)("aria-disabled", ctx_r3.state().disabled ? true : null)("aria-valuenow", item_r11.value)("aria-valuetext", item_r11.ariaValueText)("aria-label", item_r11.ariaLabel)("aria-orientation", ctx_r3.state().vertical ? "vertical" : null);
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["", "auSlider", ""]], hostAttrs: [1, "au-slider"], hostVars: 5, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function SliderComponent_blur_HostBindingHandler() { return ctx.handleBlur(); });
        } if (rf & 2) {
            i0.ɵɵattribute("aria-disabled", ctx.state().disabled ? true : null);
            i0.ɵɵclassMap((ctx.state().vertical ? "au-slider-vertical" : "au-slider-horizontal") + " " + ctx.state().className);
            i0.ɵɵclassProp("disabled", ctx.state().disabled);
        } }, inputs: { className: [i0.ɵɵInputFlags.None, "auClassName", "className"], min: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMin", "min", auNumberAttribute], max: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMax", "max", auNumberAttribute], stepSize: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auStepSize", "stepSize", auNumberAttribute], values: [i0.ɵɵInputFlags.None, "auValues", "values"], rtl: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auRtl", "rtl", auBooleanAttribute], showValueLabels: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auShowValueLabels", "showValueLabels", auBooleanAttribute], showMinMaxLabels: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auShowMinMaxLabels", "showMinMaxLabels", auBooleanAttribute], ariaLabelHandle: [i0.ɵɵInputFlags.None, "auAriaLabelHandle", "ariaLabelHandle"], ariaValueText: [i0.ɵɵInputFlags.None, "auAriaValueText", "ariaValueText"], readonly: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auReadonly", "readonly", auBooleanAttribute], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], vertical: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auVertical", "vertical", auBooleanAttribute] }, outputs: { valuesChange: "auValuesChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 7, vars: 4, consts: [[3, "click"], [3, "class", "left", "top"], [1, "au-slider-progress"], [3, "auUse"], ["role", "slider", 1, "au-slider-handle", 3, "disabled", "keydown", "mousedown", "touchstart"], ["class", "au-slider-progress", 3, "left", "right", "bottom", "top", "width", "height"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, SliderComponent_For_1_Template, 1, 12, "div", 5, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵlistener("click", function SliderComponent_Template_div_click_2_listener($event) { return ctx.sliderClick($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, SliderComponent_Conditional_3_Template, 4, 16)(4, SliderComponent_Conditional_4_Template, 3, 7, "div", 1);
            i0.ɵɵrepeaterCreate(5, SliderComponent_For_6_Template, 3, 16, null, null, _forTrack0);
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
                    '[attr.aria-disabled]': 'state().disabled ? true : null',
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
				[attr.aria-valuetext]="item.ariaValueText"
				[attr.aria-label]="item.ariaLabel"
				[attr.aria-orientation]="state().vertical ? 'vertical' : null"
				[disabled]="state().disabled"
				[class]="state().vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'"
				[style.left.%]="state().handleDisplayOptions[item.id].left"
				[style.top.%]="state().handleDisplayOptions[item.id].top"
				(keydown)="onKeyDown($event, item.id)"
				(mousedown)="widget.actions.mouseDown($event, item.id)"
				(touchstart)="widget.actions.touchStart($event, item.id)"
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
        }], ariaValueText: [{
            type: Input,
            args: ['auAriaValueText']
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "components/slider/slider.component.ts", lineNumber: 107 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7O0lBa0J2Qix5QkFRTzs7O0lBTk4sMkNBQTRCLCtCQUFBLGlDQUFBLDJCQUFBLCtCQUFBLGlDQUFBOzs7SUFVN0IsOEJBS0M7SUFDQSxZQUNEO0lBQUEsaUJBQU07SUFDTiw4QkFLQztJQUNBLFlBQ0Q7SUFBQSxpQkFBTTs7O0lBZEwsd0lBQTRIO0lBQzVILG1EQUFtQyxtREFBQTtJQUVuQyxrRUFBNkM7SUFFN0MsY0FDRDtJQURDLG1EQUNEO0lBRUMsY0FBNEg7SUFBNUgsd0lBQTRIO0lBQzVILG1EQUFtQyxtREFBQTtJQUVuQyxrRUFBNkM7SUFFN0MsY0FDRDtJQURDLG1EQUNEOzs7SUFTRSxZQUNEOzs7SUFEQyxzR0FDRDs7O0lBQ0MsWUFDRDs7O0lBREMsd0dBQ0Q7OztJQVRELDJCQUlDO0lBQ0EsNEVBRUMsK0RBQUE7SUFHRixpQkFBTTs7O0lBVEwsd0lBQTRIO0lBQzVILHFFQUFrRCxxREFBQTtJQUdsRCxjQUVDO0lBRkQsK0NBRUM7OztJQTRCRCwyQkFJQztJQUNBLFlBQ0Q7SUFBQSxpQkFBTTs7OztJQUxMLHlJQUE0SDtJQUM1SCw2RUFBcUQsNkRBQUE7SUFHckQsY0FDRDtJQURDLDhEQUNEOzs7O0lBNUJELGlDQWtCQztJQUhBLG9PQUFXLGVBQUEsc0NBQTBCLENBQUEsSUFBQywyTkFDekIsZUFBQSxxREFBeUMsQ0FBQSxJQURoQiw2TkFFeEIsZUFBQSxzREFBMEMsQ0FBQSxJQUZsQjtJQUl0Qyx3QkFDRDtJQUFBLGlCQUFTO0lBQ1QsOEVBUUM7Ozs7SUFqQkEsb0dBQXdGO0lBQ3hGLGtGQUEyRCxrRUFBQTtJQUYzRCxrREFBNkI7SUFSN0IsbURBQWtDLHFDQUFBLHdEQUFBLHdEQUFBLGlDQUFBLDBDQUFBLGtDQUFBLGlFQUFBO0lBa0JuQyxlQVFDO0lBUkQsb0dBUUM7O0FBSUosTUFBTSxPQUFPLGVBQWdCLFNBQVEsbUJBQWlDO0lBNUZ0RTs7UUE2RlMsVUFBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0QixZQUFPLEdBQUcsaUJBQWlCLENBQUM7WUFDcEMsT0FBTyxFQUFFLFlBQVk7WUFDckIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsTUFBTSxFQUFFO2dCQUNQLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2FBQ0Q7WUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUNmLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzlELENBQUM7U0FDRCxDQUFDLENBQUM7UUF5RUg7Ozs7V0FJRztRQUVILGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUU1Qzs7V0FFRztRQUNILGFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBRTFCLGNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7S0EwQ3JCO0lBeENBLGdCQUFnQixDQUFDLEVBQXVCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFhO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDbEIsTUFBTSxFQUFFLEtBQUs7YUFDYixDQUFDLENBQUM7UUFDSixDQUFDO2FBQU0sQ0FBQztZQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNsQixNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7YUFDZixDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0YsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1NBQ3BCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBa0I7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBb0IsRUFBRSxRQUFnQjtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQy9DLEtBQUssQ0FBQyxNQUFzQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztnT0EvSVcsZUFBZSxTQUFmLGVBQWU7b0VBQWYsZUFBZTs4RkFBZixnQkFBWTs7Ozs7d0pBMEJXLGlCQUFpQixxRUFNakIsaUJBQWlCLG9GQU1aLGlCQUFpQiwySEFZdEIsa0JBQWtCLHlHQU1OLGtCQUFrQiw0R0FLakIsa0JBQWtCLGdQQWExQixrQkFBa0Isb0ZBTWxCLGtCQUFrQixvRkFNbEIsa0JBQWtCLHFHQTdLL0MsQ0FBQyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztZQVVyRyxxR0FVQztZQUNELDhCQUFpSTtZQUE5QiwrRkFBUyx1QkFBbUIsSUFBQztZQUFDLGlCQUFNO1lBQ3ZJLCtEQWlCQywyREFBQTtZQWNELHFGQStCQzs7WUExRUQsaURBVUM7WUFDSSxlQUE2RjtZQUE3RixzR0FBNkY7WUFDbEcsY0FpQkM7WUFqQkQsMERBaUJDO1lBQ0QsY0FZQztZQVpELDZGQVlDO1lBQ0QsY0ErQkM7WUEvQkQsd0NBK0JDOzRCQW5GUSxZQUFZOztpRkFzRlYsZUFBZTtjQTVGM0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztnQkFDdEcsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixJQUFJLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLFdBQVc7b0JBQ2xCLFNBQVMsRUFBRSw4RkFBOEY7b0JBQ3pHLGtCQUFrQixFQUFFLGtCQUFrQjtvQkFDdEMsc0JBQXNCLEVBQUUsZ0NBQWdDO29CQUN4RCxRQUFRLEVBQUUsY0FBYztpQkFDeEI7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNEVUO2FBQ0Q7Z0JBc0JzQixTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFNcEIsR0FBRztrQkFERixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFPckQsR0FBRztrQkFERixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFPckQsUUFBUTtrQkFEUCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFPMUQsTUFBTTtrQkFETCxLQUFLO21CQUFDLFVBQVU7WUFPakIsR0FBRztrQkFERixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFNYyxlQUFlO2tCQUFsRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUtHLGdCQUFnQjtrQkFBcEYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFJdkMsZUFBZTtrQkFBMUMsS0FBSzttQkFBQyxtQkFBbUI7WUFJQSxhQUFhO2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQU14QixRQUFRO2tCQURQLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU8zRCxRQUFRO2tCQURQLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU8zRCxRQUFRO2tCQURQLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQVMzRCxZQUFZO2tCQURYLE1BQU07bUJBQUMsZ0JBQWdCOztrRkE5RlosZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbGlkZXJXaWRnZXR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHRhdU51bWJlckF0dHJpYnV0ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZVNsaWRlcixcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIGZvcndhcmRSZWYsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVTbGlkZXJdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2xpZGVyQ29tcG9uZW50KSwgbXVsdGk6IHRydWV9XSxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZV0sXG5cdGhvc3Q6IHtcblx0XHRjbGFzczogYGF1LXNsaWRlcmAsXG5cdFx0J1tjbGFzc10nOiAnKHN0YXRlKCkudmVydGljYWwgPyBcImF1LXNsaWRlci12ZXJ0aWNhbFwiIDogXCJhdS1zbGlkZXItaG9yaXpvbnRhbFwiKSArIFwiIFwiICsgc3RhdGUoKS5jbGFzc05hbWUnLFxuXHRcdCdbY2xhc3MuZGlzYWJsZWRdJzogJ3N0YXRlKCkuZGlzYWJsZWQnLFxuXHRcdCdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGwnLFxuXHRcdCcoYmx1ciknOiAnaGFuZGxlQmx1cigpJyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHRAZm9yIChvcHRpb24gb2Ygc3RhdGUoKS5wcm9ncmVzc0Rpc3BsYXlPcHRpb25zOyB0cmFjayBvcHRpb24pIHtcblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3M9XCJhdS1zbGlkZXItcHJvZ3Jlc3NcIlxuXHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cIm9wdGlvbi5sZWZ0XCJcblx0XHRcdFx0W3N0eWxlLnJpZ2h0LiVdPVwib3B0aW9uLnJpZ2h0XCJcblx0XHRcdFx0W3N0eWxlLmJvdHRvbS4lXT1cIm9wdGlvbi5ib3R0b21cIlxuXHRcdFx0XHRbc3R5bGUudG9wLiVdPVwib3B0aW9uLnRvcFwiXG5cdFx0XHRcdFtzdHlsZS53aWR0aC4lXT1cIm9wdGlvbi53aWR0aFwiXG5cdFx0XHRcdFtzdHlsZS5oZWlnaHQuJV09XCJvcHRpb24uaGVpZ2h0XCJcblx0XHRcdD48L2Rpdj5cblx0XHR9XG5cdFx0PGRpdiBbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItY2xpY2thYmxlLWFyZWEtdmVydGljYWwnIDogJ2F1LXNsaWRlci1jbGlja2FibGUtYXJlYSdcIiAoY2xpY2spPVwic2xpZGVyQ2xpY2soJGV2ZW50KVwiPjwvZGl2PlxuXHRcdEBpZiAoc3RhdGUoKS5zaG93TWluTWF4TGFiZWxzKSB7XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbWluJyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW1pbidcIlxuXHRcdFx0XHRbY2xhc3MuYXUtc2xpZGVyLXJ0bF09XCJzdGF0ZSgpLnJ0bFwiXG5cdFx0XHRcdFtjbGFzcy5pbnZpc2libGVdPVwiIXN0YXRlKCkubWluVmFsdWVMYWJlbERpc3BsYXlcIlxuXHRcdFx0XHRbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMubWluTGFiZWxEaXJlY3RpdmVcIlxuXHRcdFx0PlxuXHRcdFx0XHR7eyBzdGF0ZSgpLm1pbiB9fVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbWF4JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW1heCdcIlxuXHRcdFx0XHRbY2xhc3MuYXUtc2xpZGVyLXJ0bF09XCJzdGF0ZSgpLnJ0bFwiXG5cdFx0XHRcdFtjbGFzcy5pbnZpc2libGVdPVwiIXN0YXRlKCkubWF4VmFsdWVMYWJlbERpc3BsYXlcIlxuXHRcdFx0XHRbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMubWF4TGFiZWxEaXJlY3RpdmVcIlxuXHRcdFx0PlxuXHRcdFx0XHR7eyBzdGF0ZSgpLm1heCB9fVxuXHRcdFx0PC9kaXY+XG5cdFx0fVxuXHRcdEBpZiAoc3RhdGUoKS5zaG93VmFsdWVMYWJlbHMgJiYgc3RhdGUoKS5jb21iaW5lZExhYmVsRGlzcGxheSkge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW5vdycgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1ub3cnXCJcblx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJzdGF0ZSgpLmNvbWJpbmVkTGFiZWxQb3NpdGlvbkxlZnRcIlxuXHRcdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUoKS5jb21iaW5lZExhYmVsUG9zaXRpb25Ub3BcIlxuXHRcdFx0PlxuXHRcdFx0XHRAaWYgKHN0YXRlKCkucnRsKSB7XG5cdFx0XHRcdFx0e3sgc3RhdGUoKS5zb3J0ZWRWYWx1ZXNbMV0gfX0gLSB7eyBzdGF0ZSgpLnNvcnRlZFZhbHVlc1swXSB9fVxuXHRcdFx0XHR9IEBlbHNlIHtcblx0XHRcdFx0XHR7eyBzdGF0ZSgpLnNvcnRlZFZhbHVlc1swXSB9fSAtIHt7IHN0YXRlKCkuc29ydGVkVmFsdWVzWzFdIH19XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdH1cblx0XHRAZm9yIChpdGVtIG9mIHN0YXRlKCkuc29ydGVkSGFuZGxlczsgdHJhY2sgaXRlbS5pZDsgbGV0IGkgPSAkaW5kZXgpIHtcblx0XHRcdDxidXR0b25cblx0XHRcdFx0Y2xhc3M9XCJhdS1zbGlkZXItaGFuZGxlXCJcblx0XHRcdFx0cm9sZT1cInNsaWRlclwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVtaW5dPVwic3RhdGUoKS5taW5cIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbWF4XT1cInN0YXRlKCkubWF4XCJcblx0XHRcdFx0W2F0dHIuYXJpYS1yZWFkb25seV09XCJzdGF0ZSgpLnJlYWRvbmx5ID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVub3ddPVwiaXRlbS52YWx1ZVwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cIml0ZW0uYXJpYVZhbHVlVGV4dFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiaXRlbS5hcmlhTGFiZWxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLW9yaWVudGF0aW9uXT1cInN0YXRlKCkudmVydGljYWwgPyAndmVydGljYWwnIDogbnVsbFwiXG5cdFx0XHRcdFtkaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkXCJcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWhhbmRsZS12ZXJ0aWNhbCcgOiAnYXUtc2xpZGVyLWhhbmRsZS1ob3Jpem9udGFsJ1wiXG5cdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpdGVtLmlkXS5sZWZ0XCJcblx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaXRlbS5pZF0udG9wXCJcblx0XHRcdFx0KGtleWRvd24pPVwib25LZXlEb3duKCRldmVudCwgaXRlbS5pZClcIlxuXHRcdFx0XHQobW91c2Vkb3duKT1cIndpZGdldC5hY3Rpb25zLm1vdXNlRG93bigkZXZlbnQsIGl0ZW0uaWQpXCJcblx0XHRcdFx0KHRvdWNoc3RhcnQpPVwid2lkZ2V0LmFjdGlvbnMudG91Y2hTdGFydCgkZXZlbnQsIGl0ZW0uaWQpXCJcblx0XHRcdD5cblx0XHRcdFx0Jm5ic3A7XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdEBpZiAoc3RhdGUoKS5zaG93VmFsdWVMYWJlbHMgJiYgIXN0YXRlKCkuY29tYmluZWRMYWJlbERpc3BsYXkpIHtcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbm93JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW5vdydcIlxuXHRcdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpXS5sZWZ0XCJcblx0XHRcdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpXS50b3BcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgc3RhdGUoKS52YWx1ZXNbaV0gfX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0fVxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFNsaWRlcldpZGdldD4ge1xuXHRwcml2YXRlIF96b25lID0gaW5qZWN0KE5nWm9uZSk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVTbGlkZXIsXG5cdFx0d2lkZ2V0TmFtZTogJ3NsaWRlcicsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvblZhbHVlc0NoYW5nZTogKGV2ZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMub25DaGFuZ2UoZXZlbnQpO1xuXHRcdFx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHRcdFx0XHR0aGlzLnZhbHVlc0NoYW5nZS5lbWl0KGV2ZW50KTtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRhZnRlckluaXQ6ICgpID0+IHtcblx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3QodGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuc2xpZGVyRGlyZWN0aXZlKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1pbmltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWluJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdG1pbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBNYXhpbXVtIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1heCcsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRtYXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVW5pdCB2YWx1ZSBiZXR3ZWVuIHNsaWRlciBzdGVwc1xuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1U3RlcFNpemUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0c3RlcFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ3VycmVudCBzbGlkZXIgdmFsdWVzXG5cdCAqL1xuXHRASW5wdXQoJ2F1VmFsdWVzJylcblx0dmFsdWVzOiBudW1iZXJbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSXQgYHRydWVgIHNsaWRlciBkaXNwbGF5IGlzIGludmVyc2VkXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSdGwnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHJ0bDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSB2YWx1ZSBsYWJlbHMgYXJlIGRpc3BsYXllZCBvbiB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTaG93VmFsdWVMYWJlbHMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHNob3dWYWx1ZUxhYmVsczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBtaW4gYW5kIG1heCBsYWJlbHMgYXJlIGRpc3BsYXllZCBvbiB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTaG93TWluTWF4TGFiZWxzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBzaG93TWluTWF4TGFiZWxzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLWxhYmVsJyBhdHRyaWJ1dGUgZm9yIHRoZSBoYW5kbGVcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWxIYW5kbGUnKSBhcmlhTGFiZWxIYW5kbGU6ICgodmFsdWU6IG51bWJlciwgc29ydGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZSBmb3IgdGhlIGhhbmRsZVxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFWYWx1ZVRleHQnKSBhcmlhVmFsdWVUZXh0OiAoKHZhbHVlOiBudW1iZXIsIHNvcnRlZEluZGV4OiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBzbGlkZXIgdmFsdWUgY2Fubm90IGJlIGNoYW5nZWQgYnV0IHRoZSBzbGlkZXIgaXMgc3RpbGwgZm9jdXNhYmxlXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSZWFkb25seScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0cmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBzbGlkZXIgdmFsdWUgY2Fubm90IGJlIGNoYW5nZWQgYW5kIHRoZSBzbGlkZXIgY2Fubm90IGJlIGZvY3VzZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIGlzIHZlcnRpY2FsbHkgcG9zaXRpb25lZCBvdGhlcndpc2UgaXQgaXMgaG9yaXpvbnRhbFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VmVydGljYWwnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHZlcnRpY2FsOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gc2xpZGVyIHZhbHVlcyBhcmUgY2hhbmdlZFxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGVxdWFscyB0byB0aGUgdXBkYXRlZCBzbGlkZXIgdmFsdWVzXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZhbHVlc0NoYW5nZScpXG5cdHZhbHVlc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyW10+KCk7XG5cblx0LyoqXG5cdCAqIENvbnRyb2wgdmFsdWUgYWNjZXNzb3IgbWV0aG9kc1xuXHQgKi9cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuXHRvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRcdHZhbHVlczogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdFx0dmFsdWVzOiBbdmFsdWVdLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlQmx1cigpIHtcblx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHR9XG5cblx0c2xpZGVyQ2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdFx0dGhpcy53aWRnZXQuYWN0aW9ucy5jbGljaygkZXZlbnQpO1xuXHR9XG5cblx0b25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyKSB7XG5cdFx0dGhpcy53aWRnZXQuYWN0aW9ucy5rZXlkb3duKGV2ZW50LCBoYW5kbGVJZCk7XG5cdFx0dGhpcy5fem9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHQoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
