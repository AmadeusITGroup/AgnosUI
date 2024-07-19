const t=`import { BaseWidgetDirective, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { callWidgetFactory } from '../../config';
import { createRating } from './rating.gen';
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
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.hover = new EventEmitter();
        /**
         * An event emitted when the user stops hovering over a given rating.
         *
         * Event payload is equal to the rating of the last item being hovered over.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.leave = new EventEmitter();
        /**
         * An event emitted when the rating is changed.
         *
         * Event payload is equal to the newly selected rating.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7O0lBc0J2QywrQkFBOEI7SUFBQSxZQUFpRDtJQUFBLGlCQUFPO0lBQ3RGLCtCQUE0RDtJQUMzRCxzRkFBMEU7SUFDM0UsaUJBQU87Ozs7SUFIdUIsY0FBaUQ7SUFBakQsd0ZBQWlEO0lBQ3pFLGNBQXFEO0lBQXJELHFJQUFxRDtJQUM3QyxjQUF1QjtJQUFDLEFBQXhCLDRDQUF1QixtREFBcUM7O0FBckI3RSxNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF3QixDQUFBLENBQUMsQ0FBQztLQUl0RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUF5QixFQUFFLE9BQWdCO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztvRkFKVyxtQkFBbUI7b0VBQW5CLG1CQUFtQjs7aUZBQW5CLG1C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RUFBRSxpQkFBaUIsRUFBQztZQU9wQyxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFPRSxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFPTyxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQVlOLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQVlFLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQVlTLFlBQVk7a0JBQXJDLE1BQU07bUJBQUMsZ0JBQWdCOztrRkEvSVosZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdGZvcndhcmRSZWYsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7UmF0aW5nV2lkZ2V0LCBTdGFyQ29udGV4dH0gZnJvbSAnLi9yYXRpbmcuZ2VuJztcbmltcG9ydCB7Y3JlYXRlUmF0aW5nfSBmcm9tICcuL3JhdGluZy5nZW4nO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UmF0aW5nU3Rhcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdTdGFyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFN0YXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFJhdGluZ1N0YXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFN0YXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVSYXRpbmddJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdkLWlubGluZS1mbGV4Jyxcblx0XHQnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHRAZm9yIChpdGVtIG9mIHN0YXRlKCkuc3RhcnM7IHRyYWNrIHRyYWNrQnlJbmRleChpbmRleCk7IGxldCBpbmRleCA9ICRpbmRleCkge1xuXHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj4oe3sgaW5kZXggPCBzdGF0ZSgpLnZpc2libGVSYXRpbmcgPyAnKicgOiAnICcgfX0pPC9zcGFuPlxuXHRcdFx0PHNwYW4gW2F1VXNlXT1cIltfd2lkZ2V0LmRpcmVjdGl2ZXMuc3RhckRpcmVjdGl2ZSwge2luZGV4fV1cIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zdGFyXCIgW2F1U2xvdFByb3BzXT1cInN0YXRlKCkuc3RhcnNbaW5kZXhdXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvc3Bhbj5cblx0XHR9XG5cdGAsXG5cdHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmF0aW5nQ29tcG9uZW50KSwgbXVsdGk6IHRydWV9XSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxSYXRpbmdXaWRnZXQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVJhdGluZyxcblx0XHR3aWRnZXROYW1lOiAncmF0aW5nJyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uSG92ZXI6IChldmVudCkgPT4gdGhpcy5ob3Zlci5lbWl0KGV2ZW50KSxcblx0XHRcdG9uTGVhdmU6IChldmVudCkgPT4gdGhpcy5sZWF2ZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uUmF0aW5nQ2hhbmdlOiAocmF0aW5nOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yYXRpbmdDaGFuZ2UuZW1pdChyYXRpbmcpO1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKHJhdGluZyk7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmNvbnRhaW5lckRpcmVjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblx0b25Ub3VjaGVkID0gKCkgPT4ge307XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICogQHBhcmFtIHJhdGluZyAtIEN1cnJlbnQgcmF0aW5nIHZhbHVlLlxuXHQgKiBAcGFyYW0gbWF4UmF0aW5nIC0gbWF4UmF0aW5nIHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqIChyYXRpbmc6IG51bWJlciwgbWF4UmF0aW5nOiBudW1iZXIpID0+IGAke3JhdGluZ30gb3V0IG9mICR7bWF4UmF0aW5nfWBcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVZhbHVlVGV4dEZuJykgYXJpYVZhbHVlVGV4dEZuOiAoKHJhdGluZzogbnVtYmVyLCBtYXhSYXRpbmc6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgcmF0aW5nIGlzIGRpc2FibGVkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1heGltdW0gcmF0aW5nIHRoYXQgY2FuIGJlIGdpdmVuLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAxMGBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1heFJhdGluZycsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBtYXhSYXRpbmc6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcmF0aW5nLiBDb3VsZCBiZSBhIGRlY2ltYWwgdmFsdWUgbGlrZSBgMy43NWAuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDBgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSYXRpbmcnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgcmF0aW5nOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBjYW4ndCBiZSBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJlYWRvbmx5JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSByZWFkb25seTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRGVmaW5lIGlmIHRoZSByYXRpbmcgY2FuIGJlIHJlc2V0LlxuXHQgKlxuXHQgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuICd1bnNldCcgdGhlIHJhdGluZyB2YWx1ZSBieSBjbGlraW5nIG9uIHRoZSBjdXJyZW50IHJhdGluZyB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJlc2V0dGFibGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHJlc2V0dGFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byBvdmVycmlkZSB0aGUgd2F5IGVhY2ggc3RhciBpcyBkaXNwbGF5ZWQuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKHtmaWxsfTogU3RhckNvbnRleHQpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoZmlsbCA9PT0gMTAwID8gOTczMyA6IDk3MzQpXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdVN0YXInKSBzdGFyOiBTbG90Q29udGVudDxTdGFyQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUmF0aW5nU3RhckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RhckZyb21Db250ZW50OiBSYXRpbmdTdGFyRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbGxvd3Mgc2V0dGluZyBhIGN1c3RvbSByYXRpbmcgdGFiaW5kZXguXG5cdCAqIElmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGB0YWJpbmRleGAgd2lsbCBzdGlsbCBiZSBzZXQgdG8gYC0xYC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMGBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVRhYmluZGV4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHRhYmluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ1JhdGluZydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBhcmlhIGxhYmVsbGVkIGJ5XG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbGxlZEJ5JykgYXJpYUxhYmVsbGVkQnk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGlzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIHJhdGluZyBiZWluZyBob3ZlcmVkIG92ZXIuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhvdmVyJykgaG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIHJhdGluZyBvZiB0aGUgbGFzdCBpdGVtIGJlaW5nIGhvdmVyZWQgb3Zlci5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1TGVhdmUnKSBsZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHJhdGluZyBpcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSBuZXdseSBzZWxlY3RlZCByYXRpbmcuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVJhdGluZ0NoYW5nZScpIHJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7cmF0aW5nOiB2YWx1ZX0pO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7ZGlzYWJsZWR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzdGFyOiB0aGlzLnNsb3RTdGFyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG5cblx0dHJhY2tCeUluZGV4KGluZGV4OiBudW1iZXIpIHtcblx0XHRyZXR1cm4gaW5kZXg7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
