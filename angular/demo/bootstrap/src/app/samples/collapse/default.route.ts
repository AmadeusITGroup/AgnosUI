import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<button class="btn btn-primary mb-2" type="button" aria-controls="auId-0" [attr.aria-expanded]="expanded()" (click)="collapse.api.toggle()">
			Toggle collapse
		</button>
		<div auCollapse #collapse="auCollapse" id="auId-0" (auVisibleChange)="expanded.set($event)">
			<div class="card card-body">Visible content</div>
		</div>
	`,
})
export default class DefaultCollapseComponent {
	expanded = signal(true);
}
