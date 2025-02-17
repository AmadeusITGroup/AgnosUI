import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';

@Component({
	imports: [AgnosUIAngularModule],
	template: `
		<h5>Basic pagination:</h5>
		<nav auPagination auCollectionSize="60" [(auPage)]="page"></nav>

		<h5>No direction links:</h5>
		<nav auPagination auCollectionSize="60" [(auPage)]="page" [auDirectionLinks]="false"></nav>

		<h5>With boundary links:</h5>
		<nav auPagination auCollectionSize="60" [(auPage)]="page" auBoundaryLinks></nav>

		<div class="mb-3">
			Current page: <span id="defaultPage">{{ page() }}</span>
		</div>

		<h5>Disabled pagination:</h5>
		<nav auPagination auCollectionSize="60" [(auPage)]="pageAlone" auAriaLabel="Disabled pagination" auDisabled></nav>
	`,
})
export default class DefaultPaginationComponent {
	readonly page = signal(4);
	readonly pageAlone = signal(1);
}
