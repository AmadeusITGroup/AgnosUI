const t=`import { ComponentTemplate, SlotDirective, UseDirective, callWidgetFactory, createAccordion, patchSimpleChanges, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: AccordionBodyDirective, isStandalone: true, selector: "ng-template[auAccordionItemBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionBodyDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: AccordionHeaderDirective, isStandalone: true, selector: "ng-template[auAccordionItemHeader]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionHeaderDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionItemStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: AccordionItemStructureDirective, isStandalone: true, selector: "ng-template[auAccordionItemStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionItemStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAccordionItemStructure]', standalone: true }]
        }] });
export class AccordionItemDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionItemDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: AccordionItemDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \`
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionItemDefaultSlotsComponent, decorators: [{
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
        this.ad = inject(AccordionDirective);
        this._widget = callWidgetFactory({
            factory: this.ad.api.registerItem,
            defaultConfig,
            events: {
                onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
                onItemHidden: () => this.itemHidden.emit(),
                onItemShown: () => this.itemShown.emit(),
            },
        });
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.useDirective = inject(UseDirective);
        // TODO: remove "as any" when https://github.com/angular/angular/pull/50162 is merged
        this.state = toSignal(this._widget.state$, { requireSync: true });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: AccordionItemComponent, isStandalone: true, selector: "[auAccordionItem]", inputs: { slotItemHeader: ["auSlotItemHeader", "slotItemHeader"], slotItemBody: ["auSlotItemBody", "slotItemBody"], slotItemStructure: ["auSlotItemStructure", "slotItemStructure"], itemId: ["auItemId", "itemId"], itemTransition: ["auItemTransition", "itemTransition"], itemClass: ["auItemClass", "itemClass"], itemDestroyOnHide: ["auItemDestroyOnHide", "itemDestroyOnHide"], itemDisabled: ["auItemDisabled", "itemDisabled"], itemVisible: ["auItemVisible", "itemVisible"], itemAnimation: ["auItemAnimation", "itemAnimation"], itemHeaderClass: ["auItemHeaderClass", "itemHeaderClass"], itemButtonClass: ["auItemButtonClass", "itemButtonClass"], itemCollapseClass: ["auItemCollapseClass", "itemCollapseClass"], itemBodyClass: ["auItemBodyClass", "itemBodyClass"] }, outputs: { itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, host: { properties: { "class": "\\"accordion-item \\" + state().itemClass", "id": "state().itemId" } }, queries: [{ propertyName: "slotItemHeaderFromContent", first: true, predicate: AccordionHeaderDirective, descendants: true }, { propertyName: "slotItemBodyFromContent", first: true, predicate: AccordionBodyDirective, descendants: true }, { propertyName: "slotItemStructureFromContent", first: true, predicate: AccordionItemStructureDirective, descendants: true }], exportAs: ["auAccordionItem"], usesOnChanges: true, hostDirectives: [{ directive: i1.UseDirective }], ngImport: i0, template: \` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> \`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionItemComponent, decorators: [{
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
        this._widget = callWidgetFactory({
            factory: createAccordion,
            widgetName: 'accordion',
            events: {
                onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
                onItemHidden: () => this.itemHidden.emit(),
                onItemShown: () => this.itemShown.emit(),
                onShown: (id) => this.shown.emit(id),
                onHidden: (id) => this.hidden.emit(id),
            },
        });
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
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: AccordionDirective, isStandalone: true, selector: "[auAccordion]", inputs: { closeOthers: ["auCloseOthers", "closeOthers"], className: ["auClassName", "className"], itemId: ["auItemId", "itemId"], itemDestroyOnHide: ["auItemDestroyOnHide", "itemDestroyOnHide"], itemDisabled: ["auItemDisabled", "itemDisabled"], itemVisible: ["auItemVisible", "itemVisible"], itemAnimation: ["auItemAnimation", "itemAnimation"], itemTransition: ["auItemTransition", "itemTransition"], slotItemStructure: ["auSlotItemStructure", "slotItemStructure"], slotItemBody: ["auSlotItemBody", "slotItemBody"], slotItemHeader: ["auSlotItemHeader", "slotItemHeader"], itemClass: ["auItemClass", "itemClass"], itemHeaderClass: ["auItemHeaderClass", "itemHeaderClass"], itemButtonClass: ["auItemButtonClass", "itemButtonClass"], itemCollapseClass: ["auItemCollapseClass", "itemCollapseClass"], itemBodyClass: ["auItemBodyClass", "itemBodyClass"] }, outputs: { shown: "auShown", hidden: "auHidden", itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, host: { properties: { "class": "\\"accordion \\" + state$().className" } }, exportAs: ["auAccordion"], usesOnChanges: true, hostDirectives: [{ directive: i1.UseDirective }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLFlBQVksRUFDWixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFckMsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7OztBQUdwRCxNQUFNLE9BQU8sc0JBQXNCO0lBRG5DO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF3RCxDQUFBLENBQUMsQ0FBQztLQUl0RjtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUEyQixFQUFFLE9BQWdCO1FBQzFFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzsrR0FKVyxzQkFBc0I7bUdBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFEbEMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVMzRSxNQUFNLE9BQU8sd0JBQXdCO0lBRHJDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF3RCxDQUFBLENBQUMsQ0FBQztLQUl0RjtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUE2QixFQUFFLE9BQWdCO1FBQzVF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QUMsVUFBVTtnQkFPQyxNQUFNO3NCQUF4QixLQUFLO3VCQUFDLFVBQVU7Z0JBTWEsaUJBQWlCO3NCQUE5QyxLQUFLO3VCQUFDLHFCQUFxQjtnQkFPSCxZQUFZO3NCQUFwQyxLQUFLO3VCQUFDLGdCQUFnQjtnQkFPQyxXQUFXO3NCQUFsQyxLQUFLO3VCQUFDLGVBQWU7Z0JBTUksYUFBYTtzQkFBdEMsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBTUcsY0FBYztzQkFBeEMsS0FBSzt1QkFBQyxrQkFBa0I7Z0JBQ0ssaUJBQWlCO3NCQUE5QyxLQUFLO3VCQUFDLHFCQUFxQjtnQkFDSCxZQUFZO3NCQUFwQyxLQUFLO3VCQUFDLGdCQUFnQjtnQkFDSSxjQUFjO3NCQUF4QyxLQUFLO3VCQUFDLGtCQUFrQjtnQkFNSCxTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWE7Z0JBTVEsZUFBZTtzQkFBMUMsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBTUUsZUFBZTtzQkFBMUMsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBTUksaUJBQWlCO3NCQUE5QyxLQUFLO3VCQUFDLHFCQUFxQjtnQkFNRixhQUFhO3NCQUF0QyxLQUFLO3VCQUFDLGlCQUFpQjtnQkFRRCxTQUFTO3NCQUEvQixNQUFNO3VCQUFDLGFBQWE7Z0JBTUcsVUFBVTtzQkFBakMsTUFBTTt1QkFBQyxjQUFjO2dCQVFTLGlCQUFpQjtzQkFBL0MsTUFBTTt1QkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG5cdEFjY29yZGlvbkl0ZW1Db250ZXh0LFxuXHRBY2NvcmRpb25JdGVtUHJvcHMsXG5cdEFjY29yZGlvbkl0ZW1TdGF0ZSxcblx0QWNjb3JkaW9uU3RhdGUsXG5cdEFkYXB0U2xvdENvbnRlbnRQcm9wcyxcblx0U2xvdENvbnRlbnQsXG5cdFRyYW5zaXRpb25Gbixcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZUFjY29yZGlvbixcblx0cGF0Y2hTaW1wbGVDaGFuZ2VzLFxuXHR0b1Nsb3RDb250ZXh0V2lkZ2V0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBTaWduYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dG9TaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFjY29yZGlvbkl0ZW1Cb2R5XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkJvZHlEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFjY29yZGlvbkl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWNjb3JkaW9uSXRlbUhlYWRlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWNjb3JkaW9uSXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFjY29yZGlvbkl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIFNsb3REaXJlY3RpdmUsIE5nSWYsIEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwgQWNjb3JkaW9uQm9keURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHQ8aDIgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyIHt7IHN0YXRlLml0ZW1IZWFkZXJDbGFzcyB9fVwiPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0aWQ9XCJ7eyBzdGF0ZS5pdGVtSWQgfX0tdG9nZ2xlXCJcblx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMuY2xpY2soKVwiXG5cdFx0XHRcdFx0W2NsYXNzLmNvbGxhcHNlZF09XCIhc3RhdGUuaXRlbVZpc2libGVcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYWNjb3JkaW9uLWJ1dHRvbiB7eyBzdGF0ZS5pdGVtQnV0dG9uQ2xhc3MgfX1cIlxuXHRcdFx0XHRcdFtkaXNhYmxlZF09XCJzdGF0ZS5pdGVtRGlzYWJsZWRcIlxuXHRcdFx0XHRcdGF0dHIuYXJpYS1jb250cm9scz1cInt7IHN0YXRlLml0ZW1JZCB9fS1jb2xsYXBzZVwiXG5cdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5pdGVtRGlzYWJsZWRcIlxuXHRcdFx0XHRcdFthdHRyLmFyaWEtZXhwYW5kZWRdPVwic3RhdGUuaXRlbVZpc2libGVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIiBbYXVTbG90XT1cInN0YXRlLnNsb3RJdGVtSGVhZGVyXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2gyPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHQqbmdJZj1cInN0YXRlLnNob3VsZEJlSW5ET01cIlxuXHRcdFx0XHRbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuY29sbGFwc2VEaXJlY3RpdmVcIlxuXHRcdFx0XHRhdHRyLmFyaWEtbGFiZWxsZWRieT1cInt7IHN0YXRlLml0ZW1JZCB9fS10b2dnbGVcIlxuXHRcdFx0XHRpZD1cInt7IHN0YXRlLml0ZW1JZCB9fS1jb2xsYXBzZVwiXG5cdFx0XHRcdGNsYXNzPVwiYWNjb3JkaW9uLWNvbGxhcHNlIHt7IHN0YXRlLml0ZW1Db2xsYXBzZUNsYXNzIH19XCJcblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImFjY29yZGlvbi1ib2R5IHt7IHN0YXRlLml0ZW1Cb2R5Q2xhc3MgfX1cIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUuc2xvdEl0ZW1Cb2R5XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZTogVGVtcGxhdGVSZWY8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xufVxuZXhwb3J0IGNvbnN0IGFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdEl0ZW1TdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoQWNjb3JkaW9uSXRlbURlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPEFjY29yZGlvbkl0ZW1Qcm9wcz4gPSB7XG5cdHNsb3RJdGVtU3RydWN0dXJlOiBhY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RJdGVtU3RydWN0dXJlLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1QWNjb3JkaW9uSXRlbV0nLFxuXHRleHBvcnRBczogJ2F1QWNjb3JkaW9uSXRlbScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnXCJhY2NvcmRpb24taXRlbSBcIiArIHN0YXRlKCkuaXRlbUNsYXNzJyxcblx0XHQnW2lkXSc6ICdzdGF0ZSgpLml0ZW1JZCcsXG5cdH0sXG5cdGhvc3REaXJlY3RpdmVzOiBbXG5cdFx0e1xuXHRcdFx0ZGlyZWN0aXZlOiBVc2VEaXJlY3RpdmUsXG5cdFx0fSxcblx0XSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCIgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RJdGVtU3RydWN0dXJlXCI+PC9uZy10ZW1wbGF0ZT4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XG5cdEBJbnB1dCgnYXVTbG90SXRlbUhlYWRlcicpIHNsb3RJdGVtSGVhZGVyOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtSGVhZGVyRnJvbUNvbnRlbnQ6IEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSB8IG51bGw7XG5cdEBJbnB1dCgnYXVTbG90SXRlbUJvZHknKSBzbG90SXRlbUJvZHk6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtQm9keUZyb21Db250ZW50OiBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlIHwgbnVsbDtcblx0QElucHV0KCdhdVNsb3RJdGVtU3RydWN0dXJlJykgc2xvdEl0ZW1TdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtU3RydWN0dXJlRnJvbUNvbnRlbnQ6IEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUgfCBudWxsO1xuXG5cdC8qKlxuXHQgKiBUaGUgaWQgb2YgdGhlIGFjY29yZGlvbi1pdGVtLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29udHJvbGxpbmcgdGhlIGFjY29yZGlvbi1pdGVtIHZpYSB0aGUgYWNjb3JkaW9uIGFwaS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWQnKSBpdGVtSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIHdoZW4gaXMgdG9nZ2xlZC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtVHJhbnNpdGlvbicpIGl0ZW1UcmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUNsYXNzJykgaXRlbUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBjb250ZW50IG9mIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NLiBJdCB3aWxsIGJlIGp1c3QgaGlkZGVuIG90aGVyd2lzZS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtRGVzdHJveU9uSGlkZScpIGl0ZW1EZXN0cm95T25IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBkaXNhYmxlZC5cblx0ICogSXQgd2lsbCBub3QgcmVhY3QgdG8gdXNlcidzIGNsaWNrcywgYnV0IHN0aWxsIHdpbGwgYmUgcG9zc2libGUgdG8gdG9nZ2xlIHByb2dyYW1tYXRpY2FsbHkuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbURpc2FibGVkJykgaXRlbURpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIHZpc2libGUgKGV4cGFuZGVkKS4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGhpZGRlbiAoY29sbGFwc2VkKS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtVmlzaWJsZScpIGl0ZW1WaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1BbmltYXRpb24nKSBpdGVtQW5pbWF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSGVhZGVyQ2xhc3MnKSBpdGVtSGVhZGVyQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQnV0dG9uQ2xhc3MnKSBpdGVtQnV0dG9uQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQ29sbGFwc2VDbGFzcycpIGl0ZW1Db2xsYXBzZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQm9keUNsYXNzJykgaXRlbUJvZHlDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIHNob3duLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtU2hvd24nKSBpdGVtU2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtSGlkZGVuJykgaXRlbUhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gdGhlIGB2aXNpYmxlYCB2YWx1ZSBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBuZXcgdmFsdWUgb2YgdmlzaWJsZS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbVZpc2libGVDaGFuZ2UnKSBpdGVtVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHRyZWFkb25seSBhZCA9IGluamVjdChBY2NvcmRpb25EaXJlY3RpdmUpO1xuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IHRoaXMuYWQuYXBpLnJlZ2lzdGVySXRlbSxcblx0XHRkZWZhdWx0Q29uZmlnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25JdGVtVmlzaWJsZUNoYW5nZTogKHZpc2libGUpID0+IHRoaXMuaXRlbVZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKSxcblx0XHRcdG9uSXRlbUhpZGRlbjogKCkgPT4gdGhpcy5pdGVtSGlkZGVuLmVtaXQoKSxcblx0XHRcdG9uSXRlbVNob3duOiAoKSA9PiB0aGlzLml0ZW1TaG93bi5lbWl0KCksXG5cdFx0fSxcblx0fSk7XG5cdHJlYWRvbmx5IHdpZGdldCA9IHRvU2xvdENvbnRleHRXaWRnZXQodGhpcy5fd2lkZ2V0KTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblx0dXNlRGlyZWN0aXZlID0gaW5qZWN0KFVzZURpcmVjdGl2ZSk7XG5cdC8vIFRPRE86IHJlbW92ZSBcImFzIGFueVwiIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzUwMTYyIGlzIG1lcmdlZFxuXHRzdGF0ZTogU2lnbmFsPEFjY29yZGlvbkl0ZW1TdGF0ZT4gPSB0b1NpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkIGFzIGFueSwge3JlcXVpcmVTeW5jOiB0cnVlfSk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy51c2VEaXJlY3RpdmUudXNlID0gdGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYWNjb3JkaW9uSXRlbURpcmVjdGl2ZTtcblx0XHR0aGlzLnVzZURpcmVjdGl2ZS5uZ09uQ2hhbmdlcyh7XG5cdFx0XHR1c2VEaXJlY3RpdmU6IHtcblx0XHRcdFx0cHJldmlvdXNWYWx1ZTogdW5kZWZpbmVkLFxuXHRcdFx0XHRjdXJyZW50VmFsdWU6IHRoaXMudXNlRGlyZWN0aXZlLnVzZSxcblx0XHRcdFx0Zmlyc3RDaGFuZ2U6IHRydWUsXG5cdFx0XHRcdGlzRmlyc3RDaGFuZ2U6ICgpID0+IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RJdGVtU3RydWN0dXJlOiB0aGlzLnNsb3RJdGVtU3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEl0ZW1IZWFkZXI6IHRoaXMuc2xvdEl0ZW1IZWFkZXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SXRlbUJvZHk6IHRoaXMuc2xvdEl0ZW1Cb2R5RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRxdWV1ZU1pY3JvdGFzaygoKSA9PiB0aGlzLmFwaS5pbml0RG9uZSgpKTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVBY2NvcmRpb25dJyxcblx0ZXhwb3J0QXM6ICdhdUFjY29yZGlvbicsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImFjY29yZGlvbiBcIiArIHN0YXRlJCgpLmNsYXNzTmFtZScsXG5cdH0sXG5cdGhvc3REaXJlY3RpdmVzOiBbXG5cdFx0e1xuXHRcdFx0ZGlyZWN0aXZlOiBVc2VEaXJlY3RpdmUsXG5cdFx0fSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0dXNlRGlyZWN0aXZlID0gaW5qZWN0KFVzZURpcmVjdGl2ZSk7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgb25seSBvbmUgaXRlbSBhdCB0aGUgdGltZSBjYW4gc3RheSBvcGVuLlxuXHQgKi9cblx0QElucHV0KCdhdUNsb3NlT3RoZXJzJykgY2xvc2VPdGhlcnM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2hvd24uXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIGlkIG9mIHRoZSBpdGVtLlxuXHQgKi9cblx0QE91dHB1dCgnYXVTaG93bicpIHNob3duOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgaWQgb2YgdGhlIGl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhpZGRlbicpIGhpZGRlbjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHQvKipcblx0ICogVGhlIGlkIG9mIHRoZSBhY2NvcmRpb24taXRlbS4gSXQgY2FuIGJlIHVzZWQgZm9yIGNvbnRyb2xsaW5nIHRoZSBhY2NvcmRpb24taXRlbSB2aWEgdGhlIGFjY29yZGlvbiBhcGkuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUlkJykgaXRlbUlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBjb250ZW50IG9mIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NLiBJdCB3aWxsIGJlIGp1c3QgaGlkZGVuIG90aGVyd2lzZS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtRGVzdHJveU9uSGlkZScpIGl0ZW1EZXN0cm95T25IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBkaXNhYmxlZC5cblx0ICogSXQgd2lsbCBub3QgcmVhY3QgdG8gdXNlcidzIGNsaWNrcywgYnV0IHN0aWxsIHdpbGwgYmUgcG9zc2libGUgdG8gdG9nZ2xlIHByb2dyYW1tYXRpY2FsbHkuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbURpc2FibGVkJykgaXRlbURpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIHZpc2libGUgKGV4cGFuZGVkKS4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGhpZGRlbiAoY29sbGFwc2VkKS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtVmlzaWJsZScpIGl0ZW1WaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1BbmltYXRpb24nKSBpdGVtQW5pbWF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2Ugd2hlbiBpcyB0b2dnbGVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1UcmFuc2l0aW9uJykgaXRlbVRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblx0QElucHV0KCdhdVNsb3RJdGVtU3RydWN0dXJlJykgc2xvdEl0ZW1TdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QElucHV0KCdhdVNsb3RJdGVtQm9keScpIHNsb3RJdGVtQm9keTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1IZWFkZXInKSBzbG90SXRlbUhlYWRlcjogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1DbGFzcycpIGl0ZW1DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSGVhZGVyQ2xhc3MnKSBpdGVtSGVhZGVyQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSB0b2dnbGUgYnV0dG9uIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1CdXR0b25DbGFzcycpIGl0ZW1CdXR0b25DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Db2xsYXBzZUNsYXNzJykgaXRlbUNvbGxhcHNlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Cb2R5Q2xhc3MnKSBpdGVtQm9keUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Ly9zaG91bGQgbm90IGJlIGRvY3VtZW50ZWRcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbVNob3duJykgaXRlbVNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbUhpZGRlbicpIGl0ZW1IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBgdmlzaWJsZWAgdmFsdWUgY2hhbmdlcy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgbmV3IHZhbHVlIG9mIHZpc2libGUuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1WaXNpYmxlQ2hhbmdlJykgaXRlbVZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVBY2NvcmRpb24sXG5cdFx0d2lkZ2V0TmFtZTogJ2FjY29yZGlvbicsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvbkl0ZW1WaXNpYmxlQ2hhbmdlOiAodmlzaWJsZSkgPT4gdGhpcy5pdGVtVmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpLFxuXHRcdFx0b25JdGVtSGlkZGVuOiAoKSA9PiB0aGlzLml0ZW1IaWRkZW4uZW1pdCgpLFxuXHRcdFx0b25JdGVtU2hvd246ICgpID0+IHRoaXMuaXRlbVNob3duLmVtaXQoKSxcblx0XHRcdG9uU2hvd246IChpZCkgPT4gdGhpcy5zaG93bi5lbWl0KGlkKSxcblx0XHRcdG9uSGlkZGVuOiAoaWQpID0+IHRoaXMuaGlkZGVuLmVtaXQoaWQpLFxuXHRcdH0sXG5cdH0pO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXG5cdC8vIFRPRE86IHJlbW92ZSBcImFzIGFueVwiIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzUwMTYyIGlzIG1lcmdlZFxuXHRzdGF0ZSQ6IFNpZ25hbDxBY2NvcmRpb25TdGF0ZT4gPSB0b1NpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkIGFzIGFueSwge3JlcXVpcmVTeW5jOiB0cnVlfSk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy51c2VEaXJlY3RpdmUudXNlID0gdGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYWNjb3JkaW9uRGlyZWN0aXZlO1xuXHRcdHRoaXMudXNlRGlyZWN0aXZlLm5nT25DaGFuZ2VzKHtcblx0XHRcdHVzZURpcmVjdGl2ZToge1xuXHRcdFx0XHRwcmV2aW91c1ZhbHVlOiB1bmRlZmluZWQsXG5cdFx0XHRcdGN1cnJlbnRWYWx1ZTogdGhpcy51c2VEaXJlY3RpdmUudXNlLFxuXHRcdFx0XHRmaXJzdENoYW5nZTogdHJ1ZSxcblx0XHRcdFx0aXNGaXJzdENoYW5nZTogKCkgPT4gdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
