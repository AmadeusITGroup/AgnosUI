import {Component} from '@angular/core';
import {AgnosUIAngularModule, type TreeItem} from '@agnos-ui/angular-bootstrap';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [AgnosUIAngularModule],
	templateUrl: './app.component.html',
})
export class AppComponent {
	readonly nodes: TreeItem[] = [
		{
			label: 'Node 1',
			isExpanded: true,
			children: [
				{
					label: 'Node 1.1',
					children: [
						{
							label: 'Node 1.1.1',
						},
					],
				},
				{
					label: 'Node 1.2',
					children: [
						{
							label: 'Node 1.2.1',
						},
					],
				},
			],
		},
	];
}
