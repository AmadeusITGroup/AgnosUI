import {DrawerComponent, DrawerHeaderDirective} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
	template: `
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
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
			possimus. Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
			saepe eveniet ut et voluptates. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Quis autem vel eum
			iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
		</div>
		<button class="btn btn-primary">ScrollToMe</button>
	`,
	imports: [DrawerComponent, DrawerHeaderDirective, FormsModule],
})
export default class BodyDrawerComponent {
	readonly bodyScrollingToggle = signal(false);
	readonly backdropToggle = signal(true);
}
