const o=`import {AgnosUIAngularModule, ModalService} from '@agnos-ui/angular-bootstrap';
import {Component, inject} from '@angular/core';
import type {ModalData} from './custom-content.component';
import CustomContentComponent from './custom-content.component';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: \` <button class="btn btn-primary" type="button" (click)="openModal()">Launch demo modal</button> \`,
})
export default class DemoContentModalComponent {
	readonly modalService = inject(ModalService);

	openModal() {
		void this.modalService.open<ModalData>({slotTitle: 'Hi there!', slotDefault: CustomContentComponent, contentData: {name: 'World'}});
	}
}
`;export{o as default};
