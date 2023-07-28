const t=`import type {PaginationContext, PaginationProps} from '@agnos-ui/angular';
import {AgnosUIAngularModule, SlotDirective, injectWidgetsConfig, provideWidgetsConfig} from '@agnos-ui/angular';
import {AsyncPipe, NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, NgIf, AsyncPipe, NgFor, SlotDirective],
	providers: [provideWidgetsConfig()],
	template: \`
		<ng-template #custom let-widget="widget" let-state="state">
			<li class="au-custom-pages-item" *ngIf="state.pages.length > 0">
				<div class="mb-3 d-flex flex-nowrap px-2">
					<label id="paginationInputLabel" for="paginationInput" class="col-form-label me-2 ms-1">Page</label>
					<input
						#i
						type="text"
						inputmode="numeric"
						pattern="[0-9]*"
						class="form-control custom-pages-input"
						id="paginationInput"
						[value]="state.page"
						(keydown.enter)="handleKeyDownEnter($event, i, widget)"
						(blur)="handleOnBlur($event, i, widget)"
						(input)="formatInput($any($event).target)"
						aria-labelledby="paginationInputLabel paginationDescription"
						style="width: 2.5rem"
					/>
					<span id="paginationDescription" class="col-form-label text-nowrap px-2"> of {{ state.pages.length }}</span>
				</div>
			</li>
		</ng-template>
		<ng-template #defaultSlotPages let-state="state" let-widget="widget" let-defaultSlotPages="defaultSlotPages">
			<li
				*ngFor="let page of state.pages; index as i"
				class="page-item"
				[class.active]="page === state.page"
				[class.disabled]="widget.api.isEllipsis(page) || state.disabled"
				[attr.aria-current]="page === state.page ? 'page' : null"
			>
				<a *ngIf="widget.api.isEllipsis(page)" class="page-link au-ellipsis" tabindex="-1" aria-disabled="true">
					<ng-template [auSlot]="state.slotEllipsis" [auSlotProps]="{state, widget, defaultSlotPages}"></ng-template>
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
					<ng-template [auSlot]="state.slotNumberLabel" [auSlotProps]="{state, widget, defaultSlotPages, displayedPage: i + 1}"></ng-template>
					<span *ngIf="state.page === page" class="visually-hidden">{{ state.activeLabel }}</span>
				</a>
			</li>
		</ng-template>
		<au-pagination [(page)]="page" />
		<div class="mt-3">
			Disabled:
			<div id="btn-config-disabled" class="btn-group mb-2">
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.pagination?.disabled === true"
					(click)="updatePaginationConfig({disabled: true})"
				>
					true
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.pagination?.disabled !== true"
					(click)="updatePaginationConfig({disabled: false})"
				>
					false
				</button>
			</div>
			<br />
			Collection size:
			<div id="btn-config-collectionSize" class="btn-group mb-2">
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.pagination?.collectionSize === 40"
					(click)="updatePaginationConfig({collectionSize: 40})"
				>
					40
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.pagination?.collectionSize === 30"
					(click)="updatePaginationConfig({collectionSize: 30})"
				>
					30
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.pagination?.collectionSize === 20"
					(click)="updatePaginationConfig({collectionSize: 20})"
				>
					20
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="!(widgetsConfig$ | async)?.pagination?.collectionSize"
					(click)="updatePaginationConfig({collectionSize: undefined})"
				>
					undefined
				</button>
			</div>
			<br />
			className:
			<div id="btn-config-className" class="btn-group mb-2">
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.pagination?.className === 'justify-content-center'"
					(click)="updatePaginationConfig({className: 'justify-content-center'})"
				>
					justify-content-center
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.pagination?.className === 'justify-content-end'"
					(click)="updatePaginationConfig({className: 'justify-content-end'})"
				>
					justify-content-end
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="!(widgetsConfig$ | async)?.pagination?.className"
					(click)="updatePaginationConfig({className: undefined})"
				>
					undefined
				</button>
			</div>
			<br />
			slotPages:
			<div id="btn-config-slotPages" class="btn-group mb-2">
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.pagination?.slotPages === defaultSlotPages"
					(click)="updatePaginationConfig({slotPages: defaultSlotPages})"
				>
					reuse default
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(widgetsConfig$ | async)?.pagination?.slotPages === custom"
					(click)="updatePaginationConfig({slotPages: custom})"
				>
					custom pages
				</button>
				<button
					class="btn btn-sm btn-outline-secondary"
					[class.active]="!(widgetsConfig$ | async)?.pagination?.slotPages"
					(click)="updatePaginationConfig({slotPages: undefined})"
				>
					undefined
				</button>
			</div>
		</div>
	\`,
})
export default class PaginationConfigComponent {
	page = 3;
	widgetsConfig$ = injectWidgetsConfig();

	updatePaginationConfig(change: Partial<PaginationProps>) {
		this.widgetsConfig$.update((value) => ({...value, pagination: {...value.pagination, ...change}}));
	}

	formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}
	handleOnBlur(e: any, input: HTMLInputElement, widget: PaginationContext['widget']) {
		const value = e.target.value;
		const intValue = parseInt(value);
		widget.actions.select(intValue);
		input.value = widget.stores.page$().toString();
	}
	handleKeyDownEnter(e: any, input: HTMLInputElement, widget: PaginationContext['widget']) {
		this.handleOnBlur(e, input, widget);
	}
}
`;export{t as default};
