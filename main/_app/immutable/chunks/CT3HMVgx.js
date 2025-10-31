const e=`import {DrawerComponent, DrawerHeaderDirective} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	template: \`
		<button class="btn btn-primary mb-3" (click)="drawer.api.open()">Open Drawer</button>
		<au-component #drawer auDrawer auClassName="inline-start" auResizable>
			<ng-template auDrawerHeader> Hi, I am drawer! </ng-template>
			<ul>
				<li>First item</li>
				<li>Second item</li>
				<li>Third item</li>
			</ul>
		</au-component>
	\`,
	imports: [DrawerComponent, DrawerHeaderDirective],
})
export default class BasicDrawerComponent {}
`;export{e as default};
