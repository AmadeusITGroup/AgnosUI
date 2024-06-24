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
    i0.ɵɵproperty("auSlot", ctx_r1.state().star)("auSlotProps", ctx_r1.state().stars[ɵ$index_1_r1]);
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
            star: this.slotStarFromContent?.templateRef,
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
        } }, inputs: { ariaValueTextFn: [0, "auAriaValueTextFn", "ariaValueTextFn"], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], maxRating: [2, "auMaxRating", "maxRating", auNumberAttribute], rating: [2, "auRating", "rating", auNumberAttribute], readonly: [2, "auReadonly", "readonly", auBooleanAttribute], resettable: [2, "auResettable", "resettable", auBooleanAttribute], star: [0, "auStar", "star"], tabindex: [2, "auTabindex", "tabindex", auNumberAttribute], className: [0, "auClassName", "className"], ariaLabel: [0, "auAriaLabel", "ariaLabel"], ariaLabelledBy: [0, "auAriaLabelledBy", "ariaLabelledBy"] }, outputs: { hover: "auHover", leave: "auLeave", ratingChange: "auRatingChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 2, vars: 0, consts: [[1, "visually-hidden"], [3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
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
				<ng-template [auSlot]="state().star" [auSlotProps]="state().stars[index]"></ng-template>
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
        }], star: [{
            type: Input,
            args: ['auStar']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sVUFBVSxDQUFDOzs7Ozs7O0lBc0JuQywrQkFBOEI7SUFBQSxZQUFpRDtJQUFBLGlCQUFPO0lBQ3RGLCtCQUE0RDtJQUMzRCxzRkFBMEU7SUFDM0UsaUJBQU87Ozs7SUFIdUIsY0FBaUQ7SUFBakQsd0ZBQWlEO0lBQ3pFLGNBQXFEO0lBQXJELHFJQUFxRDtJQUM3QyxjQUF1QjtJQUFDLEFBQXhCLDRDQUF1QixtREFBcUM7O0FBckI3RSxNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF3QixDQUFBLENBQUMsQ0FBQztLQUl0RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUF5QixFQUFFLE9BQWdCO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztvRkFKVyxtQkFBbUI7b0VBQW5CLG1CQUFtQjs7aUZBQW5CLG1C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O1lBS3BDLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUtFLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUtPLGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCO1lBT04sS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTO1lBT0UsS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTO1lBT1MsWUFBWTtrQkFBckMsTUFBTTttQkFBQyxnQkFBZ0I7O2tGQWxHWixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcblx0Zm9yd2FyZFJlZixcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtSYXRpbmdXaWRnZXQsIFN0YXJDb250ZXh0fSBmcm9tICcuL3JhdGluZyc7XG5pbXBvcnQge2NyZWF0ZVJhdGluZ30gZnJvbSAnLi9yYXRpbmcnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UmF0aW5nU3Rhcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdTdGFyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFN0YXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFJhdGluZ1N0YXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFN0YXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVSYXRpbmddJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdkLWlubGluZS1mbGV4Jyxcblx0XHQnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHRAZm9yIChpdGVtIG9mIHN0YXRlKCkuc3RhcnM7IHRyYWNrIHRyYWNrQnlJbmRleChpbmRleCk7IGxldCBpbmRleCA9ICRpbmRleCkge1xuXHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj4oe3sgaW5kZXggPCBzdGF0ZSgpLnZpc2libGVSYXRpbmcgPyAnKicgOiAnICcgfX0pPC9zcGFuPlxuXHRcdFx0PHNwYW4gW2F1VXNlXT1cIltfd2lkZ2V0LmRpcmVjdGl2ZXMuc3RhckRpcmVjdGl2ZSwge2luZGV4fV1cIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zdGFyXCIgW2F1U2xvdFByb3BzXT1cInN0YXRlKCkuc3RhcnNbaW5kZXhdXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvc3Bhbj5cblx0XHR9XG5cdGAsXG5cdHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmF0aW5nQ29tcG9uZW50KSwgbXVsdGk6IHRydWV9XSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxSYXRpbmdXaWRnZXQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVJhdGluZyxcblx0XHR3aWRnZXROYW1lOiAncmF0aW5nJyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uSG92ZXI6IChldmVudCkgPT4gdGhpcy5ob3Zlci5lbWl0KGV2ZW50KSxcblx0XHRcdG9uTGVhdmU6IChldmVudCkgPT4gdGhpcy5sZWF2ZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uUmF0aW5nQ2hhbmdlOiAocmF0aW5nOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yYXRpbmdDaGFuZ2UuZW1pdChyYXRpbmcpO1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKHJhdGluZyk7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmNvbnRhaW5lckRpcmVjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblx0b25Ub3VjaGVkID0gKCkgPT4ge307XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0Rm4nKSBhcmlhVmFsdWVUZXh0Rm46ICgocmF0aW5nOiBudW1iZXIsIG1heFJhdGluZzogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgaXMgZGlzYWJsZWQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHJhdGluZyB0aGF0IGNhbiBiZSBnaXZlbi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1heFJhdGluZycsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBtYXhSYXRpbmc6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcmF0aW5nLiBDb3VsZCBiZSBhIGRlY2ltYWwgdmFsdWUgbGlrZSBgMy43NWAuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSYXRpbmcnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgcmF0aW5nOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBjYW4ndCBiZSBjaGFuZ2VkLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmVhZG9ubHknLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBEZWZpbmUgaWYgdGhlIHJhdGluZyBjYW4gYmUgcmVzZXQuXG5cdCAqXG5cdCAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gJ3Vuc2V0JyB0aGUgcmF0aW5nIHZhbHVlIGJ5IGNsaWtpbmcgb24gdGhlIGN1cnJlbnQgcmF0aW5nIHZhbHVlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmVzZXR0YWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgcmVzZXR0YWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIG92ZXJyaWRlIHRoZSB3YXkgZWFjaCBzdGFyIGlzIGRpc3BsYXllZC5cblx0ICovXG5cdEBJbnB1dCgnYXVTdGFyJykgc3RhcjogU2xvdENvbnRlbnQ8U3RhckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFJhdGluZ1N0YXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFN0YXJGcm9tQ29udGVudDogUmF0aW5nU3RhckRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQWxsb3dzIHNldHRpbmcgYSBjdXN0b20gcmF0aW5nIHRhYmluZGV4LlxuXHQgKiBJZiB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLCBgdGFiaW5kZXhgIHdpbGwgc3RpbGwgYmUgc2V0IHRvIGAtMWAuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVUYWJpbmRleCcsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSB0YWJpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWxcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWxsZWQgYnlcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWxsZWRCeScpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBpcyBob3ZlcmluZyBvdmVyIGEgZ2l2ZW4gcmF0aW5nLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSByYXRpbmcgYmVpbmcgaG92ZXJlZCBvdmVyLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIb3ZlcicpIGhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBob3ZlcmluZyBvdmVyIGEgZ2l2ZW4gcmF0aW5nLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSByYXRpbmcgb2YgdGhlIGxhc3QgaXRlbSBiZWluZyBob3ZlcmVkIG92ZXIuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUxlYXZlJykgbGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSByYXRpbmcgaXMgY2hhbmdlZC5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgbmV3bHkgc2VsZWN0ZWQgcmF0aW5nLlxuXHQgKi9cblx0QE91dHB1dCgnYXVSYXRpbmdDaGFuZ2UnKSByYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe3JhdGluZzogdmFsdWV9KTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe2Rpc2FibGVkfSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c3RhcjogdGhpcy5zbG90U3RhckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxuXG5cdHRyYWNrQnlJbmRleChpbmRleDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9XG59XG4iXX0=`;export{t as default};
