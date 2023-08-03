const a=`import {AgnosUIAngularModule} from '@agnos-ui/angular';
import type {PaginationContext} from '@agnos-ui/angular';
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, NgIf],
	template: \`
		<p>A pagination with customized links:</p>
		<nav au-pagination [collectionSize]="70" [(page)]="customPage" ariaLabel="Page navigation with customized links">
			<ng-template auPaginationPrevious>Prev</ng-template>
			<ng-template auPaginationNext>Next</ng-template>
			<ng-template auPaginationNumber let-displayedPage="displayedPage">{{ getPageSymbol(displayedPage) }}</ng-template>
		</nav>
		<hr />

		<p>A pagination with customized pages:</p>
		<nav au-pagination [collectionSize]="70" [(page)]="customPage" ariaLabel="Page navigation with customized pages">
			<ng-template auPaginationPages let-widget="widget" let-state="state">
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
							(keyup.enter)="handleTheChange(i, widget)"
							(blur)="handleTheChange(i, widget)"
							(input)="formatInput(i)"
							aria-labelledby="paginationInputLabel paginationDescription"
							style="width: 2.5rem"
						/>
						<span id="paginationDescription" class="col-form-label text-nowrap px-2"> of {{ state.pages.length }}</span>
					</div>
				</li>
			</ng-template>
		</nav>
	\`,
})
export default class PaginationComponent {
	customPage = 4;

	getPageSymbol(displayedPage: number) {
		return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][displayedPage - 1];
	}

	formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}

	handleTheChange(input: HTMLInputElement, widget: PaginationContext['widget']) {
		const value = input.value;
		const intValue = parseInt(value);
		widget.actions.select(intValue);
		input.value = widget.stores.page$().toString();
	}
}
`;export{a as default};
