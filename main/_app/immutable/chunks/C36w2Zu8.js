const o=`import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {InnerComponent} from './innerComponent.component';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, InnerComponent],
	template: \`
		<div class="demo-transition mb-3">
			<button id="toggle-component" class="btn btn-outline-secondary" (click)="toggleShow()">Toggle component</button>
			@if (showComponent()) {
				<app-transition-inner />
			}
		</div>
	\`,
})
export default class TransitionComponent {
	readonly showComponent = signal(true);
	toggleShow() {
		this.showComponent.update((val) => !val);
	}
}
`;export{o as default};
