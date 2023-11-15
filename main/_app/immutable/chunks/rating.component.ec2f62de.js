const t=`import { SlotDirective, callWidgetFactory, createRating, patchSimpleChanges, toAngularSignal } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, HostBinding, Input, Output, TemplateRef, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class RatingStarDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: RatingStarDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: RatingStarDirective, isStandalone: true, selector: "ng-template[auRatingStar]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: RatingStarDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auRatingStar]', standalone: true }]
        }] });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: RatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: RatingComponent, isStandalone: true, selector: "[auRating]", inputs: { ariaValueTextFn: ["auAriaValueTextFn", "ariaValueTextFn"], disabled: ["auDisabled", "disabled"], maxRating: ["auMaxRating", "maxRating"], rating: ["auRating", "rating"], readonly: ["auReadonly", "readonly"], resettable: ["auResettable", "resettable"], slotStar: ["auSlotStar", "slotStar"], tabindex: ["auTabindex", "tabindex"], className: ["auClassName", "className"], ariaLabel: ["auAriaLabel", "ariaLabel"], ariaLabelledBy: ["auAriaLabelledBy", "ariaLabelledBy"] }, outputs: { hover: "auHover", leave: "auLeave", ratingChange: "auRatingChange" }, host: { attributes: { "role": "slider", "aria-valuemin": "0" }, listeners: { "blur": "onTouched()", "keydown": "_widget.actions.handleKey($event)", "mouseleave": "_widget.actions.leave()" }, properties: { "tabindex": "state$().tabindex", "attr.aria-valuemax": "state$().maxRating", "attr.aria-valuenow": "state$().visibleRating", "attr.aria-valuetext": "state$().ariaValueText", "attr.aria-disabled": "state$().disabled ? true : null", "attr.aria-readonly": "state$().readonly ? true : null", "attr.aria-label": "state$().ariaLabel || null", "class": "state$().className", "[attr.aria-labelledby]": "this.hostAriaLabelledBy" }, classAttribute: "d-inline-flex au-rating" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }], queries: [{ propertyName: "slotStarFromContent", first: true, predicate: RatingStarDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
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
	\`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: RatingComponent, decorators: [{
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
        }], propDecorators: { hostAriaLabelledBy: [{
                type: HostBinding,
                args: ['[attr.aria-labelledby]']
            }], ariaValueTextFn: [{
                type: Input,
                args: ['auAriaValueTextFn']
            }], disabled: [{
                type: Input,
                args: ['auDisabled']
            }], maxRating: [{
                type: Input,
                args: ['auMaxRating']
            }], rating: [{
                type: Input,
                args: ['auRating']
            }], readonly: [{
                type: Input,
                args: ['auReadonly']
            }], resettable: [{
                type: Input,
                args: ['auResettable']
            }], slotStar: [{
                type: Input,
                args: ['auSlotStar']
            }], slotStarFromContent: [{
                type: ContentChild,
                args: [RatingStarDirective, { static: false }]
            }], tabindex: [{
                type: Input,
                args: ['auTabindex']
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRS9ILE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHakQsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBK0MsQ0FBQSxDQUFDLENBQUM7S0FJN0U7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBeUIsRUFBRSxPQUFnQjtRQUN4RSxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7OEdBSlcsbUJBQW1CO2tHQUFuQixtQkFBbUI7OzJGQUFuQixtQkFBbUI7a0JBRC9CLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUE2Q3BFLE1BQU0sT0FBTyxlQUFlO0lBckM1QjtRQXNDVSxZQUFPLEdBQUcsaUJBQWlCLENBQUM7WUFDcEMsT0FBTyxFQUFFLFlBQVk7WUFDckIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsTUFBTSxFQUFFO2dCQUNQLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxD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QUFNO3VCQUFDLFNBQVM7Z0JBT0UsS0FBSztzQkFBdkIsTUFBTTt1QkFBQyxTQUFTO2dCQU9TLFlBQVk7c0JBQXJDLE1BQU07dUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0FkYXB0U2xvdENvbnRlbnRQcm9wcywgUmF0aW5nU3RhdGUsIFNsb3RDb250ZW50LCBTdGFyQ29udGV4dH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtTbG90RGlyZWN0aXZlLCBjYWxsV2lkZ2V0RmFjdG9yeSwgY3JlYXRlUmF0aW5nLCBwYXRjaFNpbXBsZUNoYW5nZXMsIHRvQW5ndWxhclNpZ25hbH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdEhvc3RCaW5kaW5nLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdGZvcndhcmRSZWYsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVJhdGluZ1N0YXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUmF0aW5nU3RhckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8U3RhckNvbnRleHQ+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFJhdGluZ1N0YXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFN0YXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVSYXRpbmddJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiAnZC1pbmxpbmUtZmxleCBhdS1yYXRpbmcnLFxuXHRcdCdbdGFiaW5kZXhdJzogJ3N0YXRlJCgpLnRhYmluZGV4Jyxcblx0XHRyb2xlOiAnc2xpZGVyJyxcblx0XHQnYXJpYS12YWx1ZW1pbic6ICcwJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnc3RhdGUkKCkubWF4UmF0aW5nJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW5vd10nOiAnc3RhdGUkKCkudmlzaWJsZVJhdGluZycsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWV0ZXh0XSc6ICdzdGF0ZSQoKS5hcmlhVmFsdWVUZXh0Jyxcblx0XHQnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnc3RhdGUkKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCcsXG5cdFx0J1thdHRyLmFyaWEtcmVhZG9ubHldJzogJ3N0YXRlJCgpLnJlYWRvbmx5ID8gdHJ1ZSA6IG51bGwnLFxuXHRcdCdbYXR0ci5hcmlhLWxhYmVsXSc6ICdzdGF0ZSQoKS5hcmlhTGFiZWwgfHwgbnVsbCcsXG5cdFx0JyhibHVyKSc6ICdvblRvdWNoZWQoKScsXG5cdFx0JyhrZXlkb3duKSc6ICdfd2lkZ2V0LmFjdGlvbnMuaGFuZGxlS2V5KCRldmVudCknLFxuXHRcdCcobW91c2VsZWF2ZSknOiAnX3dpZGdldC5hY3Rpb25zLmxlYXZlKCknLFxuXHRcdCdbY2xhc3NdJzogJ3N0YXRlJCgpLmNsYXNzTmFtZScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGZvciAoaXRlbSBvZiBzdGF0ZSQoKS5zdGFyczsgdHJhY2sgdHJhY2tCeUluZGV4KGluZGV4KTsgbGV0IGluZGV4ID0gJGluZGV4KSB7XG5cdFx0XHQ8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPih7eyBpbmRleCA8IHN0YXRlJCgpLnZpc2libGVSYXRpbmcgPyAnKicgOiAnICcgfX0pPC9zcGFuPlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0Y2xhc3M9XCJhdS1yYXRpbmctc3RhclwiXG5cdFx0XHRcdChtb3VzZWVudGVyKT1cIl93aWRnZXQuYWN0aW9ucy5ob3ZlcihpbmRleCArIDEpXCJcblx0XHRcdFx0KGNsaWNrKT1cIl93aWRnZXQuYWN0aW9ucy5jbGljayhpbmRleCArIDEpXCJcblx0XHRcdFx0W3N0eWxlLmN1cnNvcl09XCJzdGF0ZSQoKS5pc0ludGVyYWN0aXZlID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnXCJcblx0XHRcdD5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUkKCkuc2xvdFN0YXJcIiBbYXVTbG90UHJvcHNdPVwic3RhdGUkKCkuc3RhcnNbaW5kZXhdXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvc3Bhbj5cblx0XHR9XG5cdGAsXG5cdHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmF0aW5nQ29tcG9uZW50KSwgbXVsdGk6IHRydWV9XSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlUmF0aW5nLFxuXHRcdHdpZGdldE5hbWU6ICdyYXRpbmcnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25Ib3ZlcjogKGV2ZW50KSA9PiB0aGlzLmhvdmVyLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25MZWF2ZTogKGV2ZW50KSA9PiB0aGlzLmxlYXZlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25SYXRpbmdDaGFuZ2U6IChyYXRpbmc6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJhdGluZ0NoYW5nZS5lbWl0KHJhdGluZyk7XG5cdFx0XHRcdHRoaXMub25DaGFuZ2UocmF0aW5nKTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cblx0c3RhdGUkOiBTaWduYWw8UmF0aW5nU3RhdGU+ID0gdG9Bbmd1bGFyU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQpO1xuXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cdC8vIFRPRE8gYW5ndWxhciBpcyBmYWlsaW5nIHdoZW4gYWRkaW5nIHRoaXMgaG9zdCBiaW5kaW5nIGluIGRlY29yYXRvciBwYXJ0XG5cdEBIb3N0QmluZGluZygnW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XScpIGdldCBob3N0QXJpYUxhYmVsbGVkQnkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUkKCkuYXJpYUxhYmVsbGVkQnkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtdmFsdWV0ZXh0JyBhdHRyaWJ1dGUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVZhbHVlVGV4dEZuJykgYXJpYVZhbHVlVGV4dEZuOiAoKHJhdGluZzogbnVtYmVyLCBtYXhSYXRpbmc6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgcmF0aW5nIGlzIGRpc2FibGVkLlxuXHQgKi9cblx0QElucHV0KCdhdURpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHJhdGluZyB0aGF0IGNhbiBiZSBnaXZlbi5cblx0ICovXG5cdEBJbnB1dCgnYXVNYXhSYXRpbmcnKSBtYXhSYXRpbmc6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcmF0aW5nLiBDb3VsZCBiZSBhIGRlY2ltYWwgdmFsdWUgbGlrZSBgMy43NWAuXG5cdCAqL1xuXHRASW5wdXQoJ2F1UmF0aW5nJykgcmF0aW5nOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBjYW4ndCBiZSBjaGFuZ2VkLlxuXHQgKi9cblx0QElucHV0KCdhdVJlYWRvbmx5JykgcmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIERlZmluZSBpZiB0aGUgcmF0aW5nIGNhbiBiZSByZXNldC5cblx0ICpcblx0ICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiAndW5zZXQnIHRoZSByYXRpbmcgdmFsdWUgYnkgY2xpa2luZyBvbiB0aGUgY3VycmVudCByYXRpbmcgdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1UmVzZXR0YWJsZScpIHJlc2V0dGFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RTdGFyJykgc2xvdFN0YXI6IFNsb3RDb250ZW50PEFkYXB0U2xvdENvbnRlbnRQcm9wczxTdGFyQ29udGV4dD4+O1xuXHRAQ29udGVudENoaWxkKFJhdGluZ1N0YXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFN0YXJGcm9tQ29udGVudDogUmF0aW5nU3RhckRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQWxsb3dzIHNldHRpbmcgYSBjdXN0b20gcmF0aW5nIHRhYmluZGV4LlxuXHQgKiBJZiB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLCBgdGFiaW5kZXhgIHdpbGwgc3RpbGwgYmUgc2V0IHRvIGAtMWAuXG5cdCAqL1xuXHRASW5wdXQoJ2F1VGFiaW5kZXgnKSB0YWJpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWxcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWxsZWQgYnlcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWxsZWRCeScpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBpcyBob3ZlcmluZyBvdmVyIGEgZ2l2ZW4gcmF0aW5nLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSByYXRpbmcgYmVpbmcgaG92ZXJlZCBvdmVyLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIb3ZlcicpIGhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBob3ZlcmluZyBvdmVyIGEgZ2l2ZW4gcmF0aW5nLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSByYXRpbmcgb2YgdGhlIGxhc3QgaXRlbSBiZWluZyBob3ZlcmVkIG92ZXIuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUxlYXZlJykgbGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSByYXRpbmcgaXMgY2hhbmdlZC5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgbmV3bHkgc2VsZWN0ZWQgcmF0aW5nLlxuXHQgKi9cblx0QE91dHB1dCgnYXVSYXRpbmdDaGFuZ2UnKSByYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe3JhdGluZzogdmFsdWV9KTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe2Rpc2FibGVkfSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdFN0YXI6IHRoaXMuc2xvdFN0YXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHR0cmFja0J5SW5kZXgoaW5kZXg6IG51bWJlcikge1xuXHRcdHJldHVybiBpbmRleDtcblx0fVxufVxuIl19`;export{t as default};
