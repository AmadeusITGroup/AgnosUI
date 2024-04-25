const n=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import FlipComponent from './flip.component';

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FlipComponent],
	template: \`<app-flip hiddenText="What is hiding behing this ?"> Some new content ! </app-flip>\`,
})
export default class FlipDemoComponent {}
`;export{n as default};
