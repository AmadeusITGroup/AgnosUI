const o=`import {PaginationComponent} from './pagination.component';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [PaginationComponent],
	template: \`
		<h2 class="text-lg mb-2">DaisyUI Example</h2>

		<app-pagination collectionSize="40" boundaryLinks />
	\`,
})
export default class DefaultPaginationComponent {}
`;export{o as default};
