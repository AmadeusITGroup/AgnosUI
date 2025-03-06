import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AgnosUIAngularModule, type TreeItem} from '@agnos-ui/angular-bootstrap';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-root',
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
	readonly photos = [944, 1011, 984].map((n) => ({id: `carousel-photo-${n}`, src: `https://picsum.photos/id/${n}/900/500`}));
}
