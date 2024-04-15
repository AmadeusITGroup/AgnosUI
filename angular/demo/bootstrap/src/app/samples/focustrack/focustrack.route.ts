import {UseDirective, toAngularSignal} from '@agnos-ui/angular-bootstrap';
import {activeElement$, createHasFocus} from '@agnos-ui/core';
import {ChangeDetectionStrategy, Component, computed, effect, signal} from '@angular/core';

@Component({
	standalone: true,
	imports: [UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="demo-focustrack">
			<div [auUse]="hasFocusApi.directive" class="my-2 p-2 border">
				<h5>Container</h5>
				<input class="form-control" type="text" placeholder="Focusable input" id="focusableInput" /><br />
				<input class="form-control" type="text" placeholder="Other focusable input" id="otherFocusableInput" />
			</div>
			<input class="form-control" type="text" placeholder="Disabled input" id="disabledInput" disabled /><br />
			<div class="form-check mb-2">
				<input class="form-check-input" type="checkbox" id="containerHasFocus" [checked]="hasFocus()" disabled />
				<label class="form-check-label" for="containerHasFocus">Focus in container</label>
			</div>
			<label for="activeElementHistory" class="form-label">Active element history:</label>
			<textarea class="form-control mb-2" id="activeElementHistory" readonly>{{ activeElementsJson() }}</textarea>
			<button class="btn btn-primary" (click)="clear()">Clear</button>
		</div>
	`,
})
export default class FocustrackComponent {
	public readonly hasFocusApi = createHasFocus();
	public readonly hasFocus = toAngularSignal(this.hasFocusApi.hasFocus$);
	public readonly activeElements = signal<{tagName?: string; id?: string}[]>([]);
	public readonly activeElementsJson = computed(() => JSON.stringify(this.activeElements()));
	private readonly activeElement = toAngularSignal(activeElement$);

	constructor() {
		effect(
			() => {
				this.activeElements.update((elements) =>
					elements.concat([{tagName: this.activeElement()?.tagName?.toLowerCase(), id: this.activeElement()?.id || undefined}]),
				);
			},
			{allowSignalWrites: true},
		);
	}

	clear() {
		this.activeElements.set([]);
	}
}
