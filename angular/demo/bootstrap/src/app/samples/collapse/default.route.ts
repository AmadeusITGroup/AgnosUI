import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<button class="btn btn-primary m-2" type="button" (click)="collapse.api.open()">Open collapse</button>
		<button class="btn btn-primary m-2" type="button" (click)="collapse.api.close()">Close collapse</button>
		<button class="btn btn-primary m-2" type="button" (click)="collapse.api.toggle()">Toggle collapse</button>
		<div auCollapse #collapse="auCollapse">Visible content</div>
	`,
})
export default class DefaultCollapseComponent {}
