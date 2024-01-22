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
        } }, inputs: { className: ["auClassName", "className"], min: ["auMin", "min", auNumberAttribute], max: ["auMax", "max", auNumberAttribute], stepSize: ["auStepSize", "stepSize", auNumberAttribute], values: ["auValues", "values"], rtl: ["auRtl", "rtl", auBooleanAttribute], showValueLabels: ["auShowValueLabels", "showValueLabels", auBooleanAttribute], showMinMaxLabels: ["auShowMinMaxLabels", "showMinMaxLabels", auBooleanAttribute], ariaLabelHandle: ["auAriaLabelHandle", "ariaLabelHandle"], readonly: ["auReadonly", "readonly", auBooleanAttribute], disabled: ["auDisabled", "disabled", auBooleanAttribute], vertical: ["auVertical", "vertical", auBooleanAttribute] }, outputs: { valuesChange: "auValuesChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 7, vars: 4, consts: [[3, "click"], [3, "class", "left", "top"], [1, "au-slider-progress"], [3, "auUse"], ["role", "slider", 1, "au-slider-handle", 3, "disabled", "keydown", "mousedown", "touchstart"], ["class", "au-slider-progress", 3, "left", "right", "bottom", "top", "width", "height"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "components/slider/slider.component.ts", lineNumber: 106 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7O0lBaUJ2Qix5QkFRTzs7O0lBTk4sMkNBQTRCLCtCQUFBLGlDQUFBLDJCQUFBLCtCQUFBLGlDQUFBOzs7SUFVN0IsOEJBS0M7SUFDQSxZQUNEO0lBQUEsaUJBQU07SUFDTiw4QkFLQztJQUNBLFlBQ0Q7SUFBQSxpQkFBTTs7O0lBZEwsd0lBQTRIO0lBQzVILG1EQUFtQyxtREFBQTtJQUVuQyxrRUFBNkM7SUFFN0MsY0FDRDtJQURDLG1EQUNEO0lBRUMsY0FBNEg7SUFBNUgsd0lBQTRIO0lBQzVILG1EQUFtQyxtREFBQTtJQUVuQyxrRUFBNkM7SUFFN0MsY0FDRDtJQURDLG1EQUNEOzs7SUFTRSxZQUNEOzs7SUFEQyxzR0FDRDs7O0lBQ0MsWUFDRDs7O0lBREMsd0dBQ0Q7OztJQVRELDJCQUlDO0lBQ0EsNEVBRUMsK0RBQUE7SUFHRixpQkFBTTs7O0lBVEwsd0lBQTRIO0lBQzVILHFFQUFrRCxxREFBQTtJQUdsRCxjQUVDO0lBRkQsK0NBRUM7OztJ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QixFQUFDO1lBTzNELFFBQVE7a0JBRFAsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBUzNELFlBQVk7a0JBRFgsTUFBTTttQkFBQyxnQkFBZ0I7O2tGQTFGWixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1NsaWRlcldpZGdldH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlU2xpZGVyLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgZm9yd2FyZFJlZiwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVNsaWRlcl0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTbGlkZXJDb21wb25lbnQpLCBtdWx0aTogdHJ1ZX1dLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlXSxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiBgYXUtc2xpZGVyYCxcblx0XHQnW2NsYXNzXSc6ICcoc3RhdGUoKS52ZXJ0aWNhbCA/IFwiYXUtc2xpZGVyLXZlcnRpY2FsXCIgOiBcImF1LXNsaWRlci1ob3Jpem9udGFsXCIpICsgXCIgXCIgKyBzdGF0ZSgpLmNsYXNzTmFtZScsXG5cdFx0J1tjbGFzcy5kaXNhYmxlZF0nOiAnc3RhdGUoKS5kaXNhYmxlZCcsXG5cdFx0JyhibHVyKSc6ICdoYW5kbGVCbHVyKCknLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdEBmb3IgKG9wdGlvbiBvZiBzdGF0ZSgpLnByb2dyZXNzRGlzcGxheU9wdGlvbnM7IHRyYWNrIG9wdGlvbikge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzcz1cImF1LXNsaWRlci1wcm9ncmVzc1wiXG5cdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwib3B0aW9uLmxlZnRcIlxuXHRcdFx0XHRbc3R5bGUucmlnaHQuJV09XCJvcHRpb24ucmlnaHRcIlxuXHRcdFx0XHRbc3R5bGUuYm90dG9tLiVdPVwib3B0aW9uLmJvdHRvbVwiXG5cdFx0XHRcdFtzdHlsZS50b3AuJV09XCJvcHRpb24udG9wXCJcblx0XHRcdFx0W3N0eWxlLndpZHRoLiVdPVwib3B0aW9uLndpZHRoXCJcblx0XHRcdFx0W3N0eWxlLmhlaWdodC4lXT1cIm9wdGlvbi5oZWlnaHRcIlxuXHRcdFx0PjwvZGl2PlxuXHRcdH1cblx0XHQ8ZGl2IFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1jbGlja2FibGUtYXJlYS12ZXJ0aWNhbCcgOiAnYXUtc2xpZGVyLWNsaWNrYWJsZS1hcmVhJ1wiIChjbGljayk9XCJzbGlkZXJDbGljaygkZXZlbnQpXCI+PC9kaXY+XG5cdFx0QGlmIChzdGF0ZSgpLnNob3dNaW5NYXhMYWJlbHMpIHtcblx0XHRcdDxkaXZcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1taW4nIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbWluJ1wiXG5cdFx0XHRcdFtjbGFzcy5hdS1zbGlkZXItcnRsXT1cInN0YXRlKCkucnRsXCJcblx0XHRcdFx0W2NsYXNzLmludmlzaWJsZV09XCIhc3RhdGUoKS5taW5WYWx1ZUxhYmVsRGlzcGxheVwiXG5cdFx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5taW5MYWJlbERpcmVjdGl2ZVwiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IHN0YXRlKCkubWluIH19XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXZcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1tYXgnIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbWF4J1wiXG5cdFx0XHRcdFtjbGFzcy5hdS1zbGlkZXItcnRsXT1cInN0YXRlKCkucnRsXCJcblx0XHRcdFx0W2NsYXNzLmludmlzaWJsZV09XCIhc3RhdGUoKS5tYXhWYWx1ZUxhYmVsRGlzcGxheVwiXG5cdFx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5tYXhMYWJlbERpcmVjdGl2ZVwiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IHN0YXRlKCkubWF4IH19XG5cdFx0XHQ8L2Rpdj5cblx0XHR9XG5cdFx0QGlmIChzdGF0ZSgpLnNob3dWYWx1ZUxhYmVscyAmJiBzdGF0ZSgpLmNvbWJpbmVkTGFiZWxEaXNwbGF5KSB7XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbm93JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW5vdydcIlxuXHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlKCkuY29tYmluZWRMYWJlbFBvc2l0aW9uTGVmdFwiXG5cdFx0XHRcdFtzdHlsZS50b3AuJV09XCJzdGF0ZSgpLmNvbWJpbmVkTGFiZWxQb3NpdGlvblRvcFwiXG5cdFx0XHQ+XG5cdFx0XHRcdEBpZiAoc3RhdGUoKS5ydGwpIHtcblx0XHRcdFx0XHR7eyBzdGF0ZSgpLnNvcnRlZFZhbHVlc1sxXSB9fSAtIHt7IHN0YXRlKCkuc29ydGVkVmFsdWVzWzBdIH19XG5cdFx0XHRcdH0gQGVsc2Uge1xuXHRcdFx0XHRcdHt7IHN0YXRlKCkuc29ydGVkVmFsdWVzWzBdIH19IC0ge3sgc3RhdGUoKS5zb3J0ZWRWYWx1ZXNbMV0gfX1cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0fVxuXHRcdEBmb3IgKGl0ZW0gb2Ygc3RhdGUoKS5zb3J0ZWRIYW5kbGVzOyB0cmFjayBpdGVtLmlkOyBsZXQgaSA9ICRpbmRleCkge1xuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRjbGFzcz1cImF1LXNsaWRlci1oYW5kbGVcIlxuXHRcdFx0XHRyb2xlPVwic2xpZGVyXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZW1pbl09XCJzdGF0ZSgpLm1pblwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVtYXhdPVwic3RhdGUoKS5tYXhcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXJlYWRvbmx5XT1cInN0YXRlKCkucmVhZG9ubHkgPyB0cnVlIDogbnVsbFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZW5vd109XCJpdGVtLnZhbHVlXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiaXRlbS52YWx1ZVwiXG5cdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiaXRlbS5hcmlhTGFiZWxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLW9yaWVudGF0aW9uXT1cInN0YXRlKCkudmVydGljYWwgPyAndmVydGljYWwnIDogbnVsbFwiXG5cdFx0XHRcdFtkaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkXCJcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWhhbmRsZS12ZXJ0aWNhbCcgOiAnYXUtc2xpZGVyLWhhbmRsZS1ob3Jpem9udGFsJ1wiXG5cdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpdGVtLmlkXS5sZWZ0XCJcblx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaXRlbS5pZF0udG9wXCJcblx0XHRcdFx0KGtleWRvd24pPVwib25LZXlEb3duKCRldmVudCwgaXRlbS5pZClcIlxuXHRcdFx0XHQobW91c2Vkb3duKT1cIndpZGdldC5hY3Rpb25zLm1vdXNlRG93bigkZXZlbnQsIGl0ZW0uaWQpXCJcblx0XHRcdFx0KHRvdWNoc3RhcnQpPVwid2lkZ2V0LmFjdGlvbnMudG91Y2hTdGFydCgkZXZlbnQsIGl0ZW0uaWQpXCJcblx0XHRcdD5cblx0XHRcdFx0Jm5ic3A7XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdEBpZiAoc3RhdGUoKS5zaG93VmFsdWVMYWJlbHMgJiYgIXN0YXRlKCkuY29tYmluZWRMYWJlbERpc3BsYXkpIHtcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbm93JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW5vdydcIlxuXHRcdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpXS5sZWZ0XCJcblx0XHRcdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpXS50b3BcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgc3RhdGUoKS52YWx1ZXNbaV0gfX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0fVxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFNsaWRlcldpZGdldD4ge1xuXHRwcml2YXRlIF96b25lID0gaW5qZWN0KE5nWm9uZSk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVTbGlkZXIsXG5cdFx0d2lkZ2V0TmFtZTogJ3NsaWRlcicsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvblZhbHVlc0NoYW5nZTogKGV2ZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMub25DaGFuZ2UoZXZlbnQpO1xuXHRcdFx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHRcdFx0XHR0aGlzLnZhbHVlc0NoYW5nZS5lbWl0KGV2ZW50KTtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRhZnRlckluaXQ6ICgpID0+IHtcblx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3QodGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuc2xpZGVyRGlyZWN0aXZlKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1pbmltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWluJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdG1pbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBNYXhpbXVtIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1heCcsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRtYXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVW5pdCB2YWx1ZSBiZXR3ZWVuIHNsaWRlciBzdGVwc1xuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1U3RlcFNpemUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0c3RlcFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ3VycmVudCBzbGlkZXIgdmFsdWVzXG5cdCAqL1xuXHRASW5wdXQoJ2F1VmFsdWVzJylcblx0dmFsdWVzOiBudW1iZXJbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSXQgYHRydWVgIHNsaWRlciBkaXNwbGF5IGlzIGludmVyc2VkXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSdGwnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHJ0bDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSB2YWx1ZSBsYWJlbHMgYXJlIGRpc3BsYXllZCBvbiB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTaG93VmFsdWVMYWJlbHMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHNob3dWYWx1ZUxhYmVsczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBtaW4gYW5kIG1heCBsYWJlbHMgYXJlIGRpc3BsYXllZCBvbiB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTaG93TWluTWF4TGFiZWxzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBzaG93TWluTWF4TGFiZWxzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLWxhYmVsJyBhdHRyaWJ1dGUgZm9yIHRoZSBoYW5kbGVcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWxIYW5kbGUnKSBhcmlhTGFiZWxIYW5kbGU6ICgodmFsdWU6IG51bWJlciwgc29ydGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBidXQgdGhlIHNsaWRlciBpcyBzdGlsbCBmb2N1c2FibGVcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJlYWRvbmx5JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRyZWFkb25seTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBhbmQgdGhlIHNsaWRlciBjYW5ub3QgYmUgZm9jdXNlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgaXMgdmVydGljYWxseSBwb3NpdGlvbmVkIG90aGVyd2lzZSBpdCBpcyBob3Jpem9udGFsXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVWZXJ0aWNhbCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0dmVydGljYWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiBzbGlkZXIgdmFsdWVzIGFyZSBjaGFuZ2VkXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgZXF1YWxzIHRvIHRoZSB1cGRhdGVkIHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBPdXRwdXQoJ2F1VmFsdWVzQ2hhbmdlJylcblx0dmFsdWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4oKTtcblxuXHQvKipcblx0ICogQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBtZXRob2RzXG5cdCAqL1xuXHRvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdFx0dmFsdWVzOiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0XHR2YWx1ZXM6IFt2YWx1ZV0sXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0ZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVCbHVyKCkge1xuXHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdH1cblxuXHRzbGlkZXJDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHR0aGlzLndpZGdldC5hY3Rpb25zLmNsaWNrKCRldmVudCk7XG5cdH1cblxuXHRvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGhhbmRsZUlkOiBudW1iZXIpIHtcblx0XHR0aGlzLndpZGdldC5hY3Rpb25zLmtleWRvd24oZXZlbnQsIGhhbmRsZUlkKTtcblx0XHR0aGlzLl96b25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
