import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<p class="d-inline-flex gap-1">
			<button class="btn btn-primary" type="button" (click)="collapse.api.open()">Open collapse</button>
			<button class="btn btn-primary" type="button" (click)="collapse.api.close()">Close collapse</button>
			<button class="btn btn-primary" type="button" (click)="collapse.api.toggle()">Toggle collapse</button>
		</p>
		<div auCollapse #collapse="auCollapse">
			<div class="card card-body">Visible content</div>
		</div>
	`,
})
export default class DefaultCollapseComponent {}
