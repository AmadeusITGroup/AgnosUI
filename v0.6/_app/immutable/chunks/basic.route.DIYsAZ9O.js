const n=`import {TreeComponent, type TreeItem} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	template: \` <au-component auTree [auNodes]="nodes"></au-component> \`,
	imports: [TreeComponent],
})
export default class BasicTreeComponent {
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
`;export{n as default};
