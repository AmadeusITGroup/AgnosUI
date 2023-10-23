const t=`import { ComponentTemplate, SlotDirective, callWidgetFactory, createPagination, patchSimpleChanges, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, inject, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationEllipsisDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: PaginationEllipsisDirective, isStandalone: true, selector: "ng-template[auPaginationEllipsis]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationEllipsisDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationFirstDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: PaginationFirstDirective, isStandalone: true, selector: "ng-template[auPaginationFirst]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationFirstDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationLastDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: PaginationLastDirective, isStandalone: true, selector: "ng-template[auPaginationLast]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationLastDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationNextDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: PaginationNextDirective, isStandalone: true, selector: "ng-template[auPaginationNext]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationNextDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationNumberDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: PaginationNumberDirective, isStandalone: true, selector: "ng-template[auPaginationNumber]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationNumberDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationPreviousDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: PaginationPreviousDirective, isStandalone: true, selector: "ng-template[auPaginationPrevious]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationPreviousDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationPagesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: PaginationPagesDirective, isStandalone: true, selector: "ng-template[auPaginationPages]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationPagesDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auPaginationPages]', standalone: true }]
        }] });
export class PaginationDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: PaginationDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "pages", first: true, predicate: ["pages"], descendants: true, static: true }], ngImport: i0, template: \`<ng-template auPaginationPages #pages let-state="state" let-widget="widget">
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationDefaultSlotsComponent, decorators: [{
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
        this.state$ = toSignal(this._widget.state$, { requireSync: true });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: PaginationComponent, isStandalone: true, selector: "[auPagination]", inputs: { ariaPageLabel: ["auAriaPageLabel", "ariaPageLabel"], ariaLabel: ["auAriaLabel", "ariaLabel"], activeLabel: ["auActiveLabel", "activeLabel"], ariaFirstLabel: ["auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: ["auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: ["auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: ["auAriaLastLabel", "ariaLastLabel"], slotEllipsis: ["auSlotEllipsis", "slotEllipsis"], slotFirst: ["auSlotFirst", "slotFirst"], slotPrevious: ["auSlotPrevious", "slotPrevious"], slotNext: ["auSlotNext", "slotNext"], slotLast: ["auSlotLast", "slotLast"], slotPages: ["auSlotPages", "slotPages"], slotNumberLabel: ["auSlotNumberLabel", "slotNumberLabel"], disabled: ["auDisabled", "disabled"], boundaryLinks: ["auBoundaryLinks", "boundaryLinks"], directionLinks: ["auDirectionLinks", "directionLinks"], collectionSize: ["auCollectionSize", "collectionSize"], page: ["auPage", "page"], pageSize: ["auPageSize", "pageSize"], size: ["auSize", "size"], pagesFactory: ["auPagesFactory", "pagesFactory"], className: ["auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, host: { properties: { "attr.aria-label": "state$().ariaLabel" } }, queries: [{ propertyName: "slotEllipsisFromContent", first: true, predicate: PaginationEllipsisDirective, descendants: true }, { propertyName: "slotFirstFromContent", first: true, predicate: PaginationFirstDirective, descendants: true }, { propertyName: "slotPreviousFromContent", first: true, predicate: PaginationPreviousDirective, descendants: true }, { propertyName: "slotNextFromContent", first: true, predicate: PaginationNextDirective, descendants: true }, { propertyName: "slotLastFromContent", first: true, predicate: PaginationLastDirective, descendants: true }, { propertyName: "slotPagesFromContent", first: true, predicate: PaginationPagesDirective, descendants: true }, { propertyName: "slotNumberLabelFromContent", first: true, predicate: PaginationNumberDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWIvc3JjL2xpYi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFcEQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sMkJBQTJCO0lBRHhDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUE4QixDQUFBLENBQUMsQ0FBQztLQUk1RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFpQyxFQUFFLE9BQWdCO1FBQ2hGLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzsrR0FKVywyQkFBMkI7bUdBQTNCLDJCQUEyQjs7NEZBQTNCLDJCQUEyQjtrQkFEdkMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxtQ0FBbUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVE1RTs7R0FFRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQThCLENBQUEsQ0FBQyxDQUFDO0tBSTVE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RUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO2dCQUczQixlQUFlO3NCQUExQyxLQUFLO3VCQUFDLG1CQUFtQjtnQkFFMUIsMEJBQTBCO3NCQUR6QixZQUFZO3VCQUFDLHlCQUF5QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztnQkFNbkMsUUFBUTtzQkFBNUIsS0FBSzt1QkFBQyxZQUFZO2dCQUtPLGFBQWE7c0JBQXRDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQUtHLGNBQWM7c0JBQXhDLEtBQUs7dUJBQUMsa0JBQWtCO2dCQVdFLGNBQWM7c0JBQXhDLEtBQUs7dUJBQUMsa0JBQWtCO2dCQVFSLElBQUk7c0JBQXBCLEtBQUs7dUJBQUMsUUFBUTtnQkFNTSxRQUFRO3NCQUE1QixLQUFLO3VCQUFDLFlBQVk7Z0JBUUYsSUFBSTtzQkFBcEIsS0FBSzt1QkFBQyxRQUFRO2dCQU9VLFlBQVk7c0JBQXBDLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQVNDLFVBQVU7c0JBQWpDLE1BQU07dUJBQUMsY0FBYztnQkFLQSxTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UGFnaW5hdGlvbkNvbnRleHQsIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0LCBQYWdpbmF0aW9uUHJvcHMsIFBhZ2luYXRpb25TdGF0ZSwgU2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlUGFnaW5hdGlvbixcblx0cGF0Y2hTaW1wbGVDaGFuZ2VzLFxuXHR0b1Nsb3RDb250ZXh0V2lkZ2V0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge0FzeW5jUGlwZSwgTmdGb3JPZiwgTmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkLCBPbkNoYW5nZXMsIFNpZ25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dG9TaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ2VsbGlwc2lzJyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbkVsbGlwc2lzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnZmlyc3QnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uRmlyc3RdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdsYXN0JyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbkxhc3RdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnbmV4dCcgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25OZXh0XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgcGFnZSAnbnVtYmVyJyB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25OdW1iZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uTnVtYmVyQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uTnVtYmVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ3ByZXZpb3VzJyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvblByZXZpb3VzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnUGFnZXMnIHRlbXBsYXRlIGZvciB0aGUgUGFnZXMgc2xvdFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvblBhZ2VzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW05nRm9yT2YsIE5nSWYsIFNsb3REaXJlY3RpdmUsIFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlIGF1UGFnaW5hdGlvblBhZ2VzICNwYWdlcyBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHQ8bGlcblx0XHRcdCpuZ0Zvcj1cImxldCBwYWdlIG9mIHN0YXRlLnBhZ2VzOyBpbmRleCBhcyBpXCJcblx0XHRcdGNsYXNzPVwicGFnZS1pdGVtXCJcblx0XHRcdFtjbGFzcy5hY3RpdmVdPVwicGFnZSA9PT0gc3RhdGUucGFnZVwiXG5cdFx0XHRbY2xhc3MuZGlzYWJsZWRdPVwid2lkZ2V0LmFwaS5pc0VsbGlwc2lzKHBhZ2UpIHx8IHN0YXRlLmRpc2FibGVkXCJcblx0XHRcdFthdHRyLmFyaWEtY3VycmVudF09XCJwYWdlID09PSBzdGF0ZS5wYWdlID8gJ3BhZ2UnIDogbnVsbFwiXG5cdFx0PlxuXHRcdFx0PGEgKm5nSWY9XCJ3aWRnZXQuYXBpLmlzRWxsaXBzaXMocGFnZSlcIiBjbGFzcz1cInBhZ2UtbGluayBhdS1lbGxpcHNpc1wiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90RWxsaXBzaXNcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvYT5cblx0XHRcdDxhXG5cdFx0XHRcdCpuZ0lmPVwiIXdpZGdldC5hcGkuaXNFbGxpcHNpcyhwYWdlKVwiXG5cdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUucGFnZXNMYWJlbFtpXVwiXG5cdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LXBhZ2VcIlxuXHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5zZWxlY3QocGFnZSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUuZGlzYWJsZWQgPyAnLTEnIDogbnVsbFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUuZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdD5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdE51bWJlckxhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCBkaXNwbGF5ZWRQYWdlOiBwYWdlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDxzcGFuICpuZ0lmPVwic3RhdGUucGFnZSA9PT0gcGFnZVwiIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+e3sgc3RhdGUuYWN0aXZlTGFiZWwgfX08L3NwYW4+XG5cdFx0XHQ8L2E+XG5cdFx0PC9saT5cblx0PC9uZy10ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgncGFnZXMnLCB7c3RhdGljOiB0cnVlfSkgcGFnZXM6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pjtcbn1cbi8qKlxuICogVGhlIGRlZmF1bHQgc2xvdCBmb3IgdGhlIHBhZ2VzXG4gKi9cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uRGVmYXVsdFNsb3RQYWdlcyA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAncGFnZXMnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxQYWdpbmF0aW9uUHJvcHM+ID0ge1xuXHRzbG90UGFnZXM6IHBhZ2luYXRpb25EZWZhdWx0U2xvdFBhZ2VzLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1UGFnaW5hdGlvbl0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbTmdJZiwgQXN5bmNQaXBlLCBTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2F0dHIuYXJpYS1sYWJlbF0nOiAnc3RhdGUkKCkuYXJpYUxhYmVsJyxcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwid2lkZ2V0LnN0YXRlJCB8IGFzeW5jIGFzIHN0YXRlXCI+XG5cdFx0XHQ8dWwgW2NsYXNzXT1cIidhdS1wYWdpbmF0aW9uIHBhZ2luYXRpb24nICsgKHN0YXRlLnNpemUgPyAnIHBhZ2luYXRpb24tJyArIHN0YXRlLnNpemUgOiAnJykgKyAnICcgKyBzdGF0ZS5jbGFzc05hbWVcIj5cblx0XHRcdFx0PGxpICpuZ0lmPVwic3RhdGUuYm91bmRhcnlMaW5rc1wiIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWRcIj5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5hcmlhRmlyc3RMYWJlbFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1maXJzdFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMuZmlyc3QoKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZCA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZCA/ICd0cnVlJyA6IG51bGxcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90Rmlyc3RcIiBbYXVTbG90UHJvcHNdPVwie3dpZGdldCwgc3RhdGV9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDxsaSAqbmdJZj1cInN0YXRlLmRpcmVjdGlvbkxpbmtzXCIgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZFwiPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXRlLmFyaWFQcmV2aW91c0xhYmVsXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LXByZXZpb3VzXCJcblx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5wcmV2aW91cygpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RQcmV2aW91c1wiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdFBhZ2VzXCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDxsaSAqbmdJZj1cInN0YXRlLmRpcmVjdGlvbkxpbmtzXCIgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkXCI+XG5cdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYU5leHRMYWJlbFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1uZXh0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5uZXh0KCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cInN0YXRlLm5leHREaXNhYmxlZCA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3ROZXh0XCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bGkgKm5nSWY9XCJzdGF0ZS5ib3VuZGFyeUxpbmtzXCIgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkXCI+XG5cdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUxhc3RMYWJlbFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1sYXN0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5sYXN0KCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cInN0YXRlLm5leHREaXNhYmxlZCA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYXN0XCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0PC91bD5cblx0XHRcdDxkaXYgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5DdXJyZW50IHBhZ2UgaXMge3sgc3RhdGUucGFnZSB9fTwvZGl2PlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIFByb3ZpZGUgdGhlIGxhYmVsIGZvciBlYWNoIFwiUGFnZVwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBUaGlzIGlzIHVzZWQgZm9yIGFjY2Vzc2liaWxpdHkgcHVycG9zZXMuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAcGFyYW0gcHJvY2Vzc1BhZ2UgLSBUaGUgY3VycmVudCBwYWdlIG51bWJlclxuXHQgKiBAcGFyYW0gcGFnZUNvdW50IC0gVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFQYWdlTGFiZWwnKSBhcmlhUGFnZUxhYmVsOiAoKHByb2Nlc3NQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBuYXYgZWxlbWVudC5cblx0ICpcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ1BhZ2UgbmF2aWdhdGlvbidcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJhY3RpdmVcIiBwYWdlLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnKGN1cnJlbnQpJ1xuXHQgKi9cblx0QElucHV0KCdhdUFjdGl2ZUxhYmVsJykgYWN0aXZlTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJGaXJzdFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnQWN0aW9uIGxpbmsgZm9yIGZpcnN0IHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUZpcnN0TGFiZWwnKSBhcmlhRmlyc3RMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIlByZXZpb3VzXCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdBY3Rpb24gbGluayBmb3IgcHJldmlvdXMgcGFnZSdcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhUHJldmlvdXNMYWJlbCcpIGFyaWFQcmV2aW91c0xhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiTmV4dFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnQWN0aW9uIGxpbmsgZm9yIG5leHQgcGFnZSdcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTmV4dExhYmVsJykgYXJpYU5leHRMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkxhc3RcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBsYXN0IHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhc3RMYWJlbCcpIGFyaWFMYXN0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVBhZ2luYXRpb24sXG5cdFx0d2lkZ2V0TmFtZTogJ3BhZ2luYXRpb24nLFxuXHRcdGRlZmF1bHRDb25maWcsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvblBhZ2VDaGFuZ2U6IChwYWdlOiBudW1iZXIpID0+IHRoaXMucGFnZUNoYW5nZS5lbWl0KHBhZ2UpLFxuXHRcdH0sXG5cdH0pO1xuXHRyZWFkb25seSB3aWRnZXQgPSB0b1Nsb3RDb250ZXh0V2lkZ2V0KHRoaXMuX3dpZGdldCk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cblx0QElucHV0KCdhdVNsb3RFbGxpcHNpcycpIHNsb3RFbGxpcHNpczogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90RWxsaXBzaXNGcm9tQ29udGVudDogUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90Rmlyc3QnKSBzbG90Rmlyc3Q6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEZpcnN0RnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFByZXZpb3VzJykgc2xvdFByZXZpb3VzOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RQcmV2aW91c0Zyb21Db250ZW50OiBQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3ROZXh0Jykgc2xvdE5leHQ6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90TmV4dEZyb21Db250ZW50OiBQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdExhc3QnKSBzbG90TGFzdDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RMYXN0RnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90UGFnZXMnKSBzbG90UGFnZXM6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdFBhZ2VzRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdE51bWJlckxhYmVsJykgc2xvdE51bWJlckxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uTnVtYmVyQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90TnVtYmVyTGFiZWxGcm9tQ29udGVudDogUGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBwYWdpbmF0aW9uIGxpbmtzIHdpbGwgYmUgZGlzYWJsZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1RGlzYWJsZWQnKSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJGaXJzdFwiIGFuZCBcIkxhc3RcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICovXG5cdEBJbnB1dCgnYXVCb3VuZGFyeUxpbmtzJykgYm91bmRhcnlMaW5rczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJOZXh0XCIgYW5kIFwiUHJldmlvdXNcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICovXG5cdEBJbnB1dCgnYXVEaXJlY3Rpb25MaW5rcycpIGRpcmVjdGlvbkxpbmtzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHlvdXIgcGFnaW5hdGVkIGNvbGxlY3Rpb24uXG5cdCAqXG5cdCAqIE5vdGUsIHRoYXQgdGhpcyBpcyBub3QgdGhlIG51bWJlciBvZiBwYWdlcy4gUGFnZSBudW1iZXJzIGFyZSBjYWxjdWxhdGVkIGR5bmFtaWNhbGx5IGJhc2VkIG9uXG5cdCAqIGBjb2xsZWN0aW9uU2l6ZWAgYW5kIGBwYWdlU2l6ZWAuIEV4LiBpZiB5b3UgaGF2ZSAxMDAgaXRlbXMgaW4geW91ciBjb2xsZWN0aW9uIGFuZCBkaXNwbGF5aW5nIDIwIGl0ZW1zIHBlciBwYWdlLFxuXHQgKiB5b3UnbGwgZW5kIHVwIHdpdGggNSBwYWdlcy5cblx0ICogV2hhdGV2ZXIgdGhlIGNvbGxlY3Rpb25TaXplIHRoZSBwYWdlIG51bWJlciBpcyBvZiBtaW5pbXVtIDEuXG5cdCAqIEBkZWZhdWx0VmFsdWUgMFxuXHQgKi9cblx0QElucHV0KCdhdUNvbGxlY3Rpb25TaXplJykgY29sbGVjdGlvblNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcGFnZS5cblx0ICpcblx0ICogUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggYDFgLlxuXHQgKiBAZGVmYXVsdFZhbHVlIDFcblx0ICovXG5cdEBJbnB1dCgnYXVQYWdlJykgcGFnZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlLlxuXHQgKiBAZGVmYXVsdFZhbHVlIDEwXG5cdCAqL1xuXHRASW5wdXQoJ2F1UGFnZVNpemUnKSBwYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgcGFnaW5hdGlvbiBkaXNwbGF5IHNpemUuXG5cdCAqXG5cdCAqIEJvb3RzdHJhcCBjdXJyZW50bHkgc3VwcG9ydHMgc21hbGwgYW5kIGxhcmdlIHNpemVzLlxuXHQgKiBAZGVmYXVsdFZhbHVlIG51bGxcblx0ICovXG5cdEBJbnB1dCgnYXVTaXplJykgc2l6ZTogJ3NtJyB8ICdsZycgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBwYWdlc0ZhY3RvcnkgcmV0dXJucyBhIGZ1bmN0aW9uIGNvbXB1dGluZyB0aGUgYXJyYXkgb2YgcGFnZXMgdG8gYmUgZGlzcGxheWVkXG5cdCAqIGFzIG51bWJlciAoLTEgYXJlIHRyZWF0ZWQgYXMgZWxsaXBzaXMpLlxuXHQgKiBVc2UgUGFnZSBzbG90IHRvIGN1c3RvbWl6ZSB0aGUgcGFnZXMgdmlldyBhbmQgbm90IHRoaXNcblx0ICovXG5cdEBJbnB1dCgnYXVQYWdlc0ZhY3RvcnknKSBwYWdlc0ZhY3Rvcnk6ICgocGFnZTogbnVtYmVyLCBwYWdlQ291bnQ6IG51bWJlcikgPT4gbnVtYmVyW10pIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBwYWdlIGlzIGNoYW5nZWQuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIG51bWJlciBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgcGFnZS5cblx0ICpcblx0ICogUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggYDFgLlxuXHQgKi9cblx0QE91dHB1dCgnYXVQYWdlQ2hhbmdlJykgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPih0cnVlKTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0c3RhdGUkOiBTaWduYWw8UGFnaW5hdGlvblN0YXRlPiA9IHRvU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQsIHtyZXF1aXJlU3luYzogdHJ1ZX0pO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRwYXRjaFNpbXBsZUNoYW5nZXModGhpcy5fd2lkZ2V0LnBhdGNoLCBjaGFuZ2VzKTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90RWxsaXBzaXM6IHRoaXMuc2xvdEVsbGlwc2lzRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEZpcnN0OiB0aGlzLnNsb3RGaXJzdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RMYXN0OiB0aGlzLnNsb3RMYXN0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdE5leHQ6IHRoaXMuc2xvdE5leHRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90TnVtYmVyTGFiZWw6IHRoaXMuc2xvdE51bWJlckxhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFBhZ2VzOiB0aGlzLnNsb3RQYWdlc0Zyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RQcmV2aW91czogdGhpcy5zbG90UHJldmlvdXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
