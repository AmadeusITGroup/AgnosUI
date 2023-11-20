const t=`import { ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createAccordion, patchSimpleChanges, toAngularSignal, toSlotContextWidget, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import * as i0 from "@angular/core";
export class AccordionBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.3", type: AccordionBodyDirective, isStandalone: true, selector: "ng-template[auAccordionItemBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionBodyDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.3", type: AccordionHeaderDirective, isStandalone: true, selector: "ng-template[auAccordionItemHeader]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionHeaderDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionItemStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.3", type: AccordionItemStructureDirective, isStandalone: true, selector: "ng-template[auAccordionItemStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionItemStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAccordionItemStructure]', standalone: true }]
        }] });
export class AccordionItemDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionItemDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.3", type: AccordionItemDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \`
		<ng-template #structure let-state="state" let-widget="widget">
			@switch (state.itemHeadingTag) {
				@case ('h1') {
					<ng-container [ngTemplateOutlet]="h1"></ng-container>
				}
				@case ('h2') {
					<ng-container [ngTemplateOutlet]="h2"></ng-container>
				}
				@case ('h3') {
					<ng-container [ngTemplateOutlet]="h3"></ng-container>
				}
				@case ('h4') {
					<ng-container [ngTemplateOutlet]="h4"></ng-container>
				}
				@case ('h5') {
					<ng-container [ngTemplateOutlet]="h5"></ng-container>
				}
				@case ('h6') {
					<ng-container [ngTemplateOutlet]="h6"></ng-container>
				}
				@default {
					<ng-container [ngTemplateOutlet]="h2"></ng-container>
				}
			}

			<ng-template #h1>
				<h1 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h1>
			</ng-template>

			<ng-template #h2>
				<h2 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h2>
			</ng-template>

			<ng-template #h3>
				<h3 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h3>
			</ng-template>

			<ng-template #h4>
				<h4 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h4>
			</ng-template>

			<ng-template #h5>
				<h5 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h5>
			</ng-template>
			<ng-template #h6>
				<h6 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h6>
			</ng-template>

			<ng-template #button>
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
			</ng-template>
			@if (state.shouldBeInDOM) {
				<div
					[auUse]="widget.directives.collapseDirective"
					attr.aria-labelledby="{{ state.itemId }}-toggle"
					id="{{ state.itemId }}-collapse"
					class="accordion-collapse {{ state.itemCollapseClass }}"
				>
					<div class="accordion-body {{ state.itemBodyClass }}">
						<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemBody"></ng-template>
					</div>
				</div>
			}
		</ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionItemDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [UseDirective, SlotDirective, AccordionHeaderDirective, AccordionBodyDirective, NgTemplateOutlet],
                    template: \`
		<ng-template #structure let-state="state" let-widget="widget">
			@switch (state.itemHeadingTag) {
				@case ('h1') {
					<ng-container [ngTemplateOutlet]="h1"></ng-container>
				}
				@case ('h2') {
					<ng-container [ngTemplateOutlet]="h2"></ng-container>
				}
				@case ('h3') {
					<ng-container [ngTemplateOutlet]="h3"></ng-container>
				}
				@case ('h4') {
					<ng-container [ngTemplateOutlet]="h4"></ng-container>
				}
				@case ('h5') {
					<ng-container [ngTemplateOutlet]="h5"></ng-container>
				}
				@case ('h6') {
					<ng-container [ngTemplateOutlet]="h6"></ng-container>
				}
				@default {
					<ng-container [ngTemplateOutlet]="h2"></ng-container>
				}
			}

			<ng-template #h1>
				<h1 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h1>
			</ng-template>

			<ng-template #h2>
				<h2 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h2>
			</ng-template>

			<ng-template #h3>
				<h3 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h3>
			</ng-template>

			<ng-template #h4>
				<h4 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h4>
			</ng-template>

			<ng-template #h5>
				<h5 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h5>
			</ng-template>
			<ng-template #h6>
				<h6 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h6>
			</ng-template>

			<ng-template #button>
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
			</ng-template>
			@if (state.shouldBeInDOM) {
				<div
					[auUse]="widget.directives.collapseDirective"
					attr.aria-labelledby="{{ state.itemId }}-toggle"
					id="{{ state.itemId }}-collapse"
					class="accordion-collapse {{ state.itemCollapseClass }}"
				>
					<div class="accordion-body {{ state.itemBodyClass }}">
						<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemBody"></ng-template>
					</div>
				</div>
			}
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
        this.state = toAngularSignal(this._widget.state$);
        useDirectiveForHost(this._widget.directives.accordionItemDirective);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "17.0.3", type: AccordionItemComponent, isStandalone: true, selector: "[auAccordionItem]", inputs: { slotItemHeader: ["auSlotItemHeader", "slotItemHeader"], slotItemBody: ["auSlotItemBody", "slotItemBody"], slotItemStructure: ["auSlotItemStructure", "slotItemStructure"], itemId: ["auItemId", "itemId"], itemTransition: ["auItemTransition", "itemTransition"], itemClass: ["auItemClass", "itemClass"], itemDestroyOnHide: ["auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: ["auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: ["auItemVisible", "itemVisible", auBooleanAttribute], itemAnimation: ["auItemAnimation", "itemAnimation", auBooleanAttribute], itemHeaderClass: ["auItemHeaderClass", "itemHeaderClass"], itemButtonClass: ["auItemButtonClass", "itemButtonClass"], itemCollapseClass: ["auItemCollapseClass", "itemCollapseClass"], itemBodyClass: ["auItemBodyClass", "itemBodyClass"], itemHeadingTag: ["auItemHeadingTag", "itemHeadingTag"] }, outputs: { itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, host: { properties: { "class": "\\"accordion-item \\" + state().itemClass", "id": "state().itemId" } }, queries: [{ propertyName: "slotItemHeaderFromContent", first: true, predicate: AccordionHeaderDirective, descendants: true }, { propertyName: "slotItemBodyFromContent", first: true, predicate: AccordionBodyDirective, descendants: true }, { propertyName: "slotItemStructureFromContent", first: true, predicate: AccordionItemStructureDirective, descendants: true }], exportAs: ["auAccordionItem"], usesOnChanges: true, ngImport: i0, template: \` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> \`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionItemComponent, decorators: [{
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
                    imports: [SlotDirective, UseDirective],
                    template: \` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> \`,
                }]
        }], ctorParameters: () => [], propDecorators: { slotItemHeader: [{
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
                args: [{ alias: 'auItemDestroyOnHide', transform: auBooleanAttribute }]
            }], itemDisabled: [{
                type: Input,
                args: [{ alias: 'auItemDisabled', transform: auBooleanAttribute }]
            }], itemVisible: [{
                type: Input,
                args: [{ alias: 'auItemVisible', transform: auBooleanAttribute }]
            }], itemAnimation: [{
                type: Input,
                args: [{ alias: 'auItemAnimation', transform: auBooleanAttribute }]
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
            }], itemHeadingTag: [{
                type: Input,
                args: ['auItemHeadingTag']
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
        useDirectiveForHost(this._widget.directives.accordionDirective);
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "17.0.3", type: AccordionDirective, isStandalone: true, selector: "[auAccordion]", inputs: { closeOthers: ["auCloseOthers", "closeOthers", auBooleanAttribute], className: ["auClassName", "className"], itemId: ["auItemId", "itemId"], itemDestroyOnHide: ["auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: ["auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: ["auItemVisible", "itemVisible", auBooleanAttribute], itemAnimation: ["auItemAnimation", "itemAnimation", auBooleanAttribute], itemTransition: ["auItemTransition", "itemTransition"], slotItemStructure: ["auSlotItemStructure", "slotItemStructure"], slotItemBody: ["auSlotItemBody", "slotItemBody"], slotItemHeader: ["auSlotItemHeader", "slotItemHeader"], itemClass: ["auItemClass", "itemClass"], itemHeaderClass: ["auItemHeaderClass", "itemHeaderClass"], itemButtonClass: ["auItemButtonClass", "itemButtonClass"], itemCollapseClass: ["auItemCollapseClass", "itemCollapseClass"], itemBodyClass: ["auItemBodyClass", "itemBodyClass"], itemHeadingTag: ["auItemHeadingTag", "itemHeadingTag"] }, outputs: { shown: "auShown", hidden: "auHidden", itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, host: { properties: { "class": "\\"accordion \\" + state$().className" } }, exportAs: ["auAccordion"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AccordionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[auAccordion]',
                    exportAs: 'auAccordion',
                    standalone: true,
                    host: {
                        '[class]': '"accordion " + state$().className',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { closeOthers: [{
                type: Input,
                args: [{ alias: 'auCloseOthers', transform: auBooleanAttribute }]
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
                args: [{ alias: 'auItemDestroyOnHide', transform: auBooleanAttribute }]
            }], itemDisabled: [{
                type: Input,
                args: [{ alias: 'auItemDisabled', transform: auBooleanAttribute }]
            }], itemVisible: [{
                type: Input,
                args: [{ alias: 'auItemVisible', transform: auBooleanAttribute }]
            }], itemAnimation: [{
                type: Input,
                args: [{ alias: 'auItemAnimation', transform: auBooleanAttribute }]
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
            }], itemHeadingTag: [{
                type: Input,
                args: ['auItemHeadingTag']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDOztBQUd2QixNQUFNLE9BQU8sc0JBQXNCO0lBRG5DO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF3RCxDQUFBLENBQUMsQ0FBQztLQUl0RjtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUEyQixFQUFFLE9BQWdCO1FBQzFFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs4R0FKVyxzQkFBc0I7a0dBQXRCLHNCQUFzQjs7MkZBQXRCLHNCQUFzQjtrQkFEbEMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVMzRSxNQUFNLE9BQU8sd0JBQXdCO0lBRHJDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF3RCxDQUFBLENBQUMsQ0FBQztLQUl0RjtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUE2QixFQUFFLE9BQWdCO1FBQzVFLE9BQU8s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QU9DLFdBQVc7c0JBQTFFLEtBQUs7dUJBQUMsRUFBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztnQkFNSSxhQUFhO3NCQUE5RSxLQUFLO3VCQUFDLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztnQkFNckMsY0FBYztzQkFBeEMsS0FBSzt1QkFBQyxrQkFBa0I7Z0JBQ0ssaUJBQWlCO3NCQUE5QyxLQUFLO3VCQUFDLHFCQUFxQjtnQkFDSCxZQUFZO3NCQUFwQyxLQUFLO3VCQUFDLGdCQUFnQjtnQkFDSSxjQUFjO3NCQUF4QyxLQUFLO3VCQUFDLGtCQUFrQjtnQkFNSCxTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWE7Z0JBTVEsZUFBZTtzQkFBMUMsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBTUUsZUFBZTtzQkFBMUMsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBTUksaUJBQWlCO3NCQUE5QyxLQUFLO3VCQUFDLHFCQUFxQjtnQkFNRixhQUFhO3NCQUF0QyxLQUFLO3VCQUFDLGlCQUFpQjtnQkFNRyxjQUFjO3NCQUF4QyxLQUFLO3VCQUFDLGtCQUFrQjtnQkFRRixTQUFTO3NCQUEvQixNQUFNO3VCQUFDLGFBQWE7Z0JBTUcsVUFBVTtzQkFBakMsTUFBTTt1QkFBQyxjQUFjO2dCQVFTLGlCQUFpQjtzQkFBL0MsTUFBTTt1QkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG5cdEFjY29yZGlvbkl0ZW1Db250ZXh0LFxuXHRBY2NvcmRpb25JdGVtUHJvcHMsXG5cdEFjY29yZGlvbkl0ZW1TdGF0ZSxcblx0QWNjb3JkaW9uU3RhdGUsXG5cdEFkYXB0U2xvdENvbnRlbnRQcm9wcyxcblx0U2xvdENvbnRlbnQsXG5cdFRyYW5zaXRpb25Gbixcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlQWNjb3JkaW9uLFxuXHRwYXRjaFNpbXBsZUNoYW5nZXMsXG5cdHRvQW5ndWxhclNpZ25hbCxcblx0dG9TbG90Q29udGV4dFdpZGdldCxcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtOZ1RlbXBsYXRlT3V0bGV0fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtQm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFjY29yZGlvbkl0ZW1IZWFkZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFjY29yZGlvbkl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWNjb3JkaW9uSXRlbVN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIE5nVGVtcGxhdGVPdXRsZXRdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0QHN3aXRjaCAoc3RhdGUuaXRlbUhlYWRpbmdUYWcpIHtcblx0XHRcdFx0QGNhc2UgKCdoMScpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgxXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoMicpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgyXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoMycpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgzXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNCcpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg0XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNScpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg1XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNicpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg2XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGRlZmF1bHQge1xuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaDJcIj48L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2gxPlxuXHRcdFx0XHQ8aDEgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyIHt7IHN0YXRlLml0ZW1IZWFkZXJDbGFzcyB9fVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoMj5cblx0XHRcdFx0PGgyIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlciB7eyBzdGF0ZS5pdGVtSGVhZGVyQ2xhc3MgfX1cIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oMj5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDM+XG5cdFx0XHRcdDxoMyBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXIge3sgc3RhdGUuaXRlbUhlYWRlckNsYXNzIH19XCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvblwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvaDM+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2g0PlxuXHRcdFx0XHQ8aDQgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyIHt7IHN0YXRlLml0ZW1IZWFkZXJDbGFzcyB9fVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2g0PlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoNT5cblx0XHRcdFx0PGg1IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlciB7eyBzdGF0ZS5pdGVtSGVhZGVyQ2xhc3MgfX1cIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oNT5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8bmctdGVtcGxhdGUgI2g2PlxuXHRcdFx0XHQ8aDYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyIHt7IHN0YXRlLml0ZW1IZWFkZXJDbGFzcyB9fVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2g2PlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNidXR0b24+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRpZD1cInt7IHN0YXRlLml0ZW1JZCB9fS10b2dnbGVcIlxuXHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5jbGljaygpXCJcblx0XHRcdFx0XHRbY2xhc3MuY29sbGFwc2VkXT1cIiFzdGF0ZS5pdGVtVmlzaWJsZVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJhY2NvcmRpb24tYnV0dG9uIHt7IHN0YXRlLml0ZW1CdXR0b25DbGFzcyB9fVwiXG5cdFx0XHRcdFx0W2Rpc2FibGVkXT1cInN0YXRlLml0ZW1EaXNhYmxlZFwiXG5cdFx0XHRcdFx0YXR0ci5hcmlhLWNvbnRyb2xzPVwie3sgc3RhdGUuaXRlbUlkIH19LWNvbGxhcHNlXCJcblx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLml0ZW1EaXNhYmxlZFwiXG5cdFx0XHRcdFx0W2F0dHIuYXJpYS1leHBhbmRlZF09XCJzdGF0ZS5pdGVtVmlzaWJsZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUuc2xvdEl0ZW1IZWFkZXJcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHRAaWYgKHN0YXRlLnNob3VsZEJlSW5ET00pIHtcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jb2xsYXBzZURpcmVjdGl2ZVwiXG5cdFx0XHRcdFx0YXR0ci5hcmlhLWxhYmVsbGVkYnk9XCJ7eyBzdGF0ZS5pdGVtSWQgfX0tdG9nZ2xlXCJcblx0XHRcdFx0XHRpZD1cInt7IHN0YXRlLml0ZW1JZCB9fS1jb2xsYXBzZVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJhY2NvcmRpb24tY29sbGFwc2Uge3sgc3RhdGUuaXRlbUNvbGxhcHNlQ2xhc3MgfX1cIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFjY29yZGlvbi1ib2R5IHt7IHN0YXRlLml0ZW1Cb2R5Q2xhc3MgfX1cIj5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCIgW2F1U2xvdF09XCJzdGF0ZS5zbG90SXRlbUJvZHlcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZTogVGVtcGxhdGVSZWY8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xufVxuZXhwb3J0IGNvbnN0IGFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdEl0ZW1TdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoQWNjb3JkaW9uSXRlbURlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPEFjY29yZGlvbkl0ZW1Qcm9wcz4gPSB7XG5cdHNsb3RJdGVtU3RydWN0dXJlOiBhY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RJdGVtU3RydWN0dXJlLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1QWNjb3JkaW9uSXRlbV0nLFxuXHRleHBvcnRBczogJ2F1QWNjb3JkaW9uSXRlbScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnXCJhY2NvcmRpb24taXRlbSBcIiArIHN0YXRlKCkuaXRlbUNsYXNzJyxcblx0XHQnW2lkXSc6ICdzdGF0ZSgpLml0ZW1JZCcsXG5cdH0sXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUoKS5zbG90SXRlbVN0cnVjdHVyZVwiPjwvbmctdGVtcGxhdGU+IGAsXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyVmlld0luaXQge1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1IZWFkZXInKSBzbG90SXRlbUhlYWRlcjogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90SXRlbUhlYWRlckZyb21Db250ZW50OiBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUgfCBudWxsO1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1Cb2R5Jykgc2xvdEl0ZW1Cb2R5OiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWNjb3JkaW9uQm9keURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90SXRlbUJvZHlGcm9tQ29udGVudDogQWNjb3JkaW9uQm9keURpcmVjdGl2ZSB8IG51bGw7XG5cdEBJbnB1dCgnYXVTbG90SXRlbVN0cnVjdHVyZScpIHNsb3RJdGVtU3RydWN0dXJlOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90SXRlbVN0cnVjdHVyZUZyb21Db250ZW50OiBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlIHwgbnVsbDtcblxuXHQvKipcblx0ICogVGhlIGlkIG9mIHRoZSBhY2NvcmRpb24taXRlbS4gSXQgY2FuIGJlIHVzZWQgZm9yIGNvbnRyb2xsaW5nIHRoZSBhY2NvcmRpb24taXRlbSB2aWEgdGhlIGFjY29yZGlvbiBhcGkuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUlkJykgaXRlbUlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSB3aGVuIGlzIHRvZ2dsZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbVRyYW5zaXRpb24nKSBpdGVtVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1DbGFzcycpIGl0ZW1DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgY29udGVudCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIERPTS4gSXQgd2lsbCBiZSBqdXN0IGhpZGRlbiBvdGhlcndpc2UuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtRGVzdHJveU9uSGlkZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaXRlbURlc3Ryb3lPbkhpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKiBJdCB3aWxsIG5vdCByZWFjdCB0byB1c2VyJ3MgY2xpY2tzLCBidXQgc3RpbGwgd2lsbCBiZSBwb3NzaWJsZSB0byB0b2dnbGUgcHJvZ3JhbW1hdGljYWxseS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUl0ZW1EaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaXRlbURpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIHZpc2libGUgKGV4cGFuZGVkKS4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGhpZGRlbiAoY29sbGFwc2VkKS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUl0ZW1WaXNpYmxlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtVmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBhbmltYXRlZC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUl0ZW1BbmltYXRpb24nLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1BbmltYXRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaGVhZGVyIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1IZWFkZXJDbGFzcycpIGl0ZW1IZWFkZXJDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1CdXR0b25DbGFzcycpIGl0ZW1CdXR0b25DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Db2xsYXBzZUNsYXNzJykgaXRlbUNvbGxhcHNlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Cb2R5Q2xhc3MnKSBpdGVtQm9keUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBUaGUgaHRtbCB0YWcgdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0taGVhZGVyLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1IZWFkaW5nVGFnJykgaXRlbUhlYWRpbmdUYWc6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbVNob3duJykgaXRlbVNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbUhpZGRlbicpIGl0ZW1IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBgdmlzaWJsZWAgdmFsdWUgY2hhbmdlcy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgbmV3IHZhbHVlIG9mIHZpc2libGUuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1WaXNpYmxlQ2hhbmdlJykgaXRlbVZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0cmVhZG9ubHkgYWQgPSBpbmplY3QoQWNjb3JkaW9uRGlyZWN0aXZlKTtcblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiB0aGlzLmFkLmFwaS5yZWdpc3Rlckl0ZW0sXG5cdFx0ZGVmYXVsdENvbmZpZyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uSXRlbVZpc2libGVDaGFuZ2U6ICh2aXNpYmxlKSA9PiB0aGlzLml0ZW1WaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSksXG5cdFx0XHRvbkl0ZW1IaWRkZW46ICgpID0+IHRoaXMuaXRlbUhpZGRlbi5lbWl0KCksXG5cdFx0XHRvbkl0ZW1TaG93bjogKCkgPT4gdGhpcy5pdGVtU2hvd24uZW1pdCgpLFxuXHRcdH0sXG5cdH0pO1xuXHRyZWFkb25seSB3aWRnZXQgPSB0b1Nsb3RDb250ZXh0V2lkZ2V0KHRoaXMuX3dpZGdldCk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cdHN0YXRlOiBTaWduYWw8QWNjb3JkaW9uSXRlbVN0YXRlPiA9IHRvQW5ndWxhclNpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmFjY29yZGlvbkl0ZW1EaXJlY3RpdmUpO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RJdGVtU3RydWN0dXJlOiB0aGlzLnNsb3RJdGVtU3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEl0ZW1IZWFkZXI6IHRoaXMuc2xvdEl0ZW1IZWFkZXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SXRlbUJvZHk6IHRoaXMuc2xvdEl0ZW1Cb2R5RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRxdWV1ZU1pY3JvdGFzaygoKSA9PiB0aGlzLmFwaS5pbml0RG9uZSgpKTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVBY2NvcmRpb25dJyxcblx0ZXhwb3J0QXM6ICdhdUFjY29yZGlvbicsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImFjY29yZGlvbiBcIiArIHN0YXRlJCgpLmNsYXNzTmFtZScsXG5cdH0sXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIG9ubHkgb25lIGl0ZW0gYXQgdGhlIHRpbWUgY2FuIHN0YXkgb3Blbi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUNsb3NlT3RoZXJzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBjbG9zZU90aGVyczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgaWQgb2YgdGhlIGl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNob3duJykgc2hvd246IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBpZCBvZiB0aGUgaXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SGlkZGVuJykgaGlkZGVuOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdC8qKlxuXHQgKiBUaGUgaWQgb2YgdGhlIGFjY29yZGlvbi1pdGVtLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29udHJvbGxpbmcgdGhlIGFjY29yZGlvbi1pdGVtIHZpYSB0aGUgYWNjb3JkaW9uIGFwaS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWQnKSBpdGVtSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGNvbnRlbnQgb2YgdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00uIEl0IHdpbGwgYmUganVzdCBoaWRkZW4gb3RoZXJ3aXNlLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbURlc3Ryb3lPbkhpZGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1EZXN0cm95T25IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBkaXNhYmxlZC5cblx0ICogSXQgd2lsbCBub3QgcmVhY3QgdG8gdXNlcidzIGNsaWNrcywgYnV0IHN0aWxsIHdpbGwgYmUgcG9zc2libGUgdG8gdG9nZ2xlIHByb2dyYW1tYXRpY2FsbHkuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtRGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1EaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSB2aXNpYmxlIChleHBhbmRlZCkuIE90aGVyd2lzZSwgaXQgd2lsbCBiZSBoaWRkZW4gKGNvbGxhcHNlZCkuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtVmlzaWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaXRlbVZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtQW5pbWF0aW9uJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtQW5pbWF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2Ugd2hlbiBpcyB0b2dnbGVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1UcmFuc2l0aW9uJykgaXRlbVRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblx0QElucHV0KCdhdVNsb3RJdGVtU3RydWN0dXJlJykgc2xvdEl0ZW1TdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QElucHV0KCdhdVNsb3RJdGVtQm9keScpIHNsb3RJdGVtQm9keTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1IZWFkZXInKSBzbG90SXRlbUhlYWRlcjogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1DbGFzcycpIGl0ZW1DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSGVhZGVyQ2xhc3MnKSBpdGVtSGVhZGVyQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSB0b2dnbGUgYnV0dG9uIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1CdXR0b25DbGFzcycpIGl0ZW1CdXR0b25DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Db2xsYXBzZUNsYXNzJykgaXRlbUNvbGxhcHNlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Cb2R5Q2xhc3MnKSBpdGVtQm9keUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBUaGUgaHRtbCB0YWcgdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0taGVhZGVyLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1IZWFkaW5nVGFnJykgaXRlbUhlYWRpbmdUYWc6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvL3Nob3VsZCBub3QgYmUgZG9jdW1lbnRlZFxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIHNob3duLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtU2hvd24nKSBpdGVtU2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtSGlkZGVuJykgaXRlbUhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gdGhlIGB2aXNpYmxlYCB2YWx1ZSBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBuZXcgdmFsdWUgb2YgdmlzaWJsZS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbVZpc2libGVDaGFuZ2UnKSBpdGVtVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZUFjY29yZGlvbixcblx0XHR3aWRnZXROYW1lOiAnYWNjb3JkaW9uJyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uSXRlbVZpc2libGVDaGFuZ2U6ICh2aXNpYmxlKSA9PiB0aGlzLml0ZW1WaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSksXG5cdFx0XHRvbkl0ZW1IaWRkZW46ICgpID0+IHRoaXMuaXRlbUhpZGRlbi5lbWl0KCksXG5cdFx0XHRvbkl0ZW1TaG93bjogKCkgPT4gdGhpcy5pdGVtU2hvd24uZW1pdCgpLFxuXHRcdFx0b25TaG93bjogKGlkKSA9PiB0aGlzLnNob3duLmVtaXQoaWQpLFxuXHRcdFx0b25IaWRkZW46IChpZCkgPT4gdGhpcy5oaWRkZW4uZW1pdChpZCksXG5cdFx0fSxcblx0fSk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cblx0c3RhdGUkOiBTaWduYWw8QWNjb3JkaW9uU3RhdGU+ID0gdG9Bbmd1bGFyU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHVzZURpcmVjdGl2ZUZvckhvc3QodGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYWNjb3JkaW9uRGlyZWN0aXZlKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRwYXRjaFNpbXBsZUNoYW5nZXModGhpcy5fd2lkZ2V0LnBhdGNoLCBjaGFuZ2VzKTtcblx0fVxufVxuIl19`;export{t as default};
