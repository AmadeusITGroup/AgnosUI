const t=`import { ChangeDetectionStrategy, Component, ContentChild, Directive, effect, EventEmitter, inject, Input, Output, TemplateRef, ViewChild, } from '@angular/core';
import { NgIf } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { callWidgetFactory, ComponentTemplate, SlotDirective } from '../slot.directive';
import { createAccordion, toSlotContextWidget } from '@agnos-ui/core';
import { patchSimpleChanges } from '../utils';
import { UseDirective } from '../transition/use.directive';
import { writable } from '@amadeus-it-group/tansu';
import * as i0 from "@angular/core";
import * as i1 from "../transition/use.directive";
export class AccordionBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.0", type: AccordionBodyDirective, isStandalone: true, selector: "ng-template[auAccordionItemBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionBodyDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.0", type: AccordionHeaderDirective, isStandalone: true, selector: "ng-template[auAccordionItemHeader]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionHeaderDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionItemStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.0", type: AccordionItemStructureDirective, isStandalone: true, selector: "ng-template[auAccordionItemStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionItemStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAccordionItemStructure]', standalone: true }]
        }] });
export class AccordionItemDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionItemDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.0", type: AccordionItemDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \`
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionItemDefaultSlotsComponent, decorators: [{
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
export const accordionItemDefaultslotItemStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotItemStructure: accordionItemDefaultslotItemStructure,
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.0", type: AccordionItemComponent, isStandalone: true, selector: "[au-accordion-item]", inputs: { slotItemHeader: "slotItemHeader", slotItemBody: "slotItemBody", slotItemStructure: "slotItemStructure", itemId: "itemId", itemTransition: "itemTransition", itemClass: "itemClass", itemDestroyOnHide: "itemDestroyOnHide", itemDisabled: "itemDisabled", itemCollapsed: "itemCollapsed", itemAnimation: "itemAnimation", itemHeaderClass: "itemHeaderClass", itemButtonClass: "itemButtonClass", itemCollapseClass: "itemCollapseClass", itemBodyClass: "itemBodyClass" }, outputs: { itemShown: "itemShown", itemHidden: "itemHidden", itemCollapsedChange: "itemCollapsedChange" }, host: { properties: { "class": "\\"accordion-item \\" + state().itemClass", "id": "state().itemId" } }, queries: [{ propertyName: "slotItemHeaderFromContent", first: true, predicate: AccordionHeaderDirective, descendants: true }, { propertyName: "slotItemBodyFromContent", first: true, predicate: AccordionBodyDirective, descendants: true }, { propertyName: "slotItemStructureFromContent", first: true, predicate: AccordionItemStructureDirective, descendants: true }], exportAs: ["auAccordionItem"], usesOnChanges: true, hostDirectives: [{ directive: i1.UseDirective }], ngImport: i0, template: \` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> \`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionItemComponent, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.0", type: AccordionDirective, isStandalone: true, selector: "[auAccordion]", inputs: { closeOthers: "closeOthers", accordionClass: "accordionClass", itemId: "itemId", itemDestroyOnHide: "itemDestroyOnHide", itemDisabled: "itemDisabled", itemCollapsed: "itemCollapsed", itemAnimation: "itemAnimation", itemTransition: "itemTransition", slotItemStructure: "slotItemStructure", slotItemBody: "slotItemBody", slotItemHeader: "slotItemHeader", itemClass: "itemClass", itemHeaderClass: "itemHeaderClass", itemButtonClass: "itemButtonClass", itemCollapseClass: "itemCollapseClass", itemBodyClass: "itemBodyClass" }, outputs: { shown: "shown", hidden: "hidden", itemShown: "itemShown", itemHidden: "itemHidden", itemCollapsedChange: "itemCollapsedChange" }, host: { properties: { "class": "\\"accordion \\" + state$().accordionClass" } }, exportAs: ["auAccordion"], usesOnChanges: true, hostDirectives: [{ directive: i1.UseDirective }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AccordionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[auAccordion]',
                    exportAs: 'auAccordion',
                    standalone: true,
                    host: {
                        '[class]': '"accordion " + state$().accordionClass',
                    },
                    hostDirectives: [
                        {
                            directive: UseDirective,
                        },
                    ],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { closeOthers: [{
                type: Input
            }], accordionClass: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFcEQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBT3RGLE9BQU8sRUFBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBWWpELE1BQU0sT0FBTyxzQkFBc0I7SUFEbkM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQXdELENBQUEsQ0FBQyxDQUFDO0tBSXRGO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQTJCLEVBQUUsT0FBZ0I7UUFDMUUsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzhHQUpXLHNCQUFzQjtrR0FBdEIsc0JBQXNCOzsyRkFBdEIsc0JBQXNCO2tCQURsQyxTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLGtDQUFrQyxFQUFFLFVBQVUsRUFBRSxJ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QUs7Z0JBT0ksS0FBSztzQkFBZCxNQUFNO2dCQU1HLE1BQU07c0JBQWYsTUFBTTtnQkFPRSxNQUFNO3NCQUFkLEtBQUs7Z0JBTUcsaUJBQWlCO3NCQUF6QixLQUFLO2dCQU9HLFlBQVk7c0JBQXBCLEtBQUs7Z0JBTUcsYUFBYTtzQkFBckIsS0FBSztnQkFNRyxhQUFhO3NCQUFyQixLQUFLO2dCQU1HLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFNRyxTQUFTO3NCQUFqQixLQUFLO2dCQU1HLGVBQWU7c0JBQXZCLEtBQUs7Z0JBTUcsZUFBZTtzQkFBdkIsS0FBSztnQkFNRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBTUcsYUFBYTtzQkFBckIsS0FBSztnQkFRSSxTQUFTO3NCQUFsQixNQUFNO2dCQU1HLFVBQVU7c0JBQW5CLE1BQU07Z0JBUUcsbUJBQW1CO3NCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyVmlld0luaXQsIFNpZ25hbCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRlZmZlY3QsXG5cdEV2ZW50RW1pdHRlcixcblx0aW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7dG9TaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB0eXBlIHtBZGFwdFdpZGdldFNsb3RzLCBBZGFwdFNsb3RDb250ZW50UHJvcHN9IGZyb20gJy4uL3Nsb3QuZGlyZWN0aXZlJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3RvcnksIENvbXBvbmVudFRlbXBsYXRlLCBTbG90RGlyZWN0aXZlfSBmcm9tICcuLi9zbG90LmRpcmVjdGl2ZSc7XG5pbXBvcnQgdHlwZSB7XG5cdEFjY29yZGlvbkl0ZW1XaWRnZXQgYXMgQWNjb3JkaW9uSXRlbVdpZGdldENvcmUsXG5cdEFjY29yZGlvbkl0ZW1Db250ZXh0IGFzIEFjY29yZGlvbkl0ZW1Db3JlQ29udGV4dCxcblx0VHJhbnNpdGlvbkZuLFxuXHRTbG90Q29udGVudCxcbn0gZnJvbSAnQGFnbm9zLXVpL2NvcmUnO1xuaW1wb3J0IHtjcmVhdGVBY2NvcmRpb24sIHRvU2xvdENvbnRleHRXaWRnZXR9IGZyb20gJ0BhZ25vcy11aS9jb3JlJztcbmltcG9ydCB0eXBlIHtXaWRnZXRQcm9wcywgV2lkZ2V0U3RhdGV9IGZyb20gJ0BhZ25vcy11aS9jb3JlJztcbmltcG9ydCB7cGF0Y2hTaW1wbGVDaGFuZ2VzfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge1VzZURpcmVjdGl2ZX0gZnJvbSAnLi4vdHJhbnNpdGlvbi91c2UuZGlyZWN0aXZlJztcbmltcG9ydCB7d3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcblxuZXhwb3J0IHR5cGUgQWNjb3JkaW9uV2lkZ2V0ID0gQWRhcHRXaWRnZXRTbG90czxSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVBY2NvcmRpb24+PjtcbmV4cG9ydCB0eXBlIEFjY29yZGlvblByb3BzID0gV2lkZ2V0UHJvcHM8QWNjb3JkaW9uV2lkZ2V0PjtcbmV4cG9ydCB0eXBlIEFjY29yZGlvblN0YXRlID0gV2lkZ2V0U3RhdGU8QWNjb3JkaW9uV2lkZ2V0PjtcblxuZXhwb3J0IHR5cGUgQWNjb3JkaW9uSXRlbVdpZGdldCA9IEFkYXB0V2lkZ2V0U2xvdHM8QWNjb3JkaW9uSXRlbVdpZGdldENvcmU+O1xuZXhwb3J0IHR5cGUgQWNjb3JkaW9uSXRlbVByb3BzID0gV2lkZ2V0UHJvcHM8QWNjb3JkaW9uSXRlbVdpZGdldD47XG5leHBvcnQgdHlwZSBJdGVtU3RhdGUgPSBXaWRnZXRTdGF0ZTxBY2NvcmRpb25JdGVtV2lkZ2V0PjtcbmV4cG9ydCB0eXBlIEFjY29yZGlvbkl0ZW1Db250ZXh0ID0gQWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db3JlQ29udGV4dD47XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtQm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFjY29yZGlvbkl0ZW1IZWFkZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFjY29yZGlvbkl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWNjb3JkaW9uSXRlbVN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBOZ0lmLCBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIEFjY29yZGlvbkJvZHlEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0PGgyIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlciB7eyBzdGF0ZS5pdGVtSGVhZGVyQ2xhc3MgfX1cIj5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdGlkPVwie3sgc3RhdGUuaXRlbUlkIH19LXRvZ2dsZVwiXG5cdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLmNsaWNrKClcIlxuXHRcdFx0XHRcdFtjbGFzcy5jb2xsYXBzZWRdPVwic3RhdGUuaXRlbUNvbGxhcHNlZFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJhY2NvcmRpb24tYnV0dG9uIHt7IHN0YXRlLml0ZW1CdXR0b25DbGFzcyB9fVwiXG5cdFx0XHRcdFx0W2Rpc2FibGVkXT1cInN0YXRlLml0ZW1EaXNhYmxlZFwiXG5cdFx0XHRcdFx0YXR0ci5hcmlhLWNvbnRyb2xzPVwie3sgc3RhdGUuaXRlbUlkIH19LWNvbGxhcHNlXCJcblx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLml0ZW1EaXNhYmxlZFwiXG5cdFx0XHRcdFx0W2F0dHIuYXJpYS1leHBhbmRlZF09XCIhc3RhdGUuaXRlbUNvbGxhcHNlZFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUuc2xvdEl0ZW1IZWFkZXJcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvaDI+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdCpuZ0lmPVwic3RhdGUuc2hvdWxkQmVJbkRPTVwiXG5cdFx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jb2xsYXBzZURpcmVjdGl2ZVwiXG5cdFx0XHRcdGF0dHIuYXJpYS1sYWJlbGxlZGJ5PVwie3sgc3RhdGUuaXRlbUlkIH19LXRvZ2dsZVwiXG5cdFx0XHRcdGlkPVwie3sgc3RhdGUuaXRlbUlkIH19LWNvbGxhcHNlXCJcblx0XHRcdFx0Y2xhc3M9XCJhY2NvcmRpb24tY29sbGFwc2Uge3sgc3RhdGUuaXRlbUNvbGxhcHNlQ2xhc3MgfX1cIlxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWJvZHkge3sgc3RhdGUuaXRlbUJvZHlDbGFzcyB9fVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCIgW2F1U2xvdF09XCJzdGF0ZS5zbG90SXRlbUJvZHlcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxBY2NvcmRpb25JdGVtQ29udGV4dD47XG59XG5leHBvcnQgY29uc3QgYWNjb3JkaW9uSXRlbURlZmF1bHRzbG90SXRlbVN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShBY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IFBhcnRpYWw8QWNjb3JkaW9uSXRlbVByb3BzPiA9IHtcblx0c2xvdEl0ZW1TdHJ1Y3R1cmU6IGFjY29yZGlvbkl0ZW1EZWZhdWx0c2xvdEl0ZW1TdHJ1Y3R1cmUsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3Jcblx0c2VsZWN0b3I6ICdbYXUtYWNjb3JkaW9uLWl0ZW1dJyxcblx0ZXhwb3J0QXM6ICdhdUFjY29yZGlvbkl0ZW0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ1wiYWNjb3JkaW9uLWl0ZW0gXCIgKyBzdGF0ZSgpLml0ZW1DbGFzcycsXG5cdFx0J1tpZF0nOiAnc3RhdGUoKS5pdGVtSWQnLFxuXHR9LFxuXHRob3N0RGlyZWN0aXZlczogW1xuXHRcdHtcblx0XHRcdGRpcmVjdGl2ZTogVXNlRGlyZWN0aXZlLFxuXHRcdH0sXG5cdF0sXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUoKS5zbG90SXRlbVN0cnVjdHVyZVwiPjwvbmctdGVtcGxhdGU+IGAsXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyVmlld0luaXQge1xuXHRASW5wdXQoKSBzbG90SXRlbUhlYWRlcjogU2xvdENvbnRlbnQ8QWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db3JlQ29udGV4dD4+O1xuXHRAQ29udGVudENoaWxkKEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90SXRlbUhlYWRlckZyb21Db250ZW50OiBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUgfCBudWxsO1xuXHRASW5wdXQoKSBzbG90SXRlbUJvZHk6IFNsb3RDb250ZW50PEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29yZUNvbnRleHQ+Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtQm9keUZyb21Db250ZW50OiBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlIHwgbnVsbDtcblx0QElucHV0KCkgc2xvdEl0ZW1TdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29yZUNvbnRleHQ+Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtU3RydWN0dXJlRnJvbUNvbnRlbnQ6IEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUgfCBudWxsO1xuXG5cdC8qKlxuXHQgKiBUaGUgaWQgb2YgdGhlIGFjY29yZGlvbi1pdGVtLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29udHJvbGxpbmcgdGhlIGFjY29yZGlvbi1pdGVtIHZpYSB0aGUgYWNjb3JkaW9uIGFwaS5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1JZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2Ugd2hlbiBpcyB0b2dnbGVkLlxuXHQgKi9cblx0QElucHV0KCkgaXRlbVRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgY29udGVudCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIERPTS4gSXQgd2lsbCBiZSBqdXN0IGhpZGRlbiBvdGhlcndpc2UuXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtRGVzdHJveU9uSGlkZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgZGlzYWJsZWQuXG5cdCAqIEl0IHdpbGwgbm90IHJlYWN0IHRvIHVzZXIncyBjbGlja3MsIGJ1dCBzdGlsbCB3aWxsIGJlIHBvc3NpYmxlIHRvIHRvZ2dsZSBwcm9ncmFtbWF0aWNhbGx5LlxuXHQgKi9cblx0QElucHV0KCkgaXRlbURpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBjb2xsYXBzZWQuIE90aGVyd2lzZSwgaXQgd2lsbCBiZSBleHBhbmRlZC5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1Db2xsYXBzZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtQW5pbWF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1IZWFkZXJDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCkgaXRlbUJ1dHRvbkNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2UgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtQ29sbGFwc2VDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtQm9keUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2hvd24uXG5cdCAqL1xuXHRAT3V0cHV0KCkgaXRlbVNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICovXG5cdEBPdXRwdXQoKSBpdGVtSGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgYGNvbGxhcHNlZGAgdmFsdWUgY2hhbmdlcy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgbmV3IHZhbHVlIG9mIGNvbGxhcHNlZC5cblx0ICovXG5cdEBPdXRwdXQoKSBpdGVtQ29sbGFwc2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdGRlZmF1bHRTbG90cyA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXHRyZWFkb25seSBhZCA9IGluamVjdChBY2NvcmRpb25EaXJlY3RpdmUpO1xuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3RvcnkodGhpcy5hZC5hcGkucmVnaXN0ZXJJdGVtLCBudWxsLCBkZWZhdWx0Q29uZmlnKTtcblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXHR1c2VEaXJlY3RpdmUgPSBpbmplY3QoVXNlRGlyZWN0aXZlKTtcblx0Ly8gVE9ETzogcmVtb3ZlIFwiYXMgYW55XCIgd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL3B1bGwvNTAxNjIgaXMgbWVyZ2VkXG5cdHN0YXRlOiBTaWduYWw8SXRlbVN0YXRlPiA9IHRvU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQgYXMgYW55LCB7cmVxdWlyZVN5bmM6IHRydWV9KTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0b25JdGVtQ29sbGFwc2VkQ2hhbmdlOiAoY29sbGFwc2VkKSA9PiB0aGlzLml0ZW1Db2xsYXBzZWRDaGFuZ2UuZW1pdChjb2xsYXBzZWQpLFxuXHRcdFx0b25JdGVtSGlkZGVuOiAoKSA9PiB0aGlzLml0ZW1IaWRkZW4uZW1pdCgpLFxuXHRcdFx0b25JdGVtU2hvd246ICgpID0+IHRoaXMuaXRlbVNob3duLmVtaXQoKSxcblx0XHR9KTtcblx0XHRlZmZlY3QoKCkgPT4ge1xuXHRcdFx0Ly8gVE9ETzogd29ya2Fyb3VuZCB0byBiZSByZW1vdmVkIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNTAzMjAgaXMgZml4ZWRcblx0XHRcdHRoaXMuc3RhdGUoKTtcblx0XHR9KTtcblx0XHR0aGlzLnVzZURpcmVjdGl2ZS51c2UgPSB0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5hY2NvcmRpb25JdGVtRGlyZWN0aXZlO1xuXHRcdHRoaXMudXNlRGlyZWN0aXZlLm5nT25DaGFuZ2VzKHtcblx0XHRcdHVzZURpcmVjdGl2ZToge1xuXHRcdFx0XHRwcmV2aW91c1ZhbHVlOiB1bmRlZmluZWQsXG5cdFx0XHRcdGN1cnJlbnRWYWx1ZTogdGhpcy51c2VEaXJlY3RpdmUudXNlLFxuXHRcdFx0XHRmaXJzdENoYW5nZTogdHJ1ZSxcblx0XHRcdFx0aXNGaXJzdENoYW5nZTogKCkgPT4gdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdEl0ZW1TdHJ1Y3R1cmU6IHRoaXMuc2xvdEl0ZW1TdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SXRlbUhlYWRlcjogdGhpcy5zbG90SXRlbUhlYWRlckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RJdGVtQm9keTogdGhpcy5zbG90SXRlbUJvZHlGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHF1ZXVlTWljcm90YXNrKCgpID0+IHRoaXMuYXBpLmluaXREb25lKCkpO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdUFjY29yZGlvbl0nLFxuXHRleHBvcnRBczogJ2F1QWNjb3JkaW9uJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ1wiYWNjb3JkaW9uIFwiICsgc3RhdGUkKCkuYWNjb3JkaW9uQ2xhc3MnLFxuXHR9LFxuXHRob3N0RGlyZWN0aXZlczogW1xuXHRcdHtcblx0XHRcdGRpcmVjdGl2ZTogVXNlRGlyZWN0aXZlLFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdHVzZURpcmVjdGl2ZSA9IGluamVjdChVc2VEaXJlY3RpdmUpO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIG9ubHkgb25lIGl0ZW0gYXQgdGhlIHRpbWUgY2FuIHN0YXkgb3Blbi5cblx0ICovXG5cdEBJbnB1dCgpIGNsb3NlT3RoZXJzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbiBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgpIGFjY29yZGlvbkNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgaWQgb2YgdGhlIGl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCkgc2hvd246IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBpZCBvZiB0aGUgaXRlbS5cblx0ICovXG5cdEBPdXRwdXQoKSBoaWRkZW46IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0LyoqXG5cdCAqIFRoZSBpZCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uIEl0IGNhbiBiZSB1c2VkIGZvciBjb250cm9sbGluZyB0aGUgYWNjb3JkaW9uLWl0ZW0gdmlhIHRoZSBhY2NvcmRpb24gYXBpLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCkgaXRlbUlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBjb250ZW50IG9mIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NLiBJdCB3aWxsIGJlIGp1c3QgaGlkZGVuIG90aGVyd2lzZS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1EZXN0cm95T25IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBkaXNhYmxlZC5cblx0ICogSXQgd2lsbCBub3QgcmVhY3QgdG8gdXNlcidzIGNsaWNrcywgYnV0IHN0aWxsIHdpbGwgYmUgcG9zc2libGUgdG8gdG9nZ2xlIHByb2dyYW1tYXRpY2FsbHkuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtRGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGNvbGxhcHNlZC4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGV4cGFuZGVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCkgaXRlbUNvbGxhcHNlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBhbmltYXRlZC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1BbmltYXRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSB3aGVuIGlzIHRvZ2dsZWQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXHRASW5wdXQoKSBzbG90SXRlbVN0cnVjdHVyZTogU2xvdENvbnRlbnQ8QWRhcHRTbG90Q29udGVudFByb3BzPEFjY29yZGlvbkl0ZW1Db3JlQ29udGV4dD4+O1xuXHRASW5wdXQoKSBzbG90SXRlbUJvZHk6IFNsb3RDb250ZW50PEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29yZUNvbnRleHQ+Pjtcblx0QElucHV0KCkgc2xvdEl0ZW1IZWFkZXI6IFNsb3RDb250ZW50PEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29yZUNvbnRleHQ+Pjtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBET00gZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1IZWFkZXJDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIHRvZ2dsZSBidXR0b24gRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtQnV0dG9uQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSBET00gZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1Db2xsYXBzZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBET00gZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgpIGl0ZW1Cb2R5Q2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvL3Nob3VsZCBub3QgYmUgZG9jdW1lbnRlZFxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIHNob3duLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QE91dHB1dCgpIGl0ZW1TaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBoaWRkZW4uXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCkgaXRlbUhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gdGhlIGBjb2xsYXBzZWRgIHZhbHVlIGNoYW5nZXMuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIG5ldyB2YWx1ZSBvZiBjb2xsYXBzZWQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCkgaXRlbUNvbGxhcHNlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3RvcnkoY3JlYXRlQWNjb3JkaW9uLCAnYWNjb3JkaW9uJywge30pO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXG5cdC8vIFRPRE86IHJlbW92ZSBcImFzIGFueVwiIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzUwMTYyIGlzIG1lcmdlZFxuXHRzdGF0ZSQ6IFNpZ25hbDxBY2NvcmRpb25TdGF0ZT4gPSB0b1NpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkIGFzIGFueSwge3JlcXVpcmVTeW5jOiB0cnVlfSk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy51c2VEaXJlY3RpdmUudXNlID0gdGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYWNjb3JkaW9uRGlyZWN0aXZlO1xuXHRcdHRoaXMudXNlRGlyZWN0aXZlLm5nT25DaGFuZ2VzKHtcblx0XHRcdHVzZURpcmVjdGl2ZToge1xuXHRcdFx0XHRwcmV2aW91c1ZhbHVlOiB1bmRlZmluZWQsXG5cdFx0XHRcdGN1cnJlbnRWYWx1ZTogdGhpcy51c2VEaXJlY3RpdmUudXNlLFxuXHRcdFx0XHRmaXJzdENoYW5nZTogdHJ1ZSxcblx0XHRcdFx0aXNGaXJzdENoYW5nZTogKCkgPT4gdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdG9uSXRlbUNvbGxhcHNlZENoYW5nZTogKGNvbGxhcHNlZCkgPT4gdGhpcy5pdGVtQ29sbGFwc2VkQ2hhbmdlLmVtaXQoY29sbGFwc2VkKSxcblx0XHRcdG9uSXRlbUhpZGRlbjogKCkgPT4gdGhpcy5pdGVtSGlkZGVuLmVtaXQoKSxcblx0XHRcdG9uSXRlbVNob3duOiAoKSA9PiB0aGlzLml0ZW1TaG93bi5lbWl0KCksXG5cdFx0XHRvblNob3duOiAoaWQpID0+IHRoaXMuc2hvd24uZW1pdChpZCksXG5cdFx0XHRvbkhpZGRlbjogKGlkKSA9PiB0aGlzLmhpZGRlbi5lbWl0KGlkKSxcblx0XHR9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRwYXRjaFNpbXBsZUNoYW5nZXModGhpcy5fd2lkZ2V0LnBhdGNoLCBjaGFuZ2VzKTtcblx0fVxufVxuIl19`;export{t as default};
