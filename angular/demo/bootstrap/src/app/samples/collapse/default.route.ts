import {CollapseDirective} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';

@Component({
	standalone: true,
	imports: [CollapseDirective],
	template: `
		<button class="btn btn-primary mb-2" type="button" aria-controls="auId-0" [attr.aria-expanded]="expanded()" (click)="toggle()">
			Toggle collapse
		</button>
		<div auCollapse auId="auId-0" [auVisible]="expanded()" (auHidden)="onHidden()">
			<div class="card card-body">Visible content</div>
		</div>
	`,
})
export default class DefaultCollapseComponent {
	readonly expanded = signal(true);
	toggle() {
		this.expanded.update((expanded) => !expanded);
	}
	onHidden() {
		console.log('Hidden');
	}
}
