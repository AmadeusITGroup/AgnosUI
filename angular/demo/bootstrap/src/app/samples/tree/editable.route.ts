import {TreeComponent} from '@agnos-ui/angular-bootstrap';
import type {TreeItem} from '@agnos-ui/angular-headless';
import {Component, signal} from '@angular/core';

@Component({
	template: ` <au-component auTree [auNodes]="nodes()" auIsEditable (auNodesChange)="nodesChange($event)" /> `,
	imports: [TreeComponent],
})
export default class EditableTreeComponent {
	readonly nodes = signal([
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
	]);

	nodesChange(nodes: TreeItem[]) {
		// handle the change of the nodes manually in order to avoid the redraw of the tree
		console.log('changed in editable', nodes);
	}
}
