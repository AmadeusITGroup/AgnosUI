import {AgnosUIAngularModule, ModalService} from '@agnos-ui/angular';
import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, CommonModule, FormsModule],
	template: `
		<button class="btn btn-primary" (click)="modalService.open({slotTitle: 'First modal', modalClass: 'modal-sm', slotDefault: recursiveModal})">
			Launch demo modal
		</button>
		<ng-template #recursiveModal let-widget="widget" let-state="state">
			This is a modal<br /><br />
			<button
				class="btn btn-outline-primary m-1"
				(click)="modalService.open({slotTitle: 'Other modal', slotDefault: recursiveModal, container: state.modalElement})"
			>
				Launch other modal</button
			><br />
			<button class="btn btn-outline-secondary m-1" (click)="widget.api.patch({backdrop: true})">Enable backdrop</button>
			<button class="btn btn-outline-secondary m-1" (click)="widget.api.patch({backdrop: false})">Disable backdrop</button><br />
			<button class="btn btn-outline-secondary m-1" (click)="widget.api.close()">Close</button>
		</ng-template>
	`,
})
export default class ModalDemoComponent {
	modalService = inject(ModalService);
}
