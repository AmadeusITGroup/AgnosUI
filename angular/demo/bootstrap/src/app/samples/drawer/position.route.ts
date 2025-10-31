import type {DrawerPositions} from '@agnos-ui/angular-bootstrap';
import {DrawerComponent, DrawerHeaderDirective} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
	template: `
		<button class="btn btn-primary mb-3" (click)="drawer.api.open()">Open Drawer</button>
		<div class="d-flex align-items-center">
			<label for="drawerPlacement" class="me-3">Placement:</label>
			<select id="drawerPlacement" [(ngModel)]="drawerPlacement" class="w-auto form-select">
				<option value="inline-start">Left</option>
				<option value="inline-end">Right</option>
				<option value="block-start">Top</option>
				<option value="block-end">Bottom</option>
			</select>
		</div>
		<au-component #drawer auDrawer [auClassName]="drawerPlacement()" [(auWidth)]="width" [(auHeight)]="height" auResizable>
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
	readonly drawerPlacement = signal<DrawerPositions>('inline-start');
	readonly width = signal(200);
	readonly height = signal(150);
}
