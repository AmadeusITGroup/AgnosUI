import {CollapseDirective, CollapseTriggerDirective} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	imports: [CollapseDirective, CollapseTriggerDirective],
	template: `
		<button class="btn btn-primary mb-2" type="button" [auCollapseTrigger]="collapse">Toggle collapse</button>
		<div auCollapse #collapse="auCollapse" auVisible (auHidden)="onHidden()">
			<div class="card card-body">Visible content</div>
		</div>
	`,
})
export default class DefaultCollapseComponent {
	onHidden() {
		console.log('Hidden');
	}
}
