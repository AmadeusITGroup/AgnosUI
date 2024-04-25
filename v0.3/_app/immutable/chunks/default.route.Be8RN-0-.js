const n=`import {PaginationComponent} from './pagination.component';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [PaginationComponent],
	template: \` <app-pagination collectionSize="40" boundaryLinks /> \`,
})
export default class DefaultPaginationComponent {}
`;export{n as default};
