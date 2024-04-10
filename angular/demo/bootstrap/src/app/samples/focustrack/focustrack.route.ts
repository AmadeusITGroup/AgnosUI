import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {activeElement$, createHasFocus} from '@agnos-ui/core';
import {CommonModule} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, CommonModule],
	template: `
		<div class="demo-focustrack">
			<div [auUse]="hasFocusApi.directive" class="my-2 p-2 border">
				<h5>Container</h5>
				<input class="form-control" type="text" placeholder="Focusable input" id="focusableInput" /><br />
				<input class="form-control" type="text" placeholder="Other focusable input" id="otherFocusableInput" />
			</div>
			<input class="form-control" type="text" placeholder="Disabled input" id="disabledInput" disabled /><br />
			<div class="form-check mb-2">
				<input class="form-check-input" type="checkbox" id="containerHasFocus" [checked]="hasFocusApi.hasFocus$ | async" disabled />
				<label class="form-check-label" for="containerHasFocus">Focus in container</label>
			</div>
			<label for="activeElementHistory" class="form-label">Active element history:</label>
			<textarea class="form-control mb-2" id="activeElementHistory" readonly>{{ activeElementsJson }}</textarea>
			<button class="btn btn-primary" (click)="clear()">Clear</button>
		</div>
	`,
})
export default class FocustrackComponent implements OnDestroy {
	protected hasFocusApi;
	protected activeElements: any[] = [];
	protected activeElementsJson = '';
	private unsubscribe = () => {
		// empty
	};

	constructor() {
		this.hasFocusApi = createHasFocus();
		this.unsubscribe = activeElement$.subscribe((activeElement) => {
			this.activeElements.push({tagName: activeElement?.tagName.toLowerCase(), id: activeElement?.id || undefined});
			this.activeElementsJson = JSON.stringify(this.activeElements);
		});
	}

	ngOnDestroy(): void {
		this.unsubscribe();
	}

	clear() {
		this.activeElements = [];
		this.activeElementsJson = JSON.stringify([]);
	}
}
