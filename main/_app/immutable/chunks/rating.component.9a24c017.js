const t=`import { createRating } from '@agnos-ui/core';
import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, HostBinding, Input, Output, TemplateRef, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SlotDirective, callWidgetFactory } from '../slot.directive';
import { patchSimpleChanges } from '../utils';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFeEMsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sVUFBVSxDQUFDOztBQU01Qyw4REFBOEQ7QUFFOUQsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBK0MsQ0FBQSxDQUFDLENBQUM7S0FJN0U7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBeUIsRUFBRSxPQUFnQjtRQUN4RSxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7OEdBSlcsbUJBQW1CO2tHQUFuQixtQkFBbUI7OzJGQUFuQixtQkFBbUI7a0JBRC9CLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUE2Q3BFLE1BQU0sT0FBTyxlQUFlO0lBUzNCLDBFQUEwRTtJQUMx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akIsS0FBSztnQkFLRyxTQUFTO3NCQUFqQixLQUFLO2dCQUtHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBT0ksS0FBSztzQkFBZCxNQUFNO2dCQU9HLEtBQUs7c0JBQWQsTUFBTTtnQkFPRyxZQUFZO3NCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1N0YXJDb250ZXh0LCBXaWRnZXRQcm9wcywgV2lkZ2V0U3RhdGV9IGZyb20gJ0BhZ25vcy11aS9jb3JlJztcbmltcG9ydCB7Y3JlYXRlUmF0aW5nfSBmcm9tICdAYWdub3MtdWkvY29yZSc7XG5pbXBvcnQge05nRm9yT2Z9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25DaGFuZ2VzLCBTaWduYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdEJpbmRpbmcsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcblx0Zm9yd2FyZFJlZixcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dG9TaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB0eXBlIHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHR5cGUge0FkYXB0U2xvdENvbnRlbnRQcm9wcywgQWRhcHRXaWRnZXRTbG90cywgU2xvdENvbnRlbnR9IGZyb20gJy4uL3Nsb3QuZGlyZWN0aXZlJztcbmltcG9ydCB7U2xvdERpcmVjdGl2ZSwgY2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uL3Nsb3QuZGlyZWN0aXZlJztcbmltcG9ydCB7cGF0Y2hTaW1wbGVDaGFuZ2VzfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCB0eXBlIFJhdGluZ1dpZGdldCA9IEFkYXB0V2lkZ2V0U2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUmF0aW5nPj47XG5leHBvcnQgdHlwZSBSYXRpbmdQcm9wcyA9IFdpZGdldFByb3BzPFJhdGluZ1dpZGdldD47XG5leHBvcnQgdHlwZSBSYXRpbmdTdGF0ZSA9IFdpZGdldFN0YXRlPFJhdGluZ1dpZGdldD47XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UmF0aW5nU3Rhcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdTdGFyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTdGFyQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUmF0aW5nU3RhckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU3RhckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1LXJhdGluZycsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtOZ0Zvck9mLCBTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHRjbGFzczogJ2QtaW5saW5lLWZsZXggYXUtcmF0aW5nJyxcblx0XHQnW3RhYmluZGV4XSc6ICdzdGF0ZSQoKS50YWJpbmRleCcsXG5cdFx0cm9sZTogJ3NsaWRlcicsXG5cdFx0J2FyaWEtdmFsdWVtaW4nOiAnMCcsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWVtYXhdJzogJ3N0YXRlJCgpLm1heFJhdGluZycsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3N0YXRlJCgpLnZpc2libGVSYXRpbmcnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVldGV4dF0nOiAnc3RhdGUkKCkuYXJpYVZhbHVlVGV4dCcsXG5cdFx0J1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ3N0YXRlJCgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGwnLFxuXHRcdCdbYXR0ci5hcmlhLXJlYWRvbmx5XSc6ICdzdGF0ZSQoKS5yZWFkb25seSA/IHRydWUgOiBudWxsJyxcblx0XHQnW2F0dHIuYXJpYS1sYWJlbF0nOiAnc3RhdGUkKCkuYXJpYUxhYmVsIHx8IG51bGwnLFxuXHRcdCcoYmx1ciknOiAnb25Ub3VjaGVkKCknLFxuXHRcdCcoa2V5ZG93biknOiAnX3dpZGdldC5hY3Rpb25zLmhhbmRsZUtleSgkZXZlbnQpJyxcblx0XHQnKG1vdXNlbGVhdmUpJzogJ193aWRnZXQuYWN0aW9ucy5sZWF2ZSgpJyxcblx0XHQnW2NsYXNzXSc6ICdzdGF0ZSQoKS5jbGFzc05hbWUnLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJzdGF0ZSQoKS5zdGFyc1wiIFtuZ0ZvclRyYWNrQnldPVwidHJhY2tCeUluZGV4XCIgbGV0LWluZGV4PVwiaW5kZXhcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+KHt7IGluZGV4IDwgc3RhdGUkKCkudmlzaWJsZVJhdGluZyA/ICcqJyA6ICcgJyB9fSk8L3NwYW4+XG5cdFx0XHQ8c3BhblxuXHRcdFx0XHRjbGFzcz1cImF1LXJhdGluZy1zdGFyXCJcblx0XHRcdFx0KG1vdXNlZW50ZXIpPVwiX3dpZGdldC5hY3Rpb25zLmhvdmVyKGluZGV4ICsgMSlcIlxuXHRcdFx0XHQoY2xpY2spPVwiX3dpZGdldC5hY3Rpb25zLmNsaWNrKGluZGV4ICsgMSlcIlxuXHRcdFx0XHRbc3R5bGUuY3Vyc29yXT1cInN0YXRlJCgpLmlzSW50ZXJhY3RpdmUgPyAncG9pbnRlcicgOiAnZGVmYXVsdCdcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSQoKS5zbG90U3RhclwiIFthdVNsb3RQcm9wc109XCJzdGF0ZSQoKS5zdGFyc1tpbmRleF1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG5cdHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmF0aW5nQ29tcG9uZW50KSwgbXVsdGk6IHRydWV9XSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeShjcmVhdGVSYXRpbmcsICdyYXRpbmcnKTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblxuXHRzdGF0ZSQ6IFNpZ25hbDxSYXRpbmdTdGF0ZT4gPSB0b1NpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkLCB7cmVxdWlyZVN5bmM6IHRydWV9KTtcblxuXHRvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXHRvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXHQvLyBUT0RPIGFuZ3VsYXIgaXMgZmFpbGluZyB3aGVuIGFkZGluZyB0aGlzIGhvc3QgYmluZGluZyBpbiBkZWNvcmF0b3IgcGFydFxuXHRASG9zdEJpbmRpbmcoJ1thdHRyLmFyaWEtbGFiZWxsZWRieV0nKSBnZXQgaG9zdEFyaWFMYWJlbGxlZEJ5KCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlJCgpLmFyaWFMYWJlbGxlZEJ5IHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLXZhbHVlJyBhdHRyaWJ1dGUuXG5cdCAqL1xuXHRASW5wdXQoKSBhcmlhVmFsdWVUZXh0Rm46ICgocmF0aW5nOiBudW1iZXIsIG1heFJhdGluZzogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgaXMgZGlzYWJsZWQuXG5cdCAqL1xuXHRASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1heGltdW0gcmF0aW5nIHRoYXQgY2FuIGJlIGdpdmVuLlxuXHQgKi9cblx0QElucHV0KCkgbWF4UmF0aW5nOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHJhdGluZy4gQ291bGQgYmUgYSBkZWNpbWFsIHZhbHVlIGxpa2UgYDMuNzVgLlxuXHQgKi9cblx0QElucHV0KCkgcmF0aW5nOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBjYW4ndCBiZSBjaGFuZ2VkLlxuXHQgKi9cblx0QElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIERlZmluZSBpZiB0aGUgcmF0aW5nIGNhbiBiZSByZXNldC5cblx0ICpcblx0ICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiAndW5zZXQnIHRoZSByYXRpbmcgdmFsdWUgYnkgY2xpa2luZyBvbiB0aGUgY3VycmVudCByYXRpbmcgdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoKSByZXNldHRhYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgpIHNsb3RTdGFyOiBTbG90Q29udGVudDxBZGFwdFNsb3RDb250ZW50UHJvcHM8U3RhckNvbnRleHQ+Pjtcblx0QENvbnRlbnRDaGlsZChSYXRpbmdTdGFyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdGFyRnJvbUNvbnRlbnQ6IFJhdGluZ1N0YXJEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFsbG93cyBzZXR0aW5nIGEgY3VzdG9tIHJhdGluZyB0YWJpbmRleC5cblx0ICogSWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgYHRhYmluZGV4YCB3aWxsIHN0aWxsIGJlIHNldCB0byBgLTFgLlxuXHQgKi9cblx0QElucHV0KCkgdGFiaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2xhc3NuYW1lIHRvIGJlIGFwcGxpZWQgb24gdGhlIHJhdGluZyBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbFxuXHQgKi9cblx0QElucHV0KCkgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBhcmlhIGxhYmVsbGVkIGJ5XG5cdCAqL1xuXHRASW5wdXQoKSBhcmlhTGFiZWxsZWRCeTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgaXMgaG92ZXJpbmcgb3ZlciBhIGdpdmVuIHJhdGluZy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgcmF0aW5nIGJlaW5nIGhvdmVyZWQgb3Zlci5cblx0ICovXG5cdEBPdXRwdXQoKSBob3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgaG92ZXJpbmcgb3ZlciBhIGdpdmVuIHJhdGluZy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgcmF0aW5nIG9mIHRoZSBsYXN0IGl0ZW0gYmVpbmcgaG92ZXJlZCBvdmVyLlxuXHQgKi9cblx0QE91dHB1dCgpIGxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcmF0aW5nIGlzIGNoYW5nZWQuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIG5ld2x5IHNlbGVjdGVkIHJhdGluZy5cblx0ICovXG5cdEBPdXRwdXQoKSByYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0b25Ib3ZlcjogKGV2ZW50KSA9PiB0aGlzLmhvdmVyLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25MZWF2ZTogKGV2ZW50KSA9PiB0aGlzLmxlYXZlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25SYXRpbmdDaGFuZ2U6IChyYXRpbmc6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJhdGluZ0NoYW5nZS5lbWl0KHJhdGluZyk7XG5cdFx0XHRcdHRoaXMub25DaGFuZ2UocmF0aW5nKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe3JhdGluZzogdmFsdWV9KTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe2Rpc2FibGVkfSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdFN0YXI6IHRoaXMuc2xvdFN0YXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHR0cmFja0J5SW5kZXgoaW5kZXg6IG51bWJlcikge1xuXHRcdHJldHVybiBpbmRleDtcblx0fVxufVxuIl19`;export{t as default};
