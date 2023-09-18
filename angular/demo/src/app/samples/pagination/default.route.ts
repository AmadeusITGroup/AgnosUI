import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<h5>Basic pagination:</h5>
		<nav auPagination [(auPage)]="page" [auCollectionSize]="60"></nav>

		<h5>No direction links:</h5>
		<nav auPagination [auCollectionSize]="60" [(auPage)]="page" [auDirectionLinks]="false"></nav>

		<h5>With boundary links:</h5>
		<nav auPagination [auCollectionSize]="60" [(auPage)]="page" [auBoundaryLinks]="true"></nav>

		<div class="mb-3">
			Current page: <span id="defaultPage">{{ page }}</span>
		</div>

		<h5>Disabled pagination:</h5>
		<nav auPagination [auCollectionSize]="60" [(auPage)]="pageAlone" auAriaLabel="Disabled pagination" [auDisabled]="true"></nav>
	`,
})
export default class DefaultPaginationComponent {
	page = 4;
	pageAlone = 1;
}
