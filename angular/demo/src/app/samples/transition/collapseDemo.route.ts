import {ChangeDetectionStrategy, Component} from '@angular/core';
import CollapseComponent from './collapse.component';

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CollapseComponent],
	template: ` <app-collapse headerText="Toggle content" expanded> Content to display / hide. </app-collapse> `,
})
export default class CollapseDemoComponent {}
