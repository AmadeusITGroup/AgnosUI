import {Component, signal} from '@angular/core';
import {InnerComponent} from './innerComponent.component';

@Component({
	imports: [InnerComponent],
	template: `
		<div class="demo-transition mb-3">
			<button id="toggle-component" class="btn btn-outline-secondary" (click)="showComponent.update((val) => !val)">Toggle component</button>
			@if (showComponent()) {
				<app-transition-inner />
			}
		</div>
	`,
})
export default class TransitionComponent {
	readonly showComponent = signal(true);
}
