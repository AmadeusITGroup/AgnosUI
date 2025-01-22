import {Component, type TemplateRef, inject} from '@angular/core';
import {ModalService} from './modal.service';

@Component({
	template: `
		<ng-template #modalContent>
			<h3 class="font-bold text-lg">A simple modal</h3>
			<p class="py-4">Press ESC key, click on ✕ button or click outside the modal to close</p>
		</ng-template>
		<button class="btn" aria-haspopup="dialog" (click)="openModal(modalContent)">Open modal</button>
	`,
})
export default class DefaultModalComponent {
	readonly modalService = inject(ModalService);

	openModal(ref: TemplateRef<any>) {
		void this.modalService.open(ref, {closeOnOutsideClick: true});
	}
}
