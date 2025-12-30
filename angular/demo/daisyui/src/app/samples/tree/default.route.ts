import type {NormalizedTreeItem} from '@agnos-ui/angular-headless';
import {type TreeItem} from '@agnos-ui/angular-headless';
import {Component, signal, viewChild} from '@angular/core';
import {TreeComponent} from './tree.component';

@Component({
	imports: [TreeComponent],
	template: `
		<div class="flex justify-center">
			<app-tree [nodes]="nodes()" [navSelector]="navSelector" />
		</div>
	`,
})
export default class BasicTreeComponent {
	readonly tree = viewChild(TreeComponent);
	readonly navSelector = (node: HTMLElement) => node.querySelectorAll<HTMLSpanElement>('span.au-tree-expand-icon');

	readonly newItem: TreeItem = {
		label: 'New Item',
	};

	readonly nodes = signal<TreeItem[]>([
		{
			label: 'resume.pdf',
		},
		{
			label: 'My Files',
			isExpanded: true,
			children: [
				{
					label: 'Project-final.psd',
				},
				{
					label: 'Project-final-2.psd',
				},
				{
					label: 'Images',
					children: [
						{
							label: 'Screenshot1.png',
						},
						{
							label: 'Screenshot2.png',
						},
						{
							label: 'Others',
							children: [
								{
									label: 'Screenshot3.png',
								},
							],
						},
					],
				},
			],
		},
		{
			label: 'reports-final-2.pdf',
		},
	]);

	handleAddNode(targetParent: NormalizedTreeItem) {
		const tree = this.tree();
		if (!tree) return;

		const originalNode = tree.api.getOriginalNode(targetParent);
		if (!originalNode) return;

		const newItem: TreeItem = {
			label: 'New item',
		};

		this.nodes.update((current) => {
			const updateNode = (items: TreeItem[]): TreeItem[] =>
				items.map((item) => {
					if (item === originalNode) {
						return {
							...item,
							children: item.children ? [...item.children, newItem] : [newItem],
							isExpanded: true,
						};
					}
					if (item.children) {
						return {...item, children: updateNode(item.children)};
					}
					return item;
				});
			return updateNode(current);
		});
	}
}
