const t=`import { BaseWidgetDirective, SlotDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createRating } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, HostBinding, Input, Output, TemplateRef, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
const _c0 = ["auRating", ""];
function _forTrack1($index, $item) { return this.trackByIndex($index); }
function RatingComponent_For_1_ng_template_3_Template(rf, ctx) { }
function RatingComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 1);
    i0.ɵɵlistener("mouseenter", function RatingComponent_For_1_Template_span_mouseenter_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const index_r2 = restoredCtx.$index; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7._widget.actions.hover(index_r2 + 1)); })("click", function RatingComponent_For_1_Template_span_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const index_r2 = restoredCtx.$index; const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9._widget.actions.click(index_r2 + 1)); });
    i0.ɵɵtemplate(3, RatingComponent_For_1_ng_template_3_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r2 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", index_r2 < ctx_r0.state().visibleRating ? "*" : " ", ")");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("cursor", ctx_r0.state().isInteractive ? "pointer" : "default");
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r0.state().slotStar)("auSlotProps", ctx_r0.state().stars[index_r2]);
} }
export class RatingStarDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function RatingStarDirective_Factory(t) { return new (t || RatingStarDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RatingStarDirective, selectors: [["ng-template", "auRatingStar", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingStarDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auRatingStar]', standalone: true }]
    }], null, null); })();
export class RatingComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this._widget = callWidgetFactory({
            factory: createRating,
            widgetName: 'rating',
            events: {
                onHover: (event) => this.hover.emit(event),
                onLeave: (event) => this.leave.emit(event),
                onRatingChange: (rating) => {
                    this.ratingChange.emit(rating);
                    this.onChange(rating);
                },
            },
        });
        this.onChange = (_) => { };
        this.onTouched = () => { };
        /**
         * An event emitted when the user is hovering over a given rating.
         *
         * Event payload is equal to the rating being hovered over.
         */
        this.hover = new EventEmitter();
        /**
         * An event emitted when the user stops hovering over a given rating.
         *
         * Event payload is equal to the rating of the last item being hovered over.
         */
        this.leave = new EventEmitter();
        /**
         * An event emitted when the rating is changed.
         *
         * Event payload is equal to the newly selected rating.
         */
        this.ratingChange = new EventEmitter();
    }
    // TODO angular is failing when adding this host binding in decorator part
    get hostAriaLabelledBy() {
        return this.state().ariaLabelledBy || null;
    }
    writeValue(value) {
        this._widget.patch({ rating: value });
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this._widget.patch({ disabled });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotStar: this.slotStarFromContent?.templateRef,
        });
    }
    trackByIndex(index) {
        return index;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵRatingComponent_BaseFactory; return function RatingComponent_Factory(t) { return (ɵRatingComponent_BaseFactory || (ɵRatingComponent_BaseFactory = i0.ɵɵgetInheritedFactory(RatingComponent)))(t || RatingComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RatingComponent, selectors: [["", "auRating", ""]], contentQueries: function RatingComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, RatingStarDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStarFromContent = _t.first);
        } }, hostAttrs: ["role", "slider", "aria-valuemin", "0", 1, "d-inline-flex", "au-rating"], hostVars: 10, hostBindings: function RatingComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function RatingComponent_blur_HostBindingHandler() { return ctx.onTouched(); })("keydown", function RatingComponent_keydown_HostBindingHandler($event) { return ctx._widget.actions.handleKey($event); })("mouseleave", function RatingComponent_mouseleave_HostBindingHandler() { return ctx._widget.actions.leave(); });
        } if (rf & 2) {
            i0.ɵɵhostProperty("tabindex", ctx.state().tabindex);
            i0.ɵɵattribute("aria-valuemax", ctx.state().maxRating)("aria-valuenow", ctx.state().visibleRating)("aria-valuetext", ctx.state().ariaValueText)("aria-disabled", ctx.state().disabled ? true : null)("aria-readonly", ctx.state().readonly ? true : null)("aria-label", ctx.state().ariaLabel || null)("aria-labelledby", ctx.hostAriaLabelledBy);
            i0.ɵɵclassMap(ctx.state().className);
        } }, inputs: { ariaValueTextFn: ["auAriaValueTextFn", "ariaValueTextFn"], disabled: ["auDisabled", "disabled", auBooleanAttribute], maxRating: ["auMaxRating", "maxRating", auNumberAttribute], rating: ["auRating", "rating", auNumberAttribute], readonly: ["auReadonly", "readonly", auBooleanAttribute], resettable: ["auResettable", "resettable", auBooleanAttribute], slotStar: ["auSlotStar", "slotStar"], tabindex: ["auTabindex", "tabindex", auNumberAttribute], className: ["auClassName", "className"], ariaLabel: ["auAriaLabel", "ariaLabel"], ariaLabelledBy: ["auAriaLabelledBy", "ariaLabelledBy"] }, outputs: { hover: "auHover", leave: "auLeave", ratingChange: "auRatingChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 2, vars: 0, consts: [[1, "visually-hidden"], [1, "au-rating-star", 3, "mouseenter", "click"], [3, "auSlot", "auSlotProps"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, RatingComponent_For_1_Template, 4, 5, null, null, _forTrack1, true);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.state().stars);
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingComponent, [{
        type: Component,
        args: [{
                selector: '[auRating]',
                standalone: true,
                imports: [SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'd-inline-flex au-rating',
                    '[tabindex]': 'state().tabindex',
                    role: 'slider',
                    'aria-valuemin': '0',
                    '[attr.aria-valuemax]': 'state().maxRating',
                    '[attr.aria-valuenow]': 'state().visibleRating',
                    '[attr.aria-valuetext]': 'state().ariaValueText',
                    '[attr.aria-disabled]': 'state().disabled ? true : null',
                    '[attr.aria-readonly]': 'state().readonly ? true : null',
                    '[attr.aria-label]': 'state().ariaLabel || null',
                    '(blur)': 'onTouched()',
                    '(keydown)': '_widget.actions.handleKey($event)',
                    '(mouseleave)': '_widget.actions.leave()',
                    '[class]': 'state().className',
                },
                template: \`
		@for (item of state().stars; track trackByIndex(index); let index = $index) {
			<span class="visually-hidden">({{ index < state().visibleRating ? '*' : ' ' }})</span>
			<span
				class="au-rating-star"
				(mouseenter)="_widget.actions.hover(index + 1)"
				(click)="_widget.actions.click(index + 1)"
				[style.cursor]="state().isInteractive ? 'pointer' : 'default'"
			>
				<ng-template [auSlot]="state().slotStar" [auSlotProps]="state().stars[index]"></ng-template>
			</span>
		}
	\`,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }],
            }]
    }], null, { hostAriaLabelledBy: [{
            type: HostBinding,
            args: ['[attr.aria-labelledby]']
        }], ariaValueTextFn: [{
            type: Input,
            args: ['auAriaValueTextFn']
        }], disabled: [{
            type: Input,
            args: [{ alias: 'auDisabled', transform: auBooleanAttribute }]
        }], maxRating: [{
            type: Input,
            args: [{ alias: 'auMaxRating', transform: auNumberAttribute }]
        }], rating: [{
            type: Input,
            args: [{ alias: 'auRating', transform: auNumberAttribute }]
        }], readonly: [{
            type: Input,
            args: [{ alias: 'auReadonly', transform: auBooleanAttribute }]
        }], resettable: [{
            type: Input,
            args: [{ alias: 'auResettable', transform: auBooleanAttribute }]
        }], slotStar: [{
            type: Input,
            args: ['auSlotStar']
        }], slotStarFromContent: [{
            type: ContentChild,
            args: [RatingStarDirective, { static: false }]
        }], tabindex: [{
            type: Input,
            args: [{ alias: 'auTabindex', transform: auNumberAttribute }]
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], ariaLabel: [{
            type: Input,
            args: ['auAriaLabel']
        }], ariaLabelledBy: [{
            type: Input,
            args: ['auAriaLabelledBy']
        }], hover: [{
            type: Output,
            args: ['auHover']
        }], leave: [{
            type: Output,
            args: ['auLeave']
        }], ratingChange: [{
            type: Output,
            args: ['auRatingChange']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RatingComponent, { className: "RatingComponent", filePath: "components/rating/rating.component.ts", lineNumber: 66 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFdEosT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0lBa0M5QywrQkFBOEI7SUFBQSxZQUFpRDtJQUFBLGlCQUFPO0lBQ3RGLCtCQUtDO0lBSEEsNk5BQWMsZUFBQSx3Q0FBOEIsQ0FBQyxDQUFDLENBQUEsSUFBQyxzTUFDdEMsZUFBQSx3Q0FBOEIsQ0FBQyxDQUFDLENBQUEsSUFETTtJQUkvQyxzRkFBNEY7SUFDN0YsaUJBQU87Ozs7SUFSdUIsY0FBaUQ7SUFBakQsb0ZBQWlEO0lBSzlFLGNBQThEO0lBQTlELDhFQUE4RDtJQUVqRCxjQUEyQjtJQUEzQixnREFBMkIsK0NBQUE7O0FBdEM1QyxNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUErQyxDQUFBLENBQUMsQ0FBQztLQUk3RTtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUF5QixFQUFFLE9BQWdCO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztvRkFKVyxtQkFBbUI7b0VBQW5CLG1CQUFtQjs7aUZBQW5CLG1CQUFt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WUFLSyxRQUFRO2tCQUFwRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPSSxVQUFVO2tCQUF4RSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFFeEMsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBQ2lDLG1CQUFtQjtrQkFBdEUsWUFBWTttQkFBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFNVSxRQUFRO2tCQUFuRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFLcEMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBS0UsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBS08sY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFPTixLQUFLO2tCQUF2QixNQUFNO21CQUFDLFNBQVM7WUFPRSxLQUFLO2tCQUF2QixNQUFNO21CQUFDLFNBQVM7WUFPUyxZQUFZO2tCQUFyQyxNQUFNO21CQUFDLGdCQUFnQjs7a0ZBakdaLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QWRhcHRTbG90Q29udGVudFByb3BzLCBSYXRpbmdXaWRnZXQsIFNsb3RDb250ZW50LCBTdGFyQ29udGV4dH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtCYXNlV2lkZ2V0RGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBhdUJvb2xlYW5BdHRyaWJ1dGUsIGF1TnVtYmVyQXR0cmlidXRlLCBjYWxsV2lkZ2V0RmFjdG9yeSwgY3JlYXRlUmF0aW5nfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRIb3N0QmluZGluZyxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxuXHRmb3J3YXJkUmVmLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVSYXRpbmdTdGFyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFJhdGluZ1N0YXJEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPFN0YXJDb250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBSYXRpbmdTdGFyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTdGFyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1UmF0aW5nXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHRjbGFzczogJ2QtaW5saW5lLWZsZXggYXUtcmF0aW5nJyxcblx0XHQnW3RhYmluZGV4XSc6ICdzdGF0ZSgpLnRhYmluZGV4Jyxcblx0XHRyb2xlOiAnc2xpZGVyJyxcblx0XHQnYXJpYS12YWx1ZW1pbic6ICcwJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnc3RhdGUoKS5tYXhSYXRpbmcnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICdzdGF0ZSgpLnZpc2libGVSYXRpbmcnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVldGV4dF0nOiAnc3RhdGUoKS5hcmlhVmFsdWVUZXh0Jyxcblx0XHQnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnc3RhdGUoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsJyxcblx0XHQnW2F0dHIuYXJpYS1yZWFkb25seV0nOiAnc3RhdGUoKS5yZWFkb25seSA/IHRydWUgOiBudWxsJyxcblx0XHQnW2F0dHIuYXJpYS1sYWJlbF0nOiAnc3RhdGUoKS5hcmlhTGFiZWwgfHwgbnVsbCcsXG5cdFx0JyhibHVyKSc6ICdvblRvdWNoZWQoKScsXG5cdFx0JyhrZXlkb3duKSc6ICdfd2lkZ2V0LmFjdGlvbnMuaGFuZGxlS2V5KCRldmVudCknLFxuXHRcdCcobW91c2VsZWF2ZSknOiAnX3dpZGdldC5hY3Rpb25zLmxlYXZlKCknLFxuXHRcdCdbY2xhc3NdJzogJ3N0YXRlKCkuY2xhc3NOYW1lJyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHRAZm9yIChpdGVtIG9mIHN0YXRlKCkuc3RhcnM7IHRyYWNrIHRyYWNrQnlJbmRleChpbmRleCk7IGxldCBpbmRleCA9ICRpbmRleCkge1xuXHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj4oe3sgaW5kZXggPCBzdGF0ZSgpLnZpc2libGVSYXRpbmcgPyAnKicgOiAnICcgfX0pPC9zcGFuPlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0Y2xhc3M9XCJhdS1yYXRpbmctc3RhclwiXG5cdFx0XHRcdChtb3VzZWVudGVyKT1cIl93aWRnZXQuYWN0aW9ucy5ob3ZlcihpbmRleCArIDEpXCJcblx0XHRcdFx0KGNsaWNrKT1cIl93aWRnZXQuYWN0aW9ucy5jbGljayhpbmRleCArIDEpXCJcblx0XHRcdFx0W3N0eWxlLmN1cnNvcl09XCJzdGF0ZSgpLmlzSW50ZXJhY3RpdmUgPyAncG9pbnRlcicgOiAnZGVmYXVsdCdcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RTdGFyXCIgW2F1U2xvdFByb3BzXT1cInN0YXRlKCkuc3RhcnNbaW5kZXhdXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvc3Bhbj5cblx0XHR9XG5cdGAsXG5cdHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmF0aW5nQ29tcG9uZW50KSwgbXVsdGk6IHRydWV9XSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxSYXRpbmdXaWRnZXQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVJhdGluZyxcblx0XHR3aWRnZXROYW1lOiAncmF0aW5nJyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uSG92ZXI6IChldmVudCkgPT4gdGhpcy5ob3Zlci5lbWl0KGV2ZW50KSxcblx0XHRcdG9uTGVhdmU6IChldmVudCkgPT4gdGhpcy5sZWF2ZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uUmF0aW5nQ2hhbmdlOiAocmF0aW5nOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yYXRpbmdDaGFuZ2UuZW1pdChyYXRpbmcpO1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKHJhdGluZyk7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cdC8vIFRPRE8gYW5ndWxhciBpcyBmYWlsaW5nIHdoZW4gYWRkaW5nIHRoaXMgaG9zdCBiaW5kaW5nIGluIGRlY29yYXRvciBwYXJ0XG5cdEBIb3N0QmluZGluZygnW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XScpIGdldCBob3N0QXJpYUxhYmVsbGVkQnkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUoKS5hcmlhTGFiZWxsZWRCeSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0Rm4nKSBhcmlhVmFsdWVUZXh0Rm46ICgocmF0aW5nOiBudW1iZXIsIG1heFJhdGluZzogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgaXMgZGlzYWJsZWQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHJhdGluZyB0aGF0IGNhbiBiZSBnaXZlbi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1heFJhdGluZycsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBtYXhSYXRpbmc6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcmF0aW5nLiBDb3VsZCBiZSBhIGRlY2ltYWwgdmFsdWUgbGlrZSBgMy43NWAuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSYXRpbmcnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgcmF0aW5nOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBjYW4ndCBiZSBjaGFuZ2VkLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmVhZG9ubHknLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBEZWZpbmUgaWYgdGhlIHJhdGluZyBjYW4gYmUgcmVzZXQuXG5cdCAqXG5cdCAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gJ3Vuc2V0JyB0aGUgcmF0aW5nIHZhbHVlIGJ5IGNsaWtpbmcgb24gdGhlIGN1cnJlbnQgcmF0aW5nIHZhbHVlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmVzZXR0YWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgcmVzZXR0YWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFN0YXInKSBzbG90U3RhcjogU2xvdENvbnRlbnQ8QWRhcHRTbG90Q29udGVudFByb3BzPFN0YXJDb250ZXh0Pj47XG5cdEBDb250ZW50Q2hpbGQoUmF0aW5nU3RhckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RhckZyb21Db250ZW50OiBSYXRpbmdTdGFyRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbGxvd3Mgc2V0dGluZyBhIGN1c3RvbSByYXRpbmcgdGFiaW5kZXguXG5cdCAqIElmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGB0YWJpbmRleGAgd2lsbCBzdGlsbCBiZSBzZXQgdG8gYC0xYC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVRhYmluZGV4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHRhYmluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbGxlZCBieVxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbGxlZEJ5JykgYXJpYUxhYmVsbGVkQnk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGlzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIHJhdGluZyBiZWluZyBob3ZlcmVkIG92ZXIuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhvdmVyJykgaG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIHJhdGluZyBvZiB0aGUgbGFzdCBpdGVtIGJlaW5nIGhvdmVyZWQgb3Zlci5cblx0ICovXG5cdEBPdXRwdXQoJ2F1TGVhdmUnKSBsZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHJhdGluZyBpcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSBuZXdseSBzZWxlY3RlZCByYXRpbmcuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVJhdGluZ0NoYW5nZScpIHJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7cmF0aW5nOiB2YWx1ZX0pO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7ZGlzYWJsZWR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90U3RhcjogdGhpcy5zbG90U3RhckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxuXG5cdHRyYWNrQnlJbmRleChpbmRleDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9XG59XG4iXX0=`;export{t as default};
