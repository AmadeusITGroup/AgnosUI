import {Component} from '@angular/core';
import {TreeComponent} from './tree.component';
import {type TreeItem} from '@agnos-ui/angular-headless';

@Component({
	imports: [TreeComponent],
	template: `
		<div class="flex justify-center">
			<app-tree [nodes]="nodes" [navSelector]="navSelector" />
		</div>
	`,
})
export default class BasicTreeComponent {
	readonly navSelector = (node: HTMLElement) => node.querySelectorAll<HTMLSpanElement>('span.au-tree-expand-icon');
	readonly nodes: TreeItem[] = [
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
	];
}
