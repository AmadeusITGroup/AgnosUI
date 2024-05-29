const t=`import { BaseWidgetDirective, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { callWidgetFactory } from '../../config';
import { createRating } from './rating';
import * as i0 from "@angular/core";
const _c0 = ["auRating", ""];
function _forTrack0($index, $item) { return this.trackByIndex($index); }
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
            i0.ɵɵrepeaterCreate(0, RatingComponent_For_1_Template, 4, 9, null, null, _forTrack0, true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sVUFBVSxDQUFDOzs7NENBcUJwQyx5QkFBbUI7Ozs7O0lBQ2xCLCtCQUE4QjtJQUFBLFlBQWlEO0lBQUEsaUJBQU87SUFDdEYsK0JBQTREO0lBQzNELHNGQUE4RTtJQUMvRSxpQkFBTzs7OztJQUh1QixjQUFpRDtJQUFqRCx3RkFBaUQ7SUFDekUsY0FBcUQ7SUFBckQscUlBQXFEO0lBQzdDLGNBQTJCO0lBQUMsQUFBNUIsZ0RBQTJCLG1EQUFxQzs7QUFyQmpGLE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQStDLENBQUEsQ0FBQyxDQUFDO0tBSTdFO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQXlCLEVBQUUsT0FBZ0I7UUFDeEUsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO29GQUpXLG1CQUFtQjtvRUFBbkIsbUJB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QUUsaUJBQWlCLEVBQUM7WUFLcEMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBS0UsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBS08sY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFPTixLQUFLO2tCQUF2QixNQUFNO21CQUFDLFNBQVM7WUFPRSxLQUFLO2tCQUF2QixNQUFNO21CQUFDLFNBQVM7WUFPUyxZQUFZO2tCQUFyQyxNQUFNO21CQUFDLGdCQUFnQjs7a0ZBL0ZaLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QWRhcHRTbG90Q29udGVudFByb3BzLCBTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdGZvcndhcmRSZWYsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7UmF0aW5nV2lkZ2V0LCBTdGFyQ29udGV4dH0gZnJvbSAnLi9yYXRpbmcnO1xuaW1wb3J0IHtjcmVhdGVSYXRpbmd9IGZyb20gJy4vcmF0aW5nJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVJhdGluZ1N0YXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUmF0aW5nU3RhckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8U3RhckNvbnRleHQ+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFJhdGluZ1N0YXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFN0YXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVSYXRpbmddJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdkLWlubGluZS1mbGV4Jyxcblx0XHQnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHRAZm9yIChpdGVtIG9mIHN0YXRlKCkuc3RhcnM7IHRyYWNrIHRyYWNrQnlJbmRleChpbmRleCk7IGxldCBpbmRleCA9ICRpbmRleCkge1xuXHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj4oe3sgaW5kZXggPCBzdGF0ZSgpLnZpc2libGVSYXRpbmcgPyAnKicgOiAnICcgfX0pPC9zcGFuPlxuXHRcdFx0PHNwYW4gW2F1VXNlXT1cIltfd2lkZ2V0LmRpcmVjdGl2ZXMuc3RhckRpcmVjdGl2ZSwge2luZGV4fV1cIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zbG90U3RhclwiIFthdVNsb3RQcm9wc109XCJzdGF0ZSgpLnN0YXJzW2luZGV4XVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0fVxuXHRgLFxuXHRwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhdGluZ0NvbXBvbmVudCksIG11bHRpOiB0cnVlfV0sXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8UmF0aW5nV2lkZ2V0PiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVSYXRpbmcsXG5cdFx0d2lkZ2V0TmFtZTogJ3JhdGluZycsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvbkhvdmVyOiAoZXZlbnQpID0+IHRoaXMuaG92ZXIuZW1pdChldmVudCksXG5cdFx0XHRvbkxlYXZlOiAoZXZlbnQpID0+IHRoaXMubGVhdmUuZW1pdChldmVudCksXG5cdFx0XHRvblJhdGluZ0NoYW5nZTogKHJhdGluZzogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucmF0aW5nQ2hhbmdlLmVtaXQocmF0aW5nKTtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShyYXRpbmcpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGFmdGVySW5pdDogKCkgPT4ge1xuXHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5jb250YWluZXJEaXJlY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtdmFsdWV0ZXh0JyBhdHRyaWJ1dGUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVZhbHVlVGV4dEZuJykgYXJpYVZhbHVlVGV4dEZuOiAoKHJhdGluZzogbnVtYmVyLCBtYXhSYXRpbmc6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgcmF0aW5nIGlzIGRpc2FibGVkLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbWF4aW11bSByYXRpbmcgdGhhdCBjYW4gYmUgZ2l2ZW4uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNYXhSYXRpbmcnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgbWF4UmF0aW5nOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHJhdGluZy4gQ291bGQgYmUgYSBkZWNpbWFsIHZhbHVlIGxpa2UgYDMuNzVgLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmF0aW5nJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHJhdGluZzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgY2FuJ3QgYmUgY2hhbmdlZC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJlYWRvbmx5JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSByZWFkb25seTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRGVmaW5lIGlmIHRoZSByYXRpbmcgY2FuIGJlIHJlc2V0LlxuXHQgKlxuXHQgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuICd1bnNldCcgdGhlIHJhdGluZyB2YWx1ZSBieSBjbGlraW5nIG9uIHRoZSBjdXJyZW50IHJhdGluZyB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJlc2V0dGFibGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHJlc2V0dGFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RTdGFyJykgc2xvdFN0YXI6IFNsb3RDb250ZW50PEFkYXB0U2xvdENvbnRlbnRQcm9wczxTdGFyQ29udGV4dD4+O1xuXHRAQ29udGVudENoaWxkKFJhdGluZ1N0YXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFN0YXJGcm9tQ29udGVudDogUmF0aW5nU3RhckRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQWxsb3dzIHNldHRpbmcgYSBjdXN0b20gcmF0aW5nIHRhYmluZGV4LlxuXHQgKiBJZiB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLCBgdGFiaW5kZXhgIHdpbGwgc3RpbGwgYmUgc2V0IHRvIGAtMWAuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVUYWJpbmRleCcsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSB0YWJpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWxcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWxsZWQgYnlcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWxsZWRCeScpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBpcyBob3ZlcmluZyBvdmVyIGEgZ2l2ZW4gcmF0aW5nLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSByYXRpbmcgYmVpbmcgaG92ZXJlZCBvdmVyLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIb3ZlcicpIGhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBob3ZlcmluZyBvdmVyIGEgZ2l2ZW4gcmF0aW5nLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSByYXRpbmcgb2YgdGhlIGxhc3QgaXRlbSBiZWluZyBob3ZlcmVkIG92ZXIuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUxlYXZlJykgbGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSByYXRpbmcgaXMgY2hhbmdlZC5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgbmV3bHkgc2VsZWN0ZWQgcmF0aW5nLlxuXHQgKi9cblx0QE91dHB1dCgnYXVSYXRpbmdDaGFuZ2UnKSByYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe3JhdGluZzogdmFsdWV9KTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe2Rpc2FibGVkfSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdFN0YXI6IHRoaXMuc2xvdFN0YXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHR0cmFja0J5SW5kZXgoaW5kZXg6IG51bWJlcikge1xuXHRcdHJldHVybiBpbmRleDtcblx0fVxufVxuIl19`;export{t as default};
