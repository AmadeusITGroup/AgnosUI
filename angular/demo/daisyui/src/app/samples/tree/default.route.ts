import {Component} from '@angular/core';
import {TreeComponent} from './tree.component';
import {type TreeItem} from '@agnos-ui/angular-headless';

@Component({
	standalone: true,
	imports: [TreeComponent],
	template: `
		<div class="flex justify-center">
			<app-tree [nodes]="nodes" />
		</div>
	`,
})
export default class BasicTreeComponent {
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
