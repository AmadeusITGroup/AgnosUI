import type {ModalComponent} from '@agnos-ui/angular';
import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {modalCloseButtonClick, modalOutsideClick} from '@agnos-ui/core';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<button class="btn btn-primary" type="button" (click)="show(modal)">Launch demo modal</button>
		<div class="mt-3" data-testid="message">{{ message }}</div>
		<au-component auModal #modal auSlotTitle="Save changes">
			Do you want to save your changes?
			<ng-template auModalFooter>
				<button type="button" class="btn btn-outline-primary" (click)="modal.api.close(true)">Yes</button>
				<button type="button" class="btn btn-outline-danger" (click)="modal.api.close(false)">No</button>
			</ng-template>
		</au-component>
	`,
})
export default class DefaultModalComponent {
	message = '';

	async show(modal: ModalComponent<void>) {
		this.message = '';
		const result = await modal.api.open();
		if (result === modalCloseButtonClick) {
			this.message = 'You clicked on the close button.';
		} else if (result === modalOutsideClick) {
			this.message = 'You clicked outside the modal.';
		} else {
			this.message = `You answered the question with "${result ? 'Yes' : 'No'}".`;
		}
	}
}
