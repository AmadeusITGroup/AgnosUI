const e=`import {DrawerComponent, DrawerHeaderDirective} from '@agnos-ui/angular-bootstrap';
import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
	template: \`
		<button class="btn btn-primary mb-3" (click)="drawer.api.open()">Open Drawer</button>
		<au-component #drawer auDrawer auClassName="inline-start drawer-custom-size" auResizable>
			<ng-template auDrawerHeader> Hi, I am drawer! </ng-template>
			<ul>
				<li>First item</li>
				<li>Second item</li>
				<li>Third item</li>
			</ul>
		</au-component>
	\`,
	styles: [
		\`
			.drawer-custom-size {
				--bs-drawer-size: 20rem;
				--bs-drawer-min-size: max-content;
				--bs-drawer-max-size: calc(100vw - 2rem);
			}
		\`,
	],
	imports: [DrawerComponent, FormsModule, DrawerHeaderDirective],
	encapsulation: ViewEncapsulation.None,
})
export default class SizesDrawerComponent {}
`;export{e as default};
