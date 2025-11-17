const o=`import {DrawerComponent, DrawerHeaderDirective} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import BODY from './body.txt';

@Component({
	template: \`
		<au-component #drawer auDrawer auClassName="inline-start" [auBackdrop]="backdropToggle()" [auBodyScroll]="bodyScrollingToggle()">
			<ng-template auDrawerHeader>
				<div class="d-flex">
					<span>Hi, I am drawer!</span>
					<button class="btn-close ms-auto" (click)="drawer.api.close()" aria-label="Close"></button>
				</div>
			</ng-template>
			<ul>
				<li>First item</li>
				<li>Second item</li>
				<li>Third item</li>
			</ul>
		</au-component>
		<div class="d-flex align-items-center mb-3">
			<button class="btn btn-primary" (click)="drawer.api.open()">Open Drawer</button>
			<div class="form-check form-switch ms-3">
				<input class="form-check-input" type="checkbox" id="bodyScroll" role="switch" [(ngModel)]="bodyScrollingToggle" />
				<label class="form-check-label" for="bodyScroll">Body scrolling</label>
			</div>
			<div class="form-check form-switch ms-3">
				<input class="form-check-input" type="checkbox" id="backdrop" role="switch" [(ngModel)]="backdropToggle" />
				<label class="form-check-label" for="backdrop">Backdrop</label>
			</div>
		</div>
		<div style="width: 100px">
			{{ BODY }}
		</div>
		<button class="btn btn-primary">ScrollToMe</button>
	\`,
	imports: [DrawerComponent, DrawerHeaderDirective, FormsModule],
})
export default class BodyDrawerComponent {
	readonly bodyScrollingToggle = signal(false);
	readonly backdropToggle = signal(true);
	BODY = BODY;
}
`;export{o as default};
