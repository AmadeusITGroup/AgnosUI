import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {InnerComponent} from './innerComponent.component';

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, InnerComponent],
	template: `
		<h2>Transition example</h2>
		<div class="demo-transition mb-3">
			<button id="toggle-component" class="btn btn-outline-secondary" (click)="showComponent = !showComponent">Toggle component</button>
			@if (showComponent) {
				<app-transition-inner />
			}
		</div>
	`,
})
export default class TransitionComponent {
	showComponent = true;
}
