const t=`import type {ModalWidget} from '@agnos-ui/angular';
import {SlotComponent} from '@agnos-ui/angular';
import {Component} from '@angular/core';

export type ModalData = {name: string};

@Component({
	standalone: true,
	template: \`
		<p>Hello, {{ state.contentData.name }}!</p>
		<button type="button" class="btn btn-outline-primary" (click)="widget.api.close(true)">Close</button>
	\`,
})
export default class CustomContentComponent extends SlotComponent<ModalWidget<ModalData>> {}
`;export{t as default};
