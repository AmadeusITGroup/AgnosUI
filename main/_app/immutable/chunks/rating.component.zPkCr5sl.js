const t=`import { BaseWidgetDirective, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { callWidgetFactory } from '../../config';
import { createRating } from './rating';
import * as i0 from "@angular/core";
const _c0 = ["auRating", ""];
function _forTrack0($index, $item) { return this.trackByIndex($index); }
const _c1 = a0 => ({ index: a0 });
function RatingComponent_For_1_ng_template_3_Template(rf, ctx) { }
function RatingComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 1);
    i0.ɵɵtemplate(3, RatingComponent_For_1_ng_template_3_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r1 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", index_r1 < ctx_r1.state().visibleRating ? "*" : " ", ")");
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", ctx_r1._widget.directives.starDirective)("auUseParams", i0.ɵɵpureFunction1(5, _c1, index_r1));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r1.state().slotStar)("auSlotProps", ctx_r1.state().stars[index_r1]);
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
        } }, inputs: { ariaValueTextFn: [i0.ɵɵInputFlags.None, "auAriaValueTextFn", "ariaValueTextFn"], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], maxRating: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMaxRating", "maxRating", auNumberAttribute], rating: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auRating", "rating", auNumberAttribute], readonly: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auReadonly", "readonly", auBooleanAttribute], resettable: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auResettable", "resettable", auBooleanAttribute], slotStar: [i0.ɵɵInputFlags.None, "auSlotStar", "slotStar"], tabindex: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auTabindex", "tabindex", auNumberAttribute], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], ariaLabelledBy: [i0.ɵɵInputFlags.None, "auAriaLabelledBy", "ariaLabelledBy"] }, outputs: { hover: "auHover", leave: "auLeave", ratingChange: "auRatingChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 2, vars: 0, consts: [[1, "visually-hidden"], [3, "auUse", "auUseParams"], [3, "auSlot", "auSlotProps"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, RatingComponent_For_1_Template, 4, 7, null, null, _forTrack0, true);
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
			<span [auUse]="_widget.directives.starDirective" [auUseParams]="{index}">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sVUFBVSxDQUFDOzs7NENBcUJwQyx5QkFBbUI7Ozs7SUFDbEIsK0JBQThCO0lBQUEsWUFBaUQ7SUFBQSxpQkFBTztJQUN0RiwrQkFBeUU7SUFDeEUsc0ZBQThFO0lBQy9FLGlCQUFPOzs7O0lBSHVCLGNBQWlEO0lBQWpELG9GQUFpRDtJQUN6RSxjQUEwQztJQUFDLEFBQTNDLCtEQUEwQyxxREFBd0I7SUFDMUQsY0FBMkI7SUFBQyxBQUE1QixnREFBMkIsK0NBQXFDOztBQXJCakYsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBK0MsQ0FBQSxDQUFDLENBQUM7S0FJN0U7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBeUIsRUFBRSxPQUFnQjtRQUN4RSxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7b0ZBSlcsbUJBQW1CO29FQUFuQixtQkFBbUI7O2lGQUFuQixtQkFBbUI7Y0FEL0IsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLDJCQUEyQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBNEJwRSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxtQkFBaUM7SUFwQnRFOztRQXFCVSxZQUFPLEdBQUcsaUJBQWlCLENBQUM7WUFDcEMsT0FBTyxFQUFFLFlBQVk7WUFDckIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsTUFBTSxFQUFFO2dCQUNQLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDMUMsY0FBYyxFQUFFLENBQUMsTUFBYyxFQUFFLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2FBQ0Q7WUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUNmLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDakUsQ0FBQztTQUNELENBQUMsQ0FBQztRQUVILGFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQzFCLGNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUEwRHJCOzs7O1dBSUc7UUFDZ0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEQ7Ozs7V0FJRztRQUNnQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV0RDs7OztXQUlHO1FBQ3VCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztLQTJCcEU7SUF6QkEsVUFBVSxDQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBdUI7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWE7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQscUJBQXFCO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsV0FBVztTQUMvQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWE7UUFDekIsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO2dPQXpIVyxlQUFlLFNBQWYsZUFBZTtvRUFBZixlQUFlO3dDQXFEYixtQkFBbUI7Ozs7O1lBckRyQixrRkFBQSxlQUFXLElBQUk7eUxBNEJhLGtCQUFrQix1RkFLakIsaUJBQWlCLDhFQUtwQixpQkFBaUIsb0ZBS2Ysa0JBQWtCLDBGQU9oQixrQkFBa0IsZ0pBU3BCLGlCQUFpQixxVkE3RDlDLENBQUMsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUM7WUFQckcsMEZBS0M7O1lBTEQsY0FBQSxXQUFPLE9BS047NEJBYlEsWUFBWSxFQUFFLGFBQWE7O2lGQWlCekIsZUFBZTtjQXBCM0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLFFBQVEsRUFBRSxhQUFhO2lCQUN2QjtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7RUFPVDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQzthQUN0RztnQkF3QjRCLGVBQWU7a0JBQTFDLEtBQUs7bUJBQUMsbUJBQW1CO1lBS21DLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUtFLFNBQVM7a0JBQXJFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQUtELE1BQU07a0JBQS9ELEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQUtLLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU9JLFVBQVU7a0JBQXhFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUV4QyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFDaUMsbUJBQW1CO2tCQUF0RSxZQUFZO21CQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQU1VLFFBQVE7a0JBQW5FLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQUtwQyxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFLRSxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFLTyxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQU9OLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQU9FLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQU9TLFlBQVk7a0JBQXJDLE1BQU07bUJBQUMsZ0JBQWdCOztrRkEvRlosZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtBZGFwdFNsb3RDb250ZW50UHJvcHMsIFNsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcblx0Zm9yd2FyZFJlZixcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtSYXRpbmdXaWRnZXQsIFN0YXJDb250ZXh0fSBmcm9tICcuL3JhdGluZyc7XG5pbXBvcnQge2NyZWF0ZVJhdGluZ30gZnJvbSAnLi9yYXRpbmcnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UmF0aW5nU3Rhcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdTdGFyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTdGFyQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUmF0aW5nU3RhckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU3RhckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVJhdGluZ10nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHRjbGFzczogJ2QtaW5saW5lLWZsZXgnLFxuXHRcdCcoYmx1ciknOiAnb25Ub3VjaGVkKCknLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdEBmb3IgKGl0ZW0gb2Ygc3RhdGUoKS5zdGFyczsgdHJhY2sgdHJhY2tCeUluZGV4KGluZGV4KTsgbGV0IGluZGV4ID0gJGluZGV4KSB7XG5cdFx0XHQ8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPih7eyBpbmRleCA8IHN0YXRlKCkudmlzaWJsZVJhdGluZyA/ICcqJyA6ICcgJyB9fSk8L3NwYW4+XG5cdFx0XHQ8c3BhbiBbYXVVc2VdPVwiX3dpZGdldC5kaXJlY3RpdmVzLnN0YXJEaXJlY3RpdmVcIiBbYXVVc2VQYXJhbXNdPVwie2luZGV4fVwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RTdGFyXCIgW2F1U2xvdFByb3BzXT1cInN0YXRlKCkuc3RhcnNbaW5kZXhdXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvc3Bhbj5cblx0XHR9XG5cdGAsXG5cdHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmF0aW5nQ29tcG9uZW50KSwgbXVsdGk6IHRydWV9XSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxSYXRpbmdXaWRnZXQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVJhdGluZyxcblx0XHR3aWRnZXROYW1lOiAncmF0aW5nJyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uSG92ZXI6IChldmVudCkgPT4gdGhpcy5ob3Zlci5lbWl0KGV2ZW50KSxcblx0XHRcdG9uTGVhdmU6IChldmVudCkgPT4gdGhpcy5sZWF2ZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uUmF0aW5nQ2hhbmdlOiAocmF0aW5nOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yYXRpbmdDaGFuZ2UuZW1pdChyYXRpbmcpO1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKHJhdGluZyk7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmNvbnRhaW5lckRpcmVjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblx0b25Ub3VjaGVkID0gKCkgPT4ge307XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0Rm4nKSBhcmlhVmFsdWVUZXh0Rm46ICgocmF0aW5nOiBudW1iZXIsIG1heFJhdGluZzogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgaXMgZGlzYWJsZWQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHJhdGluZyB0aGF0IGNhbiBiZSBnaXZlbi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1heFJhdGluZycsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBtYXhSYXRpbmc6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcmF0aW5nLiBDb3VsZCBiZSBhIGRlY2ltYWwgdmFsdWUgbGlrZSBgMy43NWAuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSYXRpbmcnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgcmF0aW5nOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBjYW4ndCBiZSBjaGFuZ2VkLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmVhZG9ubHknLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBEZWZpbmUgaWYgdGhlIHJhdGluZyBjYW4gYmUgcmVzZXQuXG5cdCAqXG5cdCAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gJ3Vuc2V0JyB0aGUgcmF0aW5nIHZhbHVlIGJ5IGNsaWtpbmcgb24gdGhlIGN1cnJlbnQgcmF0aW5nIHZhbHVlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmVzZXR0YWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgcmVzZXR0YWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFN0YXInKSBzbG90U3RhcjogU2xvdENvbnRlbnQ8QWRhcHRTbG90Q29udGVudFByb3BzPFN0YXJDb250ZXh0Pj47XG5cdEBDb250ZW50Q2hpbGQoUmF0aW5nU3RhckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RhckZyb21Db250ZW50OiBSYXRpbmdTdGFyRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbGxvd3Mgc2V0dGluZyBhIGN1c3RvbSByYXRpbmcgdGFiaW5kZXguXG5cdCAqIElmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGB0YWJpbmRleGAgd2lsbCBzdGlsbCBiZSBzZXQgdG8gYC0xYC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVRhYmluZGV4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHRhYmluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbGxlZCBieVxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbGxlZEJ5JykgYXJpYUxhYmVsbGVkQnk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGlzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIHJhdGluZyBiZWluZyBob3ZlcmVkIG92ZXIuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhvdmVyJykgaG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIHJhdGluZyBvZiB0aGUgbGFzdCBpdGVtIGJlaW5nIGhvdmVyZWQgb3Zlci5cblx0ICovXG5cdEBPdXRwdXQoJ2F1TGVhdmUnKSBsZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHJhdGluZyBpcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSBuZXdseSBzZWxlY3RlZCByYXRpbmcuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVJhdGluZ0NoYW5nZScpIHJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7cmF0aW5nOiB2YWx1ZX0pO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7ZGlzYWJsZWR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90U3RhcjogdGhpcy5zbG90U3RhckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxuXG5cdHRyYWNrQnlJbmRleChpbmRleDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9XG59XG4iXX0=`;export{t as default};
