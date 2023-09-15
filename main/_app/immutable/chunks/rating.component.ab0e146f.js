const t=`import { SlotDirective, callWidgetFactory, createRating, patchSimpleChanges } from '@agnos-ui/angular-headless';
import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, HostBinding, Input, Output, TemplateRef, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
// eslint-disable-next-line @angular-eslint/directive-selector
export class RatingStarDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingStarDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: RatingStarDirective, isStandalone: true, selector: "ng-template[auRatingStar]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingStarDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auRatingStar]', standalone: true }]
        }] });
export class RatingComponent {
    // TODO angular is failing when adding this host binding in decorator part
    get hostAriaLabelledBy() {
        return this.state$().ariaLabelledBy || null;
    }
    constructor() {
        this._widget = callWidgetFactory(createRating, 'rating');
        this.api = this._widget.api;
        this.state$ = toSignal(this._widget.state$, { requireSync: true });
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
        this._widget.patch({
            onHover: (event) => this.hover.emit(event),
            onLeave: (event) => this.leave.emit(event),
            onRatingChange: (rating) => {
                this.ratingChange.emit(rating);
                this.onChange(rating);
            },
        });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: RatingComponent, isStandalone: true, selector: "au-rating", inputs: { ariaValueTextFn: "ariaValueTextFn", disabled: "disabled", maxRating: "maxRating", rating: "rating", readonly: "readonly", resettable: "resettable", slotStar: "slotStar", tabindex: "tabindex", className: "className", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy" }, outputs: { hover: "hover", leave: "leave", ratingChange: "ratingChange" }, host: { attributes: { "role": "slider", "aria-valuemin": "0" }, listeners: { "blur": "onTouched()", "keydown": "_widget.actions.handleKey($event)", "mouseleave": "_widget.actions.leave()" }, properties: { "tabindex": "state$().tabindex", "attr.aria-valuemax": "state$().maxRating", "attr.aria-valuenow": "state$().visibleRating", "attr.aria-valuetext": "state$().ariaValueText", "attr.aria-disabled": "state$().disabled ? true : null", "attr.aria-readonly": "state$().readonly ? true : null", "attr.aria-label": "state$().ariaLabel || null", "class": "state$().className", "[attr.aria-labelledby]": "this.hostAriaLabelledBy" }, classAttribute: "d-inline-flex au-rating" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }], queries: [{ propertyName: "slotStarFromContent", first: true, predicate: RatingStarDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-template ngFor [ngForOf]="state$().stars" [ngForTrackBy]="trackByIndex" let-index="index">
			<span class="visually-hidden">({{ index < state$().visibleRating ? '*' : ' ' }})</span>
			<span
				class="au-rating-star"
				(mouseenter)="_widget.actions.hover(index + 1)"
				(click)="_widget.actions.click(index + 1)"
				[style.cursor]="state$().isInteractive ? 'pointer' : 'default'"
			>
				<ng-template [auSlot]="state$().slotStar" [auSlotProps]="state$().stars[index]"></ng-template>
			</span>
		</ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'au-rating',
                    standalone: true,
                    imports: [NgForOf, SlotDirective],
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
		<ng-template ngFor [ngForOf]="state$().stars" [ngForTrackBy]="trackByIndex" let-index="index">
			<span class="visually-hidden">({{ index < state$().visibleRating ? '*' : ' ' }})</span>
			<span
				class="au-rating-star"
				(mouseenter)="_widget.actions.hover(index + 1)"
				(click)="_widget.actions.click(index + 1)"
				[style.cursor]="state$().isInteractive ? 'pointer' : 'default'"
			>
				<ng-template [auSlot]="state$().slotStar" [auSlotProps]="state$().stars[index]"></ng-template>
			</span>
		</ng-template>
	\`,
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostAriaLabelledBy: [{
                type: HostBinding,
                args: ['[attr.aria-labelledby]']
            }], ariaValueTextFn: [{
                type: Input
            }], disabled: [{
                type: Input
            }], maxRating: [{
                type: Input
            }], rating: [{
                type: Input
            }], readonly: [{
                type: Input
            }], resettable: [{
                type: Input
            }], slotStar: [{
                type: Input
            }], slotStarFromContent: [{
                type: ContentChild,
                args: [RatingStarDirective, { static: false }]
            }], tabindex: [{
                type: Input
            }], className: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], hover: [{
                type: Output
            }], leave: [{
                type: Output
            }], ratingChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDOUcsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXhDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFcEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBRWpELDhEQUE4RDtBQUU5RCxNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUErQyxDQUFBLENBQUMsQ0FBQztLQUk3RTtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUF5QixFQUFFLE9BQWdCO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs4R0FKVyxtQkFBbUI7a0dBQW5CLG1CQUFtQjs7MkZBQW5CLG1CQUFtQjtrQkFEL0IsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQTZDcEUsTUFBTSxPQUFPLGVBQWU7SUFTM0IsMEVBQTBFO0lBQzFFLElBQTJDLGtCQUFrQjtRQUM1RCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxjQUFjLElBQUksSUFB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O3NCQUFkLE1BQU07Z0JBT0csS0FBSztzQkFBZCxNQUFNO2dCQU9HLFlBQVk7c0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QWRhcHRTbG90Q29udGVudFByb3BzLCBSYXRpbmdTdGF0ZSwgU2xvdENvbnRlbnQsIFN0YXJDb250ZXh0fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1Nsb3REaXJlY3RpdmUsIGNhbGxXaWRnZXRGYWN0b3J5LCBjcmVhdGVSYXRpbmcsIHBhdGNoU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtOZ0Zvck9mfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdEhvc3RCaW5kaW5nLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdGZvcndhcmRSZWYsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RvU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgdHlwZSB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVSYXRpbmdTdGFyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFJhdGluZ1N0YXJEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPFN0YXJDb250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBSYXRpbmdTdGFyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTdGFyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXUtcmF0aW5nJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW05nRm9yT2YsIFNsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiAnZC1pbmxpbmUtZmxleCBhdS1yYXRpbmcnLFxuXHRcdCdbdGFiaW5kZXhdJzogJ3N0YXRlJCgpLnRhYmluZGV4Jyxcblx0XHRyb2xlOiAnc2xpZGVyJyxcblx0XHQnYXJpYS12YWx1ZW1pbic6ICcwJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnc3RhdGUkKCkubWF4UmF0aW5nJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW5vd10nOiAnc3RhdGUkKCkudmlzaWJsZVJhdGluZycsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWV0ZXh0XSc6ICdzdGF0ZSQoKS5hcmlhVmFsdWVUZXh0Jyxcblx0XHQnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnc3RhdGUkKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCcsXG5cdFx0J1thdHRyLmFyaWEtcmVhZG9ubHldJzogJ3N0YXRlJCgpLnJlYWRvbmx5ID8gdHJ1ZSA6IG51bGwnLFxuXHRcdCdbYXR0ci5hcmlhLWxhYmVsXSc6ICdzdGF0ZSQoKS5hcmlhTGFiZWwgfHwgbnVsbCcsXG5cdFx0JyhibHVyKSc6ICdvblRvdWNoZWQoKScsXG5cdFx0JyhrZXlkb3duKSc6ICdfd2lkZ2V0LmFjdGlvbnMuaGFuZGxlS2V5KCRldmVudCknLFxuXHRcdCcobW91c2VsZWF2ZSknOiAnX3dpZGdldC5hY3Rpb25zLmxlYXZlKCknLFxuXHRcdCdbY2xhc3NdJzogJ3N0YXRlJCgpLmNsYXNzTmFtZScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cInN0YXRlJCgpLnN0YXJzXCIgW25nRm9yVHJhY2tCeV09XCJ0cmFja0J5SW5kZXhcIiBsZXQtaW5kZXg9XCJpbmRleFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj4oe3sgaW5kZXggPCBzdGF0ZSQoKS52aXNpYmxlUmF0aW5nID8gJyonIDogJyAnIH19KTwvc3Bhbj5cblx0XHRcdDxzcGFuXG5cdFx0XHRcdGNsYXNzPVwiYXUtcmF0aW5nLXN0YXJcIlxuXHRcdFx0XHQobW91c2VlbnRlcik9XCJfd2lkZ2V0LmFjdGlvbnMuaG92ZXIoaW5kZXggKyAxKVwiXG5cdFx0XHRcdChjbGljayk9XCJfd2lkZ2V0LmFjdGlvbnMuY2xpY2soaW5kZXggKyAxKVwiXG5cdFx0XHRcdFtzdHlsZS5jdXJzb3JdPVwic3RhdGUkKCkuaXNJbnRlcmFjdGl2ZSA/ICdwb2ludGVyJyA6ICdkZWZhdWx0J1wiXG5cdFx0XHQ+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlJCgpLnNsb3RTdGFyXCIgW2F1U2xvdFByb3BzXT1cInN0YXRlJCgpLnN0YXJzW2luZGV4XVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcblx0cHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYXRpbmdDb21wb25lbnQpLCBtdWx0aTogdHJ1ZX1dLFxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KGNyZWF0ZVJhdGluZywgJ3JhdGluZycpO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXG5cdHN0YXRlJDogU2lnbmFsPFJhdGluZ1N0YXRlPiA9IHRvU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQsIHtyZXF1aXJlU3luYzogdHJ1ZX0pO1xuXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cdC8vIFRPRE8gYW5ndWxhciBpcyBmYWlsaW5nIHdoZW4gYWRkaW5nIHRoaXMgaG9zdCBiaW5kaW5nIGluIGRlY29yYXRvciBwYXJ0XG5cdEBIb3N0QmluZGluZygnW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XScpIGdldCBob3N0QXJpYUxhYmVsbGVkQnkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUkKCkuYXJpYUxhYmVsbGVkQnkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtdmFsdWUnIGF0dHJpYnV0ZS5cblx0ICovXG5cdEBJbnB1dCgpIGFyaWFWYWx1ZVRleHRGbjogKChyYXRpbmc6IG51bWJlciwgbWF4UmF0aW5nOiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBpcyBkaXNhYmxlZC5cblx0ICovXG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbWF4aW11bSByYXRpbmcgdGhhdCBjYW4gYmUgZ2l2ZW4uXG5cdCAqL1xuXHRASW5wdXQoKSBtYXhSYXRpbmc6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcmF0aW5nLiBDb3VsZCBiZSBhIGRlY2ltYWwgdmFsdWUgbGlrZSBgMy43NWAuXG5cdCAqL1xuXHRASW5wdXQoKSByYXRpbmc6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgcmF0aW5nIGNhbid0IGJlIGNoYW5nZWQuXG5cdCAqL1xuXHRASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRGVmaW5lIGlmIHRoZSByYXRpbmcgY2FuIGJlIHJlc2V0LlxuXHQgKlxuXHQgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuICd1bnNldCcgdGhlIHJhdGluZyB2YWx1ZSBieSBjbGlraW5nIG9uIHRoZSBjdXJyZW50IHJhdGluZyB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCgpIHJlc2V0dGFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCkgc2xvdFN0YXI6IFNsb3RDb250ZW50PEFkYXB0U2xvdENvbnRlbnRQcm9wczxTdGFyQ29udGV4dD4+O1xuXHRAQ29udGVudENoaWxkKFJhdGluZ1N0YXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFN0YXJGcm9tQ29udGVudDogUmF0aW5nU3RhckRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQWxsb3dzIHNldHRpbmcgYSBjdXN0b20gcmF0aW5nIHRhYmluZGV4LlxuXHQgKiBJZiB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLCBgdGFiaW5kZXhgIHdpbGwgc3RpbGwgYmUgc2V0IHRvIGAtMWAuXG5cdCAqL1xuXHRASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbFxuXHQgKi9cblx0QElucHV0KCkgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBhcmlhIGxhYmVsbGVkIGJ5XG5cdCAqL1xuXHRASW5wdXQoKSBhcmlhTGFiZWxsZWRCeTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgaXMgaG92ZXJpbmcgb3ZlciBhIGdpdmVuIHJhdGluZy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgcmF0aW5nIGJlaW5nIGhvdmVyZWQgb3Zlci5cblx0ICovXG5cdEBPdXRwdXQoKSBob3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgaG92ZXJpbmcgb3ZlciBhIGdpdmVuIHJhdGluZy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgcmF0aW5nIG9mIHRoZSBsYXN0IGl0ZW0gYmVpbmcgaG92ZXJlZCBvdmVyLlxuXHQgKi9cblx0QE91dHB1dCgpIGxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcmF0aW5nIGlzIGNoYW5nZWQuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIG5ld2x5IHNlbGVjdGVkIHJhdGluZy5cblx0ICovXG5cdEBPdXRwdXQoKSByYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0b25Ib3ZlcjogKGV2ZW50KSA9PiB0aGlzLmhvdmVyLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25MZWF2ZTogKGV2ZW50KSA9PiB0aGlzLmxlYXZlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25SYXRpbmdDaGFuZ2U6IChyYXRpbmc6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJhdGluZ0NoYW5nZS5lbWl0KHJhdGluZyk7XG5cdFx0XHRcdHRoaXMub25DaGFuZ2UocmF0aW5nKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe3JhdGluZzogdmFsdWV9KTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe2Rpc2FibGVkfSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdFN0YXI6IHRoaXMuc2xvdFN0YXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHR0cmFja0J5SW5kZXgoaW5kZXg6IG51bWJlcikge1xuXHRcdHJldHVybiBpbmRleDtcblx0fVxufVxuIl19`;export{t as default};
