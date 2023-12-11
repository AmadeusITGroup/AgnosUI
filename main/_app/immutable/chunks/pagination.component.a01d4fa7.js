const t=`import { ComponentTemplate, SlotDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createPagination, patchSimpleChanges, toAngularSignal, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, inject, } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 */
export class PaginationEllipsisDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationEllipsisDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: PaginationEllipsisDirective, isStandalone: true, selector: "ng-template[auPaginationEllipsis]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationEllipsisDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationEllipsis]', standalone: true }]
        }] });
/**
 * A directive to use to give the 'first' link template to the pagination component
 */
export class PaginationFirstDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationFirstDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: PaginationFirstDirective, isStandalone: true, selector: "ng-template[auPaginationFirst]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationFirstDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationFirst]', standalone: true }]
        }] });
/**
 * A directive to use to give the 'last' link template to the pagination component
 */
export class PaginationLastDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationLastDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: PaginationLastDirective, isStandalone: true, selector: "ng-template[auPaginationLast]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationLastDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationLast]', standalone: true }]
        }] });
/**
 * A directive to use to give the 'next' link template to the pagination component
 */
export class PaginationNextDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationNextDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: PaginationNextDirective, isStandalone: true, selector: "ng-template[auPaginationNext]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationNextDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationNext]', standalone: true }]
        }] });
/**
 * A directive to use to give the page 'number' template to the pagination component
 */
export class PaginationNumberDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationNumberDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: PaginationNumberDirective, isStandalone: true, selector: "ng-template[auPaginationNumber]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationNumberDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationNumber]', standalone: true }]
        }] });
/**
 * A directive to use to give the 'previous' link template to the pagination component
 */
export class PaginationPreviousDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationPreviousDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: PaginationPreviousDirective, isStandalone: true, selector: "ng-template[auPaginationPrevious]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationPreviousDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationPrevious]', standalone: true }]
        }] });
/**
 * A directive to use to give the 'Pages' template for the Pages slot
 */
export class PaginationPagesDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationPagesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: PaginationPagesDirective, isStandalone: true, selector: "ng-template[auPaginationPages]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationPagesDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationPages]', standalone: true }]
        }] });
export class PaginationDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.6", type: PaginationDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "pages", first: true, predicate: ["pages"], descendants: true, static: true }], ngImport: i0, template: \`<ng-template auPaginationPages #pages let-state="state" let-widget="widget">
		@for (page of state.pages; track page; let i = $index) {
			<li
				class="page-item"
				[class.active]="page === state.page"
				[class.disabled]="widget.api.isEllipsis(page) || state.disabled"
				[attr.aria-current]="page === state.page ? 'page' : null"
			>
				@if (widget.api.isEllipsis(page)) {
					<a class="page-link au-ellipsis" tabindex="-1" aria-disabled="true">
						<ng-template [auSlot]="state.slotEllipsis" [auSlotProps]="{state, widget}"></ng-template>
					</a>
				} @else {
					<a
						[attr.aria-label]="state.pagesLabel[i]"
						class="page-link au-page"
						href="#"
						(click)="widget.actions.select(page); $event.preventDefault()"
						[attr.tabindex]="state.disabled ? '-1' : null"
						[attr.aria-disabled]="state.disabled ? 'true' : null"
					>
						<ng-template [auSlot]="state.slotNumberLabel" [auSlotProps]="{state, widget, displayedPage: page}"></ng-template>
						@if (state.page === page) {
							<span class="visually-hidden">{{ state.activeLabel }}</span>
						}
					</a>
				}
			</li>
		}
	</ng-template>\`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: PaginationPagesDirective, selector: "ng-template[auPaginationPages]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    imports: [SlotDirective, PaginationPagesDirective],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: \`<ng-template auPaginationPages #pages let-state="state" let-widget="widget">
		@for (page of state.pages; track page; let i = $index) {
			<li
				class="page-item"
				[class.active]="page === state.page"
				[class.disabled]="widget.api.isEllipsis(page) || state.disabled"
				[attr.aria-current]="page === state.page ? 'page' : null"
			>
				@if (widget.api.isEllipsis(page)) {
					<a class="page-link au-ellipsis" tabindex="-1" aria-disabled="true">
						<ng-template [auSlot]="state.slotEllipsis" [auSlotProps]="{state, widget}"></ng-template>
					</a>
				} @else {
					<a
						[attr.aria-label]="state.pagesLabel[i]"
						class="page-link au-page"
						href="#"
						(click)="widget.actions.select(page); $event.preventDefault()"
						[attr.tabindex]="state.disabled ? '-1' : null"
						[attr.aria-disabled]="state.disabled ? 'true' : null"
					>
						<ng-template [auSlot]="state.slotNumberLabel" [auSlotProps]="{state, widget, displayedPage: page}"></ng-template>
						@if (state.page === page) {
							<span class="visually-hidden">{{ state.activeLabel }}</span>
						}
					</a>
				}
			</li>
		}
	</ng-template>\`,
                }]
        }], propDecorators: { pages: [{
                type: ViewChild,
                args: ['pages', { static: true }]
            }] } });
/**
 * The default slot for the pages
 */
export const paginationDefaultSlotPages = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');
const defaultConfig = {
    slotPages: paginationDefaultSlotPages,
};
export class PaginationComponent {
    constructor() {
        this._widget = callWidgetFactory({
            factory: createPagination,
            widgetName: 'pagination',
            defaultConfig,
            events: {
                onPageChange: (page) => this.pageChange.emit(page),
            },
        });
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        /**
         * An event fired when the page is changed.
         *
         * Event payload is the number of the newly selected page.
         *
         * Page numbers start with \`1\`.
         */
        this.pageChange = new EventEmitter(true);
        this.state$ = toAngularSignal(this._widget.state$);
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotEllipsis: this.slotEllipsisFromContent?.templateRef,
            slotFirst: this.slotFirstFromContent?.templateRef,
            slotLast: this.slotLastFromContent?.templateRef,
            slotNext: this.slotNextFromContent?.templateRef,
            slotNumberLabel: this.slotNumberLabelFromContent?.templateRef,
            slotPages: this.slotPagesFromContent?.templateRef,
            slotPrevious: this.slotPreviousFromContent?.templateRef,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.6", type: PaginationComponent, isStandalone: true, selector: "[auPagination]", inputs: { ariaPageLabel: ["auAriaPageLabel", "ariaPageLabel"], ariaLabel: ["auAriaLabel", "ariaLabel"], activeLabel: ["auActiveLabel", "activeLabel"], ariaFirstLabel: ["auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: ["auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: ["auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: ["auAriaLastLabel", "ariaLastLabel"], slotEllipsis: ["auSlotEllipsis", "slotEllipsis"], slotFirst: ["auSlotFirst", "slotFirst"], slotPrevious: ["auSlotPrevious", "slotPrevious"], slotNext: ["auSlotNext", "slotNext"], slotLast: ["auSlotLast", "slotLast"], slotPages: ["auSlotPages", "slotPages"], slotNumberLabel: ["auSlotNumberLabel", "slotNumberLabel"], disabled: ["auDisabled", "disabled", auBooleanAttribute], boundaryLinks: ["auBoundaryLinks", "boundaryLinks", auBooleanAttribute], directionLinks: ["auDirectionLinks", "directionLinks", auBooleanAttribute], collectionSize: ["auCollectionSize", "collectionSize", auNumberAttribute], page: ["auPage", "page", auNumberAttribute], pageSize: ["auPageSize", "pageSize", auNumberAttribute], size: ["auSize", "size"], pagesFactory: ["auPagesFactory", "pagesFactory"], className: ["auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, host: { properties: { "attr.aria-label": "state$().ariaLabel" } }, queries: [{ propertyName: "slotEllipsisFromContent", first: true, predicate: PaginationEllipsisDirective, descendants: true }, { propertyName: "slotFirstFromContent", first: true, predicate: PaginationFirstDirective, descendants: true }, { propertyName: "slotPreviousFromContent", first: true, predicate: PaginationPreviousDirective, descendants: true }, { propertyName: "slotNextFromContent", first: true, predicate: PaginationNextDirective, descendants: true }, { propertyName: "slotLastFromContent", first: true, predicate: PaginationLastDirective, descendants: true }, { propertyName: "slotPagesFromContent", first: true, predicate: PaginationPagesDirective, descendants: true }, { propertyName: "slotNumberLabelFromContent", first: true, predicate: PaginationNumberDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		@if (widget.state$ | async; as state) {
			<ul [class]="'au-pagination pagination' + (state.size ? ' pagination-' + state.size : '') + ' ' + state.className">
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a
							[attr.aria-label]="state.ariaFirstLabel"
							class="page-link au-first"
							href="#"
							(click)="widget.actions.first(); $event.preventDefault()"
							[attr.tabindex]="state.previousDisabled ? '-1' : null"
							[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotFirst" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a
							[attr.aria-label]="state.ariaPreviousLabel"
							class="page-link au-previous"
							href="#"
							(click)="widget.actions.previous(); $event.preventDefault()"
							[attr.tabindex]="state.previousDisabled ? '-1' : null"
							[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotPrevious" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				<ng-template [auSlot]="state.slotPages" [auSlotProps]="{widget, state}"></ng-template>
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a
							[attr.aria-label]="state.ariaNextLabel"
							class="page-link au-next"
							href="#"
							(click)="widget.actions.next(); $event.preventDefault()"
							[attr.tabindex]="state.nextDisabled ? '-1' : null"
							[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotNext" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a
							[attr.aria-label]="state.ariaLastLabel"
							class="page-link au-last"
							href="#"
							(click)="widget.actions.last(); $event.preventDefault()"
							[attr.tabindex]="state.nextDisabled ? '-1' : null"
							[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotLast" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
			</ul>
			<div aria-live="polite" class="visually-hidden">Current page is {{ state.page }}</div>
		}
	\`, isInline: true, dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[auPagination]',
                    standalone: true,
                    imports: [AsyncPipe, SlotDirective],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[attr.aria-label]': 'state$().ariaLabel',
                    },
                    encapsulation: ViewEncapsulation.None,
                    template: \`
		@if (widget.state$ | async; as state) {
			<ul [class]="'au-pagination pagination' + (state.size ? ' pagination-' + state.size : '') + ' ' + state.className">
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a
							[attr.aria-label]="state.ariaFirstLabel"
							class="page-link au-first"
							href="#"
							(click)="widget.actions.first(); $event.preventDefault()"
							[attr.tabindex]="state.previousDisabled ? '-1' : null"
							[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotFirst" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a
							[attr.aria-label]="state.ariaPreviousLabel"
							class="page-link au-previous"
							href="#"
							(click)="widget.actions.previous(); $event.preventDefault()"
							[attr.tabindex]="state.previousDisabled ? '-1' : null"
							[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotPrevious" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				<ng-template [auSlot]="state.slotPages" [auSlotProps]="{widget, state}"></ng-template>
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a
							[attr.aria-label]="state.ariaNextLabel"
							class="page-link au-next"
							href="#"
							(click)="widget.actions.next(); $event.preventDefault()"
							[attr.tabindex]="state.nextDisabled ? '-1' : null"
							[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotNext" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a
							[attr.aria-label]="state.ariaLastLabel"
							class="page-link au-last"
							href="#"
							(click)="widget.actions.last(); $event.preventDefault()"
							[attr.tabindex]="state.nextDisabled ? '-1' : null"
							[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotLast" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
			</ul>
			<div aria-live="polite" class="visually-hidden">Current page is {{ state.page }}</div>
		}
	\`,
                }]
        }], propDecorators: { ariaPageLabel: [{
                type: Input,
                args: ['auAriaPageLabel']
            }], ariaLabel: [{
                type: Input,
                args: ['auAriaLabel']
            }], activeLabel: [{
                type: Input,
                args: ['auActiveLabel']
            }], ariaFirstLabel: [{
                type: Input,
                args: ['auAriaFirstLabel']
            }], ariaPreviousLabel: [{
                type: Input,
                args: ['auAriaPreviousLabel']
            }], ariaNextLabel: [{
                type: Input,
                args: ['auAriaNextLabel']
            }], ariaLastLabel: [{
                type: Input,
                args: ['auAriaLastLabel']
            }], slotEllipsis: [{
                type: Input,
                args: ['auSlotEllipsis']
            }], slotEllipsisFromContent: [{
                type: ContentChild,
                args: [PaginationEllipsisDirective, { static: false }]
            }], slotFirst: [{
                type: Input,
                args: ['auSlotFirst']
            }], slotFirstFromContent: [{
                type: ContentChild,
                args: [PaginationFirstDirective, { static: false }]
            }], slotPrevious: [{
                type: Input,
                args: ['auSlotPrevious']
            }], slotPreviousFromContent: [{
                type: ContentChild,
                args: [PaginationPreviousDirective, { static: false }]
            }], slotNext: [{
                type: Input,
                args: ['auSlotNext']
            }], slotNextFromContent: [{
                type: ContentChild,
                args: [PaginationNextDirective, { static: false }]
            }], slotLast: [{
                type: Input,
                args: ['auSlotLast']
            }], slotLastFromContent: [{
                type: ContentChild,
                args: [PaginationLastDirective, { static: false }]
            }], slotPages: [{
                type: Input,
                args: ['auSlotPages']
            }], slotPagesFromContent: [{
                type: ContentChild,
                args: [PaginationPagesDirective, { static: false }]
            }], slotNumberLabel: [{
                type: Input,
                args: ['auSlotNumberLabel']
            }], slotNumberLabelFromContent: [{
                type: ContentChild,
                args: [PaginationNumberDirective, { static: false }]
            }], disabled: [{
                type: Input,
                args: [{ alias: 'auDisabled', transform: auBooleanAttribute }]
            }], boundaryLinks: [{
                type: Input,
                args: [{ alias: 'auBoundaryLinks', transform: auBooleanAttribute }]
            }], directionLinks: [{
                type: Input,
                args: [{ alias: 'auDirectionLinks', transform: auBooleanAttribute }]
            }], collectionSize: [{
                type: Input,
                args: [{ alias: 'auCollectionSize', transform: auNumberAttribute }]
            }], page: [{
                type: Input,
                args: [{ alias: 'auPage', transform: auNumberAttribute }]
            }], pageSize: [{
                type: Input,
                args: [{ alias: 'auPageSize', transform: auNumberAttribute }]
            }], size: [{
                type: Input,
                args: ['auSize']
            }], pagesFactory: [{
                type: Input,
                args: ['auPagesFactory']
            }], pageChange: [{
                type: Output,
                args: ['auPageChange']
            }], className: [{
                type: Input,
                args: ['auClassName']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWIvc3JjL2xpYi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUUxQyxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQzs7QUFFdkI7O0dBRUc7QUFFSCxNQUFNLE9BQU8sMkJBQTJCO0lBRHhDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUE4QixDQUFBLENBQUMsQ0FBQztLQUk1RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFpQyxFQUFFLE9BQWdCO1FBQ2hGLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs4R0FKVywyQkFBMkI7a0dBQTNCLDJCQUEyQjs7MkZBQTNCLDJCQUEyQjtrQkFEdkMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxtQ0FBbUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVE1RTs7R0FFRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQThCLENBQUEsQ0FBQyxDQUFDO0tBSTVEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFD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QVk7dUJBQUMsd0JBQXdCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO2dCQUczQixlQUFlO3NCQUExQyxLQUFLO3VCQUFDLG1CQUFtQjtnQkFFMUIsMEJBQTBCO3NCQUR6QixZQUFZO3VCQUFDLHlCQUF5QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztnQkFNSyxRQUFRO3NCQUFwRSxLQUFLO3VCQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7Z0JBS08sYUFBYTtzQkFBOUUsS0FBSzt1QkFBQyxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7Z0JBS0csY0FBYztzQkFBaEYsS0FBSzt1QkFBQyxFQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7Z0JBV0MsY0FBYztzQkFBL0UsS0FBSzt1QkFBQyxFQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7Z0JBUVIsSUFBSTtzQkFBM0QsS0FBSzt1QkFBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO2dCQU1NLFFBQVE7c0JBQW5FLEtBQUs7dUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztnQkFRekMsSUFBSTtzQkFBcEIsS0FBSzt1QkFBQyxRQUFRO2dCQU9VLFlBQVk7c0JBQXBDLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQVNDLFVBQVU7c0JBQWpDLE1BQU07dUJBQUMsY0FBYztnQkFLQSxTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UGFnaW5hdGlvbkNvbnRleHQsIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0LCBQYWdpbmF0aW9uUHJvcHMsIFBhZ2luYXRpb25TdGF0ZSwgU2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlUGFnaW5hdGlvbixcblx0cGF0Y2hTaW1wbGVDaGFuZ2VzLFxuXHR0b0FuZ3VsYXJTaWduYWwsXG5cdHRvU2xvdENvbnRleHRXaWRnZXQsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7QXN5bmNQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnZWxsaXBzaXMnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uRWxsaXBzaXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdmaXJzdCcgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25GaXJzdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ2xhc3QnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uTGFzdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICduZXh0JyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbk5leHRdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk5leHREaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbk5leHREaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSBwYWdlICdudW1iZXInIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbk51bWJlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25OdW1iZXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAncHJldmlvdXMnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uUHJldmlvdXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdQYWdlcycgdGVtcGxhdGUgZm9yIHRoZSBQYWdlcyBzbG90XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uUGFnZXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlIGF1UGFnaW5hdGlvblBhZ2VzICNwYWdlcyBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRAZm9yIChwYWdlIG9mIHN0YXRlLnBhZ2VzOyB0cmFjayBwYWdlOyBsZXQgaSA9ICRpbmRleCkge1xuXHRcdFx0PGxpXG5cdFx0XHRcdGNsYXNzPVwicGFnZS1pdGVtXCJcblx0XHRcdFx0W2NsYXNzLmFjdGl2ZV09XCJwYWdlID09PSBzdGF0ZS5wYWdlXCJcblx0XHRcdFx0W2NsYXNzLmRpc2FibGVkXT1cIndpZGdldC5hcGkuaXNFbGxpcHNpcyhwYWdlKSB8fCBzdGF0ZS5kaXNhYmxlZFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtY3VycmVudF09XCJwYWdlID09PSBzdGF0ZS5wYWdlID8gJ3BhZ2UnIDogbnVsbFwiXG5cdFx0XHQ+XG5cdFx0XHRcdEBpZiAod2lkZ2V0LmFwaS5pc0VsbGlwc2lzKHBhZ2UpKSB7XG5cdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmsgYXUtZWxsaXBzaXNcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1kaXNhYmxlZD1cInRydWVcIj5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RFbGxpcHNpc1wiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0fSBAZWxzZSB7XG5cdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUucGFnZXNMYWJlbFtpXVwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1wYWdlXCJcblx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5zZWxlY3QocGFnZSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cInN0YXRlLmRpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5kaXNhYmxlZCA/ICd0cnVlJyA6IG51bGxcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3ROdW1iZXJMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgZGlzcGxheWVkUGFnZTogcGFnZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0QGlmIChzdGF0ZS5wYWdlID09PSBwYWdlKSB7XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+e3sgc3RhdGUuYWN0aXZlTGFiZWwgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2xpPlxuXHRcdH1cblx0PC9uZy10ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgncGFnZXMnLCB7c3RhdGljOiB0cnVlfSkgcGFnZXM6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pjtcbn1cbi8qKlxuICogVGhlIGRlZmF1bHQgc2xvdCBmb3IgdGhlIHBhZ2VzXG4gKi9cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uRGVmYXVsdFNsb3RQYWdlcyA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAncGFnZXMnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxQYWdpbmF0aW9uUHJvcHM+ID0ge1xuXHRzbG90UGFnZXM6IHBhZ2luYXRpb25EZWZhdWx0U2xvdFBhZ2VzLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1UGFnaW5hdGlvbl0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbQXN5bmNQaXBlLCBTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2F0dHIuYXJpYS1sYWJlbF0nOiAnc3RhdGUkKCkuYXJpYUxhYmVsJyxcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0dGVtcGxhdGU6IGBcblx0XHRAaWYgKHdpZGdldC5zdGF0ZSQgfCBhc3luYzsgYXMgc3RhdGUpIHtcblx0XHRcdDx1bCBbY2xhc3NdPVwiJ2F1LXBhZ2luYXRpb24gcGFnaW5hdGlvbicgKyAoc3RhdGUuc2l6ZSA/ICcgcGFnaW5hdGlvbi0nICsgc3RhdGUuc2l6ZSA6ICcnKSArICcgJyArIHN0YXRlLmNsYXNzTmFtZVwiPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmJvdW5kYXJ5TGlua3MpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5hcmlhRmlyc3RMYWJlbFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LWZpcnN0XCJcblx0XHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMuZmlyc3QoKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEZpcnN0XCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBpZiAoc3RhdGUuZGlyZWN0aW9uTGlua3MpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5hcmlhUHJldmlvdXNMYWJlbFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LXByZXZpb3VzXCJcblx0XHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMucHJldmlvdXMoKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdFByZXZpb3VzXCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RQYWdlc1wiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmRpcmVjdGlvbkxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLm5leHREaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5hcmlhTmV4dExhYmVsXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJwYWdlLWxpbmsgYXUtbmV4dFwiXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLm5leHQoKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5uZXh0RGlzYWJsZWQgPyAnLTEnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3ROZXh0XCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBpZiAoc3RhdGUuYm91bmRhcnlMaW5rcykge1xuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5uZXh0RGlzYWJsZWRcIj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUxhc3RMYWJlbFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LWxhc3RcIlxuXHRcdFx0XHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5sYXN0KCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUubmV4dERpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLm5leHREaXNhYmxlZCA/ICd0cnVlJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TGFzdFwiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fVxuXHRcdFx0PC91bD5cblx0XHRcdDxkaXYgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5DdXJyZW50IHBhZ2UgaXMge3sgc3RhdGUucGFnZSB9fTwvZGl2PlxuXHRcdH1cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBQcm92aWRlIHRoZSBsYWJlbCBmb3IgZWFjaCBcIlBhZ2VcIiBwYWdlIGJ1dHRvbi5cblx0ICogVGhpcyBpcyB1c2VkIGZvciBhY2Nlc3NpYmlsaXR5IHB1cnBvc2VzLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQHBhcmFtIHByb2Nlc3NQYWdlIC0gVGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICogQHBhcmFtIHBhZ2VDb3VudCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhUGFnZUxhYmVsJykgYXJpYVBhZ2VMYWJlbDogKChwcm9jZXNzUGFnZTogbnVtYmVyLCBwYWdlQ291bnQ6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgbmF2IGVsZW1lbnQuXG5cdCAqXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdQYWdlIG5hdmlnYXRpb24nXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiYWN0aXZlXCIgcGFnZS5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJyhjdXJyZW50KSdcblx0ICovXG5cdEBJbnB1dCgnYXVBY3RpdmVMYWJlbCcpIGFjdGl2ZUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiRmlyc3RcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBmaXJzdCBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFGaXJzdExhYmVsJykgYXJpYUZpcnN0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJQcmV2aW91c1wiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnQWN0aW9uIGxpbmsgZm9yIHByZXZpb3VzIHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVByZXZpb3VzTGFiZWwnKSBhcmlhUHJldmlvdXNMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIk5leHRcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBuZXh0IHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYU5leHRMYWJlbCcpIGFyaWFOZXh0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJMYXN0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdBY3Rpb24gbGluayBmb3IgbGFzdCBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYXN0TGFiZWwnKSBhcmlhTGFzdExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVQYWdpbmF0aW9uLFxuXHRcdHdpZGdldE5hbWU6ICdwYWdpbmF0aW9uJyxcblx0XHRkZWZhdWx0Q29uZmlnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25QYWdlQ2hhbmdlOiAocGFnZTogbnVtYmVyKSA9PiB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlKSxcblx0XHR9LFxuXHR9KTtcblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXG5cdEBJbnB1dCgnYXVTbG90RWxsaXBzaXMnKSBzbG90RWxsaXBzaXM6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEVsbGlwc2lzRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdEZpcnN0Jykgc2xvdEZpcnN0OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RGaXJzdEZyb21Db250ZW50OiBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RQcmV2aW91cycpIHNsb3RQcmV2aW91czogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90UHJldmlvdXNGcm9tQ29udGVudDogUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90TmV4dCcpIHNsb3ROZXh0OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbk5leHREaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdE5leHRGcm9tQ29udGVudDogUGFnaW5hdGlvbk5leHREaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RMYXN0Jykgc2xvdExhc3Q6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90TGFzdEZyb21Db250ZW50OiBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFBhZ2VzJykgc2xvdFBhZ2VzOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RQYWdlc0Zyb21Db250ZW50OiBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3ROdW1iZXJMYWJlbCcpIHNsb3ROdW1iZXJMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbk51bWJlckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdE51bWJlckxhYmVsRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgcGFnaW5hdGlvbiBsaW5rcyB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBcIkZpcnN0XCIgYW5kIFwiTGFzdFwiIHBhZ2UgbGlua3MgYXJlIHNob3duLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Qm91bmRhcnlMaW5rcycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYm91bmRhcnlMaW5rczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJOZXh0XCIgYW5kIFwiUHJldmlvdXNcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpcmVjdGlvbkxpbmtzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXJlY3Rpb25MaW5rczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBpdGVtcyBpbiB5b3VyIHBhZ2luYXRlZCBjb2xsZWN0aW9uLlxuXHQgKlxuXHQgKiBOb3RlLCB0aGF0IHRoaXMgaXMgbm90IHRoZSBudW1iZXIgb2YgcGFnZXMuIFBhZ2UgbnVtYmVycyBhcmUgY2FsY3VsYXRlZCBkeW5hbWljYWxseSBiYXNlZCBvblxuXHQgKiBgY29sbGVjdGlvblNpemVgIGFuZCBgcGFnZVNpemVgLiBFeC4gaWYgeW91IGhhdmUgMTAwIGl0ZW1zIGluIHlvdXIgY29sbGVjdGlvbiBhbmQgZGlzcGxheWluZyAyMCBpdGVtcyBwZXIgcGFnZSxcblx0ICogeW91J2xsIGVuZCB1cCB3aXRoIDUgcGFnZXMuXG5cdCAqIFdoYXRldmVyIHRoZSBjb2xsZWN0aW9uU2l6ZSB0aGUgcGFnZSBudW1iZXIgaXMgb2YgbWluaW11bSAxLlxuXHQgKiBAZGVmYXVsdFZhbHVlIDBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUNvbGxlY3Rpb25TaXplJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIGNvbGxlY3Rpb25TaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHBhZ2UuXG5cdCAqXG5cdCAqIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cblx0ICogQGRlZmF1bHRWYWx1ZSAxXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVQYWdlJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHBhZ2U6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS5cblx0ICogQGRlZmF1bHRWYWx1ZSAxMFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UGFnZVNpemUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgcGFnZVNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHBhZ2luYXRpb24gZGlzcGxheSBzaXplLlxuXHQgKlxuXHQgKiBCb290c3RyYXAgY3VycmVudGx5IHN1cHBvcnRzIHNtYWxsIGFuZCBsYXJnZSBzaXplcy5cblx0ICogQGRlZmF1bHRWYWx1ZSBudWxsXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2l6ZScpIHNpemU6ICdzbScgfCAnbGcnIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogcGFnZXNGYWN0b3J5IHJldHVybnMgYSBmdW5jdGlvbiBjb21wdXRpbmcgdGhlIGFycmF5IG9mIHBhZ2VzIHRvIGJlIGRpc3BsYXllZFxuXHQgKiBhcyBudW1iZXIgKC0xIGFyZSB0cmVhdGVkIGFzIGVsbGlwc2lzKS5cblx0ICogVXNlIFBhZ2Ugc2xvdCB0byBjdXN0b21pemUgdGhlIHBhZ2VzIHZpZXcgYW5kIG5vdCB0aGlzXG5cdCAqL1xuXHRASW5wdXQoJ2F1UGFnZXNGYWN0b3J5JykgcGFnZXNGYWN0b3J5OiAoKHBhZ2U6IG51bWJlciwgcGFnZUNvdW50OiBudW1iZXIpID0+IG51bWJlcltdKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgcGFnZSBpcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBudW1iZXIgb2YgdGhlIG5ld2x5IHNlbGVjdGVkIHBhZ2UuXG5cdCAqXG5cdCAqIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cblx0ICovXG5cdEBPdXRwdXQoJ2F1UGFnZUNoYW5nZScpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4odHJ1ZSk7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdHN0YXRlJDogU2lnbmFsPFBhZ2luYXRpb25TdGF0ZT4gPSB0b0FuZ3VsYXJTaWduYWwodGhpcy5fd2lkZ2V0LnN0YXRlJCk7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RFbGxpcHNpczogdGhpcy5zbG90RWxsaXBzaXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90Rmlyc3Q6IHRoaXMuc2xvdEZpcnN0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdExhc3Q6IHRoaXMuc2xvdExhc3RGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90TmV4dDogdGhpcy5zbG90TmV4dEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3ROdW1iZXJMYWJlbDogdGhpcy5zbG90TnVtYmVyTGFiZWxGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90UGFnZXM6IHRoaXMuc2xvdFBhZ2VzRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFByZXZpb3VzOiB0aGlzLnNsb3RQcmV2aW91c0Zyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxufVxuIl19`;export{t as default};
