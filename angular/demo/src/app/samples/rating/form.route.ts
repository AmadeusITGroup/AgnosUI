import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, ReactiveFormsModule],
	template: `
		<label class="form-label" id="ratingLabel">Rating of your experience</label><br />
		<div [auRating] [formControl]="ctrl" auAriaLabelledBy="ratingLabel"></div>
		<div id="form-msg" class="form-text small">
			@if (ctrl.valid) {
				<div class="text-success">Thanks!</div>
			}
			@if (ctrl.invalid) {
				<div class="text-danger-emphasis">Please rate us</div>
			}
		</div>
		<pre>Model: <span id="form-model"><b>{{ ctrl.value }}</b></span></pre>
		<div class="d-flex flex-wrap gap-2">
			<button id="form-btn-enable" class="btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' : 'success' }}" (click)="toggle()">
				{{ ctrl.disabled ? 'control disabled' : ' control enabled' }}
			</button>
			<button id="form-btn-clear" class="btn btn-sm btn-outline-primary" (click)="ctrl.setValue(0)">Clear</button>
		</div>
	`,
})
export default class FormRatingComponent {
	ctrl = new FormControl(0, Validators.min(1));

	toggle() {
		if (this.ctrl.disabled) {
			this.ctrl.enable();
		} else {
			this.ctrl.disable();
		}
	}
}
