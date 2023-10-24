const t=`import { ComponentTemplate, SlotDirective, UseDirective, callWidgetFactory, createAccordion, patchSimpleChanges, toAngularSignal, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
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
        this.state = toAngularSignal(this._widget.state$);
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
        this.state$ = toAngularSignal(this._widget.state$);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLFlBQVksRUFDWixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsbUJBQW1CLEdBQ25CLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXJDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7OztBQUd2QixNQUFNLE9BQU8sc0JBQXNCO0lBRG5DO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF3RCxDQUFBLENBQUMsQ0FBQztLQUl0RjtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUEyQixFQUFFLE9BQWdCO1FBQzFFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzsrR0FKVyxzQkFBc0I7bUdBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFEbEMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVMzRSxNQUFNLE9BQU8sd0JBQXdCO0lBRHJDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF3RCxDQUFBLENBQUMsQ0FBQztLQUl0RjtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUE2QixFQUFFLE9BQWdCO1FBQzVFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzsrR0FKVyx3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T0MsV0FBVztzQkFBbEMsS0FBSzt1QkFBQyxlQUFlO2dCQU1JLGFBQWE7c0JBQXRDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQU1HLGNBQWM7c0JBQXhDLEtBQUs7dUJBQUMsa0JBQWtCO2dCQUNLLGlCQUFpQjtzQkFBOUMsS0FBSzt1QkFBQyxxQkFBcUI7Z0JBQ0gsWUFBWTtzQkFBcEMsS0FBSzt1QkFBQyxnQkFBZ0I7Z0JBQ0ksY0FBYztzQkFBeEMsS0FBSzt1QkFBQyxrQkFBa0I7Z0JBTUgsU0FBUztzQkFBOUIsS0FBSzt1QkFBQyxhQUFhO2dCQU1RLGVBQWU7c0JBQTFDLEtBQUs7dUJBQUMsbUJBQW1CO2dCQU1FLGVBQWU7c0JBQTFDLEtBQUs7dUJBQUMsbUJBQW1CO2dCQU1JLGlCQUFpQjtzQkFBOUMsS0FBSzt1QkFBQyxxQkFBcUI7Z0JBTUYsYUFBYTtzQkFBdEMsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBUUQsU0FBUztzQkFBL0IsTUFBTTt1QkFBQyxhQUFhO2dCQU1HLFVBQVU7c0JBQWpDLE1BQU07dUJBQUMsY0FBYztnQkFRUyxpQkFBaUI7c0JBQS9DLE1BQU07dUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuXHRBY2NvcmRpb25JdGVtQ29udGV4dCxcblx0QWNjb3JkaW9uSXRlbVByb3BzLFxuXHRBY2NvcmRpb25JdGVtU3RhdGUsXG5cdEFjY29yZGlvblN0YXRlLFxuXHRBZGFwdFNsb3RDb250ZW50UHJvcHMsXG5cdFNsb3RDb250ZW50LFxuXHRUcmFuc2l0aW9uRm4sXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVBY2NvcmRpb24sXG5cdHBhdGNoU2ltcGxlQ2hhbmdlcyxcblx0dG9Bbmd1bGFyU2lnbmFsLFxuXHR0b1Nsb3RDb250ZXh0V2lkZ2V0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBTaWduYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFjY29yZGlvbkl0ZW1Cb2R5XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkJvZHlEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFjY29yZGlvbkl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWNjb3JkaW9uSXRlbUhlYWRlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWNjb3JkaW9uSXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFjY29yZGlvbkl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIFNsb3REaXJlY3RpdmUsIE5nSWYsIEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwgQWNjb3JkaW9uQm9keURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHQ8aDIgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyIHt7IHN0YXRlLml0ZW1IZWFkZXJDbGFzcyB9fVwiPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0aWQ9XCJ7eyBzdGF0ZS5pdGVtSWQgfX0tdG9nZ2xlXCJcblx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMuY2xpY2soKVwiXG5cdFx0XHRcdFx0W2NsYXNzLmNvbGxhcHNlZF09XCIhc3RhdGUuaXRlbVZpc2libGVcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYWNjb3JkaW9uLWJ1dHRvbiB7eyBzdGF0ZS5pdGVtQnV0dG9uQ2xhc3MgfX1cIlxuXHRcdFx0XHRcdFtkaXNhYmxlZF09XCJzdGF0ZS5pdGVtRGlzYWJsZWRcIlxuXHRcdFx0XHRcdGF0dHIuYXJpYS1jb250cm9scz1cInt7IHN0YXRlLml0ZW1JZCB9fS1jb2xsYXBzZVwiXG5cdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5pdGVtRGlzYWJsZWRcIlxuXHRcdFx0XHRcdFthdHRyLmFyaWEtZXhwYW5kZWRdPVwic3RhdGUuaXRlbVZpc2libGVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIiBbYXVTbG90XT1cInN0YXRlLnNsb3RJdGVtSGVhZGVyXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2gyPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHQqbmdJZj1cInN0YXRlLnNob3VsZEJlSW5ET01cIlxuXHRcdFx0XHRbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuY29sbGFwc2VEaXJlY3RpdmVcIlxuXHRcdFx0XHRhdHRyLmFyaWEtbGFiZWxsZWRieT1cInt7IHN0YXRlLml0ZW1JZCB9fS10b2dnbGVcIlxuXHRcdFx0XHRpZD1cInt7IHN0YXRlLml0ZW1JZCB9fS1jb2xsYXBzZVwiXG5cdFx0XHRcdGNsYXNzPVwiYWNjb3JkaW9uLWNvbGxhcHNlIHt7IHN0YXRlLml0ZW1Db2xsYXBzZUNsYXNzIH19XCJcblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImFjY29yZGlvbi1ib2R5IHt7IHN0YXRlLml0ZW1Cb2R5Q2xhc3MgfX1cIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUuc2xvdEl0ZW1Cb2R5XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZTogVGVtcGxhdGVSZWY8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xufVxuZXhwb3J0IGNvbnN0IGFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdEl0ZW1TdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoQWNjb3JkaW9uSXRlbURlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPEFjY29yZGlvbkl0ZW1Qcm9wcz4gPSB7XG5cdHNsb3RJdGVtU3RydWN0dXJlOiBhY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RJdGVtU3RydWN0dXJlLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1QWNjb3JkaW9uSXRlbV0nLFxuXHRleHBvcnRBczogJ2F1QWNjb3JkaW9uSXRlbScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnXCJhY2NvcmRpb24taXRlbSBcIiArIHN0YXRlKCkuaXRlbUNsYXNzJyxcblx0XHQnW2lkXSc6ICdzdGF0ZSgpLml0ZW1JZCcsXG5cdH0sXG5cdGhvc3REaXJlY3RpdmVzOiBbXG5cdFx0e1xuXHRcdFx0ZGlyZWN0aXZlOiBVc2VEaXJlY3RpdmUsXG5cdFx0fSxcblx0XSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCIgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RJdGVtU3RydWN0dXJlXCI+PC9uZy10ZW1wbGF0ZT4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XG5cdEBJbnB1dCgnYXVTbG90SXRlbUhlYWRlcicpIHNsb3RJdGVtSGVhZGVyOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtSGVhZGVyRnJvbUNvbnRlbnQ6IEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSB8IG51bGw7XG5cdEBJbnB1dCgnYXVTbG90SXRlbUJvZHknKSBzbG90SXRlbUJvZHk6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtQm9keUZyb21Db250ZW50OiBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlIHwgbnVsbDtcblx0QElucHV0KCdhdVNsb3RJdGVtU3RydWN0dXJlJykgc2xvdEl0ZW1TdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtU3RydWN0dXJlRnJvbUNvbnRlbnQ6IEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUgfCBudWxsO1xuXG5cdC8qKlxuXHQgKiBUaGUgaWQgb2YgdGhlIGFjY29yZGlvbi1pdGVtLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29udHJvbGxpbmcgdGhlIGFjY29yZGlvbi1pdGVtIHZpYSB0aGUgYWNjb3JkaW9uIGFwaS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWQnKSBpdGVtSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIHdoZW4gaXMgdG9nZ2xlZC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtVHJhbnNpdGlvbicpIGl0ZW1UcmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUNsYXNzJykgaXRlbUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBjb250ZW50IG9mIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NLiBJdCB3aWxsIGJlIGp1c3QgaGlkZGVuIG90aGVyd2lzZS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtRGVzdHJveU9uSGlkZScpIGl0ZW1EZXN0cm95T25IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBkaXNhYmxlZC5cblx0ICogSXQgd2lsbCBub3QgcmVhY3QgdG8gdXNlcidzIGNsaWNrcywgYnV0IHN0aWxsIHdpbGwgYmUgcG9zc2libGUgdG8gdG9nZ2xlIHByb2dyYW1tYXRpY2FsbHkuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbURpc2FibGVkJykgaXRlbURpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIHZpc2libGUgKGV4cGFuZGVkKS4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGhpZGRlbiAoY29sbGFwc2VkKS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtVmlzaWJsZScpIGl0ZW1WaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1BbmltYXRpb24nKSBpdGVtQW5pbWF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSGVhZGVyQ2xhc3MnKSBpdGVtSGVhZGVyQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQnV0dG9uQ2xhc3MnKSBpdGVtQnV0dG9uQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQ29sbGFwc2VDbGFzcycpIGl0ZW1Db2xsYXBzZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQm9keUNsYXNzJykgaXRlbUJvZHlDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIHNob3duLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtU2hvd24nKSBpdGVtU2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtSGlkZGVuJykgaXRlbUhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gdGhlIGB2aXNpYmxlYCB2YWx1ZSBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBuZXcgdmFsdWUgb2YgdmlzaWJsZS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbVZpc2libGVDaGFuZ2UnKSBpdGVtVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHRyZWFkb25seSBhZCA9IGluamVjdChBY2NvcmRpb25EaXJlY3RpdmUpO1xuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IHRoaXMuYWQuYXBpLnJlZ2lzdGVySXRlbSxcblx0XHRkZWZhdWx0Q29uZmlnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25JdGVtVmlzaWJsZUNoYW5nZTogKHZpc2libGUpID0+IHRoaXMuaXRlbVZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKSxcblx0XHRcdG9uSXRlbUhpZGRlbjogKCkgPT4gdGhpcy5pdGVtSGlkZGVuLmVtaXQoKSxcblx0XHRcdG9uSXRlbVNob3duOiAoKSA9PiB0aGlzLml0ZW1TaG93bi5lbWl0KCksXG5cdFx0fSxcblx0fSk7XG5cdHJlYWRvbmx5IHdpZGdldCA9IHRvU2xvdENvbnRleHRXaWRnZXQodGhpcy5fd2lkZ2V0KTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblx0dXNlRGlyZWN0aXZlID0gaW5qZWN0KFVzZURpcmVjdGl2ZSk7XG5cdHN0YXRlOiBTaWduYWw8QWNjb3JkaW9uSXRlbVN0YXRlPiA9IHRvQW5ndWxhclNpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnVzZURpcmVjdGl2ZS51c2UgPSB0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5hY2NvcmRpb25JdGVtRGlyZWN0aXZlO1xuXHRcdHRoaXMudXNlRGlyZWN0aXZlLm5nT25DaGFuZ2VzKHtcblx0XHRcdHVzZURpcmVjdGl2ZToge1xuXHRcdFx0XHRwcmV2aW91c1ZhbHVlOiB1bmRlZmluZWQsXG5cdFx0XHRcdGN1cnJlbnRWYWx1ZTogdGhpcy51c2VEaXJlY3RpdmUudXNlLFxuXHRcdFx0XHRmaXJzdENoYW5nZTogdHJ1ZSxcblx0XHRcdFx0aXNGaXJzdENoYW5nZTogKCkgPT4gdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdEl0ZW1TdHJ1Y3R1cmU6IHRoaXMuc2xvdEl0ZW1TdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SXRlbUhlYWRlcjogdGhpcy5zbG90SXRlbUhlYWRlckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RJdGVtQm9keTogdGhpcy5zbG90SXRlbUJvZHlGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHF1ZXVlTWljcm90YXNrKCgpID0+IHRoaXMuYXBpLmluaXREb25lKCkpO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdUFjY29yZGlvbl0nLFxuXHRleHBvcnRBczogJ2F1QWNjb3JkaW9uJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ1wiYWNjb3JkaW9uIFwiICsgc3RhdGUkKCkuY2xhc3NOYW1lJyxcblx0fSxcblx0aG9zdERpcmVjdGl2ZXM6IFtcblx0XHR7XG5cdFx0XHRkaXJlY3RpdmU6IFVzZURpcmVjdGl2ZSxcblx0XHR9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHR1c2VEaXJlY3RpdmUgPSBpbmplY3QoVXNlRGlyZWN0aXZlKTtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBvbmx5IG9uZSBpdGVtIGF0IHRoZSB0aW1lIGNhbiBzdGF5IG9wZW4uXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xvc2VPdGhlcnMnKSBjbG9zZU90aGVyczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgaWQgb2YgdGhlIGl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNob3duJykgc2hvd246IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBpZCBvZiB0aGUgaXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SGlkZGVuJykgaGlkZGVuOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdC8qKlxuXHQgKiBUaGUgaWQgb2YgdGhlIGFjY29yZGlvbi1pdGVtLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29udHJvbGxpbmcgdGhlIGFjY29yZGlvbi1pdGVtIHZpYSB0aGUgYWNjb3JkaW9uIGFwaS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWQnKSBpdGVtSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGNvbnRlbnQgb2YgdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00uIEl0IHdpbGwgYmUganVzdCBoaWRkZW4gb3RoZXJ3aXNlLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1EZXN0cm95T25IaWRlJykgaXRlbURlc3Ryb3lPbkhpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKiBJdCB3aWxsIG5vdCByZWFjdCB0byB1c2VyJ3MgY2xpY2tzLCBidXQgc3RpbGwgd2lsbCBiZSBwb3NzaWJsZSB0byB0b2dnbGUgcHJvZ3JhbW1hdGljYWxseS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtRGlzYWJsZWQnKSBpdGVtRGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgdmlzaWJsZSAoZXhwYW5kZWQpLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgaGlkZGVuIChjb2xsYXBzZWQpLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1WaXNpYmxlJykgaXRlbVZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUFuaW1hdGlvbicpIGl0ZW1BbmltYXRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSB3aGVuIGlzIHRvZ2dsZWQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbVRyYW5zaXRpb24nKSBpdGVtVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1TdHJ1Y3R1cmUnKSBzbG90SXRlbVN0cnVjdHVyZTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1Cb2R5Jykgc2xvdEl0ZW1Cb2R5OiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBJbnB1dCgnYXVTbG90SXRlbUhlYWRlcicpIHNsb3RJdGVtSGVhZGVyOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUNsYXNzJykgaXRlbUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaGVhZGVyIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1IZWFkZXJDbGFzcycpIGl0ZW1IZWFkZXJDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIHRvZ2dsZSBidXR0b24gRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJ1dHRvbkNsYXNzJykgaXRlbUJ1dHRvbkNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2UgRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUNvbGxhcHNlQ2xhc3MnKSBpdGVtQ29sbGFwc2VDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJvZHlDbGFzcycpIGl0ZW1Cb2R5Q2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvL3Nob3VsZCBub3QgYmUgZG9jdW1lbnRlZFxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIHNob3duLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtU2hvd24nKSBpdGVtU2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtSGlkZGVuJykgaXRlbUhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gdGhlIGB2aXNpYmxlYCB2YWx1ZSBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBuZXcgdmFsdWUgb2YgdmlzaWJsZS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbVZpc2libGVDaGFuZ2UnKSBpdGVtVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZUFjY29yZGlvbixcblx0XHR3aWRnZXROYW1lOiAnYWNjb3JkaW9uJyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uSXRlbVZpc2libGVDaGFuZ2U6ICh2aXNpYmxlKSA9PiB0aGlzLml0ZW1WaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSksXG5cdFx0XHRvbkl0ZW1IaWRkZW46ICgpID0+IHRoaXMuaXRlbUhpZGRlbi5lbWl0KCksXG5cdFx0XHRvbkl0ZW1TaG93bjogKCkgPT4gdGhpcy5pdGVtU2hvd24uZW1pdCgpLFxuXHRcdFx0b25TaG93bjogKGlkKSA9PiB0aGlzLnNob3duLmVtaXQoaWQpLFxuXHRcdFx0b25IaWRkZW46IChpZCkgPT4gdGhpcy5oaWRkZW4uZW1pdChpZCksXG5cdFx0fSxcblx0fSk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cblx0c3RhdGUkOiBTaWduYWw8QWNjb3JkaW9uU3RhdGU+ID0gdG9Bbmd1bGFyU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudXNlRGlyZWN0aXZlLnVzZSA9IHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmFjY29yZGlvbkRpcmVjdGl2ZTtcblx0XHR0aGlzLnVzZURpcmVjdGl2ZS5uZ09uQ2hhbmdlcyh7XG5cdFx0XHR1c2VEaXJlY3RpdmU6IHtcblx0XHRcdFx0cHJldmlvdXNWYWx1ZTogdW5kZWZpbmVkLFxuXHRcdFx0XHRjdXJyZW50VmFsdWU6IHRoaXMudXNlRGlyZWN0aXZlLnVzZSxcblx0XHRcdFx0Zmlyc3RDaGFuZ2U6IHRydWUsXG5cdFx0XHRcdGlzRmlyc3RDaGFuZ2U6ICgpID0+IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG59XG4iXX0=`;export{t as default};
