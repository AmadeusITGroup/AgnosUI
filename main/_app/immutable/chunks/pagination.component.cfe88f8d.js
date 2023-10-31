const t=`import { ComponentTemplate, SlotDirective, callWidgetFactory, createPagination, patchSimpleChanges, toAngularSignal, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationEllipsisDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.11", type: PaginationEllipsisDirective, isStandalone: true, selector: "ng-template[auPaginationEllipsis]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationEllipsisDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationFirstDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.11", type: PaginationFirstDirective, isStandalone: true, selector: "ng-template[auPaginationFirst]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationFirstDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationLastDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.11", type: PaginationLastDirective, isStandalone: true, selector: "ng-template[auPaginationLast]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationLastDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationNextDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.11", type: PaginationNextDirective, isStandalone: true, selector: "ng-template[auPaginationNext]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationNextDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationNumberDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.11", type: PaginationNumberDirective, isStandalone: true, selector: "ng-template[auPaginationNumber]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationNumberDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationPreviousDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.11", type: PaginationPreviousDirective, isStandalone: true, selector: "ng-template[auPaginationPrevious]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationPreviousDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationPagesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.11", type: PaginationPagesDirective, isStandalone: true, selector: "ng-template[auPaginationPages]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationPagesDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationPages]', standalone: true }]
        }] });
export class PaginationDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: PaginationDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "pages", first: true, predicate: ["pages"], descendants: true, static: true }], ngImport: i0, template: \`<ng-template auPaginationPages #pages let-state="state" let-widget="widget">
		<li
			*ngFor="let page of state.pages; index as i"
			class="page-item"
			[class.active]="page === state.page"
			[class.disabled]="widget.api.isEllipsis(page) || state.disabled"
			[attr.aria-current]="page === state.page ? 'page' : null"
		>
			<a *ngIf="widget.api.isEllipsis(page)" class="page-link au-ellipsis" tabindex="-1" aria-disabled="true">
				<ng-template [auSlot]="state.slotEllipsis" [auSlotProps]="{state, widget}"></ng-template>
			</a>
			<a
				*ngIf="!widget.api.isEllipsis(page)"
				[attr.aria-label]="state.pagesLabel[i]"
				class="page-link au-page"
				href="#"
				(click)="widget.actions.select(page); $event.preventDefault()"
				[attr.tabindex]="state.disabled ? '-1' : null"
				[attr.aria-disabled]="state.disabled ? 'true' : null"
			>
				<ng-template [auSlot]="state.slotNumberLabel" [auSlotProps]="{state, widget, displayedPage: page}"></ng-template>
				<span *ngIf="state.page === page" class="visually-hidden">{{ state.activeLabel }}</span>
			</a>
		</li>
	</ng-template>\`, isInline: true, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: PaginationPagesDirective, selector: "ng-template[auPaginationPages]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    imports: [NgForOf, NgIf, SlotDirective, PaginationPagesDirective],
                    template: \`<ng-template auPaginationPages #pages let-state="state" let-widget="widget">
		<li
			*ngFor="let page of state.pages; index as i"
			class="page-item"
			[class.active]="page === state.page"
			[class.disabled]="widget.api.isEllipsis(page) || state.disabled"
			[attr.aria-current]="page === state.page ? 'page' : null"
		>
			<a *ngIf="widget.api.isEllipsis(page)" class="page-link au-ellipsis" tabindex="-1" aria-disabled="true">
				<ng-template [auSlot]="state.slotEllipsis" [auSlotProps]="{state, widget}"></ng-template>
			</a>
			<a
				*ngIf="!widget.api.isEllipsis(page)"
				[attr.aria-label]="state.pagesLabel[i]"
				class="page-link au-page"
				href="#"
				(click)="widget.actions.select(page); $event.preventDefault()"
				[attr.tabindex]="state.disabled ? '-1' : null"
				[attr.aria-disabled]="state.disabled ? 'true' : null"
			>
				<ng-template [auSlot]="state.slotNumberLabel" [auSlotProps]="{state, widget, displayedPage: page}"></ng-template>
				<span *ngIf="state.page === page" class="visually-hidden">{{ state.activeLabel }}</span>
			</a>
		</li>
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: PaginationComponent, isStandalone: true, selector: "[auPagination]", inputs: { ariaPageLabel: ["auAriaPageLabel", "ariaPageLabel"], ariaLabel: ["auAriaLabel", "ariaLabel"], activeLabel: ["auActiveLabel", "activeLabel"], ariaFirstLabel: ["auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: ["auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: ["auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: ["auAriaLastLabel", "ariaLastLabel"], slotEllipsis: ["auSlotEllipsis", "slotEllipsis"], slotFirst: ["auSlotFirst", "slotFirst"], slotPrevious: ["auSlotPrevious", "slotPrevious"], slotNext: ["auSlotNext", "slotNext"], slotLast: ["auSlotLast", "slotLast"], slotPages: ["auSlotPages", "slotPages"], slotNumberLabel: ["auSlotNumberLabel", "slotNumberLabel"], disabled: ["auDisabled", "disabled"], boundaryLinks: ["auBoundaryLinks", "boundaryLinks"], directionLinks: ["auDirectionLinks", "directionLinks"], collectionSize: ["auCollectionSize", "collectionSize"], page: ["auPage", "page"], pageSize: ["auPageSize", "pageSize"], size: ["auSize", "size"], pagesFactory: ["auPagesFactory", "pagesFactory"], className: ["auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, host: { properties: { "attr.aria-label": "state$().ariaLabel" } }, queries: [{ propertyName: "slotEllipsisFromContent", first: true, predicate: PaginationEllipsisDirective, descendants: true }, { propertyName: "slotFirstFromContent", first: true, predicate: PaginationFirstDirective, descendants: true }, { propertyName: "slotPreviousFromContent", first: true, predicate: PaginationPreviousDirective, descendants: true }, { propertyName: "slotNextFromContent", first: true, predicate: PaginationNextDirective, descendants: true }, { propertyName: "slotLastFromContent", first: true, predicate: PaginationLastDirective, descendants: true }, { propertyName: "slotPagesFromContent", first: true, predicate: PaginationPagesDirective, descendants: true }, { propertyName: "slotNumberLabelFromContent", first: true, predicate: PaginationNumberDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-container *ngIf="widget.state$ | async as state">
			<ul [class]="'au-pagination pagination' + (state.size ? ' pagination-' + state.size : '') + ' ' + state.className">
				<li *ngIf="state.boundaryLinks" class="page-item" [class.disabled]="state.previousDisabled">
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
				<li *ngIf="state.directionLinks" class="page-item" [class.disabled]="state.previousDisabled">
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
				<ng-template [auSlot]="state.slotPages" [auSlotProps]="{widget, state}"></ng-template>
				<li *ngIf="state.directionLinks" class="page-item" [class.disabled]="state.nextDisabled">
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
				<li *ngIf="state.boundaryLinks" class="page-item" [class.disabled]="state.nextDisabled">
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
			</ul>
			<div aria-live="polite" class="visually-hidden">Current page is {{ state.page }}</div>
		</ng-container>
	\`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[auPagination]',
                    standalone: true,
                    imports: [NgIf, AsyncPipe, SlotDirective],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[attr.aria-label]': 'state$().ariaLabel',
                    },
                    encapsulation: ViewEncapsulation.None,
                    template: \`
		<ng-container *ngIf="widget.state$ | async as state">
			<ul [class]="'au-pagination pagination' + (state.size ? ' pagination-' + state.size : '') + ' ' + state.className">
				<li *ngIf="state.boundaryLinks" class="page-item" [class.disabled]="state.previousDisabled">
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
				<li *ngIf="state.directionLinks" class="page-item" [class.disabled]="state.previousDisabled">
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
				<ng-template [auSlot]="state.slotPages" [auSlotProps]="{widget, state}"></ng-template>
				<li *ngIf="state.directionLinks" class="page-item" [class.disabled]="state.nextDisabled">
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
				<li *ngIf="state.boundaryLinks" class="page-item" [class.disabled]="state.nextDisabled">
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
			</ul>
			<div aria-live="polite" class="visually-hidden">Current page is {{ state.page }}</div>
		</ng-container>
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
                args: ['auDisabled']
            }], boundaryLinks: [{
                type: Input,
                args: ['auBoundaryLinks']
            }], directionLinks: [{
                type: Input,
                args: ['auDirectionLinks']
            }], collectionSize: [{
                type: Input,
                args: ['auCollectionSize']
            }], page: [{
                type: Input,
                args: ['auPage']
            }], pageSize: [{
                type: Input,
                args: ['auPageSize']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWIvc3JjL2xpYi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQzs7QUFFdkI7O0dBRUc7QUFFSCxNQUFNLE9BQU8sMkJBQTJCO0lBRHhDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUE4QixDQUFBLENBQUMsQ0FBQztLQUk1RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFpQyxFQUFFLE9BQWdCO1FBQ2hGLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzsrR0FKVywyQkFBMkI7bUdBQTNCLDJCQUEyQjs7NEZBQTNCLDJCQUEyQjtrQkFEdkMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxtQ0FBbUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVE1RTs7R0FFRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQThCLENBQUEsQ0FBQyxDQUFDO0tBSTVEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQThCLEVBQUUsT0FBZ0I7UUFDN0UsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOytHQUpXLHdCQUF3QjttR0FBeEIsd0JBQXdCOzs0RkFBeEIsd0JBQXdCO2tCQURwQyxTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLGdDQUFnQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBUXpFOztHQUVHO0FBRUgsTUFBTSxPQUFPLHVCQUF1QjtJQURwQztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBOEIsQ0FBQSxDQUFDLENBQUM7S0FJNUQ7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBNkIsRUFBRSxPQUFnQjtRQUM1RSxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7K0dBSlcsdUJBQXVCO21HQUF2Qix1QkFBdUI7OzRGQUF2Qix1QkFBdUI7a0JBRG5DLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUUsK0JBQStCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUFReEU7O0dBRUc7QUFFSCxNQUFNLE9BQU8sdUJBQXVCO0lBRHBDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUE4QixDQUFBLENBQUMsQ0FBQztLQUk1RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUE2QixFQUFFLE9BQWdCO1FBQzVFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzsrR0FKVyx1QkFBdUI7bUdBQXZCLHVCQUF1Qjs7NEZBQXZCLHVCQUF1QjtrQkFEbkMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSwrQkFBK0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVF4RTs7R0FFRztBQUVILE1BQU0sT0FBTyx5QkFBeUI7SUFEdEM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQW9DLENBQUEsQ0FBQyxDQUFDO0tBSWxFO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQStCLEVBQUUsT0FBZ0I7UUFDOUUsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOytHQUpXLHlCQUF5QjttR0FBekIseUJBQXlCOzs0RkFBekIseUJBQXlCO2tCQURyQyxTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLGlDQUFpQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBUTFFOztHQUVHO0FBRUgsTUFBTSxPQUFPLDJCQUEyQjtJQUR4QztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBOEIsQ0FBQSxDQUFDLENBQUM7S0FJNUQ7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBaUMsRUFBRSxPQUFnQjtRQUNoRixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7K0dBSlcsMkJBQTJCO21HQUEzQiwyQkFBMkI7OzRGQUEzQiwyQkFBMkI7a0JBRHZDLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUUsbUNBQW1DLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUFRNUU7O0dBRUc7QUFFSCxNQUFNLE9BQU8sd0JBQXdCO0lBRHJDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUE4QixDQUFBLENBQUMsQ0FBQztLQUk1RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUE4QixFQUFFLE9BQWdCO1FBQzdFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzsrR0FKVyx3QkFBd0I7bUdBQXhCLHdCQUF3Qjs7NEZBQXhCLHdCQUF3QjtrQkFEcEMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQXFDekUsTUFBTSxPQUFPLCtCQUErQjsrR0FBL0IsK0JBQStCO21HQUEvQiwrQkFBK0Isc0xBMUJqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXdCSyw0REF6QkwsT0FBTyxtSEFBRSxJQUFJLDZGQUFFLGFBQWEsd0ZBVDFCLHdCQUF3Qjs7NEZBb0N4QiwrQkFBK0I7a0JBN0IzQyxTQUFTO21CQUFDO29CQUNWLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQztvQkFDakUsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBd0JLO2lCQUNmOzhCQUVvQyxLQUFLO3NCQUF4QyxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O0FBRW5DOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQywrQkFBK0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUUxRyxNQUFNLGFBQWEsR0FBNkI7SUFDL0MsU0FBUyxFQUFFLDBCQUEwQjtDQUNyQyxDQUFDO0FBNEVGLE1BQU0sT0FBTyxtQkFBbUI7SUExRWhDO1FBc0lVLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztZQUNwQyxPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLGFBQWE7WUFDYixNQUFNLEVBQUU7Z0JBQ1AsWUFBWSxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDMUQ7U0FDRCxDQUFDLENBQUM7UUFDTSxXQUFNLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLFFBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQXFGaEM7Ozs7OztXQU1HO1FBQ3FCLGVBQVUsR0FBRyxJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUMsQ0FBQztRQU9wRSxXQUFNLEdBQTRCLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBaUJ2RTtJQWZBLFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQscUJBQXFCO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsV0FBVztZQUN2RCxTQUFTLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFdBQVc7WUFDakQsUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxXQUFXO1lBQy9DLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsV0FBVztZQUMvQyxlQUFlLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixFQUFFLFdBQVc7WUFDN0QsU0FBUyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxXQUFXO1lBQ2pELFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsV0FBVztTQUN2RCxDQUFDLENBQUM7SUFDSixDQUFDOytHQXhMVyxtQkFBbUI7bUdBQW5CLG1CQUFtQixveUNBd0VqQiwyQkFBMkIsdUZBSTNCLHdCQUF3QiwwRkFJeEIsMkJBQTJCLHNGQUkzQix1QkFBdUIsc0ZBSXZCLHVCQUF1Qix1RkFJdkIsd0JBQXdCLDZGQUl4Qix5QkFBeUIscUVBaks3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBK0RULDREQXJFUyxJQUFJLHdGQUFFLFNBQVMsOENBQUUsYUFBYTs7NEZBdUU1QixtQkFBbUI7a0JBMUUvQixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQztvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDTCxtQkFBbUIsRUFBRSxvQkFBb0I7cUJBQ3pDO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQStEVDtpQkFDRDs4QkFVMEIsYUFBYTtzQkFBdEMsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBU0YsU0FBUztzQkFBOUIsS0FBSzt1QkFBQyxhQUFhO2dCQVFJLFdBQVc7c0JBQWxDLEtBQUs7dUJBQUMsZUFBZTtnQkFRSyxjQUFjO3NCQUF4QyxLQUFLO3VCQUFDLGtCQUFrQjtnQkFRSyxpQkFBaUI7c0JBQTlDLEtBQUs7dUJBQUMscUJBQXFCO2dCQVFGLGFBQWE7c0JBQXRDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQVFFLGFBQWE7c0JBQXRDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQWFDLFlBQVk7c0JBQXBDLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQUV2Qix1QkFBdUI7c0JBRHRCLFlBQVk7dUJBQUMsMkJBQTJCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO2dCQUdwQyxTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWE7Z0JBRXBCLG9CQUFvQjtzQkFEbkIsWUFBWTt1QkFBQyx3QkFBd0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Z0JBRzlCLFlBQVk7c0JBQXBDLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQUV2Qix1QkFBdUI7c0JBRHRCLFlBQVk7dUJBQUMsMkJBQTJCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO2dCQUdyQyxRQUFRO3NCQUE1QixLQUFLO3VCQUFDLFlBQVk7Z0JBRW5CLG1CQUFtQjtzQkFEbEIsWUFBWTt1QkFBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Z0JBR2pDLFFBQVE7c0JBQTVCLEtBQUs7dUJBQUMsWUFBWTtnQkFFbkIsbUJBQW1CO3NCQURsQixZQUFZO3VCQUFDLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztnQkFHaEMsU0FBUztzQkFBOUIsS0FBSzt1QkFBQyxhQUFhO2dCQUVwQixvQkFBb0I7c0JBRG5CLFlBQVk7dUJBQUMsd0JBQXdCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO2dCQUczQixlQUFlO3NCQUExQyxLQUFLO3VCQUFDLG1CQUFtQjtnQkFFMUIsMEJBQTBCO3NCQUR6QixZQUFZO3VCQUFDLHlCQUF5QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztnQkFNbkMsUUFBUTtzQkFBNUIsS0FBSzt1QkFBQyxZQUFZO2dCQUtPLGFBQWE7c0JBQXRDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQUtHLGNBQWM7c0JBQXhDLEtBQUs7dUJBQUMsa0JBQWtCO2dCQVdFLGNBQWM7c0JBQXhDLEtBQUs7dUJBQUMsa0JBQWtCO2dCQVFSLElBQUk7c0JBQXBCLEtBQUs7dUJBQUMsUUFBUTtnQkFNTSxRQUFRO3NCQUE1QixLQUFLO3VCQUFDLFlBQVk7Z0JBUUYsSUFBSTtzQkFBcEIsS0FBSzt1QkFBQyxRQUFRO2dCQU9VLFlBQVk7c0JBQXBDLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQVNDLFVBQVU7c0JBQWpDLE1BQU07dUJBQUMsY0FBYztnQkFLQSxTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UGFnaW5hdGlvbkNvbnRleHQsIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0LCBQYWdpbmF0aW9uUHJvcHMsIFBhZ2luYXRpb25TdGF0ZSwgU2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlUGFnaW5hdGlvbixcblx0cGF0Y2hTaW1wbGVDaGFuZ2VzLFxuXHR0b0FuZ3VsYXJTaWduYWwsXG5cdHRvU2xvdENvbnRleHRXaWRnZXQsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7QXN5bmNQaXBlLCBOZ0Zvck9mLCBOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnZWxsaXBzaXMnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uRWxsaXBzaXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdmaXJzdCcgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25GaXJzdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ2xhc3QnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uTGFzdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICduZXh0JyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbk5leHRdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk5leHREaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbk5leHREaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSBwYWdlICdudW1iZXInIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbk51bWJlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25OdW1iZXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAncHJldmlvdXMnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uUHJldmlvdXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdQYWdlcycgdGVtcGxhdGUgZm9yIHRoZSBQYWdlcyBzbG90XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uUGFnZXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbTmdGb3JPZiwgTmdJZiwgU2xvdERpcmVjdGl2ZSwgUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgYXVQYWdpbmF0aW9uUGFnZXMgI3BhZ2VzIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdDxsaVxuXHRcdFx0Km5nRm9yPVwibGV0IHBhZ2Ugb2Ygc3RhdGUucGFnZXM7IGluZGV4IGFzIGlcIlxuXHRcdFx0Y2xhc3M9XCJwYWdlLWl0ZW1cIlxuXHRcdFx0W2NsYXNzLmFjdGl2ZV09XCJwYWdlID09PSBzdGF0ZS5wYWdlXCJcblx0XHRcdFtjbGFzcy5kaXNhYmxlZF09XCJ3aWRnZXQuYXBpLmlzRWxsaXBzaXMocGFnZSkgfHwgc3RhdGUuZGlzYWJsZWRcIlxuXHRcdFx0W2F0dHIuYXJpYS1jdXJyZW50XT1cInBhZ2UgPT09IHN0YXRlLnBhZ2UgPyAncGFnZScgOiBudWxsXCJcblx0XHQ+XG5cdFx0XHQ8YSAqbmdJZj1cIndpZGdldC5hcGkuaXNFbGxpcHNpcyhwYWdlKVwiIGNsYXNzPVwicGFnZS1saW5rIGF1LWVsbGlwc2lzXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RFbGxpcHNpc1wiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9hPlxuXHRcdFx0PGFcblx0XHRcdFx0Km5nSWY9XCIhd2lkZ2V0LmFwaS5pc0VsbGlwc2lzKHBhZ2UpXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5wYWdlc0xhYmVsW2ldXCJcblx0XHRcdFx0Y2xhc3M9XCJwYWdlLWxpbmsgYXUtcGFnZVwiXG5cdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLnNlbGVjdChwYWdlKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5kaXNhYmxlZCA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5kaXNhYmxlZCA/ICd0cnVlJyA6IG51bGxcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TnVtYmVyTGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIGRpc3BsYXllZFBhZ2U6IHBhZ2V9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PHNwYW4gKm5nSWY9XCJzdGF0ZS5wYWdlID09PSBwYWdlXCIgY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj57eyBzdGF0ZS5hY3RpdmVMYWJlbCB9fTwvc3Bhbj5cblx0XHRcdDwvYT5cblx0XHQ8L2xpPlxuXHQ8L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdwYWdlcycsIHtzdGF0aWM6IHRydWV9KSBwYWdlczogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+O1xufVxuLyoqXG4gKiBUaGUgZGVmYXVsdCBzbG90IGZvciB0aGUgcGFnZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb25EZWZhdWx0U2xvdFBhZ2VzID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQsICdwYWdlcycpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPFBhZ2luYXRpb25Qcm9wcz4gPSB7XG5cdHNsb3RQYWdlczogcGFnaW5hdGlvbkRlZmF1bHRTbG90UGFnZXMsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVQYWdpbmF0aW9uXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtOZ0lmLCBBc3luY1BpcGUsIFNsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbYXR0ci5hcmlhLWxhYmVsXSc6ICdzdGF0ZSQoKS5hcmlhTGFiZWwnLFxuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJ3aWRnZXQuc3RhdGUkIHwgYXN5bmMgYXMgc3RhdGVcIj5cblx0XHRcdDx1bCBbY2xhc3NdPVwiJ2F1LXBhZ2luYXRpb24gcGFnaW5hdGlvbicgKyAoc3RhdGUuc2l6ZSA/ICcgcGFnaW5hdGlvbi0nICsgc3RhdGUuc2l6ZSA6ICcnKSArICcgJyArIHN0YXRlLmNsYXNzTmFtZVwiPlxuXHRcdFx0XHQ8bGkgKm5nSWY9XCJzdGF0ZS5ib3VuZGFyeUxpbmtzXCIgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZFwiPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXRlLmFyaWFGaXJzdExhYmVsXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LWZpcnN0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5maXJzdCgpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RGaXJzdFwiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdFx0PGxpICpuZ0lmPVwic3RhdGUuZGlyZWN0aW9uTGlua3NcIiBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkXCI+XG5cdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYVByZXZpb3VzTGFiZWxcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJwYWdlLWxpbmsgYXUtcHJldmlvdXNcIlxuXHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLnByZXZpb3VzKCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWQgPyAnLTEnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdFByZXZpb3VzXCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90UGFnZXNcIiBbYXVTbG90UHJvcHNdPVwie3dpZGdldCwgc3RhdGV9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PGxpICpuZ0lmPVwic3RhdGUuZGlyZWN0aW9uTGlua3NcIiBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5uZXh0RGlzYWJsZWRcIj5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5hcmlhTmV4dExhYmVsXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LW5leHRcIlxuXHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLm5leHQoKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUubmV4dERpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5uZXh0RGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdE5leHRcIiBbYXVTbG90UHJvcHNdPVwie3dpZGdldCwgc3RhdGV9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDxsaSAqbmdJZj1cInN0YXRlLmJvdW5kYXJ5TGlua3NcIiBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5uZXh0RGlzYWJsZWRcIj5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5hcmlhTGFzdExhYmVsXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LWxhc3RcIlxuXHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLmxhc3QoKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUubmV4dERpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5uZXh0RGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhc3RcIiBbYXVTbG90UHJvcHNdPVwie3dpZGdldCwgc3RhdGV9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PGRpdiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkN1cnJlbnQgcGFnZSBpcyB7eyBzdGF0ZS5wYWdlIH19PC9kaXY+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHQvKipcblx0ICogUHJvdmlkZSB0aGUgbGFiZWwgZm9yIGVhY2ggXCJQYWdlXCIgcGFnZSBidXR0b24uXG5cdCAqIFRoaXMgaXMgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBwYXJhbSBwcm9jZXNzUGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVBhZ2VMYWJlbCcpIGFyaWFQYWdlTGFiZWw6ICgocHJvY2Vzc1BhZ2U6IG51bWJlciwgcGFnZUNvdW50OiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIG5hdiBlbGVtZW50LlxuXHQgKlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnUGFnZSBuYXZpZ2F0aW9uJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcImFjdGl2ZVwiIHBhZ2UuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICcoY3VycmVudCknXG5cdCAqL1xuXHRASW5wdXQoJ2F1QWN0aXZlTGFiZWwnKSBhY3RpdmVMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkZpcnN0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdBY3Rpb24gbGluayBmb3IgZmlyc3QgcGFnZSdcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhRmlyc3RMYWJlbCcpIGFyaWFGaXJzdExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiUHJldmlvdXNcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBwcmV2aW91cyBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFQcmV2aW91c0xhYmVsJykgYXJpYVByZXZpb3VzTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJOZXh0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdBY3Rpb24gbGluayBmb3IgbmV4dCBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFOZXh0TGFiZWwnKSBhcmlhTmV4dExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiTGFzdFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnQWN0aW9uIGxpbmsgZm9yIGxhc3QgcGFnZSdcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFzdExhYmVsJykgYXJpYUxhc3RMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlUGFnaW5hdGlvbixcblx0XHR3aWRnZXROYW1lOiAncGFnaW5hdGlvbicsXG5cdFx0ZGVmYXVsdENvbmZpZyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uUGFnZUNoYW5nZTogKHBhZ2U6IG51bWJlcikgPT4gdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSksXG5cdFx0fSxcblx0fSk7XG5cdHJlYWRvbmx5IHdpZGdldCA9IHRvU2xvdENvbnRleHRXaWRnZXQodGhpcy5fd2lkZ2V0KTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblxuXHRASW5wdXQoJ2F1U2xvdEVsbGlwc2lzJykgc2xvdEVsbGlwc2lzOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RFbGxpcHNpc0Zyb21Db250ZW50OiBQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RGaXJzdCcpIHNsb3RGaXJzdDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90Rmlyc3RGcm9tQ29udGVudDogUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90UHJldmlvdXMnKSBzbG90UHJldmlvdXM6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdFByZXZpb3VzRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdE5leHQnKSBzbG90TmV4dDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3ROZXh0RnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90TGFzdCcpIHNsb3RMYXN0OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdExhc3RGcm9tQ29udGVudDogUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RQYWdlcycpIHNsb3RQYWdlczogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90UGFnZXNGcm9tQ29udGVudDogUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90TnVtYmVyTGFiZWwnKSBzbG90TnVtYmVyTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25OdW1iZXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3ROdW1iZXJMYWJlbEZyb21Db250ZW50OiBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHBhZ2luYXRpb24gbGlua3Mgd2lsbCBiZSBkaXNhYmxlZC5cblx0ICovXG5cdEBJbnB1dCgnYXVEaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBcIkZpcnN0XCIgYW5kIFwiTGFzdFwiIHBhZ2UgbGlua3MgYXJlIHNob3duLlxuXHQgKi9cblx0QElucHV0KCdhdUJvdW5kYXJ5TGlua3MnKSBib3VuZGFyeUxpbmtzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBcIk5leHRcIiBhbmQgXCJQcmV2aW91c1wiIHBhZ2UgbGlua3MgYXJlIHNob3duLlxuXHQgKi9cblx0QElucHV0KCdhdURpcmVjdGlvbkxpbmtzJykgZGlyZWN0aW9uTGlua3M6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4geW91ciBwYWdpbmF0ZWQgY29sbGVjdGlvbi5cblx0ICpcblx0ICogTm90ZSwgdGhhdCB0aGlzIGlzIG5vdCB0aGUgbnVtYmVyIG9mIHBhZ2VzLiBQYWdlIG51bWJlcnMgYXJlIGNhbGN1bGF0ZWQgZHluYW1pY2FsbHkgYmFzZWQgb25cblx0ICogYGNvbGxlY3Rpb25TaXplYCBhbmQgYHBhZ2VTaXplYC4gRXguIGlmIHlvdSBoYXZlIDEwMCBpdGVtcyBpbiB5b3VyIGNvbGxlY3Rpb24gYW5kIGRpc3BsYXlpbmcgMjAgaXRlbXMgcGVyIHBhZ2UsXG5cdCAqIHlvdSdsbCBlbmQgdXAgd2l0aCA1IHBhZ2VzLlxuXHQgKiBXaGF0ZXZlciB0aGUgY29sbGVjdGlvblNpemUgdGhlIHBhZ2UgbnVtYmVyIGlzIG9mIG1pbmltdW0gMS5cblx0ICogQGRlZmF1bHRWYWx1ZSAwXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q29sbGVjdGlvblNpemUnKSBjb2xsZWN0aW9uU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBwYWdlLlxuXHQgKlxuXHQgKiBQYWdlIG51bWJlcnMgc3RhcnQgd2l0aCBgMWAuXG5cdCAqIEBkZWZhdWx0VmFsdWUgMVxuXHQgKi9cblx0QElucHV0KCdhdVBhZ2UnKSBwYWdlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuXG5cdCAqIEBkZWZhdWx0VmFsdWUgMTBcblx0ICovXG5cdEBJbnB1dCgnYXVQYWdlU2l6ZScpIHBhZ2VTaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBwYWdpbmF0aW9uIGRpc3BsYXkgc2l6ZS5cblx0ICpcblx0ICogQm9vdHN0cmFwIGN1cnJlbnRseSBzdXBwb3J0cyBzbWFsbCBhbmQgbGFyZ2Ugc2l6ZXMuXG5cdCAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuXHQgKi9cblx0QElucHV0KCdhdVNpemUnKSBzaXplOiAnc20nIHwgJ2xnJyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHBhZ2VzRmFjdG9yeSByZXR1cm5zIGEgZnVuY3Rpb24gY29tcHV0aW5nIHRoZSBhcnJheSBvZiBwYWdlcyB0byBiZSBkaXNwbGF5ZWRcblx0ICogYXMgbnVtYmVyICgtMSBhcmUgdHJlYXRlZCBhcyBlbGxpcHNpcykuXG5cdCAqIFVzZSBQYWdlIHNsb3QgdG8gY3VzdG9taXplIHRoZSBwYWdlcyB2aWV3IGFuZCBub3QgdGhpc1xuXHQgKi9cblx0QElucHV0KCdhdVBhZ2VzRmFjdG9yeScpIHBhZ2VzRmFjdG9yeTogKChwYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBudW1iZXJbXSkgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gdGhlIHBhZ2UgaXMgY2hhbmdlZC5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgbnVtYmVyIG9mIHRoZSBuZXdseSBzZWxlY3RlZCBwYWdlLlxuXHQgKlxuXHQgKiBQYWdlIG51bWJlcnMgc3RhcnQgd2l0aCBgMWAuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVBhZ2VDaGFuZ2UnKSBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KHRydWUpO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRzdGF0ZSQ6IFNpZ25hbDxQYWdpbmF0aW9uU3RhdGU+ID0gdG9Bbmd1bGFyU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQpO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRwYXRjaFNpbXBsZUNoYW5nZXModGhpcy5fd2lkZ2V0LnBhdGNoLCBjaGFuZ2VzKTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90RWxsaXBzaXM6IHRoaXMuc2xvdEVsbGlwc2lzRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEZpcnN0OiB0aGlzLnNsb3RGaXJzdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RMYXN0OiB0aGlzLnNsb3RMYXN0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdE5leHQ6IHRoaXMuc2xvdE5leHRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90TnVtYmVyTGFiZWw6IHRoaXMuc2xvdE51bWJlckxhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFBhZ2VzOiB0aGlzLnNsb3RQYWdlc0Zyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RQcmV2aW91czogdGhpcy5zbG90UHJldmlvdXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
