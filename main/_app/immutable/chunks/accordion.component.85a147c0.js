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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AccordionBodyDirective, isStandalone: true, selector: "ng-template[auAccordionItemBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionBodyDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AccordionHeaderDirective, isStandalone: true, selector: "ng-template[auAccordionItemHeader]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionHeaderDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AccordionItemStructureDirective, isStandalone: true, selector: "ng-template[auAccordionItemStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAccordionItemStructure]', standalone: true }]
        }] });
export class AccordionItemDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: AccordionItemDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \`
		<ng-template #structure let-state="state" let-widget="widget">
			<h2 class="accordion-header {{ state.itemHeaderClass }}">
				<button
					type="button"
					id="{{ state.itemId }}-toggle"
					(click)="widget.actions.click()"
					[class.collapsed]="state.itemCollapsed"
					class="accordion-button {{ state.itemButtonClass }}"
					[disabled]="state.itemDisabled"
					attr.aria-controls="{{ state.itemId }}-collapse"
					[attr.aria-disabled]="state.itemDisabled"
					[attr.aria-expanded]="!state.itemCollapsed"
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemDefaultSlotsComponent, decorators: [{
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
					[class.collapsed]="state.itemCollapsed"
					class="accordion-button {{ state.itemButtonClass }}"
					[disabled]="state.itemDisabled"
					attr.aria-controls="{{ state.itemId }}-collapse"
					[attr.aria-disabled]="state.itemDisabled"
					[attr.aria-expanded]="!state.itemCollapsed"
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
         * An event fired when the \`collapsed\` value changes.
         *
         * Event payload is the new value of collapsed.
         */
        this.itemCollapsedChange = new EventEmitter();
        this.defaultSlots = writable(defaultConfig);
        this.ad = inject(AccordionDirective);
        this._widget = callWidgetFactory(this.ad.api.registerItem, null, defaultConfig);
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.useDirective = inject(UseDirective);
        // TODO: remove "as any" when https://github.com/angular/angular/pull/50162 is merged
        this.state = toSignal(this._widget.state$, { requireSync: true });
        this._widget.patch({
            onItemCollapsedChange: (collapsed) => this.itemCollapsedChange.emit(collapsed),
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: AccordionItemComponent, isStandalone: true, selector: "[au-accordion-item]", inputs: { slotItemHeader: "slotItemHeader", slotItemBody: "slotItemBody", slotItemStructure: "slotItemStructure", itemId: "itemId", itemTransition: "itemTransition", itemClass: "itemClass", itemDestroyOnHide: "itemDestroyOnHide", itemDisabled: "itemDisabled", itemCollapsed: "itemCollapsed", itemAnimation: "itemAnimation", itemHeaderClass: "itemHeaderClass", itemButtonClass: "itemButtonClass", itemCollapseClass: "itemCollapseClass", itemBodyClass: "itemBodyClass" }, outputs: { itemShown: "itemShown", itemHidden: "itemHidden", itemCollapsedChange: "itemCollapsedChange" }, host: { properties: { "class": "\\"accordion-item \\" + state().itemClass", "id": "state().itemId" } }, queries: [{ propertyName: "slotItemHeaderFromContent", first: true, predicate: AccordionHeaderDirective, descendants: true }, { propertyName: "slotItemBodyFromContent", first: true, predicate: AccordionBodyDirective, descendants: true }, { propertyName: "slotItemStructureFromContent", first: true, predicate: AccordionItemStructureDirective, descendants: true }], exportAs: ["auAccordionItem"], usesOnChanges: true, hostDirectives: [{ directive: i1.UseDirective }], ngImport: i0, template: \` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> \`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionItemComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: '[au-accordion-item]',
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
                type: Input
            }], slotItemHeaderFromContent: [{
                type: ContentChild,
                args: [AccordionHeaderDirective, { static: false }]
            }], slotItemBody: [{
                type: Input
            }], slotItemBodyFromContent: [{
                type: ContentChild,
                args: [AccordionBodyDirective, { static: false }]
            }], slotItemStructure: [{
                type: Input
            }], slotItemStructureFromContent: [{
                type: ContentChild,
                args: [AccordionItemStructureDirective, { static: false }]
            }], itemId: [{
                type: Input
            }], itemTransition: [{
                type: Input
            }], itemClass: [{
                type: Input
            }], itemDestroyOnHide: [{
                type: Input
            }], itemDisabled: [{
                type: Input
            }], itemCollapsed: [{
                type: Input
            }], itemAnimation: [{
                type: Input
            }], itemHeaderClass: [{
                type: Input
            }], itemButtonClass: [{
                type: Input
            }], itemCollapseClass: [{
                type: Input
            }], itemBodyClass: [{
                type: Input
            }], itemShown: [{
                type: Output
            }], itemHidden: [{
                type: Output
            }], itemCollapsedChange: [{
                type: Output
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
         * An event fired when the \`collapsed\` value changes.
         *
         * Event payload is the new value of collapsed.
         *
         * It is a prop of the accordion-item.
         */
        this.itemCollapsedChange = new EventEmitter();
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
            onItemCollapsedChange: (collapsed) => this.itemCollapsedChange.emit(collapsed),
            onItemHidden: () => this.itemHidden.emit(),
            onItemShown: () => this.itemShown.emit(),
            onShown: (id) => this.shown.emit(id),
            onHidden: (id) => this.hidden.emit(id),
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AccordionDirective, isStandalone: true, selector: "[auAccordion]", inputs: { closeOthers: "closeOthers", className: "className", itemId: "itemId", itemDestroyOnHide: "itemDestroyOnHide", itemDisabled: "itemDisabled", itemCollapsed: "itemCollapsed", itemAnimation: "itemAnimation", itemTransition: "itemTransition", slotItemStructure: "slotItemStructure", slotItemBody: "slotItemBody", slotItemHeader: "slotItemHeader", itemClass: "itemClass", itemHeaderClass: "itemHeaderClass", itemButtonClass: "itemButtonClass", itemCollapseClass: "itemCollapseClass", itemBodyClass: "itemBodyClass" }, outputs: { shown: "shown", hidden: "hidden", itemShown: "itemShown", itemHidden: "itemHidden", itemCollapsedChange: "itemCollapsedChange" }, host: { properties: { "class": "\\"accordion \\" + state$().className" } }, exportAs: ["auAccordion"], usesOnChanges: true, hostDirectives: [{ directive: i1.UseDirective }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AccordionDirective, decorators: [{
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
                type: Input
            }], className: [{
                type: Input
            }], shown: [{
                type: Output
            }], hidden: [{
                type: Output
            }], itemId: [{
                type: Input
            }], itemDestroyOnHide: [{
                type: Input
            }], itemDisabled: [{
                type: Input
            }], itemCollapsed: [{
                type: Input
            }], itemAnimation: [{
                type: Input
            }], itemTransition: [{
                type: Input
            }], slotItemStructure: [{
                type: Input
            }], slotItemBody: [{
                type: Input
            }], slotItemHeader: [{
                type: Input
            }], itemClass: [{
                type: Input
            }], itemHeaderClass: [{
                type: Input
            }], itemButtonClass: [{
                type: Input
            }], itemCollapseClass: [{
                type: Input
            }], itemBodyClass: [{
                type: Input
            }], itemShown: [{
                type: Output
            }], itemHidden: [{
                type: Output
            }], itemCollapsedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLFlBQVksRUFDWixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXJDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBR3BELE1BQU0sT0FBTyxzQkFBc0I7SUFEbkM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQXdELENBQUEsQ0FBQyxDQUFDO0tBSXRGO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQTJCLEVBQUUsT0FBZ0I7UUFDMUUsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzhHQUpXLHNCQUFzQjtrR0FBdEIsc0JBQXNCOzsyRkFBdEIsc0JBQXNCO2tCQURsQyxTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLGtDQUFrQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBUzNFLE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQXdELENBQUEsQ0FBQyxDQUFDO0tB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O2dCQU9HLFlBQVk7c0JBQXBCLEtBQUs7Z0JBTUcsYUFBYTtzQkFBckIsS0FBSztnQkFNRyxhQUFhO3NCQUFyQixLQUFLO2dCQU1HLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFNRyxTQUFTO3NCQUFqQixLQUFLO2dCQU1HLGVBQWU7c0JBQXZCLEtBQUs7Z0JBTUcsZUFBZTtzQkFBdkIsS0FBSztnQkFNRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBTUcsYUFBYTtzQkFBckIsS0FBSztnQkFRSSxTQUFTO3NCQUFsQixNQUFNO2dCQU1HLFVBQVU7c0JBQW5CLE1BQU07Z0JBUUcsbUJBQW1CO3NCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuXHRBY2NvcmRpb25JdGVtQ29udGV4dCxcblx0QWNjb3JkaW9uSXRlbVByb3BzLFxuXHRBY2NvcmRpb25JdGVtU3RhdGUsXG5cdEFjY29yZGlvblN0YXRlLFxuXHRBZGFwdFNsb3RDb250ZW50UHJvcHMsXG5cdFNsb3RDb250ZW50LFxuXHRUcmFuc2l0aW9uRm4sXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVBY2NvcmRpb24sXG5cdHBhdGNoU2ltcGxlQ2hhbmdlcyxcblx0dG9TbG90Q29udGV4dFdpZGdldCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHtOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdGVmZmVjdCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dG9TaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFjY29yZGlvbkl0ZW1Cb2R5XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkJvZHlEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFjY29yZGlvbkl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWNjb3JkaW9uSXRlbUhlYWRlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWNjb3JkaW9uSXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db250ZXh0Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFjY29yZGlvbkl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIFNsb3REaXJlY3RpdmUsIE5nSWYsIEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwgQWNjb3JkaW9uQm9keURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHQ8aDIgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyIHt7IHN0YXRlLml0ZW1IZWFkZXJDbGFzcyB9fVwiPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0aWQ9XCJ7eyBzdGF0ZS5pdGVtSWQgfX0tdG9nZ2xlXCJcblx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMuY2xpY2soKVwiXG5cdFx0XHRcdFx0W2NsYXNzLmNvbGxhcHNlZF09XCJzdGF0ZS5pdGVtQ29sbGFwc2VkXCJcblx0XHRcdFx0XHRjbGFzcz1cImFjY29yZGlvbi1idXR0b24ge3sgc3RhdGUuaXRlbUJ1dHRvbkNsYXNzIH19XCJcblx0XHRcdFx0XHRbZGlzYWJsZWRdPVwic3RhdGUuaXRlbURpc2FibGVkXCJcblx0XHRcdFx0XHRhdHRyLmFyaWEtY29udHJvbHM9XCJ7eyBzdGF0ZS5pdGVtSWQgfX0tY29sbGFwc2VcIlxuXHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUuaXRlbURpc2FibGVkXCJcblx0XHRcdFx0XHRbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIiFzdGF0ZS5pdGVtQ29sbGFwc2VkXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCIgW2F1U2xvdF09XCJzdGF0ZS5zbG90SXRlbUhlYWRlclwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9oMj5cblx0XHRcdDxkaXZcblx0XHRcdFx0Km5nSWY9XCJzdGF0ZS5zaG91bGRCZUluRE9NXCJcblx0XHRcdFx0W2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmNvbGxhcHNlRGlyZWN0aXZlXCJcblx0XHRcdFx0YXR0ci5hcmlhLWxhYmVsbGVkYnk9XCJ7eyBzdGF0ZS5pdGVtSWQgfX0tdG9nZ2xlXCJcblx0XHRcdFx0aWQ9XCJ7eyBzdGF0ZS5pdGVtSWQgfX0tY29sbGFwc2VcIlxuXHRcdFx0XHRjbGFzcz1cImFjY29yZGlvbi1jb2xsYXBzZSB7eyBzdGF0ZS5pdGVtQ29sbGFwc2VDbGFzcyB9fVwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tYm9keSB7eyBzdGF0ZS5pdGVtQm9keUNsYXNzIH19XCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIiBbYXVTbG90XT1cInN0YXRlLnNsb3RJdGVtQm9keVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSXRlbURlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmU6IFRlbXBsYXRlUmVmPEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcbn1cbmV4cG9ydCBjb25zdCBhY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RJdGVtU3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKEFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxBY2NvcmRpb25JdGVtUHJvcHM+ID0ge1xuXHRzbG90SXRlbVN0cnVjdHVyZTogYWNjb3JkaW9uSXRlbURlZmF1bHRTbG90SXRlbVN0cnVjdHVyZSxcbn07XG5cbkBDb21wb25lbnQoe1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuXHRzZWxlY3RvcjogJ1thdS1hY2NvcmRpb24taXRlbV0nLFxuXHRleHBvcnRBczogJ2F1QWNjb3JkaW9uSXRlbScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnXCJhY2NvcmRpb24taXRlbSBcIiArIHN0YXRlKCkuaXRlbUNsYXNzJyxcblx0XHQnW2lkXSc6ICdzdGF0ZSgpLml0ZW1JZCcsXG5cdH0sXG5cdGhvc3REaXJlY3RpdmVzOiBbXG5cdFx0e1xuXHRcdFx0ZGlyZWN0aXZlOiBVc2VEaXJlY3RpdmUsXG5cdFx0fSxcblx0XSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCIgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RJdGVtU3RydWN0dXJlXCI+PC9uZy10ZW1wbGF0ZT4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XG5cdEBJbnB1dCgpIHNsb3RJdGVtSGVhZGVyOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtSGVhZGVyRnJvbUNvbnRlbnQ6IEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSB8IG51bGw7XG5cdEBJbnB1dCgpIHNsb3RJdGVtQm9keTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEl0ZW1Cb2R5RnJvbUNvbnRlbnQ6IEFjY29yZGlvbkJvZHlEaXJlY3RpdmUgfCBudWxsO1xuXHRASW5wdXQoKSBzbG90SXRlbVN0cnVjdHVyZTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEl0ZW1TdHJ1Y3R1cmVGcm9tQ29udGVudDogQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSB8IG51bGw7XG5cblx0LyoqXG5cdCAqIFRoZSBpZCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uIEl0IGNhbiBiZSB1c2VkIGZvciBjb250cm9sbGluZyB0aGUgYWNjb3JkaW9uLWl0ZW0gdmlhIHRoZSBhY2NvcmRpb24gYXBpLlxuXHQgKi9cblx0QElucHV0KCkgaXRlbUlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSB3aGVuIGlzIHRvZ2dsZWQuXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCkgaXRlbUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBjb250ZW50IG9mIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NLiBJdCB3aWxsIGJlIGp1c3QgaGlkZGVuIG90aGVyd2lzZS5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1EZXN0cm95T25IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBkaXNhYmxlZC5cblx0ICogSXQgd2lsbCBub3QgcmVhY3QgdG8gdXNlcidzIGNsaWNrcywgYnV0IHN0aWxsIHdpbGwgYmUgcG9zc2libGUgdG8gdG9nZ2xlIHByb2dyYW1tYXRpY2FsbHkuXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtRGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGNvbGxhcHNlZC4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGV4cGFuZGVkLlxuXHQgKi9cblx0QElucHV0KCkgaXRlbUNvbGxhcHNlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBhbmltYXRlZC5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1BbmltYXRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaGVhZGVyIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCkgaXRlbUhlYWRlckNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2UgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtQnV0dG9uQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1Db2xsYXBzZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1Cb2R5Q2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICovXG5cdEBPdXRwdXQoKSBpdGVtU2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKi9cblx0QE91dHB1dCgpIGl0ZW1IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBgY29sbGFwc2VkYCB2YWx1ZSBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBuZXcgdmFsdWUgb2YgY29sbGFwc2VkLlxuXHQgKi9cblx0QE91dHB1dCgpIGl0ZW1Db2xsYXBzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0ZGVmYXVsdFNsb3RzID0gd3JpdGFibGUoZGVmYXVsdENvbmZpZyk7XG5cdHJlYWRvbmx5IGFkID0gaW5qZWN0KEFjY29yZGlvbkRpcmVjdGl2ZSk7XG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh0aGlzLmFkLmFwaS5yZWdpc3Rlckl0ZW0sIG51bGwsIGRlZmF1bHRDb25maWcpO1xuXHRyZWFkb25seSB3aWRnZXQgPSB0b1Nsb3RDb250ZXh0V2lkZ2V0KHRoaXMuX3dpZGdldCk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cdHVzZURpcmVjdGl2ZSA9IGluamVjdChVc2VEaXJlY3RpdmUpO1xuXHQvLyBUT0RPOiByZW1vdmUgXCJhcyBhbnlcIiB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC81MDE2MiBpcyBtZXJnZWRcblx0c3RhdGU6IFNpZ25hbDxBY2NvcmRpb25JdGVtU3RhdGU+ID0gdG9TaWduYWwodGhpcy5fd2lkZ2V0LnN0YXRlJCBhcyBhbnksIHtyZXF1aXJlU3luYzogdHJ1ZX0pO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRvbkl0ZW1Db2xsYXBzZWRDaGFuZ2U6IChjb2xsYXBzZWQpID0+IHRoaXMuaXRlbUNvbGxhcHNlZENoYW5nZS5lbWl0KGNvbGxhcHNlZCksXG5cdFx0XHRvbkl0ZW1IaWRkZW46ICgpID0+IHRoaXMuaXRlbUhpZGRlbi5lbWl0KCksXG5cdFx0XHRvbkl0ZW1TaG93bjogKCkgPT4gdGhpcy5pdGVtU2hvd24uZW1pdCgpLFxuXHRcdH0pO1xuXHRcdGVmZmVjdCgoKSA9PiB7XG5cdFx0XHQvLyBUT0RPOiB3b3JrYXJvdW5kIHRvIGJlIHJlbW92ZWQgd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy81MDMyMCBpcyBmaXhlZFxuXHRcdFx0dGhpcy5zdGF0ZSgpO1xuXHRcdH0pO1xuXHRcdHRoaXMudXNlRGlyZWN0aXZlLnVzZSA9IHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmFjY29yZGlvbkl0ZW1EaXJlY3RpdmU7XG5cdFx0dGhpcy51c2VEaXJlY3RpdmUubmdPbkNoYW5nZXMoe1xuXHRcdFx0dXNlRGlyZWN0aXZlOiB7XG5cdFx0XHRcdHByZXZpb3VzVmFsdWU6IHVuZGVmaW5lZCxcblx0XHRcdFx0Y3VycmVudFZhbHVlOiB0aGlzLnVzZURpcmVjdGl2ZS51c2UsXG5cdFx0XHRcdGZpcnN0Q2hhbmdlOiB0cnVlLFxuXHRcdFx0XHRpc0ZpcnN0Q2hhbmdlOiAoKSA9PiB0cnVlLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90SXRlbVN0cnVjdHVyZTogdGhpcy5zbG90SXRlbVN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RJdGVtSGVhZGVyOiB0aGlzLnNsb3RJdGVtSGVhZGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEl0ZW1Cb2R5OiB0aGlzLnNsb3RJdGVtQm9keUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRwYXRjaFNpbXBsZUNoYW5nZXModGhpcy5fd2lkZ2V0LnBhdGNoLCBjaGFuZ2VzKTtcblx0fVxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0cXVldWVNaWNyb3Rhc2soKCkgPT4gdGhpcy5hcGkuaW5pdERvbmUoKSk7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1QWNjb3JkaW9uXScsXG5cdGV4cG9ydEFzOiAnYXVBY2NvcmRpb24nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnXCJhY2NvcmRpb24gXCIgKyBzdGF0ZSQoKS5jbGFzc05hbWUnLFxuXHR9LFxuXHRob3N0RGlyZWN0aXZlczogW1xuXHRcdHtcblx0XHRcdGRpcmVjdGl2ZTogVXNlRGlyZWN0aXZlLFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdHVzZURpcmVjdGl2ZSA9IGluamVjdChVc2VEaXJlY3RpdmUpO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIG9ubHkgb25lIGl0ZW0gYXQgdGhlIHRpbWUgY2FuIHN0YXkgb3Blbi5cblx0ICovXG5cdEBJbnB1dCgpIGNsb3NlT3RoZXJzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2hvd24uXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIGlkIG9mIHRoZSBpdGVtLlxuXHQgKi9cblx0QE91dHB1dCgpIHNob3duOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgaWQgb2YgdGhlIGl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCkgaGlkZGVuOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdC8qKlxuXHQgKiBUaGUgaWQgb2YgdGhlIGFjY29yZGlvbi1pdGVtLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29udHJvbGxpbmcgdGhlIGFjY29yZGlvbi1pdGVtIHZpYSB0aGUgYWNjb3JkaW9uIGFwaS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1JZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgY29udGVudCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIERPTS4gSXQgd2lsbCBiZSBqdXN0IGhpZGRlbiBvdGhlcndpc2UuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtRGVzdHJveU9uSGlkZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgZGlzYWJsZWQuXG5cdCAqIEl0IHdpbGwgbm90IHJlYWN0IHRvIHVzZXIncyBjbGlja3MsIGJ1dCBzdGlsbCB3aWxsIGJlIHBvc3NpYmxlIHRvIHRvZ2dsZSBwcm9ncmFtbWF0aWNhbGx5LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCkgaXRlbURpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBjb2xsYXBzZWQuIE90aGVyd2lzZSwgaXQgd2lsbCBiZSBleHBhbmRlZC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1Db2xsYXBzZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtQW5pbWF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2Ugd2hlbiBpcyB0b2dnbGVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCkgaXRlbVRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblx0QElucHV0KCkgc2xvdEl0ZW1TdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QElucHV0KCkgc2xvdEl0ZW1Cb2R5OiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBJbnB1dCgpIHNsb3RJdGVtSGVhZGVyOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBoZWFkZXIgRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtSGVhZGVyQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSB0b2dnbGUgYnV0dG9uIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCkgaXRlbUJ1dHRvbkNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2UgRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtQ29sbGFwc2VDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtQm9keUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Ly9zaG91bGQgbm90IGJlIGRvY3VtZW50ZWRcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBPdXRwdXQoKSBpdGVtU2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QE91dHB1dCgpIGl0ZW1IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBgY29sbGFwc2VkYCB2YWx1ZSBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBuZXcgdmFsdWUgb2YgY29sbGFwc2VkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QE91dHB1dCgpIGl0ZW1Db2xsYXBzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KGNyZWF0ZUFjY29yZGlvbiwgJ2FjY29yZGlvbicsIHt9KTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblxuXHQvLyBUT0RPOiByZW1vdmUgXCJhcyBhbnlcIiB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC81MDE2MiBpcyBtZXJnZWRcblx0c3RhdGUkOiBTaWduYWw8QWNjb3JkaW9uU3RhdGU+ID0gdG9TaWduYWwodGhpcy5fd2lkZ2V0LnN0YXRlJCBhcyBhbnksIHtyZXF1aXJlU3luYzogdHJ1ZX0pO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudXNlRGlyZWN0aXZlLnVzZSA9IHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmFjY29yZGlvbkRpcmVjdGl2ZTtcblx0XHR0aGlzLnVzZURpcmVjdGl2ZS5uZ09uQ2hhbmdlcyh7XG5cdFx0XHR1c2VEaXJlY3RpdmU6IHtcblx0XHRcdFx0cHJldmlvdXNWYWx1ZTogdW5kZWZpbmVkLFxuXHRcdFx0XHRjdXJyZW50VmFsdWU6IHRoaXMudXNlRGlyZWN0aXZlLnVzZSxcblx0XHRcdFx0Zmlyc3RDaGFuZ2U6IHRydWUsXG5cdFx0XHRcdGlzRmlyc3RDaGFuZ2U6ICgpID0+IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRvbkl0ZW1Db2xsYXBzZWRDaGFuZ2U6IChjb2xsYXBzZWQpID0+IHRoaXMuaXRlbUNvbGxhcHNlZENoYW5nZS5lbWl0KGNvbGxhcHNlZCksXG5cdFx0XHRvbkl0ZW1IaWRkZW46ICgpID0+IHRoaXMuaXRlbUhpZGRlbi5lbWl0KCksXG5cdFx0XHRvbkl0ZW1TaG93bjogKCkgPT4gdGhpcy5pdGVtU2hvd24uZW1pdCgpLFxuXHRcdFx0b25TaG93bjogKGlkKSA9PiB0aGlzLnNob3duLmVtaXQoaWQpLFxuXHRcdFx0b25IaWRkZW46IChpZCkgPT4gdGhpcy5oaWRkZW4uZW1pdChpZCksXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
