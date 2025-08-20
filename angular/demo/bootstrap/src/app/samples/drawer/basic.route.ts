import type {DrawerWidget} from '@agnos-ui/angular-bootstrap';
import {DrawerComponent, DrawerHeaderDirective} from '@agnos-ui/angular-bootstrap';
import {Component, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
	template: `
		<button class="btn btn-primary mb-3" (click)="openDrawer()">Open Drawer</button>
		<au-component #drawer auDrawer auClassName="inline-start">
			<ng-template auDrawerHeader> Hi, I am drawer! </ng-template>
			<ul>
				<li>First item</li>
				<li>Second item</li>
				<li>Third item</li>
			</ul>
		</au-component>
	`,
	imports: [DrawerComponent, FormsModule, DrawerHeaderDirective],
})
export default class BasicDrawerComponent {
	readonly drawer = viewChild<DrawerWidget>('drawer');

	openDrawer() {
		this.drawer()?.api.open();
	}
}
