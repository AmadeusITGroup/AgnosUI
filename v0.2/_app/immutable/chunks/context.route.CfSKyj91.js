const a=`import {PaginationComponent, PaginationNumberDirective} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [PaginationComponent, PaginationNumberDirective],
	template: \`
		<p>The default look of the pagination:</p>
		<nav auPagination auCollectionSize="60"></nav>

		<p>Changing the slot displaying the page number to use letters instead:</p>
		<nav auPagination auCollectionSize="60">
			<ng-template auPaginationNumber let-displayedPage="displayedPage">
				{{ ['A', 'B', 'C', 'D', 'E', 'F'][displayedPage - 1] }}
			</ng-template>
		</nav>
	\`,
})
export default class SlotsContextComponent {}
`;export{a as default};
