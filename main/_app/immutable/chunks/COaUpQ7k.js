const e=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import CollapseComponent from './collapse.component';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CollapseComponent],
	template: \` <app-collapse headerText="Toggle content" [expanded]="true"> Content to display / hide. </app-collapse> \`,
})
export default class CollapseDemoComponent {}
`;export{e as default};
