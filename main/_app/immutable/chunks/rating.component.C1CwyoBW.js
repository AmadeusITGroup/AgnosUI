const t=`import { BaseWidgetDirective, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { callWidgetFactory } from '../../config';
import { createRating } from './rating';
import * as i0 from "@angular/core";
const _c0 = ["auRating", ""];
const _c1 = a0 => ({ index: a0 });
const _c2 = (a0, a1) => [a0, a1];
function RatingComponent_For_1_ng_template_3_Template(rf, ctx) { }
function RatingComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 1);
    i0.ɵɵtemplate(3, RatingComponent_For_1_ng_template_3_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_1_r1 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", ɵ$index_1_r1 < ctx_r1.state().visibleRating ? "*" : " ", ")");
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(6, _c2, ctx_r1._widget.directives.starDirective, i0.ɵɵpureFunction1(4, _c1, ɵ$index_1_r1)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r1.state().slotStar)("auSlotProps", ctx_r1.state().stars[ɵ$index_1_r1]);
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
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.containerDirective);
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
        } }, hostAttrs: [1, "d-inline-flex"], hostBindings: function RatingComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function RatingComponent_blur_HostBindingHandler() { return ctx.onTouched(); });
        } }, inputs: { ariaValueTextFn: [0, "auAriaValueTextFn", "ariaValueTextFn"], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], maxRating: [2, "auMaxRating", "maxRating", auNumberAttribute], rating: [2, "auRating", "rating", auNumberAttribute], readonly: [2, "auReadonly", "readonly", auBooleanAttribute], resettable: [2, "auResettable", "resettable", auBooleanAttribute], slotStar: [0, "auSlotStar", "slotStar"], tabindex: [2, "auTabindex", "tabindex", auNumberAttribute], className: [0, "auClassName", "className"], ariaLabel: [0, "auAriaLabel", "ariaLabel"], ariaLabelledBy: [0, "auAriaLabelledBy", "ariaLabelledBy"] }, outputs: { hover: "auHover", leave: "auLeave", ratingChange: "auRatingChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 2, vars: 0, consts: [[1, "visually-hidden"], [3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, RatingComponent_For_1_Template, 4, 9, null, null, ctx.trackByIndex, true);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.state().stars);
        } }, dependencies: [UseDirective, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingComponent, [{
        type: Component,
        args: [{
                selector: '[auRating]',
                standalone: true,
                imports: [UseDirective, SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'd-inline-flex',
                    '(blur)': 'onTouched()',
                },
                template: \`
		@for (item of state().stars; track trackByIndex(index); let index = $index) {
			<span class="visually-hidden">({{ index < state().visibleRating ? '*' : ' ' }})</span>
			<span [auUse]="[_widget.directives.starDirective, {index}]">
				<ng-template [auSlot]="state().slotStar" [auSlotProps]="state().stars[index]"></ng-template>
			</span>
		}
	\`,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }],
            }]
    }], null, { ariaValueTextFn: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RatingComponent, { className: "RatingComponent", filePath: "components/rating/rating.component.ts", lineNumber: 58 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sVUFBVSxDQUFDOzs7Ozs7O0lBc0JuQywrQkFBOEI7SUFBQSxZQUFpRDtJQUFBLGlCQUFPO0lBQ3RGLCtCQUE0RDtJQUMzRCxzRkFBOEU7SUFDL0UsaUJBQU87Ozs7SUFIdUIsY0FBaUQ7SUFBakQsd0ZBQWlEO0lBQ3pFLGNBQXFEO0lBQXJELHFJQUFxRDtJQUM3QyxjQUEyQjtJQUFDLEFBQTVCLGdEQUEyQixtREFBcUM7O0FBckJqRixNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUErQyxDQUFBLENBQUMsQ0FBQztLQUk3RTtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUF5QixFQUFFLE9BQWdCO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztvRkFKVyxtQkFBbUI7b0VBQW5CLG1CQUFtQjs7aUZBQW5CLG1C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O1lBS3BDLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUtFLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUtPLGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCO1lBT04sS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTO1lBT0UsS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTO1lBT1MsWUFBWTtrQkFBckMsTUFBTTttQkFBQyxnQkFBZ0I7O2tGQS9GWixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0FkYXB0U2xvdENvbnRlbnRQcm9wcywgU2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHRhdU51bWJlckF0dHJpYnV0ZSxcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxuXHRmb3J3YXJkUmVmLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHR5cGUge1JhdGluZ1dpZGdldCwgU3RhckNvbnRleHR9IGZyb20gJy4vcmF0aW5nJztcbmltcG9ydCB7Y3JlYXRlUmF0aW5nfSBmcm9tICcuL3JhdGluZyc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVSYXRpbmdTdGFyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFJhdGluZ1N0YXJEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPFN0YXJDb250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBSYXRpbmdTdGFyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTdGFyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1UmF0aW5nXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIFNsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiAnZC1pbmxpbmUtZmxleCcsXG5cdFx0JyhibHVyKSc6ICdvblRvdWNoZWQoKScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGZvciAoaXRlbSBvZiBzdGF0ZSgpLnN0YXJzOyB0cmFjayB0cmFja0J5SW5kZXgoaW5kZXgpOyBsZXQgaW5kZXggPSAkaW5kZXgpIHtcblx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+KHt7IGluZGV4IDwgc3RhdGUoKS52aXNpYmxlUmF0aW5nID8gJyonIDogJyAnIH19KTwvc3Bhbj5cblx0XHRcdDxzcGFuIFthdVVzZV09XCJbX3dpZGdldC5kaXJlY3RpdmVzLnN0YXJEaXJlY3RpdmUsIHtpbmRleH1dXCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlKCkuc2xvdFN0YXJcIiBbYXVTbG90UHJvcHNdPVwic3RhdGUoKS5zdGFyc1tpbmRleF1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9zcGFuPlxuXHRcdH1cblx0YCxcblx0cHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYXRpbmdDb21wb25lbnQpLCBtdWx0aTogdHJ1ZX1dLFxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFJhdGluZ1dpZGdldD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlUmF0aW5nLFxuXHRcdHdpZGdldE5hbWU6ICdyYXRpbmcnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25Ib3ZlcjogKGV2ZW50KSA9PiB0aGlzLmhvdmVyLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25MZWF2ZTogKGV2ZW50KSA9PiB0aGlzLmxlYXZlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25SYXRpbmdDaGFuZ2U6IChyYXRpbmc6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJhdGluZ0NoYW5nZS5lbWl0KHJhdGluZyk7XG5cdFx0XHRcdHRoaXMub25DaGFuZ2UocmF0aW5nKTtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRhZnRlckluaXQ6ICgpID0+IHtcblx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3QodGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuY29udGFpbmVyRGlyZWN0aXZlKTtcblx0XHR9LFxuXHR9KTtcblxuXHRvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXHRvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLXZhbHVldGV4dCcgYXR0cmlidXRlLlxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFWYWx1ZVRleHRGbicpIGFyaWFWYWx1ZVRleHRGbjogKChyYXRpbmc6IG51bWJlciwgbWF4UmF0aW5nOiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBpcyBkaXNhYmxlZC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1heGltdW0gcmF0aW5nIHRoYXQgY2FuIGJlIGdpdmVuLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4UmF0aW5nJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIG1heFJhdGluZzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCByYXRpbmcuIENvdWxkIGJlIGEgZGVjaW1hbCB2YWx1ZSBsaWtlIGAzLjc1YC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJhdGluZycsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSByYXRpbmc6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgcmF0aW5nIGNhbid0IGJlIGNoYW5nZWQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSZWFkb25seScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgcmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIERlZmluZSBpZiB0aGUgcmF0aW5nIGNhbiBiZSByZXNldC5cblx0ICpcblx0ICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiAndW5zZXQnIHRoZSByYXRpbmcgdmFsdWUgYnkgY2xpa2luZyBvbiB0aGUgY3VycmVudCByYXRpbmcgdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSZXNldHRhYmxlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSByZXNldHRhYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90U3RhcicpIHNsb3RTdGFyOiBTbG90Q29udGVudDxBZGFwdFNsb3RDb250ZW50UHJvcHM8U3RhckNvbnRleHQ+Pjtcblx0QENvbnRlbnRDaGlsZChSYXRpbmdTdGFyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdGFyRnJvbUNvbnRlbnQ6IFJhdGluZ1N0YXJEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFsbG93cyBzZXR0aW5nIGEgY3VzdG9tIHJhdGluZyB0YWJpbmRleC5cblx0ICogSWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgYHRhYmluZGV4YCB3aWxsIHN0aWxsIGJlIHNldCB0byBgLTFgLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VGFiaW5kZXgnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgdGFiaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBhcmlhIGxhYmVsXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBhcmlhIGxhYmVsbGVkIGJ5XG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsbGVkQnknKSBhcmlhTGFiZWxsZWRCeTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgaXMgaG92ZXJpbmcgb3ZlciBhIGdpdmVuIHJhdGluZy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgcmF0aW5nIGJlaW5nIGhvdmVyZWQgb3Zlci5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SG92ZXInKSBob3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgaG92ZXJpbmcgb3ZlciBhIGdpdmVuIHJhdGluZy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgcmF0aW5nIG9mIHRoZSBsYXN0IGl0ZW0gYmVpbmcgaG92ZXJlZCBvdmVyLlxuXHQgKi9cblx0QE91dHB1dCgnYXVMZWF2ZScpIGxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcmF0aW5nIGlzIGNoYW5nZWQuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIG5ld2x5IHNlbGVjdGVkIHJhdGluZy5cblx0ICovXG5cdEBPdXRwdXQoJ2F1UmF0aW5nQ2hhbmdlJykgcmF0aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtyYXRpbmc6IHZhbHVlfSk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtkaXNhYmxlZH0pO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RTdGFyOiB0aGlzLnNsb3RTdGFyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG5cblx0dHJhY2tCeUluZGV4KGluZGV4OiBudW1iZXIpIHtcblx0XHRyZXR1cm4gaW5kZXg7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
