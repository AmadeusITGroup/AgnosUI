const t=`import { ComponentTemplate, SlotDirective, UseDirective, callWidgetFactory, createAccordion, patchSimpleChanges, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, effect, inject, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import * as i0 from "@angular/core";
import * as i1 from "@agnos-ui/angular-headless";
export class AccordionBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.6", type: AccordionBodyDirective, isStandalone: true, selector: "ng-template[auAccordionItemBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionBodyDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAccordionItemBody]', standalone: true }]
        }] });
export class AccordionHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.6", type: AccordionHeaderDirective, isStandalone: true, selector: "ng-template[auAccordionItemHeader]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionHeaderDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAccordionItemHeader]', standalone: true }]
        }] });
export class AccordionItemStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionItemStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.6", type: AccordionItemStructureDirective, isStandalone: true, selector: "ng-template[auAccordionItemStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionItemStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAccordionItemStructure]', standalone: true }]
        }] });
export class AccordionItemDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionItemDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: AccordionItemDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \`
		<ng-template #structure let-state="state" let-widget="widget">
			<h2 class="accordion-header {{ state.itemHeaderClass }}">
				<button
					type="button"
					id="{{ state.itemId }}-toggle"
					(click)="widget.actions.click()"
					[class.collapsed]="!state.itemVisible"
					class="accordion-button {{ state.itemButtonClass }}"
					[disabled]="state.itemDisabled"
					attr.aria-controls="{{ state.itemId }}-collapse"
					[attr.aria-disabled]="state.itemDisabled"
					[attr.aria-expanded]="state.itemVisible"
				>
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemHeader"></ng-template>
				</button>
			</h2>
			<div
				*ngIf="state.shouldBeInDOM"
				[auUse]="widget.directives.collapseDirective"
				attr.aria-labelledby="{{ state.itemId }}-toggle"
				id="{{ state.itemId }}-collapse"
				class="accordion-collapse {{ state.itemCollapseClass }}"
			>
				<div class="accordion-body {{ state.itemBodyClass }}">
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemBody"></ng-template>
				</div>
			</div>
		</ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionItemDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [UseDirective, SlotDirective, NgIf, AccordionHeaderDirective, AccordionBodyDirective],
                    template: \`
		<ng-template #structure let-state="state" let-widget="widget">
			<h2 class="accordion-header {{ state.itemHeaderClass }}">
				<button
					type="button"
					id="{{ state.itemId }}-toggle"
					(click)="widget.actions.click()"
					[class.collapsed]="!state.itemVisible"
					class="accordion-button {{ state.itemButtonClass }}"
					[disabled]="state.itemDisabled"
					attr.aria-controls="{{ state.itemId }}-collapse"
					[attr.aria-disabled]="state.itemDisabled"
					[attr.aria-expanded]="state.itemVisible"
				>
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemHeader"></ng-template>
				</button>
			</h2>
			<div
				*ngIf="state.shouldBeInDOM"
				[auUse]="widget.directives.collapseDirective"
				attr.aria-labelledby="{{ state.itemId }}-toggle"
				id="{{ state.itemId }}-collapse"
				class="accordion-collapse {{ state.itemCollapseClass }}"
			>
				<div class="accordion-body {{ state.itemBodyClass }}">
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemBody"></ng-template>
				</div>
			</div>
		</ng-template>
	\`,
                }]
        }], propDecorators: { structure: [{
                type: ViewChild,
                args: ['structure', { static: true }]
            }] } });
export const accordionItemDefaultSlotItemStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotItemStructure: accordionItemDefaultSlotItemStructure,
};
export class AccordionItemComponent {
    constructor() {
        /**
         * An event fired when an item is shown.
         */
        this.itemShown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         */
        this.itemHidden = new EventEmitter();
        /**
         * An event fired when the \`visible\` value changes.
         *
         * Event payload is the new value of visible.
         */
        this.itemVisibleChange = new EventEmitter();
        this.defaultSlots = writable(defaultConfig);
        this.ad = inject(AccordionDirective);
        this._widget = callWidgetFactory(this.ad.api.registerItem, null, defaultConfig);
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.useDirective = inject(UseDirective);
        // TODO: remove "as any" when https://github.com/angular/angular/pull/50162 is merged
        this.state = toSignal(this._widget.state$, { requireSync: true });
        this._widget.patch({
            onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
            onItemHidden: () => this.itemHidden.emit(),
            onItemShown: () => this.itemShown.emit(),
        });
        effect(() => {
            // TODO: workaround to be removed when https://github.com/angular/angular/issues/50320 is fixed
            this.state();
        });
        this.useDirective.use = this._widget.directives.accordionItemDirective;
        this.useDirective.ngOnChanges({
            useDirective: {
                previousValue: undefined,
                currentValue: this.useDirective.use,
                firstChange: true,
                isFirstChange: () => true,
            },
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotItemStructure: this.slotItemStructureFromContent?.templateRef,
            slotItemHeader: this.slotItemHeaderFromContent?.templateRef,
            slotItemBody: this.slotItemBodyFromContent?.templateRef,
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    ngAfterViewInit() {
        queueMicrotask(() => this.api.initDone());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: AccordionItemComponent, isStandalone: true, selector: "[auAccordionItem]", inputs: { slotItemHeader: ["auSlotItemHeader", "slotItemHeader"], slotItemBody: ["auSlotItemBody", "slotItemBody"], slotItemStructure: ["auSlotItemStructure", "slotItemStructure"], itemId: ["auItemId", "itemId"], itemTransition: ["auItemTransition", "itemTransition"], itemClass: ["auItemClass", "itemClass"], itemDestroyOnHide: ["auItemDestroyOnHide", "itemDestroyOnHide"], itemDisabled: ["auItemDisabled", "itemDisabled"], itemVisible: ["auItemVisible", "itemVisible"], itemAnimation: ["auItemAnimation", "itemAnimation"], itemHeaderClass: ["auItemHeaderClass", "itemHeaderClass"], itemButtonClass: ["auItemButtonClass", "itemButtonClass"], itemCollapseClass: ["auItemCollapseClass", "itemCollapseClass"], itemBodyClass: ["auItemBodyClass", "itemBodyClass"] }, outputs: { itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, host: { properties: { "class": "\\"accordion-item \\" + state().itemClass", "id": "state().itemId" } }, queries: [{ propertyName: "slotItemHeaderFromContent", first: true, predicate: AccordionHeaderDirective, descendants: true }, { propertyName: "slotItemBodyFromContent", first: true, predicate: AccordionBodyDirective, descendants: true }, { propertyName: "slotItemStructureFromContent", first: true, predicate: AccordionItemStructureDirective, descendants: true }], exportAs: ["auAccordionItem"], usesOnChanges: true, hostDirectives: [{ directive: i1.UseDirective }], ngImport: i0, template: \` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> \`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[auAccordionItem]',
                    exportAs: 'auAccordionItem',
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class]': '"accordion-item " + state().itemClass',
                        '[id]': 'state().itemId',
                    },
                    hostDirectives: [
                        {
                            directive: UseDirective,
                        },
                    ],
                    imports: [SlotDirective, UseDirective],
                    template: \` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> \`,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { slotItemHeader: [{
                type: Input,
                args: ['auSlotItemHeader']
            }], slotItemHeaderFromContent: [{
                type: ContentChild,
                args: [AccordionHeaderDirective, { static: false }]
            }], slotItemBody: [{
                type: Input,
                args: ['auSlotItemBody']
            }], slotItemBodyFromContent: [{
                type: ContentChild,
                args: [AccordionBodyDirective, { static: false }]
            }], slotItemStructure: [{
                type: Input,
                args: ['auSlotItemStructure']
            }], slotItemStructureFromContent: [{
                type: ContentChild,
                args: [AccordionItemStructureDirective, { static: false }]
            }], itemId: [{
                type: Input,
                args: ['auItemId']
            }], itemTransition: [{
                type: Input,
                args: ['auItemTransition']
            }], itemClass: [{
                type: Input,
                args: ['auItemClass']
            }], itemDestroyOnHide: [{
                type: Input,
                args: ['auItemDestroyOnHide']
            }], itemDisabled: [{
                type: Input,
                args: ['auItemDisabled']
            }], itemVisible: [{
                type: Input,
                args: ['auItemVisible']
            }], itemAnimation: [{
                type: Input,
                args: ['auItemAnimation']
            }], itemHeaderClass: [{
                type: Input,
                args: ['auItemHeaderClass']
            }], itemButtonClass: [{
                type: Input,
                args: ['auItemButtonClass']
            }], itemCollapseClass: [{
                type: Input,
                args: ['auItemCollapseClass']
            }], itemBodyClass: [{
                type: Input,
                args: ['auItemBodyClass']
            }], itemShown: [{
                type: Output,
                args: ['auItemShown']
            }], itemHidden: [{
                type: Output,
                args: ['auItemHidden']
            }], itemVisibleChange: [{
                type: Output,
                args: ['auItemVisibleChange']
            }] } });
export class AccordionDirective {
    constructor() {
        this.useDirective = inject(UseDirective);
        /**
         * An event fired when an item is shown.
         *
         * Event payload is the id of the item.
         */
        this.shown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         *
         * Event payload is the id of the item.
         */
        this.hidden = new EventEmitter();
        //should not be documented
        /**
         * An event fired when an item is shown.
         *
         * It is a prop of the accordion-item.
         */
        this.itemShown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         *
         * It is a prop of the accordion-item.
         */
        this.itemHidden = new EventEmitter();
        /**
         * An event fired when the \`visible\` value changes.
         *
         * Event payload is the new value of visible.
         *
         * It is a prop of the accordion-item.
         */
        this.itemVisibleChange = new EventEmitter();
        this._widget = callWidgetFactory(createAccordion, 'accordion', {});
        this.api = this._widget.api;
        // TODO: remove "as any" when https://github.com/angular/angular/pull/50162 is merged
        this.state$ = toSignal(this._widget.state$, { requireSync: true });
        this.useDirective.use = this._widget.directives.accordionDirective;
        this.useDirective.ngOnChanges({
            useDirective: {
                previousValue: undefined,
                currentValue: this.useDirective.use,
                firstChange: true,
                isFirstChange: () => true,
            },
        });
        this._widget.patch({
            onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
            onItemHidden: () => this.itemHidden.emit(),
            onItemShown: () => this.itemShown.emit(),
            onShown: (id) => this.shown.emit(id),
            onHidden: (id) => this.hidden.emit(id),
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.6", type: AccordionDirective, isStandalone: true, selector: "[auAccordion]", inputs: { closeOthers: ["auCloseOthers", "closeOthers"], className: ["auClassName", "className"], itemId: ["auItemId", "itemId"], itemDestroyOnHide: ["auItemDestroyOnHide", "itemDestroyOnHide"], itemDisabled: ["auItemDisabled", "itemDisabled"], itemVisible: ["auItemVisible", "itemVisible"], itemAnimation: ["auItemAnimation", "itemAnimation"], itemTransition: ["auItemTransition", "itemTransition"], slotItemStructure: ["auSlotItemStructure", "slotItemStructure"], slotItemBody: ["auSlotItemBody", "slotItemBody"], slotItemHeader: ["auSlotItemHeader", "slotItemHeader"], itemClass: ["auItemClass", "itemClass"], itemHeaderClass: ["auItemHeaderClass", "itemHeaderClass"], itemButtonClass: ["auItemButtonClass", "itemButtonClass"], itemCollapseClass: ["auItemCollapseClass", "itemCollapseClass"], itemBodyClass: ["auItemBodyClass", "itemBodyClass"] }, outputs: { shown: "auShown", hidden: "auHidden", itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, host: { properties: { "class": "\\"accordion \\" + state$().className" } }, exportAs: ["auAccordion"], usesOnChanges: true, hostDirectives: [{ directive: i1.UseDirective }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AccordionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[auAccordion]',
                    exportAs: 'auAccordion',
                    standalone: true,
                    host: {
                        '[class]': '"accordion " + state$().className',
                    },
                    hostDirectives: [
                        {
                            directive: UseDirective,
                        },
                    ],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { closeOthers: [{
                type: Input,
                args: ['auCloseOthers']
            }], className: [{
                type: Input,
                args: ['auClassName']
            }], shown: [{
                type: Output,
                args: ['auShown']
            }], hidden: [{
                type: Output,
                args: ['auHidden']
            }], itemId: [{
                type: Input,
                args: ['auItemId']
            }], itemDestroyOnHide: [{
                type: Input,
                args: ['auItemDestroyOnHide']
            }], itemDisabled: [{
                type: Input,
                args: ['auItemDisabled']
            }], itemVisible: [{
                type: Input,
                args: ['auItemVisible']
            }], itemAnimation: [{
                type: Input,
                args: ['auItemAnimation']
            }], itemTransition: [{
                type: Input,
                args: ['auItemTransition']
            }], slotItemStructure: [{
                type: Input,
                args: ['auSlotItemStructure']
            }], slotItemBody: [{
                type: Input,
                args: ['auSlotItemBody']
            }], slotItemHeader: [{
                type: Input,
                args: ['auSlotItemHeader']
            }], itemClass: [{
                type: Input,
                args: ['auItemClass']
            }], itemHeaderClass: [{
                type: Input,
                args: ['auItemHeaderClass']
            }], itemButtonClass: [{
                type: Input,
                args: ['auItemButtonClass']
            }], itemCollapseClass: [{
                type: Input,
                args: ['auItemCollapseClass']
            }], itemBodyClass: [{
                type: Input,
                args: ['auItemBodyClass']
            }], itemShown: [{
                type: Output,
                args: ['auItemShown']
            }], itemHidden: [{
                type: Output,
                args: ['auItemHidden']
            }], itemVisibleChange: [{
                type: Output,
                args: ['auItemVisibleChange']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLFlBQVksRUFDWixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXJDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBR3BELE1BQU0sT0FBTyxzQkFBc0I7SUFEbkM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQXdELENBQUEsQ0FBQyxDQUFDO0tBSXRGO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQTJCLEVBQUUsT0FBZ0I7UUFDMUUsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzhHQUpXLHNCQUFzQjtrR0FBdEIsc0JBQXNCOzsyRkFBdEIsc0JBQXNCO2tCQURsQyxTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLGtDQUFrQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBUzNFLE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQXdELENBQUEsQ0FBQyxDQUFDO0tB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Q0FBbUM7cUJBQzlDO29CQUNELGNBQWMsRUFBRTt3QkFDZjs0QkFDQyxTQUFTLEVBQUUsWUFBWTt5QkFDdkI7cUJBQ0Q7aUJBQ0Q7MEVBT3dCLFdBQVc7c0JBQWxDLEtBQUs7dUJBQUMsZUFBZTtnQkFLQSxTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWE7Z0JBT0QsS0FBSztzQkFBdkIsTUFBTTt1QkFBQyxTQUFTO2dCQU1HLE1BQU07c0JBQXpCLE1BQU07dUJBQUMsVUFBVTtnQkFPQyxNQUFNO3NCQUF4QixLQUFLO3VCQUFDLFVBQVU7Z0JBTWEsaUJBQWlCO3NCQUE5QyxLQUFLO3VCQUFDLHFCQUFxQjtnQkFPSCxZQUFZO3NCQUFwQyxLQUFLO3VCQUFDLGdCQUFnQjtnQkFPQyxXQUFXO3NCQUFsQyxLQUFLO3VCQUFDLGVBQWU7Z0JBTUksYUFBYTtzQkFBdEMsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBTUcsY0FBYztzQkFBeEMsS0FBSzt1QkFBQyxrQkFBa0I7Z0JBQ0ssaUJBQWlCO3NCQUE5QyxLQUFLO3VCQUFDLHFCQUFxQjtnQkFDSCxZQUFZO3NCQUFwQyxLQUFLO3VCQUFDLGdCQUFnQjtnQkFDSSxjQUFjO3NCQUF4QyxLQUFLO3VCQUFDLGtCQUFrQjtnQkFNSCxTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWE7Z0JBTVEsZUFBZTtzQkFBMUMsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBTUUsZUFBZTtzQkFBMUMsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBTUksaUJBQWlCO3NCQUE5QyxLQUFLO3VCQUFDLHFCQUFxQjtnQkFNRixhQUFhO3NCQUF0QyxLQUFLO3VCQUFDLGlCQUFpQjtnQkFRRCxTQUFTO3NCQUEvQixNQUFNO3VCQUFDLGFBQWE7Z0JBTUcsVUFBVTtzQkFBakMsTUFBTTt1QkFBQyxjQUFjO2dCQVFTLGlCQUFpQjtzQkFBL0MsTUFBTTt1QkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG5cdEFjY29yZGlvbkl0ZW1Db250ZXh0LFxuXHRBY2NvcmRpb25JdGVtUHJvcHMsXG5cdEFjY29yZGlvbkl0ZW1TdGF0ZSxcblx0QWNjb3JkaW9uU3RhdGUsXG5cdEFkYXB0U2xvdENvbnRlbnRQcm9wcyxcblx0U2xvdENvbnRlbnQsXG5cdFRyYW5zaXRpb25Gbixcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZUFjY29yZGlvbixcblx0cGF0Y2hTaW1wbGVDaGFuZ2VzLFxuXHR0b1Nsb3RDb250ZXh0V2lkZ2V0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge3dyaXRhYmxlfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQge05nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBTaWduYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0ZWZmZWN0LFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0b1NpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWNjb3JkaW9uSXRlbUJvZHldJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQm9keURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8QWNjb3JkaW9uSXRlbUNvbnRleHQ+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWNjb3JkaW9uQm9keURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWNjb3JkaW9uSXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtSGVhZGVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8QWNjb3JkaW9uSXRlbUNvbnRleHQ+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8QWNjb3JkaW9uSXRlbUNvbnRleHQ+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWNjb3JkaW9uSXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZSwgTmdJZiwgQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLCBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdDxoMiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXIge3sgc3RhdGUuaXRlbUhlYWRlckNsYXNzIH19XCI+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRpZD1cInt7IHN0YXRlLml0ZW1JZCB9fS10b2dnbGVcIlxuXHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5jbGljaygpXCJcblx0XHRcdFx0XHRbY2xhc3MuY29sbGFwc2VkXT1cIiFzdGF0ZS5pdGVtVmlzaWJsZVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJhY2NvcmRpb24tYnV0dG9uIHt7IHN0YXRlLml0ZW1CdXR0b25DbGFzcyB9fVwiXG5cdFx0XHRcdFx0W2Rpc2FibGVkXT1cInN0YXRlLml0ZW1EaXNhYmxlZFwiXG5cdFx0XHRcdFx0YXR0ci5hcmlhLWNvbnRyb2xzPVwie3sgc3RhdGUuaXRlbUlkIH19LWNvbGxhcHNlXCJcblx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLml0ZW1EaXNhYmxlZFwiXG5cdFx0XHRcdFx0W2F0dHIuYXJpYS1leHBhbmRlZF09XCJzdGF0ZS5pdGVtVmlzaWJsZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUuc2xvdEl0ZW1IZWFkZXJcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvaDI+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdCpuZ0lmPVwic3RhdGUuc2hvdWxkQmVJbkRPTVwiXG5cdFx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jb2xsYXBzZURpcmVjdGl2ZVwiXG5cdFx0XHRcdGF0dHIuYXJpYS1sYWJlbGxlZGJ5PVwie3sgc3RhdGUuaXRlbUlkIH19LXRvZ2dsZVwiXG5cdFx0XHRcdGlkPVwie3sgc3RhdGUuaXRlbUlkIH19LWNvbGxhcHNlXCJcblx0XHRcdFx0Y2xhc3M9XCJhY2NvcmRpb24tY29sbGFwc2Uge3sgc3RhdGUuaXRlbUNvbGxhcHNlQ2xhc3MgfX1cIlxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWJvZHkge3sgc3RhdGUuaXRlbUJvZHlDbGFzcyB9fVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCIgW2F1U2xvdF09XCJzdGF0ZS5zbG90SXRlbUJvZHlcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxBY2NvcmRpb25JdGVtQ29udGV4dD47XG59XG5leHBvcnQgY29uc3QgYWNjb3JkaW9uSXRlbURlZmF1bHRTbG90SXRlbVN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShBY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IFBhcnRpYWw8QWNjb3JkaW9uSXRlbVByb3BzPiA9IHtcblx0c2xvdEl0ZW1TdHJ1Y3R1cmU6IGFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdEl0ZW1TdHJ1Y3R1cmUsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVBY2NvcmRpb25JdGVtXScsXG5cdGV4cG9ydEFzOiAnYXVBY2NvcmRpb25JdGVtJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImFjY29yZGlvbi1pdGVtIFwiICsgc3RhdGUoKS5pdGVtQ2xhc3MnLFxuXHRcdCdbaWRdJzogJ3N0YXRlKCkuaXRlbUlkJyxcblx0fSxcblx0aG9zdERpcmVjdGl2ZXM6IFtcblx0XHR7XG5cdFx0XHRkaXJlY3RpdmU6IFVzZURpcmVjdGl2ZSxcblx0XHR9LFxuXHRdLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIiBbYXVTbG90XT1cInN0YXRlKCkuc2xvdEl0ZW1TdHJ1Y3R1cmVcIj48L25nLXRlbXBsYXRlPiBgLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlclZpZXdJbml0IHtcblx0QElucHV0KCdhdVNsb3RJdGVtSGVhZGVyJykgc2xvdEl0ZW1IZWFkZXI6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEl0ZW1IZWFkZXJGcm9tQ29udGVudDogQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlIHwgbnVsbDtcblx0QElucHV0KCdhdVNsb3RJdGVtQm9keScpIHNsb3RJdGVtQm9keTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEl0ZW1Cb2R5RnJvbUNvbnRlbnQ6IEFjY29yZGlvbkJvZHlEaXJlY3RpdmUgfCBudWxsO1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1TdHJ1Y3R1cmUnKSBzbG90SXRlbVN0cnVjdHVyZTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEl0ZW1TdHJ1Y3R1cmVGcm9tQ29udGVudDogQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSB8IG51bGw7XG5cblx0LyoqXG5cdCAqIFRoZSBpZCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uIEl0IGNhbiBiZSB1c2VkIGZvciBjb250cm9sbGluZyB0aGUgYWNjb3JkaW9uLWl0ZW0gdmlhIHRoZSBhY2NvcmRpb24gYXBpLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1JZCcpIGl0ZW1JZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2Ugd2hlbiBpcyB0b2dnbGVkLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1UcmFuc2l0aW9uJykgaXRlbVRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQ2xhc3MnKSBpdGVtQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGNvbnRlbnQgb2YgdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00uIEl0IHdpbGwgYmUganVzdCBoaWRkZW4gb3RoZXJ3aXNlLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1EZXN0cm95T25IaWRlJykgaXRlbURlc3Ryb3lPbkhpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKiBJdCB3aWxsIG5vdCByZWFjdCB0byB1c2VyJ3MgY2xpY2tzLCBidXQgc3RpbGwgd2lsbCBiZSBwb3NzaWJsZSB0byB0b2dnbGUgcHJvZ3JhbW1hdGljYWxseS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtRGlzYWJsZWQnKSBpdGVtRGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgdmlzaWJsZSAoZXhwYW5kZWQpLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgaGlkZGVuIChjb2xsYXBzZWQpLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1WaXNpYmxlJykgaXRlbVZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUFuaW1hdGlvbicpIGl0ZW1BbmltYXRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaGVhZGVyIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1IZWFkZXJDbGFzcycpIGl0ZW1IZWFkZXJDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1CdXR0b25DbGFzcycpIGl0ZW1CdXR0b25DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Db2xsYXBzZUNsYXNzJykgaXRlbUNvbGxhcHNlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Cb2R5Q2xhc3MnKSBpdGVtQm9keUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2hvd24uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1TaG93bicpIGl0ZW1TaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBoaWRkZW4uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1IaWRkZW4nKSBpdGVtSGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgYHZpc2libGVgIHZhbHVlIGNoYW5nZXMuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIG5ldyB2YWx1ZSBvZiB2aXNpYmxlLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtVmlzaWJsZUNoYW5nZScpIGl0ZW1WaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdGRlZmF1bHRTbG90cyA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXHRyZWFkb25seSBhZCA9IGluamVjdChBY2NvcmRpb25EaXJlY3RpdmUpO1xuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3RvcnkodGhpcy5hZC5hcGkucmVnaXN0ZXJJdGVtLCBudWxsLCBkZWZhdWx0Q29uZmlnKTtcblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXHR1c2VEaXJlY3RpdmUgPSBpbmplY3QoVXNlRGlyZWN0aXZlKTtcblx0Ly8gVE9ETzogcmVtb3ZlIFwiYXMgYW55XCIgd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL3B1bGwvNTAxNjIgaXMgbWVyZ2VkXG5cdHN0YXRlOiBTaWduYWw8QWNjb3JkaW9uSXRlbVN0YXRlPiA9IHRvU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQgYXMgYW55LCB7cmVxdWlyZVN5bmM6IHRydWV9KTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0b25JdGVtVmlzaWJsZUNoYW5nZTogKHZpc2libGUpID0+IHRoaXMuaXRlbVZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKSxcblx0XHRcdG9uSXRlbUhpZGRlbjogKCkgPT4gdGhpcy5pdGVtSGlkZGVuLmVtaXQoKSxcblx0XHRcdG9uSXRlbVNob3duOiAoKSA9PiB0aGlzLml0ZW1TaG93bi5lbWl0KCksXG5cdFx0fSk7XG5cdFx0ZWZmZWN0KCgpID0+IHtcblx0XHRcdC8vIFRPRE86IHdvcmthcm91bmQgdG8gYmUgcmVtb3ZlZCB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzUwMzIwIGlzIGZpeGVkXG5cdFx0XHR0aGlzLnN0YXRlKCk7XG5cdFx0fSk7XG5cdFx0dGhpcy51c2VEaXJlY3RpdmUudXNlID0gdGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYWNjb3JkaW9uSXRlbURpcmVjdGl2ZTtcblx0XHR0aGlzLnVzZURpcmVjdGl2ZS5uZ09uQ2hhbmdlcyh7XG5cdFx0XHR1c2VEaXJlY3RpdmU6IHtcblx0XHRcdFx0cHJldmlvdXNWYWx1ZTogdW5kZWZpbmVkLFxuXHRcdFx0XHRjdXJyZW50VmFsdWU6IHRoaXMudXNlRGlyZWN0aXZlLnVzZSxcblx0XHRcdFx0Zmlyc3RDaGFuZ2U6IHRydWUsXG5cdFx0XHRcdGlzRmlyc3RDaGFuZ2U6ICgpID0+IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RJdGVtU3RydWN0dXJlOiB0aGlzLnNsb3RJdGVtU3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEl0ZW1IZWFkZXI6IHRoaXMuc2xvdEl0ZW1IZWFkZXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SXRlbUJvZHk6IHRoaXMuc2xvdEl0ZW1Cb2R5RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRxdWV1ZU1pY3JvdGFzaygoKSA9PiB0aGlzLmFwaS5pbml0RG9uZSgpKTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVBY2NvcmRpb25dJyxcblx0ZXhwb3J0QXM6ICdhdUFjY29yZGlvbicsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImFjY29yZGlvbiBcIiArIHN0YXRlJCgpLmNsYXNzTmFtZScsXG5cdH0sXG5cdGhvc3REaXJlY3RpdmVzOiBbXG5cdFx0e1xuXHRcdFx0ZGlyZWN0aXZlOiBVc2VEaXJlY3RpdmUsXG5cdFx0fSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0dXNlRGlyZWN0aXZlID0gaW5qZWN0KFVzZURpcmVjdGl2ZSk7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgb25seSBvbmUgaXRlbSBhdCB0aGUgdGltZSBjYW4gc3RheSBvcGVuLlxuXHQgKi9cblx0QElucHV0KCdhdUNsb3NlT3RoZXJzJykgY2xvc2VPdGhlcnM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2hvd24uXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIGlkIG9mIHRoZSBpdGVtLlxuXHQgKi9cblx0QE91dHB1dCgnYXVTaG93bicpIHNob3duOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgaWQgb2YgdGhlIGl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhpZGRlbicpIGhpZGRlbjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHQvKipcblx0ICogVGhlIGlkIG9mIHRoZSBhY2NvcmRpb24taXRlbS4gSXQgY2FuIGJlIHVzZWQgZm9yIGNvbnRyb2xsaW5nIHRoZSBhY2NvcmRpb24taXRlbSB2aWEgdGhlIGFjY29yZGlvbiBhcGkuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUlkJykgaXRlbUlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBjb250ZW50IG9mIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NLiBJdCB3aWxsIGJlIGp1c3QgaGlkZGVuIG90aGVyd2lzZS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtRGVzdHJveU9uSGlkZScpIGl0ZW1EZXN0cm95T25IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBkaXNhYmxlZC5cblx0ICogSXQgd2lsbCBub3QgcmVhY3QgdG8gdXNlcidzIGNsaWNrcywgYnV0IHN0aWxsIHdpbGwgYmUgcG9zc2libGUgdG8gdG9nZ2xlIHByb2dyYW1tYXRpY2FsbHkuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbURpc2FibGVkJykgaXRlbURpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIHZpc2libGUgKGV4cGFuZGVkKS4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGhpZGRlbiAoY29sbGFwc2VkKS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtVmlzaWJsZScpIGl0ZW1WaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1BbmltYXRpb24nKSBpdGVtQW5pbWF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2Ugd2hlbiBpcyB0b2dnbGVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1UcmFuc2l0aW9uJykgaXRlbVRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblx0QElucHV0KCdhdVNsb3RJdGVtU3RydWN0dXJlJykgc2xvdEl0ZW1TdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QElucHV0KCdhdVNsb3RJdGVtQm9keScpIHNsb3RJdGVtQm9keTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1IZWFkZXInKSBzbG90SXRlbUhlYWRlcjogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1DbGFzcycpIGl0ZW1DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSGVhZGVyQ2xhc3MnKSBpdGVtSGVhZGVyQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSB0b2dnbGUgYnV0dG9uIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1CdXR0b25DbGFzcycpIGl0ZW1CdXR0b25DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Db2xsYXBzZUNsYXNzJykgaXRlbUNvbGxhcHNlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Cb2R5Q2xhc3MnKSBpdGVtQm9keUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Ly9zaG91bGQgbm90IGJlIGRvY3VtZW50ZWRcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbVNob3duJykgaXRlbVNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbUhpZGRlbicpIGl0ZW1IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBgdmlzaWJsZWAgdmFsdWUgY2hhbmdlcy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgbmV3IHZhbHVlIG9mIHZpc2libGUuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1WaXNpYmxlQ2hhbmdlJykgaXRlbVZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KGNyZWF0ZUFjY29yZGlvbiwgJ2FjY29yZGlvbicsIHt9KTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblxuXHQvLyBUT0RPOiByZW1vdmUgXCJhcyBhbnlcIiB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC81MDE2MiBpcyBtZXJnZWRcblx0c3RhdGUkOiBTaWduYWw8QWNjb3JkaW9uU3RhdGU+ID0gdG9TaWduYWwodGhpcy5fd2lkZ2V0LnN0YXRlJCBhcyBhbnksIHtyZXF1aXJlU3luYzogdHJ1ZX0pO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudXNlRGlyZWN0aXZlLnVzZSA9IHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmFjY29yZGlvbkRpcmVjdGl2ZTtcblx0XHR0aGlzLnVzZURpcmVjdGl2ZS5uZ09uQ2hhbmdlcyh7XG5cdFx0XHR1c2VEaXJlY3RpdmU6IHtcblx0XHRcdFx0cHJldmlvdXNWYWx1ZTogdW5kZWZpbmVkLFxuXHRcdFx0XHRjdXJyZW50VmFsdWU6IHRoaXMudXNlRGlyZWN0aXZlLnVzZSxcblx0XHRcdFx0Zmlyc3RDaGFuZ2U6IHRydWUsXG5cdFx0XHRcdGlzRmlyc3RDaGFuZ2U6ICgpID0+IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRvbkl0ZW1WaXNpYmxlQ2hhbmdlOiAodmlzaWJsZSkgPT4gdGhpcy5pdGVtVmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpLFxuXHRcdFx0b25JdGVtSGlkZGVuOiAoKSA9PiB0aGlzLml0ZW1IaWRkZW4uZW1pdCgpLFxuXHRcdFx0b25JdGVtU2hvd246ICgpID0+IHRoaXMuaXRlbVNob3duLmVtaXQoKSxcblx0XHRcdG9uU2hvd246IChpZCkgPT4gdGhpcy5zaG93bi5lbWl0KGlkKSxcblx0XHRcdG9uSGlkZGVuOiAoaWQpID0+IHRoaXMuaGlkZGVuLmVtaXQoaWQpLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG59XG4iXX0=`;export{t as default};
