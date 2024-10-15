import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import type {PaginationContext} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<p>A pagination with customized links:</p>
		<nav auPagination auCollectionSize="60" [(auPage)]="customPage" auAriaLabel="Page navigation with customized links">
			<ng-template auPaginationPrevious>Prev</ng-template>
			<ng-template auPaginationNext>Next</ng-template>
			<ng-template auPaginationNumber let-displayedPage="displayedPage">{{ getPageSymbol(displayedPage) }}</ng-template>
		</nav>
		<hr />

		<p>A pagination with customized pages:</p>
		<nav auPagination auCollectionSize="60" [(auPage)]="customPage" auAriaLabel="Page navigation with customized pages">
			<ng-template auPaginationPages let-actions="actions" let-state="state">
				@if (state.pages.length > 0) {
					<li class="au-custom-pages-item">
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
								(keyup.enter)="handleTheChange(i, actions)"
								(blur)="handleTheChange(i, actions)"
								(input)="formatInput(i)"
								aria-labelledby="paginationInputLabel paginationDescription"
								style="width: 2.5rem"
							/>
							<span id="paginationDescription" class="col-form-label text-nowrap px-2"> of {{ state.pages.length }}</span>
						</div>
					</li>
				}
			</ng-template>
		</nav>
	`,
})
export default class PaginationComponent {
	readonly customPage = signal(4);

	getPageSymbol(displayedPage: number) {
		return ['A', 'B', 'C', 'D', 'E', 'F'][displayedPage - 1];
	}

	formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}

	handleTheChange(input: HTMLInputElement, actions: PaginationContext['actions']) {
		const value = input.value;
		const intValue = parseInt(value);
		actions.select(intValue);
	}
}
