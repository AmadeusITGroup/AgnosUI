const t=`import { SlotDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createRating, patchSimpleChanges, toAngularSignal, } from '@agnos-ui/angular-headless';
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
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("(", index_r2 < ctx_r0.state$().visibleRating ? "*" : " ", ")");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("cursor", ctx_r0.state$().isInteractive ? "pointer" : "default");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("auSlot", ctx_r0.state$().slotStar)("auSlotProps", ctx_r0.state$().stars[index_r2]);
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
export class RatingComponent {
    constructor() {
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
        this.api = this._widget.api;
        this.state$ = toAngularSignal(this._widget.state$);
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
        return this.state$().ariaLabelledBy || null;
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
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotStar: this.slotStarFromContent?.templateRef,
        });
    }
    trackByIndex(index) {
        return index;
    }
    static { this.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RatingComponent, selectors: [["", "auRating", ""]], contentQueries: function RatingComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, RatingStarDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStarFromContent = _t.first);
        } }, hostAttrs: ["role", "slider", "aria-valuemin", "0", 1, "d-inline-flex", "au-rating"], hostVars: 10, hostBindings: function RatingComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function RatingComponent_blur_HostBindingHandler() { return ctx.onTouched(); })("keydown", function RatingComponent_keydown_HostBindingHandler($event) { return ctx._widget.actions.handleKey($event); })("mouseleave", function RatingComponent_mouseleave_HostBindingHandler() { return ctx._widget.actions.leave(); });
        } if (rf & 2) {
            i0.ɵɵhostProperty("tabindex", ctx.state$().tabindex);
            i0.ɵɵattribute("aria-valuemax", ctx.state$().maxRating)("aria-valuenow", ctx.state$().visibleRating)("aria-valuetext", ctx.state$().ariaValueText)("aria-disabled", ctx.state$().disabled ? true : null)("aria-readonly", ctx.state$().readonly ? true : null)("aria-label", ctx.state$().ariaLabel || null)("aria-labelledby", ctx.hostAriaLabelledBy);
            i0.ɵɵclassMap(ctx.state$().className);
        } }, inputs: { ariaValueTextFn: ["auAriaValueTextFn", "ariaValueTextFn"], disabled: ["auDisabled", "disabled", auBooleanAttribute], maxRating: ["auMaxRating", "maxRating", auNumberAttribute], rating: ["auRating", "rating", auNumberAttribute], readonly: ["auReadonly", "readonly", auBooleanAttribute], resettable: ["auResettable", "resettable", auBooleanAttribute], slotStar: ["auSlotStar", "slotStar"], tabindex: ["auTabindex", "tabindex", auNumberAttribute], className: ["auClassName", "className"], ariaLabel: ["auAriaLabel", "ariaLabel"], ariaLabelledBy: ["auAriaLabelledBy", "ariaLabelledBy"] }, outputs: { hover: "auHover", leave: "auLeave", ratingChange: "auRatingChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 2, vars: 0, consts: [[1, "visually-hidden"], [1, "au-rating-star", 3, "mouseenter", "click"], [3, "auSlot", "auSlotProps"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, RatingComponent_For_1_Template, 4, 5, null, null, _forTrack1, true);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.state$().stars);
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
                    '[tabindex]': 'state$().tabindex',
                    role: 'slider',
                    'aria-valuemin': '0',
                    '[attr.aria-valuemax]': 'state$().maxRating',
                    '[attr.aria-valuenow]': 'state$().visibleRating',
                    '[attr.aria-valuetext]': 'state$().ariaValueText',
                    '[attr.aria-disabled]': 'state$().disabled ? true : null',
                    '[attr.aria-readonly]': 'state$().readonly ? true : null',
                    '[attr.aria-label]': 'state$().ariaLabel || null',
                    '(blur)': 'onTouched()',
                    '(keydown)': '_widget.actions.handleKey($event)',
                    '(mouseleave)': '_widget.actions.leave()',
                    '[class]': 'state$().className',
                },
                template: \`
		@for (item of state$().stars; track trackByIndex(index); let index = $index) {
			<span class="visually-hidden">({{ index < state$().visibleRating ? '*' : ' ' }})</span>
			<span
				class="au-rating-star"
				(mouseenter)="_widget.actions.hover(index + 1)"
				(click)="_widget.actions.click(index + 1)"
				[style.cursor]="state$().isInteractive ? 'pointer' : 'default'"
			>
				<ng-template [auSlot]="state$().slotStar" [auSlotProps]="state$().stars[index]"></ng-template>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RatingComponent, { className: "RatingComponent", filePath: "rating/rating.component.ts", lineNumber: 74 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ04sYUFBYSxFQUNiLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxHQUNmLE1BQU0sNEJBQTRCLENBQUM7QUFFcEMsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0lBa0M5QywrQkFBOEI7SUFBQSxZQUFrRDtJQUFBLGlCQUFPO0lBQ3ZGLCtCQUtDO0lBSEEsNk5BQWMsZUFBQSx3Q0FBOEIsQ0FBQyxDQUFDLENBQUEsSUFBQyxzTUFDdEMsZUFBQSx3Q0FBOEIsQ0FBQyxDQUFDLENBQUEsSUFETTtJQUkvQyxzRkFBOEY7SUFDL0YsaUJBQU87Ozs7SUFSdUIsZUFBa0Q7SUFBbEQscUZBQWtEO0lBSy9FLGVBQStEO0lBQS9ELCtFQUErRDtJQUVsRCxlQUE0QjtJQUE1QixpREFBNEIsZ0RBQUE7O0FBdEM3QyxNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUErQyxDQUFBLENBQUMsQ0FBQztLQUk3RTtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUF5QixFQUFFLE9BQWdCO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztvRkFKVyxtQkFBbUI7b0VBQW5CLG1CQUFtQjs7aUZBQW5CLG1CQUFt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WSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUtFLFNBQVM7a0JBQXJFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQUtELE1BQU07a0JBQS9ELEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQUtLLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU9JLFVBQVU7a0JBQXhFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUV4QyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFDaUMsbUJBQW1CO2tCQUF0RSxZQUFZO21CQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQU1VLFFBQVE7a0JBQW5FLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQUtwQyxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFLRSxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFLTyxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQU9OLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQU9FLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQU9TLFlBQVk7a0JBQXJDLE1BQU07bUJBQUMsZ0JBQWdCOztrRkFwR1osZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtBZGFwdFNsb3RDb250ZW50UHJvcHMsIFJhdGluZ1N0YXRlLCBTbG90Q29udGVudCwgU3RhckNvbnRleHR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdFNsb3REaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVSYXRpbmcsXG5cdHBhdGNoU2ltcGxlQ2hhbmdlcyxcblx0dG9Bbmd1bGFyU2lnbmFsLFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25DaGFuZ2VzLCBTaWduYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdEJpbmRpbmcsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcblx0Zm9yd2FyZFJlZixcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UmF0aW5nU3Rhcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdTdGFyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTdGFyQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUmF0aW5nU3RhckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU3RhckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVJhdGluZ10nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdkLWlubGluZS1mbGV4IGF1LXJhdGluZycsXG5cdFx0J1t0YWJpbmRleF0nOiAnc3RhdGUkKCkudGFiaW5kZXgnLFxuXHRcdHJvbGU6ICdzbGlkZXInLFxuXHRcdCdhcmlhLXZhbHVlbWluJzogJzAnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVlbWF4XSc6ICdzdGF0ZSQoKS5tYXhSYXRpbmcnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICdzdGF0ZSQoKS52aXNpYmxlUmF0aW5nJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZXRleHRdJzogJ3N0YXRlJCgpLmFyaWFWYWx1ZVRleHQnLFxuXHRcdCdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdzdGF0ZSQoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsJyxcblx0XHQnW2F0dHIuYXJpYS1yZWFkb25seV0nOiAnc3RhdGUkKCkucmVhZG9ubHkgPyB0cnVlIDogbnVsbCcsXG5cdFx0J1thdHRyLmFyaWEtbGFiZWxdJzogJ3N0YXRlJCgpLmFyaWFMYWJlbCB8fCBudWxsJyxcblx0XHQnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyxcblx0XHQnKGtleWRvd24pJzogJ193aWRnZXQuYWN0aW9ucy5oYW5kbGVLZXkoJGV2ZW50KScsXG5cdFx0Jyhtb3VzZWxlYXZlKSc6ICdfd2lkZ2V0LmFjdGlvbnMubGVhdmUoKScsXG5cdFx0J1tjbGFzc10nOiAnc3RhdGUkKCkuY2xhc3NOYW1lJyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHRAZm9yIChpdGVtIG9mIHN0YXRlJCgpLnN0YXJzOyB0cmFjayB0cmFja0J5SW5kZXgoaW5kZXgpOyBsZXQgaW5kZXggPSAkaW5kZXgpIHtcblx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+KHt7IGluZGV4IDwgc3RhdGUkKCkudmlzaWJsZVJhdGluZyA/ICcqJyA6ICcgJyB9fSk8L3NwYW4+XG5cdFx0XHQ8c3BhblxuXHRcdFx0XHRjbGFzcz1cImF1LXJhdGluZy1zdGFyXCJcblx0XHRcdFx0KG1vdXNlZW50ZXIpPVwiX3dpZGdldC5hY3Rpb25zLmhvdmVyKGluZGV4ICsgMSlcIlxuXHRcdFx0XHQoY2xpY2spPVwiX3dpZGdldC5hY3Rpb25zLmNsaWNrKGluZGV4ICsgMSlcIlxuXHRcdFx0XHRbc3R5bGUuY3Vyc29yXT1cInN0YXRlJCgpLmlzSW50ZXJhY3RpdmUgPyAncG9pbnRlcicgOiAnZGVmYXVsdCdcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSQoKS5zbG90U3RhclwiIFthdVNsb3RQcm9wc109XCJzdGF0ZSQoKS5zdGFyc1tpbmRleF1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9zcGFuPlxuXHRcdH1cblx0YCxcblx0cHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYXRpbmdDb21wb25lbnQpLCBtdWx0aTogdHJ1ZX1dLFxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVSYXRpbmcsXG5cdFx0d2lkZ2V0TmFtZTogJ3JhdGluZycsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvbkhvdmVyOiAoZXZlbnQpID0+IHRoaXMuaG92ZXIuZW1pdChldmVudCksXG5cdFx0XHRvbkxlYXZlOiAoZXZlbnQpID0+IHRoaXMubGVhdmUuZW1pdChldmVudCksXG5cdFx0XHRvblJhdGluZ0NoYW5nZTogKHJhdGluZzogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucmF0aW5nQ2hhbmdlLmVtaXQocmF0aW5nKTtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShyYXRpbmcpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblxuXHRzdGF0ZSQ6IFNpZ25hbDxSYXRpbmdTdGF0ZT4gPSB0b0FuZ3VsYXJTaWduYWwodGhpcy5fd2lkZ2V0LnN0YXRlJCk7XG5cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblx0b25Ub3VjaGVkID0gKCkgPT4ge307XG5cblx0Ly8gVE9ETyBhbmd1bGFyIGlzIGZhaWxpbmcgd2hlbiBhZGRpbmcgdGhpcyBob3N0IGJpbmRpbmcgaW4gZGVjb3JhdG9yIHBhcnRcblx0QEhvc3RCaW5kaW5nKCdbYXR0ci5hcmlhLWxhYmVsbGVkYnldJykgZ2V0IGhvc3RBcmlhTGFiZWxsZWRCeSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZSQoKS5hcmlhTGFiZWxsZWRCeSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0Rm4nKSBhcmlhVmFsdWVUZXh0Rm46ICgocmF0aW5nOiBudW1iZXIsIG1heFJhdGluZzogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgaXMgZGlzYWJsZWQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHJhdGluZyB0aGF0IGNhbiBiZSBnaXZlbi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1heFJhdGluZycsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBtYXhSYXRpbmc6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcmF0aW5nLiBDb3VsZCBiZSBhIGRlY2ltYWwgdmFsdWUgbGlrZSBgMy43NWAuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSYXRpbmcnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgcmF0aW5nOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBjYW4ndCBiZSBjaGFuZ2VkLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmVhZG9ubHknLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBEZWZpbmUgaWYgdGhlIHJhdGluZyBjYW4gYmUgcmVzZXQuXG5cdCAqXG5cdCAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gJ3Vuc2V0JyB0aGUgcmF0aW5nIHZhbHVlIGJ5IGNsaWtpbmcgb24gdGhlIGN1cnJlbnQgcmF0aW5nIHZhbHVlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmVzZXR0YWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgcmVzZXR0YWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFN0YXInKSBzbG90U3RhcjogU2xvdENvbnRlbnQ8QWRhcHRTbG90Q29udGVudFByb3BzPFN0YXJDb250ZXh0Pj47XG5cdEBDb250ZW50Q2hpbGQoUmF0aW5nU3RhckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RhckZyb21Db250ZW50OiBSYXRpbmdTdGFyRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbGxvd3Mgc2V0dGluZyBhIGN1c3RvbSByYXRpbmcgdGFiaW5kZXguXG5cdCAqIElmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGB0YWJpbmRleGAgd2lsbCBzdGlsbCBiZSBzZXQgdG8gYC0xYC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVRhYmluZGV4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHRhYmluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbGxlZCBieVxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbGxlZEJ5JykgYXJpYUxhYmVsbGVkQnk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGlzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIHJhdGluZyBiZWluZyBob3ZlcmVkIG92ZXIuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhvdmVyJykgaG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIHJhdGluZyBvZiB0aGUgbGFzdCBpdGVtIGJlaW5nIGhvdmVyZWQgb3Zlci5cblx0ICovXG5cdEBPdXRwdXQoJ2F1TGVhdmUnKSBsZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHJhdGluZyBpcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSBuZXdseSBzZWxlY3RlZCByYXRpbmcuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVJhdGluZ0NoYW5nZScpIHJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7cmF0aW5nOiB2YWx1ZX0pO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7ZGlzYWJsZWR9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRwYXRjaFNpbXBsZUNoYW5nZXModGhpcy5fd2lkZ2V0LnBhdGNoLCBjaGFuZ2VzKTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90U3RhcjogdGhpcy5zbG90U3RhckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxuXG5cdHRyYWNrQnlJbmRleChpbmRleDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9XG59XG4iXX0=`;export{t as default};
