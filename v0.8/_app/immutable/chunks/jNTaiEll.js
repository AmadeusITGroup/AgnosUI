const e=`import {UseDirective} from '@agnos-ui/angular-headless';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {createSampleDirective} from './sample-directive';

@Component({
	imports: [UseDirective, FormsModule],
	template: \`
		<div [auUse]="[createSampleDirective, config()]">
			<button class="btn btn-primary" id="test">button 1</button>
			<button class="btn btn-primary" id="test2">button 2</button>
		</div>
		<hr />
		<input class="form-control" id="clickText" type="text" aria-label="text input to configure the directive" [(ngModel)]="config" />
		<hr />
		<span>(Open the console to see the outputs)</span>
	\`,
})
export default class GenericComponent {
	readonly config = signal('focus element clicked');
	readonly createSampleDirective = createSampleDirective;
}
`;export{e as default};
