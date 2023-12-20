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
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("(", index_r2 < ctx_r0.state().visibleRating ? "*" : " ", ")");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("cursor", ctx_r0.state().isInteractive ? "pointer" : "default");
    i0.ɵɵadvance(1);
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RatingComponent, { className: "RatingComponent", filePath: "rating/rating.component.ts", lineNumber: 66 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXRKLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQWtDOUMsK0JBQThCO0lBQUEsWUFBaUQ7SUFBQSxpQkFBTztJQUN0RiwrQkFLQztJQUhBLDZOQUFjLGVBQUEsd0NBQThCLENBQUMsQ0FBQyxDQUFBLElBQUMsc01BQ3RDLGVBQUEsd0NBQThCLENBQUMsQ0FBQyxDQUFBLElBRE07SUFJL0Msc0ZBQTRGO0lBQzdGLGlCQUFPOzs7O0lBUnVCLGVBQWlEO0lBQWpELG9GQUFpRDtJQUs5RSxlQUE4RDtJQUE5RCw4RUFBOEQ7SUFFakQsZUFBMkI7SUFBM0IsZ0RBQTJCLCtDQUFBOztBQXRDNUMsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBK0MsQ0FBQSxDQUFDLENBQUM7S0FJN0U7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBeUIsRUFBRSxPQUFnQjtRQUN4RSxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7b0ZBSlcsbUJBQW1CO29FQUFuQixtQkFBbUI7O2lGQUFuQixtQkFBbUI7Y0FEL0IsU0FBUztl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cEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBT0ksVUFBVTtrQkFBeEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBRXhDLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUNpQyxtQkFBbUI7a0JBQXRFLFlBQVk7bUJBQUMsbUJBQW1CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBTVUsUUFBUTtrQkFBbkUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO1lBS3BDLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUtFLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUtPLGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCO1lBT04sS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTO1lBT0UsS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTO1lBT1MsWUFBWTtrQkFBckMsTUFBTTttQkFBQyxnQkFBZ0I7O2tGQWpHWixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0FkYXB0U2xvdENvbnRlbnRQcm9wcywgUmF0aW5nV2lkZ2V0LCBTbG90Q29udGVudCwgU3RhckNvbnRleHR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7QmFzZVdpZGdldERpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZSwgYXVCb29sZWFuQXR0cmlidXRlLCBhdU51bWJlckF0dHJpYnV0ZSwgY2FsbFdpZGdldEZhY3RvcnksIGNyZWF0ZVJhdGluZ30gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdEJpbmRpbmcsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcblx0Zm9yd2FyZFJlZixcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UmF0aW5nU3Rhcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdTdGFyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTdGFyQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUmF0aW5nU3RhckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU3RhckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVJhdGluZ10nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdkLWlubGluZS1mbGV4IGF1LXJhdGluZycsXG5cdFx0J1t0YWJpbmRleF0nOiAnc3RhdGUoKS50YWJpbmRleCcsXG5cdFx0cm9sZTogJ3NsaWRlcicsXG5cdFx0J2FyaWEtdmFsdWVtaW4nOiAnMCcsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWVtYXhdJzogJ3N0YXRlKCkubWF4UmF0aW5nJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW5vd10nOiAnc3RhdGUoKS52aXNpYmxlUmF0aW5nJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZXRleHRdJzogJ3N0YXRlKCkuYXJpYVZhbHVlVGV4dCcsXG5cdFx0J1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ3N0YXRlKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCcsXG5cdFx0J1thdHRyLmFyaWEtcmVhZG9ubHldJzogJ3N0YXRlKCkucmVhZG9ubHkgPyB0cnVlIDogbnVsbCcsXG5cdFx0J1thdHRyLmFyaWEtbGFiZWxdJzogJ3N0YXRlKCkuYXJpYUxhYmVsIHx8IG51bGwnLFxuXHRcdCcoYmx1ciknOiAnb25Ub3VjaGVkKCknLFxuXHRcdCcoa2V5ZG93biknOiAnX3dpZGdldC5hY3Rpb25zLmhhbmRsZUtleSgkZXZlbnQpJyxcblx0XHQnKG1vdXNlbGVhdmUpJzogJ193aWRnZXQuYWN0aW9ucy5sZWF2ZSgpJyxcblx0XHQnW2NsYXNzXSc6ICdzdGF0ZSgpLmNsYXNzTmFtZScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGZvciAoaXRlbSBvZiBzdGF0ZSgpLnN0YXJzOyB0cmFjayB0cmFja0J5SW5kZXgoaW5kZXgpOyBsZXQgaW5kZXggPSAkaW5kZXgpIHtcblx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+KHt7IGluZGV4IDwgc3RhdGUoKS52aXNpYmxlUmF0aW5nID8gJyonIDogJyAnIH19KTwvc3Bhbj5cblx0XHRcdDxzcGFuXG5cdFx0XHRcdGNsYXNzPVwiYXUtcmF0aW5nLXN0YXJcIlxuXHRcdFx0XHQobW91c2VlbnRlcik9XCJfd2lkZ2V0LmFjdGlvbnMuaG92ZXIoaW5kZXggKyAxKVwiXG5cdFx0XHRcdChjbGljayk9XCJfd2lkZ2V0LmFjdGlvbnMuY2xpY2soaW5kZXggKyAxKVwiXG5cdFx0XHRcdFtzdHlsZS5jdXJzb3JdPVwic3RhdGUoKS5pc0ludGVyYWN0aXZlID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnXCJcblx0XHRcdD5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zbG90U3RhclwiIFthdVNsb3RQcm9wc109XCJzdGF0ZSgpLnN0YXJzW2luZGV4XVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0fVxuXHRgLFxuXHRwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhdGluZ0NvbXBvbmVudCksIG11bHRpOiB0cnVlfV0sXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8UmF0aW5nV2lkZ2V0PiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVSYXRpbmcsXG5cdFx0d2lkZ2V0TmFtZTogJ3JhdGluZycsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvbkhvdmVyOiAoZXZlbnQpID0+IHRoaXMuaG92ZXIuZW1pdChldmVudCksXG5cdFx0XHRvbkxlYXZlOiAoZXZlbnQpID0+IHRoaXMubGVhdmUuZW1pdChldmVudCksXG5cdFx0XHRvblJhdGluZ0NoYW5nZTogKHJhdGluZzogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucmF0aW5nQ2hhbmdlLmVtaXQocmF0aW5nKTtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShyYXRpbmcpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblxuXHRvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXHRvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXHQvLyBUT0RPIGFuZ3VsYXIgaXMgZmFpbGluZyB3aGVuIGFkZGluZyB0aGlzIGhvc3QgYmluZGluZyBpbiBkZWNvcmF0b3IgcGFydFxuXHRASG9zdEJpbmRpbmcoJ1thdHRyLmFyaWEtbGFiZWxsZWRieV0nKSBnZXQgaG9zdEFyaWFMYWJlbGxlZEJ5KCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlKCkuYXJpYUxhYmVsbGVkQnkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtdmFsdWV0ZXh0JyBhdHRyaWJ1dGUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVZhbHVlVGV4dEZuJykgYXJpYVZhbHVlVGV4dEZuOiAoKHJhdGluZzogbnVtYmVyLCBtYXhSYXRpbmc6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgcmF0aW5nIGlzIGRpc2FibGVkLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbWF4aW11bSByYXRpbmcgdGhhdCBjYW4gYmUgZ2l2ZW4uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNYXhSYXRpbmcnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgbWF4UmF0aW5nOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHJhdGluZy4gQ291bGQgYmUgYSBkZWNpbWFsIHZhbHVlIGxpa2UgYDMuNzVgLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmF0aW5nJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHJhdGluZzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgY2FuJ3QgYmUgY2hhbmdlZC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJlYWRvbmx5JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSByZWFkb25seTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRGVmaW5lIGlmIHRoZSByYXRpbmcgY2FuIGJlIHJlc2V0LlxuXHQgKlxuXHQgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuICd1bnNldCcgdGhlIHJhdGluZyB2YWx1ZSBieSBjbGlraW5nIG9uIHRoZSBjdXJyZW50IHJhdGluZyB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJlc2V0dGFibGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHJlc2V0dGFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RTdGFyJykgc2xvdFN0YXI6IFNsb3RDb250ZW50PEFkYXB0U2xvdENvbnRlbnRQcm9wczxTdGFyQ29udGV4dD4+O1xuXHRAQ29udGVudENoaWxkKFJhdGluZ1N0YXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFN0YXJGcm9tQ29udGVudDogUmF0aW5nU3RhckRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQWxsb3dzIHNldHRpbmcgYSBjdXN0b20gcmF0aW5nIHRhYmluZGV4LlxuXHQgKiBJZiB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLCBgdGFiaW5kZXhgIHdpbGwgc3RpbGwgYmUgc2V0IHRvIGAtMWAuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVUYWJpbmRleCcsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSB0YWJpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWxcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWxsZWQgYnlcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWxsZWRCeScpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBpcyBob3ZlcmluZyBvdmVyIGEgZ2l2ZW4gcmF0aW5nLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSByYXRpbmcgYmVpbmcgaG92ZXJlZCBvdmVyLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIb3ZlcicpIGhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBob3ZlcmluZyBvdmVyIGEgZ2l2ZW4gcmF0aW5nLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSByYXRpbmcgb2YgdGhlIGxhc3QgaXRlbSBiZWluZyBob3ZlcmVkIG92ZXIuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUxlYXZlJykgbGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSByYXRpbmcgaXMgY2hhbmdlZC5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgbmV3bHkgc2VsZWN0ZWQgcmF0aW5nLlxuXHQgKi9cblx0QE91dHB1dCgnYXVSYXRpbmdDaGFuZ2UnKSByYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe3JhdGluZzogdmFsdWV9KTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe2Rpc2FibGVkfSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdFN0YXI6IHRoaXMuc2xvdFN0YXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHR0cmFja0J5SW5kZXgoaW5kZXg6IG51bWJlcikge1xuXHRcdHJldHVybiBpbmRleDtcblx0fVxufVxuIl19`;export{t as default};
