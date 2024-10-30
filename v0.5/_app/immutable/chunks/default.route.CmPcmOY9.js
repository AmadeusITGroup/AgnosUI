const e=`import type {ModalComponent} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule, modalCloseButtonClick, modalOutsideClick} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, ReactiveFormsModule, FormsModule],
	template: \`
		<button class="btn btn-primary" type="button" (click)="show(modal)">Launch demo modal</button>
		<div class="form-check form-switch mt-3">
			<input class="form-check-input" type="checkbox" role="switch" id="fullscreen" [(ngModel)]="fullscreenToggle" />
			<label class="form-check-label" for="fullscreen">Fullscreen</label>
		</div>
		<hr />
		<div data-testid="message">{{ message() }}</div>
		<au-component auModal #modal auTitle="Save changes" [auFullscreen]="fullscreenToggle()">
			Do you want to save your changes?
			<ng-template auModalFooter>
				<button type="button" class="btn btn-outline-primary" (click)="modal.api.close(true)">Yes</button>
				<button type="button" class="btn btn-outline-danger" (click)="modal.api.close(false)">No</button>
			</ng-template>
		</au-component>
	\`,
})
export default class DefaultModalComponent {
	readonly message = signal('');
	readonly fullscreenToggle = signal(false);

	async show(modal: ModalComponent<void>) {
		this.message.set('');
		const result = await modal.api.open();
		if (result === modalCloseButtonClick) {
			this.message.set('You clicked on the close button.');
		} else if (result === modalOutsideClick) {
			this.message.set('You clicked outside the modal.');
		} else {
			this.message.set(\`You answered the question with "\${result ? 'Yes' : 'No'}".\`);
		}
	}
}
`;export{e as default};
