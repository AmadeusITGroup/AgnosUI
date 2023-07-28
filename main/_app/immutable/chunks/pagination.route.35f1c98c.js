const a=`import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {ngBootstrapPagination} from '@agnos-ui/core';
import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, ReactiveFormsModule, NgIf, AsyncPipe],
	template: \`
		<h2>Default pagination:</h2>
		<au-pagination [collectionSize]="0" [(page)]="pageAlone" aria-label="Default pagination" className="customClass" />

		<h2>Disabled pagination:</h2>
		<au-pagination [collectionSize]="0" [(page)]="pageAlone" aria-label="Default pagination" [disabled]="true" />

		<h2>No direction links:</h2>
		<au-pagination [collectionSize]="70" [(page)]="page" [directionLinks]="false" />

		<h2>With boundary links:</h2>
		<au-pagination [collectionSize]="70" [(page)]="page" [boundaryLinks]="true" />

		<h2>Restricted size, no rotation:</h2>
		<au-pagination [collectionSize]="120" [(page)]="page" [pagesFactory]="pagesFactory(5, false, true)" [boundaryLinks]="true" />

		<pre>Current page: {{ page }}</pre>

		<h2>Restricted size with rotation:</h2>
		<au-pagination [collectionSize]="120" [(page)]="currentPage" [pagesFactory]="pagesFactory(5, true, true)" [boundaryLinks]="true" />

		<h2>Restricted size with rotation and no ellipses:</h2>
		<au-pagination [collectionSize]="120" [(page)]="currentPage" [pagesFactory]="pagesFactory(5, true, false)" [boundaryLinks]="true" />

		<hr />
		<h2>Pagination Size</h2>
		<au-pagination [collectionSize]="50" [(page)]="currentPage" size="lg" />
		<au-pagination [collectionSize]="50" [(page)]="currentPage" />
		<au-pagination [collectionSize]="50" [(page)]="currentPage" size="sm" />

		<hr />

		<pre>Current page: {{ currentPage }}</pre>

		<p>A pagination with customized links:</p>
		<au-pagination [collectionSize]="70" [(page)]="customPage" aria-label="Custom pagination">
			<ng-template auPaginationPrevious>Prev</ng-template>
			<ng-template auPaginationNext>Next</ng-template>
			<ng-template auPaginationNumber let-displayedPage="displayedPage">{{ getPageSymbol(displayedPage) }}</ng-template>
		</au-pagination>
		<hr />

		<p>A pagination with customized pages:</p>
		<au-pagination [collectionSize]="70" [(page)]="customPage" [boundaryLinks]="true">
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
							(keyup.enter)="widget.actions.select(+i.value)"
							(blur)="widget.actions.select(+i.value)"
							(input)="formatInput($any($event).target)"
							aria-labelledby="paginationInputLabel paginationDescription"
							style="width: 2.5rem"
						/>
						<span id="paginationDescription" class="col-form-label text-nowrap px-2"> of {{ state.pages.length }}</span>
					</div>
				</li>
			</ng-template>
		</au-pagination>
		<hr />
	\`,
})
export default class PaginationComponent {
	page = 4;
	customPage = 4;
	currentPage = 10;
	pageAlone = 4;
	pagesFactory = ngBootstrapPagination;

	getPageSymbol(current: number) {
		return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
	}

	formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}
}
`;export{a as default};
