import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<au-pagination [(page)]="page" />
		<div>
			Current page: <span id="defaultPage">{{ page }}</span>
		</div>
	`,
})
export default class DefaultPaginationComponent {
	page = 4;
}
